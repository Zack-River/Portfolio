import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

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
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute rounded-full ${colorClass} shadow-[0_0_8px_currentColor]`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            color: colorClass === 'bg-white' ? '#ffffff' : '#0ea5e9', // For the currentColor shadow
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.2, 1.5, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
