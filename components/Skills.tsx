import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import SectionHeader from './SectionHeader';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <Reveal width="100%">
          <SectionHeader 
            title="Technical Arsenal" 
            subtitle="Tools & Technologies" 
            number="02" 
            align="right"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div 
                className="group p-6 border border-stone-800 bg-void hover:border-amber-700/50 transition-colors duration-300 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-stone-800/20 rounded-bl-full transition-all group-hover:bg-amber-900/20"></div>
                
                <h3 className="text-xl font-serif text-stone-200 mb-6 group-hover:text-amber-500 transition-colors">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center space-x-2 text-stone-400 text-sm font-mono">
                      <CheckCircle2 size={14} className="text-amber-600/70" />
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