import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@react-three/drei';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const { progress: modelProgress } = useProgress();

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // Mobile: No 3D model, so use a fast fake progress
    if (isMobile) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(onComplete, 200);
            return 100;
          }
          return Math.min(prev + Math.random() * 30, 100);
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [onComplete]);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Desktop: Sync directly with the 3D model's true download progress
    if (!isMobile) {
      setProgress(modelProgress);
      if (modelProgress >= 100) {
        const timer = setTimeout(onComplete, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [modelProgress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-100 bg-canvas-light flex flex-col items-center justify-center overflow-hidden"
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
        <div className="absolute top-0 left-0 w-full h-px bg-electric animate-scanline"></div>
      </div>
      
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(0vh); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 3s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default Loader;