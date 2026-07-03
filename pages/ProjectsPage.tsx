import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import Reveal from '../components/Reveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CATEGORIES = ["All", "Landing Pages", "Web Apps", "UI/UX Designs", "Backend", "Desktop Apps", "QA"];

const getProjectCategories = (id: string): string[] => {
  const cats: string[] = ["All"];
  
  const landingPages = ["luxe-dental", "khaled-nasser", "ahmed-hakim", "hotel-pro", "tutor-landing-page", "dr-sara-ragab"];
  const webApps = ["smartq", "ding", "mostafa-nawareg", "streamflow", "karbala"];
  const backend = ["ding", "smartq", "karbala", "mostafa-nawareg"];
  const desktopApps = ["omnipos"];
  const qa = ["beeplayer-qa"];
  
  if (landingPages.includes(id)) cats.push("Landing Pages");
  if (webApps.includes(id)) cats.push("Web Apps");
  if (backend.includes(id)) cats.push("Backend");
  if (desktopApps.includes(id)) cats.push("Desktop Apps");
  if (qa.includes(id)) cats.push("QA");
  
  if (id !== "omnipos" && id !== "beeplayer-qa") {
    cats.push("UI/UX Designs");
  }
  
  return cats;
};

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = PROJECTS.filter(project => {
    const projectCategories = getProjectCategories(project.id);
    return projectCategories.includes(activeFilter);
  });

  return (
    <div className="bg-canvas-light min-h-screen text-canvas-dark relative">
      <main className="pt-32 pb-24 md:pt-40 md:pb-32 section-container mx-auto min-h-screen">
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-canvas-dark/60 hover:text-electric transition-colors mb-8 font-mono text-sm">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
              All <span className="text-electric">Projects</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-canvas-dark/70 font-mono">
              A comprehensive archive of systems, interfaces, and platforms I've engineered over the years. Explore the architecture behind each experience.
            </p>
          </Reveal>
        </div>

        {/* Filter Buttons */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-300 border ${
                  activeFilter === category 
                    ? 'bg-electric text-white border-electric shadow-lg shadow-electric/20' 
                    : 'bg-white text-canvas-dark/70 border-canvas-dark/10 hover:border-electric/50 hover:text-electric hover:bg-electric/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {filteredProjects.map((project, index) => {
            // Logic to create a varied Bento layout based on index ONLY when 'All' is selected
            let bentoClasses = "col-span-1 row-span-1";
            
            if (activeFilter === "All") {
              if (index === 0) {
                bentoClasses = "md:col-span-2 lg:col-span-2 lg:row-span-2"; 
              } else if (index === 3) {
                bentoClasses = "md:col-span-2 lg:col-span-1";
              } else if (index === 7) {
                bentoClasses = "lg:col-span-2 lg:row-span-2";
              } else if (index === 12) {
                bentoClasses = "lg:col-span-2";
              }
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${bentoClasses} group relative rounded-xl overflow-hidden bg-white shadow-md ring-1 ring-canvas-dark/10 hover:shadow-xl hover:ring-electric/30 hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                <Link to={`/project/${project.id}`} className="absolute inset-0 z-20" aria-label={`View ${project.title}`}></Link>
                
                {/* Background Image */}
                <div className="absolute inset-0 bg-canvas-dark/5 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-canvas-dark/10 text-canvas-dark/30">
                      No Image
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-canvas-dark/90 via-canvas-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 text-white">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    
                    <div className="overflow-hidden">
                      <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-out mt-2">
                        <p className="text-white/70 font-mono text-xs md:text-sm line-clamp-2">
                          {project.subtitle}
                        </p>
                        
                        <div className="flex items-center gap-4 mt-4 text-electric font-mono text-xs uppercase tracking-widest font-semibold">
                          <span className="flex items-center gap-1 group/btn">
                            View Case Study <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Right Actions */}
                <div className="absolute top-4 right-4 z-30 flex gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-canvas-dark/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-electric transition-colors" title="Live Demo">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
