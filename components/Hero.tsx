import React, { Suspense } from "react";
import { PERSONAL_INFO } from "../constants";
import { ArrowDown } from "lucide-react";
import Scene3D from "./Scene3D";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import StarsBackground from "./StarsBackground";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full relative overflow-x-hidden bg-canvas-light py-24 md:py-32"
    >
      {/* 1. Base 3D Canvas Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
        {/* Global Engineering Blueprint Grid inside base */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14, 165, 233, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 165, 233, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Subtle electric blue decorative background glow */}
        <div className="absolute top-1/2 left-1/2 md:left-3/4 -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[35%] h-[70%] md:h-[50%] bg-[#0ea5e9]/15 rounded-full blur-[100px] pointer-events-none z-10"></div>

        {/* Stars Background for whole screen */}
        <StarsBackground colorClass="bg-electric" count={80} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 w-full h-full z-20 cursor-grab active:cursor-grabbing pointer-events-auto"
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center text-canvas-dark/60 font-mono text-xs animate-pulse">
                LOADING 3D ASSET...
              </div>
            }
          >
            <Scene3D />
          </Suspense>
        </motion.div>
      </div>

      {/* 2. Text Overlay Layer */}
      <div className="relative z-10 w-full h-full pointer-events-none flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row h-full md:items-center">
          {/* Left Column Text (Desktop) / Vertical Stack (Mobile) */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-20 pb-32 md:py-0 h-full md:h-auto">
            <div className="pointer-events-auto flex flex-col items-center md:items-start w-full mb-2 md:mb-0">
              <Reveal delay={0.5}>
                <p className="font-mono text-electric tracking-widest text-sm md:mb-4">
                  ENG. ZACK RIVER
                </p>
              </Reveal>
            </div>

            <div className="pointer-events-auto overflow-hidden mb-2 md:mb-6 w-full flex justify-center md:justify-start">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "circOut" }}
                className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-[clamp(3.5rem,8vw,5.5rem)] lg:text-[clamp(3.5rem,7.5vw,8.5rem)] tracking-[-0.02em] font-display font-bold text-canvas-dark leading-none pt-2 pb-2 w-full text-center md:text-left"
              >
                Abdallah <br className="hidden md:block" />
                <span className="text-canvas-dark/60">Wageeh</span>
              </motion.h1>
            </div>

            {/* Spacer on Mobile for 3D Object to show through */}
            <div className="w-full h-[45vh] md:hidden pointer-events-none" />

            <div className="pointer-events-auto mb-8 md:mb-8 mt-4 md:mt-0 w-full flex justify-center md:justify-start">
              <Reveal delay={0.8}>
                <p className="text-base sm:text-lg text-canvas-dark/80 max-w-xl mx-auto md:mx-0 font-light leading-relaxed text-center md:text-left">
                  {PERSONAL_INFO.title} & <br className="hidden md:block" />
                  <span className="text-canvas-dark/80 font-medium">
                    Full Stack MERN Specialist
                  </span>
                  . Crafting scalable digital architectures with artistic
                  precision.
                </p>
              </Reveal>
            </div>

            <div className="pointer-events-auto w-full flex justify-center md:justify-start">
              <Reveal delay={1.0}>
                <div className="flex flex-row gap-3 sm:gap-6 justify-center md:justify-start w-full">
                  <a
                    href="#projects"
                    className="px-5 sm:px-8 py-3 bg-canvas-dark text-canvas-light font-bold hover:bg-electric hover:ring-electric transition-colors duration-300 text-center text-sm sm:text-base whitespace-nowrap"
                  >
                    View Works
                  </a>
                  <a
                    href="#contact"
                    className="px-5 sm:px-8 py-3 border border-canvas-dark/10 text-canvas-dark/80 hover:border-canvas-dark hover:text-electric transition-colors duration-300 text-center text-sm sm:text-base whitespace-nowrap"
                  >
                    Contact Me
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column Spacer (Desktop) to let 3D object show */}
          <div className="hidden md:block md:w-1/2 lg:w-1/2 h-full pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-canvas-dark/60 z-20 pointer-events-none"
      >
        <ArrowDown size={32} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;
