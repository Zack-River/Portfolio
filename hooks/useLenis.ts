import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function useLenis() {
  const initialized = useRef(false);

  useEffect(() => {
    // Desktop only — Lenis intercepts touch events on mobile which breaks native swipe scroll
    if (window.innerWidth < 768) return;
    // Already initialized (React StrictMode double-invoke guard)
    if (initialized.current) return;
    initialized.current = true;

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

    // Feed Lenis ticks into GSAP ticker so ScrollTrigger stays in sync
    gsap.ticker.add((time) => {
      lenisInstance?.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenisInstance.on('scroll', () => ScrollTrigger.update());

    return () => {
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
