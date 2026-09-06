import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  number?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, number = '', align = 'left', dark = false }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Fallback instantly for mobile to save performance
    if (isMobile || prefersReducedMotion) {
      if (titleRef.current) titleRef.current.style.opacity = '1';
      if (lineRef.current) lineRef.current.style.opacity = '1';
      if (subtitleRef.current) subtitleRef.current.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      // Stagger in the title, line, and subtitle
      gsap.from([titleRef.current, lineRef.current, subtitleRef.current], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        // Play and reverse to keep the "life feeling"
        scrollTrigger: { trigger: titleRef.current, start: 'top 88%', end: 'top 20%', toggleActions: 'play none none reverse' },
      });
    });

    return () => ctx.revert();
  }, []);

  // Text color: dark sections always have light text; light sections always have dark text
  const titleColor    = dark ? 'text-canvas-light' : 'text-canvas-dark dark:text-canvas-light';
  const subtitleColor = dark ? 'text-canvas-light/70' : 'text-canvas-dark/60 dark:text-canvas-light/70';
  const numberColor   = dark ? 'text-white/15' : 'text-canvas-dark/10 dark:text-white/15';

  return (
    <div className={`relative mb-12 md:mb-16 text-center ${align === 'right' ? 'md:text-right' : 'md:text-left'} pt-8`}>
      {number && (
        <div
          aria-hidden="true"
          className={`absolute -top-4 w-full h-32 select-none z-0 pointer-events-none flex items-center ${
            align === 'right' 
              ? 'justify-center md:justify-start' 
              : align === 'center' 
                ? 'justify-center' 
                : 'justify-center md:justify-end'
          }`}
        >
          <span
            className={`text-[clamp(4rem,12vw,8rem)] font-bold font-display opacity-60 leading-none ${numberColor}`}
          >
            {number}
          </span>
        </div>
      )}
      <div className="relative z-10">
        <h2
          ref={titleRef}
          className={`text-[clamp(1.75rem,5vw,3rem)] font-display font-bold mb-2 ${titleColor}`}
        >
          {title}
        </h2>
        <div
          ref={lineRef}
          className={`h-1 w-24 bg-electric mb-4 mx-auto ${align === 'right' ? 'md:mr-0 md:ml-auto' : 'md:mr-auto md:ml-0'}`}
        />
        <p
          ref={subtitleRef}
          className={`font-mono tracking-widest text-sm uppercase ${subtitleColor}`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default React.memo(SectionHeader);