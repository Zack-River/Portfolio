import React, { useRef, useEffect, useState } from 'react';
import { SKILL_CATEGORIES , SITE_CONTENT } from "../constants";
import SectionHeader from './SectionHeader';
import GSAPReveal from './GSAPReveal';
import { Server, Database, ShieldCheck, Layers, Globe, Cloud, Zap, Link, FileText, Briefcase } from 'lucide-react';
import StarsBackground from './StarsBackground';
import FloatingPolymers from './FloatingPolymers';

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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0, rootMargin: '-50px 0px -50px 0px' }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 bg-canvas-dark dark:bg-canvas-dark text-canvas-light relative overflow-hidden">
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

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex items-center justify-end text-electric/70 text-[10px] font-mono uppercase tracking-widest mt-2 mb-4 animate-pulse">
          <span>Swipe to explore &rarr;</span>
        </div>

        <div 
          ref={gridRef} 
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-12 pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="skill-card snap-center shrink-0 w-[80%] max-w-[320px] md:w-auto md:max-w-none bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden h-full flex flex-col group hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] transition-all ease-out shadow-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.95)',
                transition: `all 0.65s cubic-bezier(0.215, 0.61, 0.355, 1) ${idx * 0.08}s`,
                willChange: 'transform, opacity'
              }}
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