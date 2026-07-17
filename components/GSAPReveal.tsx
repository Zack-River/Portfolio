import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: 'bottom' | 'left' | 'right';
  stagger?: number;
  /** If true, children are staggered individually (wraps each child in a span) */
  staggerChildren?: boolean;
  y?: number;
}

const GSAPReveal: React.FC<GSAPRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  from = 'bottom',
  y = 40,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Skip on mobile or reduced motion for performance
    if (isMobile || prefersReducedMotion) {
      gsap.set(el, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y: from === 'bottom' ? y : 0,
      x: from === 'left' ? -60 : from === 'right' ? 60 : 0,
    };

    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...fromVars,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, duration, from, y]);

  return (
    <div ref={ref} className={className} style={{ position: 'relative', width: '100%' }}>
      {children}
    </div>
  );
};

export default GSAPReveal;
