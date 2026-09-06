import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, width = "100%", delay = 0.25, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isFullHeight = className.includes('h-full');

  // On mobile, skip all animation machinery — just render children immediately.
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  if (isMobile) {
    return (
      <div
        className={className}
        style={{ position: "relative", width, ...(isFullHeight ? { height: '100%' } : {}) }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        width,
        ...(isFullHeight ? { height: '100%' } : {}),
      }}
    >
      <div
        style={{
          ...(isFullHeight ? { height: '100%' } : {}),
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
          willChange: 'transform, opacity',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;