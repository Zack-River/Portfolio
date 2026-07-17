import React from "react";

/**
 * MobileHeroVisual — A lightweight, pure-CSS animated robot silhouette
 * that replaces the heavy Three.js 3D scene on mobile devices.
 *
 * PERFORMANCE NOTES:
 * - All drop-shadow filters removed (they repaint on every frame on mobile).
 * - Using only translateY / opacity / scale — GPU-composited properties only.
 * - Particle count reduced from 6 to 3.
 * - All animations slower to reduce per-frame GPU work.
 * - Respects prefers-reduced-motion.
 */
const MobileHeroVisual: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center relative overflow-visible py-8">
      {/* Animated glow orb — opacity only (GPU composited) */}
      <div
        className="absolute w-[320px] h-[320px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.5) 0%, rgba(14,165,233,0.05) 60%, transparent 75%)",
          animation: "pulseGlow 5s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      />

      {/* Robot SVG — NO drop-shadow filters at all */}
      <svg
        viewBox="0 0 200 280"
        className="relative z-10 w-[220px] h-[308px] overflow-visible"
        style={{ animation: "floatRobot 7s ease-in-out infinite", willChange: "transform" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antenna */}
        <line x1="100" y1="10" x2="100" y2="40" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" />
        <circle
          cx="100" cy="8" r="5" fill="#0ea5e9"
          style={{ animation: "blink 4s ease-in-out infinite", willChange: "opacity" }}
        />

        {/* Head */}
        <rect x="60" y="40" width="80" height="55" rx="12" stroke="#0ea5e9" strokeWidth="2" fill="rgba(14,165,233,0.05)" />

        {/* Eyes */}
        <circle cx="82" cy="65" r="8" fill="rgba(14,165,233,0.12)" stroke="#0ea5e9" strokeWidth="1.5"
          style={{ animation: "blink 5s ease-in-out infinite 0.5s", willChange: "opacity" }} />
        <circle cx="82" cy="65" r="3" fill="#0ea5e9"
          style={{ animation: "blink 5s ease-in-out infinite 0.5s", willChange: "opacity" }} />
        <circle cx="118" cy="65" r="8" fill="rgba(14,165,233,0.12)" stroke="#0ea5e9" strokeWidth="1.5"
          style={{ animation: "blink 5s ease-in-out infinite 0.5s", willChange: "opacity" }} />
        <circle cx="118" cy="65" r="3" fill="#0ea5e9"
          style={{ animation: "blink 5s ease-in-out infinite 0.5s", willChange: "opacity" }} />

        {/* Mouth */}
        <path d="M 86 80 Q 100 90 114 80" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />

        {/* Neck */}
        <rect x="90" y="95" width="20" height="15" rx="4" stroke="#0ea5e9" strokeWidth="1.5" fill="rgba(14,165,233,0.05)" />

        {/* Body */}
        <rect x="50" y="110" width="100" height="90" rx="14" stroke="#0ea5e9" strokeWidth="2" fill="rgba(14,165,233,0.05)" />

        {/* Chest panel */}
        <rect x="72" y="125" width="56" height="30" rx="6" stroke="#0ea5e9" strokeWidth="1" fill="rgba(14,165,233,0.08)" />

        {/* Heart light — scale only, GPU composited */}
        <circle cx="100" cy="140" r="8" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9" strokeWidth="1.5"
          style={{ animation: "heartbeat 2.5s ease-in-out infinite", willChange: "transform, opacity" }} />
        <circle cx="100" cy="140" r="3" fill="#0ea5e9"
          style={{ animation: "heartbeat 2.5s ease-in-out infinite", willChange: "transform, opacity" }} />

        {/* Belly dots */}
        <circle cx="85" cy="170" r="3" fill="#0ea5e9" opacity="0.35" />
        <circle cx="100" cy="170" r="3" fill="#0ea5e9" opacity="0.35" />
        <circle cx="115" cy="170" r="3" fill="#0ea5e9" opacity="0.35" />

        {/* Left arm (waving) */}
        <g style={{ transformOrigin: "33px 126px", animation: "waveHand 2.5s ease-in-out infinite", willChange: "transform" }}>
          <rect x="22" y="115" width="22" height="65" rx="10" stroke="#0ea5e9" strokeWidth="1.5" fill="rgba(14,165,233,0.05)" />
          <circle cx="33" cy="185" r="9" stroke="#0ea5e9" strokeWidth="1.5" fill="rgba(14,165,233,0.05)" />
        </g>

        {/* Right arm */}
        <rect x="156" y="115" width="22" height="65" rx="10" stroke="#0ea5e9" strokeWidth="1.5" fill="rgba(14,165,233,0.05)"
          style={{ animation: "swingArm 6s ease-in-out infinite 2.5s", willChange: "transform" }} />
        <circle cx="167" cy="185" r="9" stroke="#0ea5e9" strokeWidth="1.5" fill="rgba(14,165,233,0.05)" />

        {/* Left leg */}
        <rect x="62" y="200" width="24" height="55" rx="10" stroke="#0ea5e9" strokeWidth="1.5" fill="rgba(14,165,233,0.05)" />
        <rect x="56" y="250" width="36" height="14" rx="6" stroke="#0ea5e9" strokeWidth="1.5" fill="rgba(14,165,233,0.05)" />

        {/* Right leg */}
        <rect x="114" y="200" width="24" height="55" rx="10" stroke="#0ea5e9" strokeWidth="1.5" fill="rgba(14,165,233,0.05)" />
        <rect x="108" y="250" width="36" height="14" rx="6" stroke="#0ea5e9" strokeWidth="1.5" fill="rgba(14,165,233,0.05)" />
      </svg>

      {/* Only 3 floating particles — opacity + translateY only */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-electric"
            style={{
              left: `${35 + i * 15}%`,
              top: `${30 + i * 15}%`,
              opacity: 0.4,
              willChange: "transform, opacity",
              animation: `floatParticle ${4 + i * 1.5}s ease-in-out infinite ${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1);    opacity: 0.25; }
          50%       { transform: scale(1.1); opacity: 0.4; }
        }
        @keyframes floatRobot {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes blink {
          0%, 88%, 100% { opacity: 1; }
          94%           { opacity: 0.2; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1);   opacity: 0.8; }
          50%       { transform: scale(1.2); opacity: 1; }
        }
        @keyframes swingArm {
          0%, 100% { transform: rotate(0deg); }
          50%       { transform: rotate(4deg); }
        }
        @keyframes waveHand {
          0%, 100% { transform: rotate(85deg); }
          50%       { transform: rotate(120deg); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px);  opacity: 0.3; }
          50%       { transform: translateY(-20px); opacity: 0.6; }
        }
        @media (prefers-reduced-motion: reduce) {
          svg, div { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default MobileHeroVisual;
