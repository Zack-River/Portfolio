import React from "react";
import { EDUCATION, TRAINING, PERSONAL_INFO } from "../constants";
import SectionHeader from "./SectionHeader";
import { GraduationCap, Briefcase } from "lucide-react";
import Reveal from "./Reveal";

const About: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          <div className="flex flex-col justify-between h-full space-y-8">
            <Reveal delay={0.2}>
              <div className="flex flex-col justify-between h-full">
              <div className="mb-8 relative group w-4/5 md:w-3/4 lg:w-2/3 mx-auto md:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric to-canvas-dark/80 rounded-2xl blur opacity-25 transition duration-1000"></div>
                <img
                  src="/Zack.webp"
                  alt={PERSONAL_INFO.name}
                  loading="lazy"
                  width="218"
                  height="219"
                  className="relative w-full aspect-4/3 object-cover rounded-xl shadow-2xl border border-canvas-dark/10 transition-all duration-500"
                />
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
                <div className="border-l border-canvas-dark/10 pl-6 py-2 relative w-fit mx-auto md:mx-0 md:w-full">
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
                <div className="space-y-8">
                  {TRAINING.map((job, idx) => (
                    <div key={idx} className="border-l border-canvas-dark/10 pl-6 py-2 relative group w-fit mx-auto md:mx-0 md:w-full">
                    <span className="absolute left-[-5px] top-2 w-2 h-2 bg-canvas-dark/60 group-hover:bg-electric transition-colors rounded-full"></span>
                    <h4 className="text-xl text-primary">{job.role}</h4>
                    <p className="text-secondary text-sm mb-2">
                      {job.company}
                    </p>
                    <p className="text-xs font-mono text-secondary mb-4">
                      {job.period}
                    </p>
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
      </div>
    </section>
  );
};

export default About;
