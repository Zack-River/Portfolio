import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PROJECTS, CATEGORIES } from "../constants";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

import GSAPReveal from "../components/GSAPReveal";
import Footer from "../components/Footer";
import { lenisScrollTo } from "../hooks/useLenis";

const ProjectImage = ({ project, index }: { project: any; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 bg-canvas-dark/20 animate-pulse" />
      )}
      <img
        src={project.thumbImage || project.image}
        alt={project.title}
        loading={index < 4 ? undefined : "lazy"}
        fetchPriority={index < 4 ? "high" : undefined}
        decoding="async"
        className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 ${isLoaded ? "opacity-90 group-hover:opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};

const getProjectCategories = (id: string): string[] => {
  const cats: string[] = ["All"];

  const landingPages = [
    "luxe-dental",
    "khaled-nasser",
    "ahmed-hakim",
    "hotel-pro",
    "dr-sara-ragab",
  ];
  const webApps = [
    "smartq",
    "ding",
    "mostafa-nawareg",
    "streamflow",
    "karbala",
  ];
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
    lenisScrollTo(0, { immediate: true });

    let isMounted = true;
    let ctx: any;

    import("gsap").then(({ default: gsap }) => {
      if (!isMounted) return;
      ctx = gsap.context(() => {
        gsap.from(".project-letter", {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.1,
        });
        gsap.from(".project-tagline", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
        });
      });
    });

    return () => {
      isMounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  const filteredProjects = PROJECTS.filter((project) => {
    const projectCategories = getProjectCategories(project.id);
    return projectCategories.includes(activeFilter);
  });

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-canvas-light dark:bg-canvas-dark min-h-screen text-canvas-dark dark:text-canvas-light relative transition-colors duration-500">
        <Helmet>
        <title>
          Projects | Abdallah Wageeh (Zack River) - Software Engineer
        </title>
        <meta
          name="description"
          content="Explore my portfolio of web applications, SaaS platforms, backend APIs, and custom software projects. Built with React, Next.js, Node.js, and more."
        />
        <link
          rel="preload"
          as="image"
          href={PROJECTS[0].image}
          fetchPriority="high"
        />
        <link rel="canonical" href="https://www.zackriver.com/projects" />
      </Helmet>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24 md:pb-32 min-h-screen">
        {/* 1. Masthead Header */}
        <section
          className="flex flex-col justify-center w-full pt-32 md:pt-40 pb-8 md:pb-12 relative z-10 overflow-hidden"
          aria-label="Projects Header"
        >
          <h1 className="sr-only">Portfolio</h1>
          <div
            aria-hidden="true"
            className="flex items-center justify-center font-black uppercase leading-none tracking-tighter w-full overflow-visible py-4"
            style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
          >
            <span className="project-letter inline-block">P</span>
            <span className="project-letter inline-block">R</span>
            <span className="project-letter inline-block relative">
              <span className="relative z-10 text-electric drop-shadow-[0_0_30px_rgba(180,255,0,0.8)]">
                O
              </span>
            </span>
            <span className="project-letter inline-block">J</span>
            <span className="project-letter inline-block">E</span>
            <span className="project-letter inline-block">C</span>
            <span className="project-letter inline-block">T</span>
            <span className="project-letter inline-block">S</span>
          </div>
          <p className="project-tagline text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-canvas-dark/60 dark:text-canvas-light/60 mt-2 text-center">
            A comprehensive archive of systems & interfaces.
          </p>
          <div
            className="w-full h-px bg-canvas-dark/10 dark:bg-canvas-light/10 mt-6 md:mt-10"
            role="separator"
          ></div>
        </section>

        {/* Filter Bar */}
        <GSAPReveal delay={0.3}>
          {/* Mobile: horizontally-scrollable snap strip — no wrapping, no mess */}
          <div className="md:hidden flex gap-2 overflow-x-auto pb-2 mb-10 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`snap-start shrink-0 px-4 py-2 rounded-full font-mono text-xs font-medium transition-all duration-200 border whitespace-nowrap ${
                  activeFilter === category
                    ? "bg-white/10 border-electric text-electric shadow-[0_0_15px_rgba(180,255,0,0.2)]"
                    : "bg-white dark:bg-white/5 text-canvas-dark/60 dark:text-canvas-light/60 border-canvas-dark/10 dark:border-white/10 hover:border-canvas-dark/20 dark:hover:border-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Desktop: centered pill group inside a frosted track */}
          <div className="hidden md:flex items-center justify-center mb-12">
            <div className="inline-flex items-center gap-1.5 p-1.5 bg-canvas-dark/5 dark:bg-white/5 rounded-full border border-canvas-dark/5 dark:border-white/10 backdrop-blur-sm">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-5 py-2 rounded-full font-mono text-sm font-medium transition-all duration-250 whitespace-nowrap ${
                    activeFilter === category
                      ? "bg-white dark:bg-[#252925] text-canvas-dark dark:text-canvas-light shadow-sm ring-1 ring-canvas-dark/10 dark:ring-white/10"
                      : "text-canvas-dark/50 dark:text-canvas-light/50 hover:text-canvas-dark dark:hover:text-canvas-light hover:bg-white/50 dark:hover:bg-white/30"
                  }`}
                >
                  {activeFilter === category && (
                    <span className="absolute inset-0 rounded-full bg-electric opacity-10 pointer-events-none" />
                  )}
                  <span
                    className={
                      activeFilter === category
                        ? "text-electric font-semibold"
                        : ""
                    }
                  >
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </GSAPReveal>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {filteredProjects.map((project, index) => {
            // Dynamic Bento layout matched exactly to the CMS design
            let bentoClasses = "col-span-1 row-span-1";

            if (activeFilter === "All") {
              switch (project.id) {
                case "beeplayer-qa":
                case "ding":
                  // Large 2x2 blocks on both tablet and desktop
                  bentoClasses =
                    "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2";
                  break;
                case "streamflow":
                case "omnipos":
                  // Wide blocks
                  bentoClasses =
                    "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1";
                  break;
                case "karbala":
                case "smartq":
                case "dr-sara-ragab":
                case "mostafa-nawareg":
                  // Square blocks. On tablet (2-col), they neatly sit side-by-side as 1x1
                  bentoClasses =
                    "col-span-1 row-span-1 md:col-span-1 lg:col-span-1";
                  break;
                case "luxe-dental":
                  // 3:1 layout (3 cols)
                  bentoClasses = "md:col-span-2 lg:col-span-3 lg:row-span-1";
                  break;
                case "hotel-pro":
                  // 3:1 layout (1 col)
                  bentoClasses =
                    "col-span-1 row-span-1 md:col-span-2 lg:col-span-1";
                  break;
                case "khaled-nasser":
                  // 1:3 layout (1 col)
                  bentoClasses =
                    "col-span-1 row-span-1 md:col-span-2 lg:col-span-1";
                  break;
                case "ahmed-hakim":
                  // 1:3 layout (3 cols)
                  bentoClasses = "md:col-span-2 lg:col-span-3 lg:row-span-1";
                  break;
              }
            }

            return (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className={`${bentoClasses} group relative rounded-xl overflow-hidden bg-white dark:bg-[#252925] shadow-md ring-1 ring-canvas-dark/10 dark:ring-white/10 hover:shadow-xl hover:ring-electric/30 dark:hover:ring-electric/50 hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="absolute inset-0 z-20"
                  aria-label={`View ${project.title}`}
                ></Link>

                {/* Background Image */}
                <div className="absolute inset-0 bg-canvas-dark/5 overflow-hidden">
                  {project.thumbImage || project.image ? (
                    <ProjectImage project={project} index={index} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-canvas-dark/10 text-canvas-dark/30">
                      No Image
                    </div>
                  )}
                  {/* Overlay Gradient and Darkening Layer */}
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50"></div>
                  <div className="absolute inset-0 bg-linear-to-t from-canvas-dark/90 via-canvas-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 text-white">
                  <div className="transition-transform duration-500 ease-out">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 leading-tight">
                      <Link
                        to={`/projects/${project.id}`}
                        className="hover:underline"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    <div className="mt-2">
                      <p className="text-white/70 font-mono text-xs md:text-sm line-clamp-2">
                        {project.subtitle}
                      </p>

                      <div className="flex items-center gap-4 mt-4 text-electric font-mono text-xs uppercase tracking-widest font-semibold">
                        <span className="flex items-center gap-1 group/btn">
                          View Case Study{" "}
                          <ArrowRight
                            size={14}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Right Actions */}
                <div className="absolute top-4 right-4 z-30 flex gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-canvas-dark/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-electric transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </m.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
    </LazyMotion>
  );
};

export default React.memo(ProjectsPage);
