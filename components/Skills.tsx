import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
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
  "Project Experience": <Briefcase size={240} />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-canvas-dark text-canvas-light relative overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grain-overlay"></div>
      
      {/* Cyan Blur BG like the Hero */}
      <div className="absolute top-1/2 left-1/2 md:left-3/4 -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[45%] h-[70%] md:h-[60%] bg-electric/15 rounded-full blur-[120px] pointer-events-none z-0 hidden md:block"></div>

      {/* Stars and Wireframe Polymers */}
      <StarsBackground colorClass="bg-electric" count={60} />
      <FloatingPolymers />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Reveal width="100%">
          <SectionHeader 
            title="Technical Arsenal" 
            subtitle="Tools & Technologies" 
            number="02" 
            align="right"
            dark={true}
          />
        </Reveal>

        {/* Grid Layout to align bottoms perfectly */}
        <Reveal delay={0.2} width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {SKILL_CATEGORIES.map((category, idx) => {
              return (
                <div key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden h-full flex flex-col group hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] transition-all duration-500 ease-out shadow-xl"
                >
                  {/* Ghost Icon */}
                  <div className="absolute -bottom-10 -right-10 text-white/[0.03] group-hover:text-electric/[0.05] transition-colors duration-700 pointer-events-none z-0 transform group-hover:scale-110 group-hover:-rotate-6">
                    {CATEGORY_ICONS[category.title]}
                  </div>
                  
                  {/* Card Content */}
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
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;