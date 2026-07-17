import React, { useMemo } from 'react';

// SVG Paths for wireframe 3D shapes
const SHAPES = {
  cube: "M12 2L2 7v10l10 5 10-5V7L12 2z M12 2v10 M2 7l10 5 M22 7l-10 5 M12 12v10",
  pyramid: "M12 2L2 20h20L12 2z M12 2l4 18 M12 2l-4 18",
  hexagon: "M12 2L2 7v10l10 5 10-5V7L12 2z M2 7h20 M2 17h20 M12 2v20",
  octahedron: "M12 2L2 12l10 10 10-10L12 2z M2 12h20 M12 2v20 M12 2l-10 10 M12 2l10 10 M12 22l-10-10 M12 22l10-10"
};

const SHAPE_KEYS = Object.keys(SHAPES) as (keyof typeof SHAPES)[];

const FloatingPolymers: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const polymers = useMemo(() => {
    if (isMobile) return [];
    return Array.from({ length: 6 }).map((_, i) => {
      const shape = SHAPE_KEYS[i % SHAPE_KEYS.length];
      const size = Math.random() * 50 + 30; // Smaller: 30px to 80px
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 30 + 30; // Slower: 30s–60s (less repaints)
      const delay = Math.random() * -30;

      return { id: i, shape, size, left, top, duration, delay };
    });
  }, [isMobile]);

  if (polymers.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes floatPolymer {
          /* ONLY 2D transforms — translate + rotate are GPU-composited
             and run entirely off the main thread.
             3-axis rotateX/rotateY/rotateZ forces main-thread repaints. */
          0%   { transform: translateY(0px)  rotate(0deg); }
          50%  { transform: translateY(-40px) rotate(180deg); }
          100% { transform: translateY(0px)  rotate(360deg); }
        }
      `}</style>
      {polymers.map((poly) => (
        <div
          key={poly.id}
          className="absolute text-electric/10"
          style={{
            left: `${poly.left}%`,
            top: `${poly.top}%`,
            width: poly.size,
            height: poly.size,
            willChange: 'transform',
            animation: `floatPolymer ${poly.duration}s ease-in-out infinite ${poly.delay}s`,
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
        </div>
      ))}
    </div>
  );
};

export default FloatingPolymers;
