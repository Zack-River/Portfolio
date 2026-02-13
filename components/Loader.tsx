import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Wait a bit after 100%
          return 100;
        }
        // Random increment for realistic effect
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-64">
        {/* Text Glitch Effect */}
        <motion.div 
          className="font-serif text-3xl text-stone-200 text-center mb-8 font-bold tracking-tighter"
          animate={{ opacity: [0.5, 1, 0.5, 1] }}
          transition={{ duration: 0.2, repeat: 5 }}
        >
          ZackRiver
          <span className="text-amber-600">.dev</span>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-stone-900 overflow-hidden relative">
          <motion.div 
            className="h-full bg-amber-600 absolute left-0 top-0"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <div className="flex justify-between mt-2 font-mono text-[10px] text-stone-500 uppercase">
          <span>
            {progress < 100 ? 'Initializing Core...' : 'System Ready'}
          </span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>

      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-[-1] opacity-10">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-amber-600 animate-scanline"></div>
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