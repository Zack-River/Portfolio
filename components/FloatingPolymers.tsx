import React from 'react';
import { motion } from 'framer-motion';

// SVG Paths for wireframe 3D shapes
const SHAPES = {
  cube: "M12 2L2 7v10l10 5 10-5V7L12 2z M12 2v10 M2 7l10 5 M22 7l-10 5 M12 12v10",
  pyramid: "M12 2L2 20h20L12 2z M12 2l4 18 M12 2l-4 18",
  hexagon: "M12 2L2 7v10l10 5 10-5V7L12 2z M2 7h20 M2 17h20 M12 2v20",
  octahedron: "M12 2L2 12l10 10 10-10L12 2z M2 12h20 M12 2v20 M12 2l-10 10 M12 2l10 10 M12 22l-10-10 M12 22l10-10"
};

const SHAPE_KEYS = Object.keys(SHAPES) as (keyof typeof SHAPES)[];

const FloatingPolymers: React.FC = () => {
  // Generate 8 floating shapes
  const polymers = Array.from({ length: 8 }).map((_, i) => {
    const shape = SHAPE_KEYS[i % SHAPE_KEYS.length];
    const size = Math.random() * 60 + 40; // 40px to 100px
    const left = Math.random() * 100; // 0% to 100%
    const top = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 20 + 20; // 20s to 40s
    const delay = Math.random() * -20; // Random start time

    return { id: i, shape, size, left, top, duration, delay };
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {polymers.map((poly) => (
        <motion.div
          key={poly.id}
          className="absolute text-electric/10" // Subtle electric blue line color
          style={{
            left: `${poly.left}%`,
            top: `${poly.top}%`,
            width: poly.size,
            height: poly.size,
          }}
          animate={{
            y: ["0%", "-50%", "0%"],
            rotateX: [0, 180, 360],
            rotateY: [0, 360, 0],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            duration: poly.duration,
            repeat: Infinity,
            ease: "linear",
            delay: poly.delay,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <path d={SHAPES[poly.shape]} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPolymers;
