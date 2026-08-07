import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-24 md:pb-8 bg-canvas-light dark:bg-canvas-dark border-t border-canvas-dark/10 dark:border-white/10 text-center transition-colors duration-500">
      <p className="text-sm font-medium text-canvas-dark/60 dark:text-canvas-light/60 font-mono">
        © {new Date().getFullYear()} Abdullah Wajih -{" "}
        <span className="text-electric">Zack</span>
        <span className="text-canvas-dark dark:text-white">.</span>
        <span className="text-electric">River</span>
      </p>
    </footer>
  );
};

export default Footer;
