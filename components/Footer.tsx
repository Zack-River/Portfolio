import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-24 md:pb-8 bg-canvas-light border-t border-canvas-dark/10 text-center">
      <p className="text-canvas-dark/60 text-sm font-mono">
        © {new Date().getFullYear()} Abdallah Wageeh -{" "}
        <span className="text-electric">Zack</span>
        <span className="text-canvas-dark">.</span>
        <span className="text-electric">River</span>
      </p>
    </footer>
  );
};

export default Footer;
