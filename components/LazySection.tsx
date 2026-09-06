import React, { useRef, useState, useEffect } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  placeholderHeight?: string;
}

const LazySection: React.FC<LazySectionProps> = ({ children, placeholderHeight = '100vh' }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px', threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasLoaded]);

  return (
    <div ref={ref} style={{ minHeight: hasLoaded ? 'auto' : placeholderHeight }}>
      {hasLoaded ? (
        <React.Suspense fallback={<div className="w-full flex items-center justify-center min-h-[50vh] opacity-50 font-mono text-sm text-electric animate-pulse">Initializing Component...</div>}>
          {children}
        </React.Suspense>
      ) : null}
    </div>
  );
};

export default LazySection;
