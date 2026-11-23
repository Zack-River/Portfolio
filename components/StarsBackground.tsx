import React, { useMemo } from 'react';

interface StarsBackgroundProps {
  colorClass?: string;
  count?: number;
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({ colorClass = "bg-white", count = 30 }) => {
  // Cap at 30 to avoid main-thread animation storm
  const cappedCount = Math.min(count, 30);
  
  const stars = useMemo(() => {
    return Array.from({ length: cappedCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 4 + 3, // slower = less paint
      delay: Math.random() * 4,
    }));
  }, [cappedCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes twinkleStar {
          0%, 100% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${colorClass}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            // will-change promotes each star to its own GPU layer so the
            // browser compositor handles the animation without main-thread repaints
            // REMOVED: causes GPU memory leak when hundreds of stars are rendered across multiple components
            animation: `twinkleStar ${star.duration}s ease-in-out infinite ${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
