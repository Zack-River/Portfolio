import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function useLenis() {
  const initialized = useRef(false);

  useEffect(() => {
    // Desktop only — Lenis intercepts touch events on mobile which breaks native swipe scroll
    if (window.innerWidth < 768) return;
    // Already initialized (React StrictMode double-invoke guard)
    if (initialized.current) return;
    initialized.current = true;

    let isMounted = true;
    let tickerCallback: any = null;
    let gsapInstance: any = null;
    let timeoutId: number;

    // Delay initialization to prevent forced reflows during the critical render path
    timeoutId = window.setTimeout(() => {
      if (!isMounted) return;
      Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]).then(([lenisModule, gsapModule, scrollTriggerModule]) => {
        if (!isMounted) return;
        const Lenis = lenisModule.default;
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        lenisInstance = new Lenis({
          duration: prefersReducedMotion ? 0.01 : 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        gsapInstance = gsapModule.default;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        
        gsapInstance.registerPlugin(ScrollTrigger);

        tickerCallback = (time: number) => {
          lenisInstance?.raf(time * 1000);
        };
        
        gsapInstance.ticker.add(tickerCallback);
        gsapInstance.ticker.lagSmoothing(0);
        lenisInstance?.on('scroll', () => ScrollTrigger.update());
      });
    }, 150);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      if (gsapInstance && tickerCallback) {
        gsapInstance.ticker.remove(tickerCallback);
      }
      lenisInstance?.destroy();
      lenisInstance = null;
      initialized.current = false;
    };
  }, []);

  return lenisInstance;
}

/** Call this anywhere to programmatically scroll to an element or offset */
export function lenisScrollTo(target: string | number | HTMLElement, options?: object) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options);
  } else {
    // Fallback for mobile
    if (typeof target === 'string') {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
