import React from "react";

/**
 * MobileHeroVisual — A lightweight, pure-CSS animated robot silhouette
 * that replaces the heavy Three.js 3D scene on mobile devices.
 * Zero JavaScript. Zero WebGL. Zero TBT penalty.
 */
const MobileHeroVisual: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Animated electric blue glow orb behind the robot */}
      <div
        className="absolute w-[280px] h-[280px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.6) 0%, rgba(14,165,233,0.1) 50%, transparent 70%)",
          animation: "pulseGlow 4s ease-in-out infinite",
        }}
      />

      {/* Secondary glow ring */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-20"
        style={{
          border: "1px solid rgba(14,165,233,0.3)",
          animation: "pulseGlow 4s ease-in-out infinite 1s",
        }}
      />

      {/* Robot SVG silhouette */}
      <svg
        viewBox="0 0 200 280"
        className="relative z-10 w-[180px] h-[250px] drop-shadow-[0_0_25px_rgba(14,165,233,0.5)]"
        style={{ animation: "floatRobot 6s ease-in-out infinite" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antenna */}
        <line
          x1="100"
          y1="10"
          x2="100"
          y2="40"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 6px rgba(14,165,233,0.8))" }}
        />
        <circle
          cx="100"
          cy="8"
          r="5"
          fill="#0ea5e9"
          style={{
            filter: "drop-shadow(0 0 8px rgba(14,165,233,1))",
            animation: "blink 3s ease-in-out infinite",
          }}
        />

        {/* Head */}
        <rect
          x="60"
          y="40"
          width="80"
          height="55"
          rx="12"
          stroke="#0ea5e9"
          strokeWidth="2"
          fill="rgba(14,165,233,0.05)"
          style={{ filter: "drop-shadow(0 0 4px rgba(14,165,233,0.4))" }}
        />

        {/* Eyes */}
        <circle
          cx="82"
          cy="65"
          r="8"
          fill="rgba(14,165,233,0.15)"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          style={{
            filter: "drop-shadow(0 0 6px rgba(14,165,233,0.8))",
            animation: "blink 4s ease-in-out infinite 0.5s",
          }}
        />
        <circle
          cx="82"
          cy="65"
          r="3"
          fill="#0ea5e9"
          style={{ animation: "blink 4s ease-in-out infinite 0.5s" }}
        />
        <circle
          cx="118"
          cy="65"
          r="8"
          fill="rgba(14,165,233,0.15)"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          style={{
            filter: "drop-shadow(0 0 6px rgba(14,165,233,0.8))",
            animation: "blink 4s ease-in-out infinite 0.5s",
          }}
        />
        <circle
          cx="118"
          cy="65"
          r="3"
          fill="#0ea5e9"
          style={{ animation: "blink 4s ease-in-out infinite 0.5s" }}
        />

        {/* Mouth — subtle line */}
        <line
          x1="88"
          y1="82"
          x2="112"
          y2="82"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Neck */}
        <rect
          x="90"
          y="95"
          width="20"
          height="15"
          rx="4"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          fill="rgba(14,165,233,0.05)"
        />

        {/* Body */}
        <rect
          x="50"
          y="110"
          width="100"
          height="90"
          rx="14"
          stroke="#0ea5e9"
          strokeWidth="2"
          fill="rgba(14,165,233,0.05)"
          style={{ filter: "drop-shadow(0 0 4px rgba(14,165,233,0.3))" }}
        />

        {/* Chest panel / core */}
        <rect
          x="72"
          y="125"
          width="56"
          height="30"
          rx="6"
          stroke="#0ea5e9"
          strokeWidth="1"
          fill="rgba(14,165,233,0.08)"
        />
        {/* Heart light */}
        <circle
          cx="100"
          cy="140"
          r="8"
          fill="rgba(14,165,233,0.2)"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          style={{
            filter: "drop-shadow(0 0 10px rgba(14,165,233,0.9))",
            animation: "heartbeat 2s ease-in-out infinite",
          }}
        />
        <circle
          cx="100"
          cy="140"
          r="3"
          fill="#0ea5e9"
          style={{ animation: "heartbeat 2s ease-in-out infinite" }}
        />

        {/* Belly dots */}
        <circle cx="85" cy="170" r="3" fill="#0ea5e9" opacity="0.4" />
        <circle cx="100" cy="170" r="3" fill="#0ea5e9" opacity="0.4" />
        <circle cx="115" cy="170" r="3" fill="#0ea5e9" opacity="0.4" />

        {/* Left arm */}
        <rect
          x="22"
          y="115"
          width="22"
          height="65"
          rx="10"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          fill="rgba(14,165,233,0.05)"
          style={{ animation: "swingArm 5s ease-in-out infinite" }}
        />
        {/* Left hand */}
        <circle
          cx="33"
          cy="185"
          r="9"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          fill="rgba(14,165,233,0.05)"
        />

        {/* Right arm */}
        <rect
          x="156"
          y="115"
          width="22"
          height="65"
          rx="10"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          fill="rgba(14,165,233,0.05)"
          style={{
            animation: "swingArm 5s ease-in-out infinite 2.5s",
          }}
        />
        {/* Right hand */}
        <circle
          cx="167"
          cy="185"
          r="9"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          fill="rgba(14,165,233,0.05)"
        />

        {/* Left leg */}
        <rect
          x="62"
          y="200"
          width="24"
          height="55"
          rx="10"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          fill="rgba(14,165,233,0.05)"
        />
        {/* Left foot */}
        <rect
          x="56"
          y="250"
          width="36"
          height="14"
          rx="6"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          fill="rgba(14,165,233,0.05)"
        />

        {/* Right leg */}
        <rect
          x="114"
          y="200"
          width="24"
          height="55"
          rx="10"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          fill="rgba(14,165,233,0.05)"
        />
        {/* Right foot */}
        <rect
          x="108"
          y="250"
          width="36"
          height="14"
          rx="6"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          fill="rgba(14,165,233,0.05)"
        />
      </svg>

      {/* Holographic floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-electric"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${20 + Math.random() * 60}%`,
              opacity: 0.4 + Math.random() * 0.4,
              animation: `floatParticle ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.5; }
        }
        @keyframes floatRobot {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.2; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes swingArm {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-15px) translateX(5px); opacity: 0.7; }
          50% { transform: translateY(-25px) translateX(-3px); opacity: 0.5; }
          75% { transform: translateY(-10px) translateX(8px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default MobileHeroVisual;
