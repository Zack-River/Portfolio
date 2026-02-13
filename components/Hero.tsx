import React, { Suspense } from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';
import Scene3D from './Scene3D';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row relative overflow-hidden bg-noise">
      {/* Text Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 lg:px-32 pt-24 md:pt-0 z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Reveal delay={0.5}>
            <p className="font-mono text-amber-600 tracking-widest text-sm mb-4">
              ENG. ZACK RIVER
            </p>
          </Reveal>
          
          <div className="mb-6 overflow-hidden">
             <motion.h1 
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.6, ease: "circOut" }}
               className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-100 leading-[0.9]"
             >
              Abdallah <br />
              <span className="text-stone-600">Wageeh.</span>
             </motion.h1>
          </div>

          <Reveal delay={0.8}>
            <p className="text-lg text-stone-400 max-w-md font-light leading-relaxed mb-8">
              {PERSONAL_INFO.title} & <br/> 
              <span className="text-stone-300 font-medium">Full Stack MERN Specialist</span>.
              Crafting scalable digital architectures with artistic precision.
            </p>
          </Reveal>
          
          <Reveal delay={1.0}>
            <div className="flex space-x-6">
              <a href="#projects" className="px-8 py-3 bg-stone-100 text-void font-bold hover:bg-amber-500 transition-colors duration-300">
                View Works
              </a>
              <a href="#contact" className="px-8 py-3 border border-stone-700 text-stone-300 hover:border-amber-500 hover:text-amber-500 transition-colors duration-300">
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Image/3D Side - Artistic Frame */}
      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen bg-charcoal flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-void to-charcoal opacity-90"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-900/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* 3D Container */}
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.5, delay: 0.2 }}
           className="relative w-72 h-96 md:w-80 md:h-[30rem] border border-stone-700 p-2 transition-transform duration-700 group-hover:scale-105 z-20"
        >
            <div className="absolute top-0 left-0 w-full h-full border-t border-l border-stone-500 -translate-x-2 -translate-y-2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-full h-full border-b border-r border-stone-500 translate-x-2 translate-y-2 pointer-events-none"></div>
            
            <div className="w-full h-full bg-void border border-stone-800 overflow-hidden relative">
               <Suspense fallback={<div className="w-full h-full bg-stone-900 animate-pulse flex items-center justify-center text-stone-700 font-mono text-xs">LOADING CORE...</div>}>
                 <Scene3D />
               </Suspense>
               
               {/* Overlay Text */}
               <div className="absolute bottom-4 left-4 font-mono text-xs text-amber-600/50 pointer-events-none">
                 SYSTEM_CORE_ACTIVE
               </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 font-mono text-6xl text-stone-800 font-bold opacity-50 select-none -z-10 pointer-events-none">
              DEV
            </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-8 md:left-20 animate-bounce text-stone-500 z-20 pointer-events-none"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;