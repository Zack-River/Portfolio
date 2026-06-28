import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200); // Faster exit
          return 100;
        }
        const increment = Math.random() * 30; // Faster increment
        return Math.min(prev + increment, 100);
      });
    }, 50); // Faster ticks

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-canvas-light flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-64">
        {/* Text Glitch Effect */}
        <motion.div 
          className="font-display text-3xl text-canvas-dark/80 text-center mb-8 font-bold tracking-tighter"
          animate={{ opacity: [0.5, 1, 0.5, 1] }}
          transition={{ duration: 0.2, repeat: 5 }}
        >
          ZackRiver
          <span className="text-electric">.dev</span>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-canvas-dark/10 overflow-hidden relative rounded-full">
          <motion.div 
            className="h-full bg-electric absolute left-0 top-0 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <div className="flex justify-between mt-2 font-mono text-[10px] text-canvas-dark/60 uppercase">
          <span>
            {progress < 100 ? 'Initializing Core...' : 'System Ready'}
          </span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>

      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-[-1] opacity-5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-electric animate-scanline"></div>
      </div>
      
      <style>{`
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 3s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default Loader;