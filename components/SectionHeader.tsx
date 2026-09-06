import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  number?: string;
  align?: 'left' | 'right';
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, number = '', align = 'left', dark = false }) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const targetNum = parseInt(number, 10);

  useEffect(() => {
    const el = numberRef.current;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Fallback instantly for mobile to save performance
    if (isMobile || prefersReducedMotion) {
      if (el && !isNaN(targetNum)) {
        el.textContent = String(targetNum).padStart(2, '0');
      }
      if (titleRef.current) titleRef.current.style.opacity = '1';
      if (lineRef.current) lineRef.current.style.opacity = '1';
      if (subtitleRef.current) subtitleRef.current.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      // Counter animation: 00 → target number
      if (el && !isNaN(targetNum)) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetNum,
          duration: 1,
          ease: 'power2.out',
          // Play and reverse to keep the "life feeling"
          scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 20%', toggleActions: 'play none none reverse' },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.val)).padStart(2, '0');
          },
        });
      }

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
  }, [targetNum]);

  // Text color: dark sections always have light text; light sections always have dark text
  const titleColor    = dark ? 'text-canvas-light' : 'text-canvas-dark dark:text-canvas-light';
  const subtitleColor = dark ? 'text-canvas-light/70' : 'text-canvas-dark/60 dark:text-canvas-light/70';
  const numberColor   = dark ? 'text-white/15' : 'text-canvas-dark/10 dark:text-white/15';

  // Number sits on the OPPOSITE side from the text alignment
  const numberPos = align === 'right'
    ? 'left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0'   // text right → number left
    : 'left-1/2 -translate-x-1/2 md:right-0 md:left-auto md:translate-x-0'; // text left → number right

  return (
    <div className={`relative mb-12 md:mb-16 text-center ${align === 'right' ? 'md:text-right' : 'md:text-left'} pt-8`}>
      {number && (
        <span
          ref={numberRef}
          className={`absolute -top-4 text-[clamp(4rem,12vw,8rem)] font-bold select-none z-0 opacity-60 font-display leading-none pointer-events-none ${numberColor} ${numberPos}`}
        >
          00
        </span>
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