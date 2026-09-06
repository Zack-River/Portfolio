import React, { useRef, useEffect, useState } from 'react';

interface GSAPRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: 'bottom' | 'left' | 'right';
  stagger?: number;
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
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (isMobile || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    setShouldAnimate(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Revert when out of view for the "life feeling", but optimized by CSS transforms
          setIsVisible(false);
        }
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!shouldAnimate || isVisible) return 'translate3d(0, 0, 0)';
    if (from === 'bottom') return `translate3d(0, ${y}px, 0)`;
    if (from === 'left') return `translate3d(-60px, 0, 0)`;
    if (from === 'right') return `translate3d(60px, 0, 0)`;
    return 'translate3d(0, 0, 0)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        opacity: !shouldAnimate || isVisible ? 1 : 0,
        transform: getTransform(),
        transition: shouldAnimate ? `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s` : 'none',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default GSAPReveal;
