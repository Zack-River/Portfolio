import React, { useRef, useEffect } from 'react';
import { PROJECTS , SITE_CONTENT } from "../constants";
import SectionHeader from './SectionHeader';
import GSAPReveal from './GSAPReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = grid.querySelectorAll('.project-card');

      // Stagger entrance — use timeline so stagger reversal is reliable
      const cardArr = Array.from(cards);
      gsap.set(cardArr, { opacity: 0, y: 80 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      });
      tl.to(cardArr, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 bg-canvas-light dark:bg-canvas-dark transition-colors duration-500 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <GSAPReveal>
          <SectionHeader
            title="Selected Works"
            subtitle="Engineering & Architecture"
            number="03"
          />
        </GSAPReveal>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          {["streamflow", "smartq", "omnipos", "karbala"]
            .map(id => PROJECTS.find(p => p.id === id))
            .filter(Boolean)
            .map((project) => (
              <Link to={`/project/${project!.id}`} key={project!.id} className="project-card relative group block transition-all duration-300 hover:-translate-y-1">
                <div className="w-full bg-white dark:bg-[#252925] rounded-xl overflow-hidden ring-1 ring-canvas-dark/5 dark:ring-white/10 shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <div className="h-10 bg-canvas-dark/5 dark:bg-white/5 border-b border-canvas-dark/10 dark:border-white/10 flex items-center px-4 relative z-30 transition-colors group-hover:bg-canvas-dark/10 dark:group-hover:bg-white/30">
                    <div className="flex gap-2 z-10">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="font-mono text-xs text-canvas-dark/65 dark:text-white/50 tracking-wider group-hover:text-canvas-dark/80 dark:group-hover:text-white/80 transition-colors">
                        {project!.title}
                      </span>
                    </div>
                  </div>

                  {/* Window Body */}
                  <div className="relative w-full aspect-video overflow-hidden bg-canvas-dark/5 dark:bg-white/5">
                    {project!.image ? (
                      <img
                        src={project!.image}
                        alt={project!.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 will-change-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 p-8 font-mono text-xs text-canvas-dark/30 overflow-hidden leading-tight select-none">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <div key={i} className="whitespace-nowrap">
                            {`const ${project!.id}_${i} = async () => { await Service.optimize(); }`}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Hover overlay (just darken image) */}
                    <div className="absolute inset-0 bg-canvas-dark/20 dark:bg-canvas-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-5 mb-2 text-center flex flex-col items-center px-4">
                  <h3 className="text-xl font-display font-bold text-canvas-dark dark:text-canvas-light">{project!.title}</h3>
                  <p className="text-electric font-mono text-xs mb-4">{project!.subtitle}</p>
                  <span className="inline-flex items-center gap-2 text-electric font-medium bg-electric/10 group-hover:bg-electric group-hover:text-white transition-colors px-5 py-2 rounded-full text-sm">
                    View Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 flex justify-center">
          <GSAPReveal>
            <Link to="/projects" className="btn-primary group">
              <span>{SITE_CONTENT.projects.viewAll}</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-electric transition-colors">
                <ArrowRight size={14} />
              </div>
            </Link>
          </GSAPReveal>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);