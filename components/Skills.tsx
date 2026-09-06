import React, { useRef, useEffect } from 'react';
import { SKILL_CATEGORIES , SITE_CONTENT } from "../constants";
import SectionHeader from './SectionHeader';
import GSAPReveal from './GSAPReveal';
import { Server, Database, ShieldCheck, Layers, Globe, Cloud, Zap, Link, FileText, Briefcase } from 'lucide-react';
import StarsBackground from './StarsBackground';
import FloatingPolymers from './FloatingPolymers';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Backend Engineering": <Server size={240} />,
  "Frontend Development": <Globe size={240} />,
  "Databases": <Database size={240} />,
  "DevOps & Infrastructure": <Cloud size={240} />,
  "Architecture & System Design": <Layers size={240} />,
  "Real-Time Systems": <Zap size={240} />,
  "Integrations": <Link size={240} />,
  "Engineering & Documentation": <FileText size={240} />,
  "Project Experience": <Briefcase size={240} />,
};

const Skills: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = Array.from(grid.querySelectorAll('.skill-card'));
      if (!cards.length) return;

      // Set initial state explicitly so they're invisible only briefly
      gsap.set(cards, { opacity: 0, y: 60, scale: 0.95 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          // Fire as soon as the top of the grid hits the BOTTOM of the viewport
          start: 'top bottom',
          // Reverse when grid scrolls completely off the top
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        stagger: { each: 0.08, from: 'start' },
        ease: 'power3.out',
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 bg-canvas-dark dark:bg-canvas-dark text-canvas-light relative overflow-hidden transition-colors duration-500">
      {/* Decorative Backgrounds */}
      <div className="absolute top-1/2 right-0 md:right-1/4 -translate-y-1/2 w-[80%] md:w-[40%] h-[80%] md:h-[60%] bg-electric/25 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <StarsBackground colorClass="bg-electric" count={20} />
      <FloatingPolymers />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <GSAPReveal>
          <SectionHeader
            title={SITE_CONTENT.skills.sectionHeader.title}
            subtitle={SITE_CONTENT.skills.sectionHeader.subtitle}
            number={SITE_CONTENT.skills.sectionHeader.number}
            align="right"
            dark={true}
          />
        </GSAPReveal>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="skill-card bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden h-full flex flex-col group hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] transition-all duration-500 ease-out shadow-xl"
            >
              {/* Ghost Icon */}
              <div className="absolute -bottom-10 -right-10 text-white/3 group-hover:text-electric/5 transition-colors duration-700 pointer-events-none z-0 transform group-hover:scale-110 group-hover:-rotate-6">
                {CATEGORY_ICONS[category.title]}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-display font-medium text-white mb-5 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shadow-[0_0_8px_rgba(61,127,255,0.8)]"></div>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/90 hover:bg-electric/20 hover:text-white hover:border-electric/50 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);