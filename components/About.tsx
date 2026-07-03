import React, { useState, useRef } from "react";
import { EDUCATION, TRAINING, PERSONAL_INFO } from "../constants";
import SectionHeader from "./SectionHeader";
import { GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const About: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-canvas-light relative overflow-hidden"
    >
      {/* Background Typography */}
      <div className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 text-[clamp(5rem,15vw,12rem)] font-bold text-canvas-dark/3 opacity-30 font-display rotate-90 pointer-events-none origin-center">
        ABOUT
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Reveal>
          <SectionHeader
            title="The Developer"
            subtitle="Education & Journey"
            number="01"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="flex flex-col space-y-8 md:sticky md:top-32 md:z-10">
            <Reveal delay={0.2}>
              <div className="flex flex-col">
              <div className="mb-8 relative group w-full mx-auto md:mx-0">
                <div className="absolute -inset-1 bg-linear-to-r from-electric to-canvas-dark/80 rounded-2xl blur opacity-25 transition duration-1000"></div>
                <div className="relative w-full aspect-4/3 rounded-xl shadow-2xl border border-canvas-dark/10 overflow-hidden">
                  <img
                    src="/Zack.webp"
                    alt={PERSONAL_INFO.name}
                    loading="lazy"
                    width="218"
                    height="219"
                    className="w-full h-full object-cover object-top scale-[1.3] translate-y-6 transition-transform duration-700 ease-out md:group-hover:scale-[1.35]"
                  />
                </div>
              </div>
              <p className="text-lg text-secondary font-light leading-relaxed text-center md:text-left w-4/5 mx-auto md:w-full md:mx-0 first-letter:text-5xl first-letter:font-display first-letter:mr-2 first-letter:float-left first-letter:text-electric">
                {PERSONAL_INFO.bio}
              </p>
              </div>
            </Reveal>
            {/* <Reveal delay={0.3}>
              <p className="text-canvas-dark/80 text-center md:text-left">
                Based in Egypt, I am driven by the complexity of backend systems. My approach combines rigorous logic with creative architectural solutions.
              </p>
            </Reveal> */}
          </div>

          <div className="flex flex-col justify-between h-full space-y-8">
            <Reveal delay={0.4}>
              <div className="pt-8">
                <h3 className="text-2xl font-display text-canvas-dark mb-6 flex items-center justify-center md:justify-start gap-3">
                  <GraduationCap className="text-electric" /> Education
                </h3>
                
                {/* Mobile View */}
                <div className="md:hidden py-2 flex flex-col items-center text-center w-11/12 mx-auto">
                  <h4 className="text-xl text-primary">
                    {EDUCATION.degree}
                  </h4>
                  <p className="text-secondary text-sm mb-2">
                    {EDUCATION.institution}
                  </p>
                  <div className="flex justify-center space-x-8 items-center text-xs font-mono text-primary mt-2">
                    <span>{EDUCATION.period}</span>
                    <span className="px-2 py-1 bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/10 rounded text-electric">
                      {EDUCATION.grade}
                    </span>
                  </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block border-l border-canvas-dark/10 pl-6 py-2 relative w-full">
                  <span className="absolute left-[-5px] top-2 w-2 h-2 bg-electric rounded-full"></span>
                  <h4 className="text-xl text-primary">
                    {EDUCATION.degree}
                  </h4>
                  <p className="text-secondary text-sm mb-2">
                    {EDUCATION.institution}
                  </p>
                  <div className="flex justify-start space-x-8 items-center text-xs font-mono text-primary">
                    <span>{EDUCATION.period}</span>
                    <span className="px-2 py-1 bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/10 rounded text-electric">
                      {EDUCATION.grade}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.4}>
                <div className="pt-8">
                  <h3 className="text-2xl font-display text-canvas-dark mb-6 flex items-center justify-center md:justify-start gap-3">
                    <Briefcase className="text-electric" /> Experience & Training
                  </h3>
                </div>
              </Reveal>

              <div className="space-y-8">
              <Reveal delay={0.5} width="100%">
                
                {/* Mobile View */}
                <div className="md:hidden relative w-full mb-4">
                  <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-2" 
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {TRAINING.slice(0, -1).map((job, idx) => {
                      const isExpanded = expandedIndex === idx;
                      return (
                        <div 
                          key={idx} 
                          onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                          className="snap-center shrink-0 w-full py-8 px-8 flex flex-col items-center text-center rounded-3xl border border-canvas-dark/5 shadow-sm cursor-pointer transition-all duration-500 ease-out"
                          style={{ background: 'radial-gradient(circle at center, #ffffff 0%, #f3f4f6 120%)' }}
                        >
                          <h4 className="text-xl text-primary font-semibold mb-1">{job.role}</h4>
                          <p className="text-secondary text-sm mb-3">
                            {job.company}
                          </p>
                          <p className="text-xs font-mono text-electric bg-electric/10 px-3 py-1 rounded-full mb-2">
                            {job.period}
                          </p>
                          
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out w-full flex flex-col items-center ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                            <div className="w-12 h-px bg-canvas-dark/10 mb-4"></div>
                            <ul className="space-y-3">
                              {job.details.map((detail, dIdx) => (
                                <li
                                  key={dIdx}
                                  className="text-secondary text-sm leading-relaxed"
                                >
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-4 flex flex-col items-center justify-center text-canvas-dark/30 hover:text-electric transition-colors">
                             <span className="text-xs uppercase tracking-widest mb-1">{isExpanded ? 'Show Less' : 'View Details'}</span>
                             <span className={`inline-block text-xs transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Left / Right Navigation Buttons */}
                  <button 
                    onClick={() => scroll('left')} 
                    className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md text-electric border border-canvas-dark/10 hover:bg-white transition-colors"
                    aria-label="Previous experience"
                  >
                     <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => scroll('right')} 
                    className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md text-electric border border-canvas-dark/10 hover:bg-white transition-colors"
                    aria-label="Next experience"
                  >
                     <ChevronRight size={20} />
                  </button>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block space-y-8 w-full">
                  {TRAINING.slice(0, -1).map((job, idx) => (
                    <div key={idx} className="border-l border-canvas-dark/10 pl-6 py-2 relative group w-full">
                      <span className="absolute left-[-5px] top-2 w-2 h-2 bg-canvas-dark/60 group-hover:bg-electric transition-colors rounded-full"></span>
                      <h4 className="text-xl text-primary">{job.role}</h4>
                      <p className="text-secondary text-sm mb-2">{job.company}</p>
                      <p className="text-xs font-mono text-secondary mb-4">{job.period}</p>
                      <ul className="space-y-2">
                        {job.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="text-secondary text-sm pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-muted"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </Reveal>
            </div>
          </div>
        </div>
        </div>

        {/* Current Role Section - Inline with Container */}
        <div className="mt-8 relative w-full flex flex-col items-center text-center">
          <Reveal delay={0.4} className="w-full">
            <div className="inline-flex items-center gap-2 bg-electric text-white px-6 py-1 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full shadow-lg mb-4 mx-auto">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Current Stage
            </div>

            <h3 className="text-3xl md:text-4xl font-display text-primary mb-2">{TRAINING[TRAINING.length - 1].role}</h3>
            <p className="text-xl md:text-2xl text-electric font-medium mb-6">@ {TRAINING[TRAINING.length - 1].company}</p>
            <div className="w-24 h-[3px] bg-electric/30 rounded-full mb-10 mx-auto"></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
