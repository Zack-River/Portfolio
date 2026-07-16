import React from 'react';
import { PROJECTS } from '../constants';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-canvas-light relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <Reveal>
          <SectionHeader 
            title="Selected Works" 
            subtitle="Engineering & Architecture" 
            number="03" 
          />
        </Reveal>

        <Reveal delay={0.2} width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
            {["streamflow", "smartq", "omnipos", "karbala"]
              .map(id => PROJECTS.find(p => p.id === id))
              .filter(Boolean)
              .map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="relative group block">
                <div className="w-full bg-white rounded-xl overflow-hidden ring-1 ring-canvas-dark/10 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Browser Header */}
                  <div className="h-10 bg-canvas-dark/5 border-b border-canvas-dark/10 flex items-center px-4 relative z-30 transition-colors group-hover:bg-canvas-dark/10">
                    <div className="flex gap-2 z-10">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    {/* Window Title (Centered) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="font-mono text-xs text-canvas-dark/65 tracking-wider group-hover:text-canvas-dark/80 transition-colors">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {/* Window Body - Image */}
                  <div className="relative w-full aspect-video md:aspect-4/3 lg:aspect-4/3 overflow-hidden bg-canvas-dark/5">
                    
                    {/* Base Layer: Image */}
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 will-change-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 p-8 font-mono text-xs text-canvas-dark/30 overflow-hidden leading-tight select-none">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <div key={i} className="whitespace-nowrap">
                            {`const ${project.id}_${i} = async (req, res) => { await Service.optimize({ load: '${Math.random().toFixed(2)}ms' }); }`}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dark Information Overlay (Hover) */}
                    <div className="absolute inset-0 bg-canvas-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center">
                       <span className="text-white font-display text-2xl font-bold mb-2">{project.title}</span>
                       <span className="flex items-center gap-2 text-electric font-medium bg-electric/10 px-4 py-2 rounded-full">
                         View Case Study <ArrowRight size={16} />
                       </span>
                    </div>

                  </div>
                </div>
                {/* Mobile: title + CTA button */}
                <div className="md:hidden mt-4 text-center">
                  <h3 className="text-xl font-display font-bold text-canvas-dark">{project.title}</h3>
                  <p className="text-electric font-mono text-xs mb-3">{project.subtitle}</p>
                  <span className="inline-flex items-center gap-2 text-electric font-medium bg-electric/10 px-5 py-2 rounded-full text-sm">
                    View Case Study <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* View All Projects CTA */}
        <div className="mt-16 flex justify-center">
          <Reveal width="fit-content">
            <Link 
              to="/projects"
              className="btn-primary group"
            >
              <span>View All Projects</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-electric transition-colors">
                <ArrowRight size={14} />
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;