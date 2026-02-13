import React from 'react';
import { EDUCATION, TRAINING, PERSONAL_INFO } from '../constants';
import SectionHeader from './SectionHeader';
import { GraduationCap, Briefcase } from 'lucide-react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-void relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute -left-20 top-40 text-[12rem] font-bold text-white/[0.02] font-serif rotate-90 pointer-events-none">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Reveal>
          <SectionHeader 
            title="The Developer" 
            subtitle="Education & Journey" 
            number="01" 
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Reveal delay={0.2}>
              <div className="mb-8 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-stone-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="/Zack.jpg" 
                  alt={PERSONAL_INFO.name}
                  className="relative w-full aspect-[4/3] object-cover rounded-xl shadow-2xl border border-stone-800 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-lg text-stone-300 font-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-amber-600">
                {PERSONAL_INFO.bio}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-stone-400">
                Based in Egypt, I am driven by the complexity of backend systems. My approach combines rigorous logic with creative architectural solutions.
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="pt-8">
                <h3 className="text-2xl font-serif text-stone-100 mb-6 flex items-center gap-3">
                  <GraduationCap className="text-amber-600" /> Education
                </h3>
                <div className="border-l border-stone-800 pl-6 py-2 relative">
                  <span className="absolute -left-[5px] top-2 w-2 h-2 bg-amber-600 rounded-full"></span>
                  <h4 className="text-xl text-stone-200">{EDUCATION.degree}</h4>
                  <p className="text-stone-500 text-sm mb-2">{EDUCATION.institution}</p>
                  <div className="flex justify-between items-center text-xs font-mono text-stone-400">
                    <span>{EDUCATION.period}</span>
                    <span className="px-2 py-1 bg-stone-900 border border-stone-800 rounded text-amber-500">{EDUCATION.grade}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
             <Reveal delay={0.4}>
               <h3 className="text-2xl font-serif text-stone-100 mb-6 flex items-center gap-3">
                  <Briefcase className="text-amber-600" /> Experience & Training
                </h3>
              </Reveal>
              
              <div className="space-y-8">
                {TRAINING.map((job, idx) => (
                  <Reveal key={idx} delay={0.5 + idx * 0.1}>
                    <div className="border-l border-stone-800 pl-6 py-2 relative group">
                      <span className="absolute -left-[5px] top-2 w-2 h-2 bg-stone-600 group-hover:bg-amber-600 transition-colors rounded-full"></span>
                      <h4 className="text-xl text-stone-200">{job.role}</h4>
                      <p className="text-stone-500 text-sm mb-2">{job.company}</p>
                      <p className="text-xs font-mono text-stone-400 mb-4">{job.period}</p>
                      <ul className="space-y-2">
                        {job.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-stone-400 text-sm pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-stone-600">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;