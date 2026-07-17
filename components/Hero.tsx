import React, { Suspense, useRef, useEffect } from "react";
import { PERSONAL_INFO, SITE_CONTENT } from "../constants";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import StarsBackground from "./StarsBackground";
import MobileHeroVisual from "./MobileHeroVisual";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Only import the heavy 3D scene on desktop — never downloaded on mobile
const Scene3D = React.lazy(() => import("./Scene3D"));

/** Split a string into individual <span> characters for GSAP animation */
const SplitChars = React.forwardRef<HTMLSpanElement, { text: string; className?: string }>(
  ({ text, className }, ref) => (
    // whitespace-nowrap prevents individual inline-block chars from wrapping mid-word
    <span ref={ref} className={`whitespace-nowrap ${className ?? ''}`} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="hero-char inline-block"
          style={{ willChange: "transform, opacity" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
);

const Hero: React.FC<{ loading?: boolean }> = ({ loading = false }) => {
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );
  const [shouldLoad3D, setShouldLoad3D] = React.useState(false);

  // GSAP refs
  const labelRef = useRef<HTMLParagraphElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (isMobile) return;
    const timer = setTimeout(() => setShouldLoad3D(true), 100);
    return () => clearTimeout(timer);
  }, [isMobile]);

  // GSAP entrance timeline — fires AFTER loader dismisses (loading === false)
  useEffect(() => {
    if (loading) return; // Loader still showing — wait
    if (isMobile) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const firstNameChars = firstNameRef.current?.querySelectorAll(".hero-char");
    const lastNameChars = lastNameRef.current?.querySelectorAll(".hero-char");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Set initial state
      gsap.set([labelRef.current, descRef.current, btnsRef.current, scrollIndicatorRef.current], {
        opacity: 0,
        y: 24,
      });
      if (firstNameChars) gsap.set(firstNameChars, { opacity: 0, y: 60, rotateX: -45 });
      if (lastNameChars) gsap.set(lastNameChars, { opacity: 0, y: 60, rotateX: -45 });

      // Sequence: label → firstname chars → lastname chars → desc → buttons → scroll indicator
      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
        .to(
          firstNameChars!,
          { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.04 },
          0.55
        )
        .to(
          lastNameChars!,
          { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.04 },
          0.8
        )
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.1)
        .to(btnsRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.35)
        .to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.5 }, 1.8);
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, loading]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-10 pb-10 overflow-hidden bg-canvas-light dark:bg-canvas-dark transition-colors duration-500" ref={sectionRef}>
      {/* 1. Base Canvas Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
        {/* Blueprint grid */}
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

        {/* Electric blue glow */}
        {!isMobile && (
          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[50%] bg-electric/25 rounded-full blur-[120px] pointer-events-none z-10" />
        )}

        {/* Stars Background — desktop only */}
        {!isMobile && <StarsBackground colorClass="bg-electric" count={30} />}

        <div className="absolute inset-0 w-full h-full z-20 pointer-events-auto">
          {!isMobile && (
            <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
              {/* Keep Framer Motion ONLY for the 3D model fade-in */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              >
                <Suspense
                  fallback={
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-canvas-dark/5 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm">
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
      <div className="relative z-10 w-full min-h-auto md:min-h-screen pointer-events-none flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row min-h-auto md:min-h-screen md:items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-0 pb-10 md:py-0">

            {/* Label */}
            <div className="pointer-events-auto flex flex-col items-center md:items-start w-full mb-2 md:mb-4">
              <p
                ref={labelRef}
                className="text-xs font-mono font-bold tracking-widest text-electric"
              >
                ENG. ZACK RIVER
              </p>
            </div>

            {/* Headline with per-character split */}
            <div className="pointer-events-auto overflow-visible mb-2 md:mb-6 w-full flex justify-center md:justify-start">
              <h1 className="block w-full">
                <span
                  className="block text-[clamp(2.5rem,10vw,4.5rem)] md:text-[clamp(3.5rem,8vw,5.5rem)] lg:text-[clamp(3.5rem,7.5vw,8.5rem)] tracking-[-0.02em] font-display font-bold text-canvas-dark dark:text-canvas-light leading-none pt-2 pb-2 w-full text-center md:text-left"
                  style={{ perspective: "800px" }}
                >
                  <SplitChars ref={firstNameRef} text={SITE_CONTENT.hero.name.split(" ")[0]} />
                  <br className="hidden md:block" />
                  <SplitChars
                    ref={lastNameRef}
                    text={SITE_CONTENT.hero.name.split(" ")[1]}
                    className="text-canvas-dark/60 dark:text-canvas-light/60"
                  />
                </span>
              </h1>
            </div>

            {/* Mobile robot inline */}
            {isMobile && (
              <div className="w-full flex justify-center md:hidden animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <MobileHeroVisual />
              </div>
            )}

            {/* Description */}
            <div className="pointer-events-auto mb-8 md:mb-8 mt-4 md:mt-0 w-full flex justify-center md:justify-start">
              <p
                ref={descRef}
                className="text-base md:text-lg text-canvas-dark/80 dark:text-canvas-light/70 max-w-xl mx-auto md:mx-0 font-light leading-relaxed md:leading-loose text-center md:text-left md:opacity-0"
              >
                {SITE_CONTENT.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              ref={btnsRef}
              className="pointer-events-auto w-full flex justify-center md:justify-start md:opacity-0"
            >
              <div className="flex flex-row gap-3 sm:gap-6 justify-center md:justify-start w-full">
                <a href="#projects" className="btn-primary w-full sm:w-auto whitespace-nowrap">
                  View Works
                </a>
                <a href="#contact" className="btn-outline w-full sm:w-auto whitespace-nowrap">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Spacer */}
          <div className="hidden md:block md:w-1/2 lg:w-1/2 h-full pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <span className="text-canvas-dark/60 dark:text-canvas-light/60 animate-bounce">
          <ArrowDown size={32} strokeWidth={1.5} />
        </span>
      </div>
    </section>
  );
};

export default Hero;
