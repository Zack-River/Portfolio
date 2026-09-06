import React, { useState, useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLine1Flipped, setIsLine1Flipped] = useState(false);
  const [isLine2Flipped, setIsLine2Flipped] = useState(false);
  const [namesHovered, setNamesHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-canvas-dark text-canvas-light overflow-hidden selection:bg-electric selection:text-canvas-dark cursor-crosshair"
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={() => { if (!isHovering) setIsHovering(true); }}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* ====================================================================
          LAYER 1: THE NORMAL SITE (Visible by default)
          ==================================================================== */}
      <div className="absolute inset-0 z-20 flex flex-col pointer-events-none">
        {/* Ambient Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-200 h-200 bg-electric/5 rounded-full blur-[100px] pointer-events-none opacity-50 z-0"></div>

        <div className="relative z-10 container mx-auto px-[4vw] w-full h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full w-full gap-6 md:gap-[4vw]">
            {/* LEFT COLUMN: THE TEXT */}
            <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left pt-12 md:pt-0 z-20 w-full max-w-105 md:max-w-[52%] lg:max-w-[55%] mx-auto md:mx-0">
              {/* TOP LABEL */}
              <div
                className="mb-[2vw] flex items-center justify-center md:justify-start gap-[0.6vw] animate-fade-in-up w-full mx-auto md:mx-0 pointer-events-auto"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="w-[0.5vw] h-[0.5vw] min-w-1.5 min-h-1.5 bg-electric rounded-sm shrink-0"></span>
                <h2 className="font-mono text-[1.1vw] min-text-[10px] uppercase tracking-[0.3em] text-canvas-light/60 whitespace-nowrap" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                  Software engineer
                </h2>
              </div>

              {/* Names wrapper — tracks hover to control gap between Zack/River */}
              <div
                className="w-full pointer-events-auto"
                onMouseEnter={() => setNamesHovered(true)}
                onMouseLeave={() => setNamesHovered(false)}
              >
                {/* 3D Flip Container for Line 1 (Abdallah front / Zack back) */}
                <div
                  className={`animate-fade-in-up group perspective-1000 cursor-pointer w-full transition-[margin] duration-500 ${namesHovered || isLine1Flipped ? 'mb-[1.5vw] lg:mb-[2vw]' : 'mb-0'}`}
                  style={{ animationDelay: "0.2s" }}
                  onClick={() => setIsLine1Flipped(!isLine1Flipped)}
                >
                  <div
                    className={`relative transform-style-3d transition-transform duration-700 w-full grid ${isLine1Flipped ? "rotate-x-180 delay-0" : "group-hover:rotate-x-180 group-hover:delay-0 delay-500"}`}
                  >
                    {/* Front Side: Abdallah */}
                    <h1 className="col-start-1 row-start-1 backface-hidden font-black uppercase leading-[0.85] tracking-tighter text-canvas-light text-center md:text-left w-full m-0 pb-1"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)' }}>
                      Abdallah
                    </h1>
                    {/* Back Side: Zack — aria-hidden so Lighthouse ignores this invisible element for LCP */}
                    <h1
                      aria-hidden="true"
                      className="col-start-1 row-start-1 backface-hidden rotate-x-180 font-black uppercase leading-[0.85] tracking-tighter text-canvas-light text-center md:text-left w-full m-0 pb-1 -translate-y-3 md:translate-y-[-0.8vw] lg:-translate-y-6"
                      style={{ fontSize: 'clamp(3.5rem, 7vw, 9rem)' }}>
                      Zack
                    </h1>
                  </div>
                </div>

                {/* 3D Flip Container for Line 2 (Wageeh front / River back) */}
                <div
                  className="animate-fade-in-up group perspective-1000 mb-8 cursor-pointer w-full pointer-events-auto"
                  style={{ animationDelay: "0.2s" }}
                  onClick={() => setIsLine2Flipped(!isLine2Flipped)}
                >
                  <div
                    className={`relative transform-style-3d transition-transform duration-700 w-full grid ${isLine2Flipped ? "rotate-x-180 delay-0" : "group-hover:rotate-x-180 group-hover:delay-0 delay-500"}`}
                  >
                    {/* Front Side: Wageeh */}
                    <h1 className="col-start-1 row-start-1 backface-hidden font-black uppercase leading-[0.85] tracking-tighter text-electric text-center md:text-left w-full m-0 pt-1"
                      style={{ fontSize: 'clamp(2.8rem, 5.5vw, 7rem)' }}>
                      Wageeh
                    </h1>
                    {/* Back Side: River — aria-hidden so Lighthouse ignores this invisible element for LCP */}
                    <h1
                      aria-hidden="true"
                      className="col-start-1 row-start-1 backface-hidden rotate-x-180 font-black uppercase leading-[0.85] tracking-tighter text-electric text-center md:text-left w-full m-0 pt-1 translate-y-3 md:translate-y-[0.8vw] lg:translate-y-6"
                      style={{ fontSize: 'clamp(3.5rem, 7vw, 9rem)' }}>
                      River
                    </h1>
                  </div>
                </div>
              </div>

              <div
                className="animate-fade-in-up w-full mx-auto md:mx-0 flex flex-col mb-[2vw] pointer-events-auto relative z-30 gap-1"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-full font-medium text-canvas-light/70 leading-relaxed" style={{ fontSize: 'clamp(10px, 1.1vw, 15px)' }}>
                  Building scalable backend architectures,
                </div>
                <div className="w-full font-medium text-canvas-light/70 leading-relaxed" style={{ fontSize: 'clamp(10px, 1.1vw, 15px)' }}>
                  and delivering seamless web experiences.
                </div>
              </div>

              {/* CTAs */}
              <div
                className="flex flex-row justify-center md:justify-start items-center w-full mx-auto md:mx-0 mb-[3vw] animate-fade-in-up pointer-events-auto relative z-30"
                style={{ animationDelay: "0.4s", gap: 'clamp(16px, 2vw, 32px)' }}
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center bg-canvas-light text-canvas-dark rounded-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 ease-out hover:bg-electric hover:-translate-y-0.5 whitespace-nowrap"
                  style={{ fontSize: 'clamp(9px, 0.9vw, 14px)', padding: 'clamp(10px, 1vw, 20px) clamp(18px, 2vw, 40px)' }}
                >
                  View Works
                </a>
                <a
                  href="#contact"
                  className="group relative font-semibold uppercase tracking-[0.12em] text-canvas-light/80 hover:text-canvas-light transition-colors duration-300 whitespace-nowrap"
                  style={{ fontSize: 'clamp(9px, 0.9vw, 14px)', padding: 'clamp(10px, 1vw, 20px) 0' }}
                >
                  Contact Me
                  <span className="absolute bottom-[clamp(10px,1vw,20px)] left-0 w-0 h-px bg-electric transition-all duration-500 ease-out group-hover:w-full"></span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN — Normal Photo */}
            <div
              className="relative flex items-center justify-center md:justify-end animate-fade-in pointer-events-none mb-8 md:mb-0 md:h-screen w-full md:w-auto lg:w-full md:shrink-0 lg:shrink"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative w-full max-w-[320px] sm:max-w-90 md:w-[38vw] md:max-w-90 lg:w-full lg:max-w-120 xl:max-w-137.5 aspect-square md:aspect-4/5 z-10 flex items-center justify-center translate-y-6 md:translate-y-4 md:-translate-x-4 lg:-translate-x-4 lg:translate-y-4 mx-auto md:mx-0">
                <img
                  src="/zack-photo-new-sm.webp"
                  srcSet="/zack-photo-new-sm.webp 560w, /zack-photo-new.webp 1100w"
                  sizes="(max-width: 768px) 320px, (max-width: 1280px) 550px, 700px"
                  alt="Zack River / Abdallah Wageeh"
                  fetchPriority="high"
                  width="560"
                  height="841"
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 brightness-90 md:scale-105 lg:scale-110 photo-mask"
                />
                <div className="absolute inset-0 bg-canvas-dark/20 photo-mask"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          LAYER 2: FULL-SCREEN X-RAY REALITY
          Revealed strictly by the flashlight mask
          ==================================================================== */}
      {/* The Flashlight Aim / Range Boundary */}
      <div
        className="hidden lg:block absolute pointer-events-none rounded-full border border-electric/20 z-60 transition-opacity duration-300"
        style={{
          width: "300px",
          height: "300px",
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          opacity: isHovering ? 1 : 0,
        }}
      >
        {/* Scope Crosshair Ticks */}
        <div className="absolute top-1/2 -left-2 w-4 h-px bg-electric/50 -translate-y-1/2"></div>
        <div className="absolute top-1/2 -right-2 w-4 h-px bg-electric/50 -translate-y-1/2"></div>
        <div className="absolute -top-2 left-1/2 w-px h-4 bg-electric/50 -translate-x-1/2"></div>
        <div className="absolute -bottom-2 left-1/2 w-px h-4 bg-electric/50 -translate-x-1/2"></div>
      </div>
      
      <div
        className="hidden lg:block absolute inset-0 z-50 pointer-events-none transition-opacity duration-300 overflow-hidden"
        style={{
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
      >
        {/* The Solid Dark Background that blocks the normal site underneath the flashlight */}
        <div className="absolute inset-0 bg-canvas-dark z-0"></div>

        {/* Ambient Acid Lime Glow for the X-Ray Layer */}
        <div className="absolute inset-0 bg-radial-gradient from-electric/10 to-transparent z-0"></div>

        {/* SCATTERED SKILLS (Constellation) */}
        <div className="absolute inset-0 z-10 font-mono text-[10px] uppercase tracking-widest text-electric/70 font-bold">
          <span className="absolute top-[15%] left-[45%]">PostgreSQL</span>
          <span className="absolute top-[80%] left-[20%]">React/Next.js</span>
          <span className="absolute top-[60%] left-[70%]">Node.js</span>
          <span className="absolute top-[30%] left-[85%]">TypeScript</span>
          <span className="absolute top-[40%] left-[10%]">Docker</span>
          <span className="absolute top-[70%] left-[80%]">GraphQL</span>
          <span className="absolute top-[20%] left-[25%]">AWS</span>
        </div>

        {/* RIGHT COLUMN: The X-Ray SVG Diagram replacing the photo */}
        <div className="w-full max-w-[1600px] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 relative z-20 px-8 md:px-[6%]">
          {/* X-RAY LEFT: Empty spacer to maintain grid */}
          <div className="hidden lg:block"></div>

          {/* X-RAY RIGHT: The SVG Pipeline (Replaces the Photo) */}
          <div className="relative flex items-center justify-center lg:justify-end mt-12 mb-24 lg:mt-0 lg:mb-0 lg:h-screen">
            <div className="relative w-[85%] sm:w-[60%] lg:w-full max-w-150 aspect-3/4 flex items-center justify-center lg:-translate-x-16 lg:translate-y-16">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 800"
                className="w-[150%] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <defs>
                  <linearGradient
                    id="glow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#C7F000" stopOpacity="1" />
                    <stop
                      offset="100%"
                      stopColor="#C7F000"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                {/* Background Grid */}
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(199,240,0,0.2)"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Static Paths — also used as motion paths for animateMotion */}
                <g stroke="rgba(199,240,0,0.3)" strokeWidth="2" fill="none">
                  <path id="pulse-path-1" d="M100,400 L300,400 L400,200 L600,200" />
                  <path id="pulse-path-2" d="M100,400 L300,400 L400,600 L600,600" />
                  <path id="pulse-path-3" d="M300,400 L600,400" />
                  <path id="pulse-path-4" d="M400,200 L600,400 L750,400" />
                  <path d="M400,600 L600,400" />
                  <path d="M600,200 L750,200" />
                  <path d="M600,400 L750,400" />
                  <path d="M600,600 L750,600" />
                </g>

                {/* Animated Data Pulses — animateMotion is GPU-composited */}
                <defs>
                  <filter id="glow-dot" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* Pulse dot — path 1: CLIENT → GATEWAY → AUTH → DB_01 */}
                <circle r="5" fill="#C7F000" filter="url(#glow-dot)">
                  <animateMotion dur="2s" repeatCount="indefinite" begin="0s">
                    <mpath xlinkHref="#pulse-path-1" />
                  </animateMotion>
                </circle>
                {/* Pulse dot — path 2: CLIENT → GATEWAY → CACHE → DB_02 */}
                <circle r="5" fill="#C7F000" filter="url(#glow-dot)">
                  <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s">
                    <mpath xlinkHref="#pulse-path-2" />
                  </animateMotion>
                </circle>
                {/* Pulse dot — path 3: GATEWAY → CORE_API */}
                <circle r="5" fill="#C7F000" filter="url(#glow-dot)">
                  <animateMotion dur="1.5s" repeatCount="indefinite" begin="1.0s">
                    <mpath xlinkHref="#pulse-path-3" />
                  </animateMotion>
                </circle>
                {/* Pulse dot — path 4: AUTH → CORE_API → output */}
                <circle r="5" fill="#C7F000" filter="url(#glow-dot)">
                  <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.5s">
                    <mpath xlinkHref="#pulse-path-4" />
                  </animateMotion>
                </circle>

                {/* Nodes */}
                <g fill="#0D0F0E" stroke="#C7F000" strokeWidth="3">
                  <circle cx="100" cy="400" r="10" />
                  <circle cx="300" cy="400" r="14" />
                  <circle cx="400" cy="200" r="14" />
                  <circle cx="400" cy="600" r="14" />
                  <circle cx="600" cy="200" r="20" />
                  <circle cx="600" cy="400" r="24" />
                  <circle cx="600" cy="600" r="20" />
                  <circle cx="750" cy="200" r="10" />
                  <circle cx="750" cy="400" r="10" />
                  <circle cx="750" cy="600" r="10" />
                </g>

                {/* Node Labels */}
                <g
                  fill="#C7F000"
                  fontSize="14"
                  fontFamily="monospace"
                  letterSpacing="2"
                  fontWeight="bold"
                >
                  <text x="80" y="370">CLIENT</text>
                  <text x="270" y="370">GATEWAY</text>
                  <text x="370" y="160">AUTH</text>
                  <text x="370" y="570">CACHE</text>
                  <text x="570" y="160">DB_01</text>
                  <text x="560" y="360">CORE_API</text>
                  <text x="570" y="570">DB_02</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          STYLES
          ==================================================================== */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-x-180 { transform: rotateX(180deg); }
        .photo-mask {
          mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 68%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 68%);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
