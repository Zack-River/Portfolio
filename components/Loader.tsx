import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

/** Critical assets that must be loaded before the loader exits */
const CRITICAL_IMAGES = [
  window.innerWidth < 768
    ? "/zack-photo-new-mobile.webp"
    : "/zack-photo-new-sm.webp",
];

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pulseBgRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const leftLineRef = useRef<HTMLDivElement>(null);
  const rightLineRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let dismissed = false;
    let completedTasks = 0;
    const totalTasks = CRITICAL_IMAGES.length + 1; // +1 for document readyState
    let currentTarget = 0;
    let readyToWipe = false;

    let ctx: gsap.Context;

    // We will initialize GSAP context immediately to ensure HMR cleanup
    ctx = gsap.context(() => {
      // 1. Initial logo entrance
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // 2. Continuous pulsing background for the loader
      gsap.to(pulseBgRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 1.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      const triggerDismiss = () => {
        if (dismissed) return;
        dismissed = true;
        window.dispatchEvent(new Event("loaderDismissing"));

        const tl = gsap.timeline({ onComplete });

        // Initialize the two vertical lines at the exact center
        gsap.set(leftLineRef.current, { left: "50%", opacity: 0.8 });
        gsap.set(rightLineRef.current, { right: "50%", opacity: 0.8 });

        // Ensure background clipPath is removed so maskImage takes full control
        gsap.set(backgroundRef.current, { clipPath: "none" });

        // A. Logo fades out
        tl.to(
          logoRef.current,
          {
            scale: 0.5,
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
          },
          0,
        );

        // B. ONE single progress value drives the curtain reveal
        // It goes from p=0 (center) to p=50 (edges)
        const revealProxy = { val: 0 };
        tl.to(
          revealProxy,
          {
            val: 50,
            duration: 0.8,
            ease: "power2.inOut",
            onUpdate: () => {
              const p = revealProxy.val;

              // Move lines outward
              if (leftLineRef.current)
                leftLineRef.current.style.left = `${50 - p}%`;
              if (rightLineRef.current)
                rightLineRef.current.style.right = `${50 - p}%`;

              // Mask the background.
              // Everything from 0 to (50-p) is black (visible loader).
              // Everything from (50-p) to (50+p) is transparent (revealing hero).
              // Everything from (50+p) to 100 is black (visible loader).
              if (backgroundRef.current) {
                const mask = `linear-gradient(to right, black ${50 - p}%, transparent ${50 - p}%, transparent ${50 + p}%, black ${50 + p}%)`;
                backgroundRef.current.style.maskImage = mask;
                backgroundRef.current.style.webkitMaskImage = mask;
              }
            },
          },
          0,
        );

        // C. Fade out the vertical lines as they hit the edges (when p is near 50)
        tl.to(
          [leftLineRef.current, rightLineRef.current],
          { opacity: 0, duration: 0.3 },
          0.5,
        );

        // D. Fade out the wrapper container
        tl.to(containerRef.current, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      };

      const checkReady = () => {
        if (completedTasks >= totalTasks && progressProxy.val >= 99) {
          const MIN_TIME = 0;
          const elapsed = Date.now() - start;
          const remaining = Math.max(0, MIN_TIME - elapsed);
          setTimeout(triggerDismiss, remaining);
        }
      };

      // Expose checkReady for the outer scope
      (window as any)._loaderCheckReady = checkReady;
    }, containerRef);

    const progressProxy = { val: 0 };
    let progressTween: gsap.core.Tween;

    const updateProgress = () => {
      completedTasks++;
      currentTarget = (completedTasks / totalTasks) * 100;

      // Smoothly animate the visual counter to match real progress
      if (progressTween) progressTween.kill();
      progressTween = gsap.to(progressProxy, {
        val: currentTarget,
        duration: Math.max(0.8, currentTarget === 100 ? 0.8 : 1.5),
        ease: "power2.out",
        onUpdate: () => {
          setProgress(Math.floor(progressProxy.val));
        },
        onComplete: () => {
          if ((window as any)._loaderCheckReady)
            (window as any)._loaderCheckReady();
        },
      });
    };

    const start = Date.now();

    // 1. Track Document Load
    if (document.readyState === "complete") {
      updateProgress();
    } else {
      const handleLoad = () => updateProgress();
      window.addEventListener("load", handleLoad);
      // Fallback in case window.onload never fires or fired before React hydrated
      setTimeout(() => {
        window.removeEventListener("load", handleLoad);
        if (completedTasks < totalTasks) updateProgress();
      }, 3000);
    }

    // 2. Track Critical Images
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = src;
    });

    return () => {
      ctx.revert();
      delete (window as any)._loaderCheckReady;
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* The TWO vertical transition lines. Invisible until the reveal. */}
      <div
        ref={leftLineRef}
        className="absolute top-0 bottom-0 w-px bg-electric shadow-[0_0_15px_rgba(180,255,0,1)] opacity-0 z-20 pointer-events-none"
      />
      <div
        ref={rightLineRef}
        className="absolute top-0 bottom-0 w-px bg-electric shadow-[0_0_15px_rgba(180,255,0,1)] opacity-0 z-20 pointer-events-none"
      />

      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-[#0d0e0d] z-0 overflow-hidden pointer-events-auto"
        style={{
          clipPath: "inset(0% 0% 0% 0%)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23b4ff00' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      >
        {/* Subtle background ambient blobs */}
        <div className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] max-w-150 max-h-150 bg-electric/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] max-w-150 max-h-150 bg-electric/15 blur-[120px] rounded-full pointer-events-none" />

        <style>{`
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}</style>
      </div>

      {/* Central Content */}
      <div
        ref={logoRef}
        className="relative z-10 flex flex-col items-center justify-center gap-16 md:gap-20"
      >
        {/* Logo & 3 Concentric Rings */}
        <div className="relative flex items-center justify-center">
          {/* Pulsing Background Glow */}
          <div
            ref={pulseBgRef}
            className="absolute w-45 h-45 md:w-62.5 md:h-62.5 rounded-full bg-electric/15 blur-[50px] opacity-20 z-0"
          />

          {/* Outer Ring: Slow faint arc */}
          <div
            className="absolute w-65 h-65 md:w-90 md:h-90 rounded-full border border-electric/10 border-t-electric/40 border-l-electric/10 animate-spin"
            style={{ animationDuration: "6s" }}
          />

          {/* Middle Ring: Dashed reverse rotating */}
          <div
            className="absolute w-52.5 h-52.5 md:w-72.5 md:h-72.5 rounded-full border border-dashed border-electric/30 opacity-60"
            style={{ animation: "spin-reverse 10s linear infinite" }}
          />

          {/* Inner Ring: Solid fast glowing ring */}
          <div
            className="absolute w-40 h-40 md:w-55 md:h-55 rounded-full border-2 border-electric/20 border-t-electric animate-spin shadow-[0_0_30px_rgba(180,255,0,0.2)]"
            style={{ animationDuration: "2s" }}
          />

          {/* Logo */}
          <img
            src="/logo-sm.webp"
            alt="Zack River"
            aria-hidden="true"
            className="w-24 md:w-32 relative z-10"
            style={{ filter: "brightness(0) invert(1)" }}
            width="128"
            height="128"
          />
        </div>

        {/* Loading Indicator */}
        <div className="flex flex-col items-center">
          <div className="font-mono text-[10px] md:text-xs text-white/60 tracking-[0.3em] uppercase flex items-center shadow-black drop-shadow-md">
            <span>
              Loading<span className="animate-pulse">...</span>
            </span>
            <span className="text-electric font-bold w-12 text-right tracking-widest">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
