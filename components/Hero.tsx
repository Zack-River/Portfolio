import React, { Suspense } from "react";
import { PERSONAL_INFO } from "../constants";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import StarsBackground from "./StarsBackground";
import MobileHeroVisual from "./MobileHeroVisual";

// Only import the heavy 3D scene on desktop — never downloaded on mobile
const Scene3D = React.lazy(() => import("./Scene3D"));

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );
  const [shouldLoad3D, setShouldLoad3D] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    // On mobile: never load Three.js — the entire bundle is skipped
    if (isMobile) return;

    // On desktop: tiny delay to let the HTML paint first, then boot WebGL
    const timer = setTimeout(() => {
      setShouldLoad3D(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <section
      id="home"
      className="min-h-[auto] md:min-h-screen w-full relative overflow-x-hidden bg-canvas-light"
    >
      {/* 1. Base Canvas Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
        {/* Global Engineering Blueprint Grid — hidden on mobile to prevent scroll repaint */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-70 hidden md:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14, 165, 233, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 165, 233, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            backgroundAttachment: "local",
          }}
        />

        {/* Subtle electric blue decorative background glow — skip expensive blur on mobile */}
        {!isMobile && (
          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[50%] bg-electric/15 rounded-full blur-[100px] pointer-events-none z-10" />
        )}

        {/* Stars Background — desktop only. Mobile CPUs can't handle 30 animated divs */}
        {!isMobile && <StarsBackground colorClass="bg-electric" count={30} />}

        <div className="absolute inset-0 w-full h-full z-20 pointer-events-auto">
          {!isMobile && (
            /* Desktop: Full 3D experience */
            <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center text-canvas-dark/60 font-mono text-xs animate-pulse">
                      LOADING 3D ASSET...
                    </div>
                  }
                >
                  {shouldLoad3D && <Scene3D />}
                </Suspense>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Text Overlay Layer */}
      <div className="relative z-10 w-full min-h-[auto] md:min-h-screen pointer-events-none flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row min-h-[auto] md:min-h-screen md:items-center">
          {/* Left Column Text (Desktop) / Vertical Stack (Mobile) */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-24 pb-32 md:py-0">
            <div className="pointer-events-auto flex flex-col items-center md:items-start w-full mb-2 md:mb-0">
              <Reveal delay={0.5}>
                <p className="font-mono text-electric tracking-widest text-sm md:mb-4">
                  ENG. ZACK RIVER
                </p>
              </Reveal>
            </div>

            <div className="pointer-events-auto overflow-hidden mb-2 md:mb-6 w-full flex justify-center md:justify-start animate-fade-in-up">
              <h1 className="block w-full">
                <span className="block text-[clamp(2.5rem,10vw,4.5rem)] md:text-[clamp(3.5rem,8vw,5.5rem)] lg:text-[clamp(3.5rem,7.5vw,8.5rem)] tracking-[-0.02em] font-display font-bold text-canvas-dark leading-none pt-2 pb-2 w-full text-center md:text-left">
                  Abdallah <br className="hidden md:block" />
                  <span className="text-canvas-dark/60">Wageeh</span>
                </span>
              </h1>
            </div>

            {/* Inline SVG robot for mobile ONLY! naturally stacked */}
            {isMobile && (
              <div className="w-full flex justify-center md:hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <MobileHeroVisual />
              </div>
            )}

            <div className="pointer-events-auto mb-8 md:mb-8 mt-4 md:mt-0 w-full flex justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p className="text-base md:text-lg text-canvas-dark/80 max-w-xl mx-auto md:mx-0 font-light leading-relaxed md:leading-loose text-center md:text-left">
                {PERSONAL_INFO.title} & <br className="hidden md:block" />
                <span className="text-canvas-dark/80 font-medium">
                  Full Stack Specialist
                </span>
                . Crafting scalable digital architectures with artistic
                precision.
              </p>
            </div>

            <div className="pointer-events-auto w-full flex justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex flex-row gap-3 sm:gap-6 justify-center md:justify-start w-full">
                <a
                  href="#projects"
                  className="btn-primary w-full sm:w-auto whitespace-nowrap"
                >
                  View Works
                </a>
                <a
                  href="#contact"
                  className="btn-outline w-full sm:w-auto whitespace-nowrap"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Spacer (Desktop) to let 3D object show */}
          <div className="hidden md:block md:w-1/2 lg:w-1/2 h-full pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ display: "flex" }}
        >
          <span className="animate-bounce text-canvas-dark/60">
            <ArrowDown size={32} strokeWidth={1.5} />
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
