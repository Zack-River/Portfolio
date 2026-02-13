import React from 'react';
import { PROJECTS } from '../constants';
import SectionHeader from './SectionHeader';
import { Github, ExternalLink, Activity } from 'lucide-react';
import Reveal from './Reveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-stone-900 bg-noise relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <Reveal>
          <SectionHeader 
            title="Selected Works" 
            subtitle="Engineering & Architecture" 
            number="03" 
          />
        </Reveal>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-stretch`}
            >
              {/* Project Card - Text Side */}
              <div className="flex-1 space-y-6">
                <Reveal>
                  <div className="border-l-2 border-amber-600 pl-6 py-2">
                    <h3 className="text-3xl font-serif font-bold text-stone-100">{project.title}</h3>
                    <p className="text-amber-500 font-mono text-sm mt-1">{project.subtitle}</p>
                  </div>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <p className="text-stone-400 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </Reveal>

                {/* Statistics Box */}
                <Reveal delay={0.3}>
                  <div className="bg-charcoal p-5 border border-stone-800/50">
                    <h4 className="text-xs font-mono text-stone-500 uppercase mb-3 flex items-center gap-2">
                      <Activity size={14} /> Key Metrics
                    </h4>
                    <ul className="space-y-2">
                      {project.stats.map((stat, i) => (
                        <li key={i} className="text-stone-300 text-sm flex items-start gap-2">
                          <span className="text-amber-600 font-bold">/</span>
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-stone-800 text-stone-400 text-xs font-mono rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.5}>
                  <div className="pt-4 flex gap-4">
                    {project.repo && (
                      <a 
                        href={project.repo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors border-b border-transparent hover:border-amber-500 pb-1"
                      >
                        <Github size={18} /> Source Code
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors border-b border-transparent hover:border-amber-500 pb-1"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </Reveal>
              </div>

              {/* Visual Side - Abstract Representation */}
              <div className="flex-1 min-h-[300px] relative group">
                <Reveal width="100%" delay={0.3}>
                  <div className="relative w-full h-full min-h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-black opacity-80 z-10"></div>
                    
                    {/* Visual Content */}
                    {project.image ? (
                      <div className="absolute inset-0">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-20 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent"></div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-void p-6 font-mono text-xs text-stone-600 overflow-hidden leading-tight opacity-30 select-none">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div key={i} className="whitespace-nowrap">
                            {`const ${project.id}_${i} = async (req, res) => { await Service.optimize({ load: '${Math.random().toFixed(2)}ms' }); }`}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Inner Part (Clearer on Hover) */}
                    {project.image && (
                      <div className="absolute inset-4 overflow-hidden z-15 pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-2xl">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] max-w-none object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void/20 via-transparent to-transparent"></div>
                      </div>
                    )}

                    <div className="absolute inset-4 border border-stone-700 z-20 flex items-center justify-center group-hover:border-amber-600/50 transition-colors duration-500 pointer-events-none">
                    </div>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600 z-30"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-600 z-30"></div>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;