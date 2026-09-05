import React, { useState, useRef, useEffect } from "react";
import { EDUCATION, TRAINING, PERSONAL_INFO , SITE_CONTENT } from "../constants";
import SectionHeader from "./SectionHeader";
import { GraduationCap, Briefcase, ChevronLeft, ChevronRight, ExternalLink, Monitor, PenTool, User } from "lucide-react";
import GSAPReveal from "./GSAPReveal";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({ left: direction === "left" ? -clientWidth : clientWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Photo parallax — moves at 60% scroll speed
      if (photoRef.current) {
        gsap.to(photoRef.current, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: photoRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      }

      // Timeline: line draws down, then items slide in
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll(".timeline-item");

        // Draw the border-left line from top to bottom
        if (lineRef.current) {
          gsap.from(lineRef.current, {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          });
        }

        gsap.from(items, {
          opacity: 0,
          x: -30,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 78%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-canvas-light dark:bg-canvas-dark transition-colors duration-500 relative overflow-hidden">


      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <GSAPReveal>
          <SectionHeader title={SITE_CONTENT.about.sectionHeader.title} subtitle={SITE_CONTENT.about.sectionHeader.subtitle} number={SITE_CONTENT.about.sectionHeader.number} />
        </GSAPReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="flex flex-col space-y-8 md:sticky md:top-32 md:z-10 relative">
            {/* Background Typography (Centered relative to the left column, but pinned to viewport left) */}
            <div className="hidden md:block absolute left-[calc(min(50vw,40rem)-50vw-4rem)] md:left-[calc(min(50vw,40rem)-50vw-8rem)] lg:left-[calc(min(50vw,40rem)-50vw-11rem)] top-1/2 -translate-y-1/2 text-[clamp(5rem,15vw,12rem)] font-bold text-canvas-dark/8 dark:text-white/5 font-display rotate-90 pointer-events-none origin-center select-none z-0">
              ABOUT
            </div>
            
            <div className="relative z-10">
              <GSAPReveal delay={0.1}>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C7F000] mb-8 flex items-center justify-center md:justify-start gap-3">
                  <User size={16} /> ABOUT
                </h3>
                <p className="text-sm md:text-base font-medium text-[#F2F1EB]/70 leading-relaxed text-justify md:text-left w-full mt-8 md:mt-0">
                  {PERSONAL_INFO.bio}
                </p>
              </div>
            </GSAPReveal>

            {/* Education Moved to Left Column */}
            <GSAPReveal delay={0.2}>
              <div className="pt-8 md:pt-0">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C7F000] mb-8 flex items-center justify-center md:justify-start gap-3">
                  <GraduationCap size={16} /> {SITE_CONTENT.about.educationTitle}
                </h3>

                {/* Mobile */}
                <div className="md:hidden py-2 flex flex-col items-center text-center w-full">
                  <h4 className="text-base text-[#F2F1EB] font-bold tracking-wide uppercase mb-1">{EDUCATION.degree}</h4>
                  <p className="text-[#F2F1EB]/60 text-xs mb-4 tracking-widest uppercase">{EDUCATION.institution}</p>
                  <div className="flex justify-center space-x-4 items-center text-[9px] font-mono text-[#F2F1EB]/50">
                    <span className="bg-white/5 px-3 py-1 rounded-sm border border-white/10 tracking-widest uppercase">{EDUCATION.period}</span>
                    <span className="px-3 py-1 bg-[#C7F000]/10 text-[#C7F000] border border-[#C7F000]/20 rounded-sm tracking-widest uppercase">
                      {EDUCATION.grade}
                    </span>
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:block border-l border-white/10 pl-6 py-2 relative w-full">
                  <span className="absolute -left-1 top-2 w-2 h-2 bg-[#C7F000] rounded-sm"></span>
                  <h4 className="text-lg text-[#F2F1EB] font-bold tracking-wide uppercase mb-1">{EDUCATION.degree}</h4>
                  <p className="text-[#F2F1EB]/60 text-xs mb-4 tracking-widest uppercase">{EDUCATION.institution}</p>
                  <div className="flex justify-start space-x-4 items-center text-[10px] font-mono text-[#F2F1EB]/50">
                    <span className="bg-white/5 px-3 py-1 rounded-sm border border-white/10 tracking-widest uppercase">{EDUCATION.period}</span>
                    <span className="px-3 py-1 bg-[#C7F000]/10 text-[#C7F000] border border-[#C7F000]/20 rounded-sm tracking-widest uppercase">
                      {EDUCATION.grade}
                    </span>
                  </div>
                </div>
              </div>
            </GSAPReveal>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full space-y-8">


            <div className="space-y-8">
              <GSAPReveal delay={0.3}>
                <div className="pt-8">
                  <h3 className="text-2xl font-display text-canvas-dark dark:text-canvas-light mb-6 flex items-center justify-center md:justify-start gap-3">
                    <Briefcase className="text-electric" /> {SITE_CONTENT.about.experienceTitle}
                  </h3>
                </div>
              </GSAPReveal>

              <div className="space-y-8">
                {/* Mobile swiper */}
                <div className="md:hidden relative w-full mb-4">
                  <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-2"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {TRAINING.slice(0, -1).map((job, idx) => {
                      const isExpanded = expandedIndex === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                          className="snap-center shrink-0 w-full py-8 px-8 flex flex-col items-center text-center rounded-3xl border border-canvas-dark/5 dark:border-white/5 bg-white dark:bg-[#252925] shadow-sm cursor-pointer transition-all duration-500 ease-out"
                        >
                          <h4 className="text-xl text-primary dark:text-canvas-light font-semibold mb-1">{job.role}</h4>
                          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                            <p className="text-xs font-mono text-electric bg-electric/10 px-3 py-1 rounded-full">{job.period}</p>
                            {job.certificate && (
                              <a 
                                href={job.certificate} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-electric hover:text-white bg-electric/10 hover:bg-electric px-3 py-1 rounded-full transition-all border border-electric/20"
                              >
                                <ExternalLink size={12} /> Certificate
                              </a>
                            )}
                          </div>
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out w-full flex flex-col items-center ${isExpanded ? "max-h-125 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                            <div className="w-12 h-px bg-canvas-dark/10 dark:bg-white/10 mb-4"></div>
                            <ul className="space-y-3">
                              {job.details.map((detail, dIdx) => (
                                <li key={dIdx} className="text-secondary dark:text-canvas-light/70 text-sm leading-relaxed">{detail}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-4 flex flex-col items-center justify-center text-canvas-dark/30 dark:text-white/30 hover:text-electric transition-colors">
                            <span className="text-xs uppercase tracking-widest mb-1">{isExpanded ? "Show Less" : "View Details"}</span>
                            <span className={`inline-block text-xs transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}>▼</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button onClick={() => scroll("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-canvas-dark/80 backdrop-blur-sm rounded-full shadow-md text-electric border border-canvas-dark/10 dark:border-white/10 hover:bg-white dark:hover:bg-canvas-dark transition-colors" aria-label="Previous experience">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={() => scroll("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-canvas-dark/80 backdrop-blur-sm rounded-full shadow-md text-electric border border-canvas-dark/10 dark:border-white/10 hover:bg-white dark:hover:bg-canvas-dark transition-colors" aria-label="Next experience">
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Desktop timeline with GSAP line draw + stagger */}
                <div ref={timelineRef} className="hidden md:block space-y-8 w-full relative">
                  {TRAINING.slice(0, -1).map((job, idx) => (
                    <div key={idx} className="timeline-item border-l border-canvas-dark/10 dark:border-white/10 pl-6 py-2 relative group w-full">
                      <span className="absolute -left-1.25 top-2 w-2 h-2 bg-canvas-dark/60 dark:bg-white/60 group-hover:bg-electric transition-colors rounded-full"></span>
                      <div className="pl-4">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-base font-display font-bold text-canvas-dark dark:text-canvas-light">{job.role}</h4>
                        </div>
                        <p className="text-secondary dark:text-canvas-light/60 text-sm mb-2">{job.company}</p>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <p className="text-xs font-mono text-secondary dark:text-canvas-light/50">{job.period}</p>
                          {job.certificate && (
                            <a 
                              href={job.certificate} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-electric hover:text-white bg-electric/10 hover:bg-electric px-3 py-1 rounded-full transition-all border border-electric/20"
                            >
                              <ExternalLink size={12} /> Certificate
                            </a>
                          )}
                        </div>
                        <ul className="space-y-2 mb-4">
                          {job.details.map((detail, dIdx) => (
                            <li key={dIdx} className="text-secondary dark:text-canvas-light/70 text-sm pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-muted">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Role (Centered at Bottom) */}
        <div className="mt-16 md:mt-24 relative w-full flex flex-col items-center text-center border-t border-white/5 pt-16">
          <GSAPReveal delay={0.2} className="w-full flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-[#C7F000] text-[#0D0F0E] px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0F0E] animate-pulse"></span>
              Current Stage
            </div>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#F2F1EB] mb-2 leading-none">
              {TRAINING[TRAINING.length - 1].role}
            </h3>
            <p className="text-base md:text-xl text-[#C7F000] font-bold tracking-[0.2em] uppercase mb-6">
              @ {TRAINING[TRAINING.length - 1].company}
            </p>
            <div className="w-24 h-1 bg-[#C7F000]/30 rounded-sm mb-10 mx-auto"></div>
          </GSAPReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
