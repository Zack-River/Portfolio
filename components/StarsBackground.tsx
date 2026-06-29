import React, { useMemo } from 'react';


interface StarsBackgroundProps {
  colorClass?: string;
  count?: number;
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({ colorClass = "bg-white", count = 50 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5, // 1.5px to 4.5px for better visibility
      duration: Math.random() * 3 + 2, // 2s to 5s
      delay: Math.random() * 2,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes twinkleStar {
          0%, 100% { opacity: 0; transform: scale(0.2); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${colorClass} shadow-[0_0_8px_currentColor]`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            color: colorClass === 'bg-white' ? '#ffffff' : '#3d7fff', // For the currentColor shadow
            animation: `twinkleStar ${star.duration}s ease-in-out infinite ${star.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
