import React, { useMemo } from 'react';

interface StarsBackgroundProps {
  colorClass?: string;
  count?: number;
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({ colorClass = "bg-white", count = 50 }) => {
  // Reduce count heavily on mobile to avoid 80 simultaneously animating divs.
  const effectiveCount = typeof window !== 'undefined' && window.innerWidth < 768
    ? Math.min(count, 20)
    : count;

  const stars = useMemo(() => {
    return Array.from({ length: effectiveCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }));
  }, [effectiveCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes twinkleStar {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50%       { opacity: 1; transform: scale(1.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          .twinkle-star { animation: none !important; opacity: 0.4; transform: scale(1); }
        }
      `}</style>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`twinkle-star absolute rounded-full ${colorClass}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            willChange: 'opacity, transform',
            animation: `twinkleStar ${star.duration}s ease-in-out infinite ${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
