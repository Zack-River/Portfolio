import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

/** Critical assets that must be loaded before the loader exits */
const CRITICAL_IMAGES = ['/zack-photo-new-sm.webp'];

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dismissed = false;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;

      gsap.to(logoRef.current, {
        scale: 5,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.inOut',
      });

      gsap.to(backgroundRef.current, {
        yPercent: -100,
        duration: 1,
        delay: 0.2,
        ease: 'expo.inOut',
        onComplete,
      });
    };

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, containerRef);

    // Preload critical images
    let loaded = 0;
    const MIN_TIME = 800; // ms — ensures logo entrance is always seen
    const start = Date.now();

    const tryDismiss = () => {
      loaded++;
      if (loaded >= CRITICAL_IMAGES.length) {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, MIN_TIME - elapsed);
        setTimeout(dismiss, remaining);
      }
    };

    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = tryDismiss;
      img.onerror = tryDismiss; // Don't block on broken images
      img.src = src;
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-electric z-0"
        style={{ transformOrigin: 'top' }}
      />

      {/* Central Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          ref={logoRef}
          src="/logo-sm.png"
          alt="Zack River"
          className="w-40 md:w-56"
          style={{ filter: "brightness(0) invert(0)" }}
        />
      </div>
    </div>
  );
};

export default Loader;