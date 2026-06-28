import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import SectionHeader from './SectionHeader';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-canvas-light text-canvas-dark relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <Reveal width="100%">
          <SectionHeader 
            title="Technical Arsenal" 
            subtitle="Tools & Technologies" 
            number="02" 
            align="right"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div 
                className="group p-6 border border-canvas-dark/10 bg-canvas-light hover:border-electric/50 transition-colors duration-300 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-canvas-dark/20 rounded-bl-full transition-all group-hover:bg-electric/10"></div>
                
                <h3 className="text-xl font-display text-canvas-dark/80 mb-6 group-hover:text-electric transition-colors">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center space-x-2 text-canvas-dark/80 text-sm font-mono">
                      <CheckCircle2 size={14} className="text-electric/70" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Skills;