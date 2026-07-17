import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, width = "100%", delay = 0.25, className = "" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const mainControls = useAnimation();
  const isFullHeight = className.includes('h-full');

  // On mobile, skip all animation machinery — just render children immediately.
  // Framer Motion's IntersectionObserver + animation controller is heavy on
  // low-end phone CPUs when multiplied across dozens of cards.
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) return;
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls, isMobile]);

  if (isMobile) {
    return (
      <div
        className={className}
        style={{ position: "relative", width, ...(isFullHeight ? { height: '100%' } : {}) }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        width,
        contain: 'content',
        ...(isFullHeight ? { height: '100%' } : {}),
      }}
    >
      <motion.div
        style={{
          ...(isFullHeight ? { height: '100%' } : {}),
          willChange: 'transform, opacity',
        }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;