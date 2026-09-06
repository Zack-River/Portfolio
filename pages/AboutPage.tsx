import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PERSONAL_INFO,
  TRAINING,
  SKILL_CATEGORIES,
  EDUCATION,
} from "../constants";
import { ArrowRight, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Custom hook for animated counter
const useCounter = (end: number, duration: number = 2) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { innerHTML: 0 },
        {
          innerHTML: end,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 90%",
          },
          snap: { innerHTML: 1 },
          onUpdate: function () {
            node.innerHTML = Math.round(
              Number(this.targets()[0].innerHTML),
            ).toString();
          },
        },
      );
    }, node);

    return () => ctx.revert();
  }, [end, duration]);

  return nodeRef;
};

const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const yearsExpRef = useCounter(3);
  const projectsRef = useCounter(12);
  const certsRef = useCounter(5);
  const clientsRef = useCounter(20);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Masthead Animation
      gsap.from(".masthead-letter", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.2,
      });

      // (Horizontal scroll removed per user request)
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-canvas-dark text-canvas-light min-h-screen font-sans overflow-x-hidden selection:bg-electric selection:text-canvas-dark pt-[10vh]"
    >
      <Helmet>
        <title>About | {PERSONAL_INFO.name}</title>
        <meta
          name="description"
          content={PERSONAL_INFO.bio.substring(0, 150) + "..."}
        />
        <link rel="canonical" href={`https://${PERSONAL_INFO.website}/about`} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/zack-photo-new.webp" />
      </Helmet>

      {/* 1. Masthead Hero */}
      <section 
        className="px-[5vw] max-w-screen-2xl mx-auto flex flex-col items-center justify-center pt-8 pb-4 md:py-0 md:min-h-[40vh] relative z-10 overflow-hidden"
        aria-label="About Masthead"
      >
        <h1 className="sr-only">About Abdallah Wageeh (Zack River)</h1>

        <div
          aria-hidden="true"
          className="flex items-center justify-center font-black uppercase text-[18vw] leading-none tracking-tighter w-full overflow-visible py-4"
        >
          <span className="masthead-letter">A</span>
          <span className="masthead-letter">B</span>
          <span className="masthead-letter relative">
            <span className="relative z-10 text-electric drop-shadow-[0_0_30px_rgba(180,255,0,0.8)]">
              O
            </span>
          </span>
          <span className="masthead-letter">U</span>
          <span className="masthead-letter">T</span>
        </div>

        <div className="w-full h-px bg-canvas-light/20 mt-2 md:mt-8" role="separator"></div>
      </section>

      {/* 2. Photo + Identity Card */}
      <section 
        className="px-[5vw] max-w-screen-2xl mx-auto pt-6 pb-16 md:py-24"
        aria-label="Identity and Links"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-center text-center lg:text-left gap-12 md:gap-16 lg:gap-20 max-w-4xl lg:max-w-none mx-auto">
          <div className="relative group perspective-1000 w-full max-w-xs md:max-w-sm lg:max-w-md lg:col-span-5 mx-auto">
            <div className="relative w-full aspect-4/5 transform md:rotate-y-[-5deg] md:-rotate-z-2 transition-all duration-700 group-hover:rotate-0 group-hover:rotate-y-0">
              <div aria-hidden="true" className="absolute inset-0 bg-electric/20 rounded-xl translate-x-4 translate-y-4 blur-xl transition-all duration-700 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:blur-md"></div>

              <div className="absolute inset-0 border border-canvas-light/10 bg-canvas-dark rounded-xl overflow-hidden z-10">
                <img
                  src="/zack-photo-new.webp"
                  alt="Abdallah Wageeh (Zack River), Software Engineer"
                  className="w-full h-full object-cover opacity-90 filter grayscale hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                />
              </div>

              {/* Lime Accent Corner */}
              <div aria-hidden="true" className="absolute -top-2 -left-2 w-12 h-12 md:w-16 md:h-16 border-t-4 border-l-4 border-electric z-20 rounded-tl-lg transition-transform duration-700 md:group-hover:-translate-x-2 md:group-hover:-translate-y-2"></div>
              <div aria-hidden="true" className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 border-b-4 border-r-4 border-electric z-20 rounded-br-lg transition-transform duration-700 md:group-hover:translate-x-2 md:group-hover:translate-y-2"></div>
            </div>
          </div>

          <div className="flex flex-col space-y-8 items-center lg:items-start lg:col-span-7">
            <div className="text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight leading-[1.2] lg:leading-[1.1]">
              <p>
                I engineer software that{" "}
                <span className="text-electric">scales</span>.
              </p>
              <p className="mt-2 text-canvas-light/80">
                I craft interfaces that feel alive.
              </p>
            </div>

            <div className="text-lg md:text-xl text-canvas-light/75 leading-relaxed font-medium font-sans">
              {PERSONAL_INFO.bio}
            </div>

            <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-6">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label={`Email me at ${PERSONAL_INFO.email}`}
                className="text-sm uppercase tracking-widest font-bold border-b border-electric pb-1 hover:text-electric transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-electric hidden md:block"></span>
              <a
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-widest font-bold border-b border-canvas-light/30 pb-1 hover:border-electric transition-colors"
              >
                LinkedIn
              </a>
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-electric hidden md:block"></span>
              <a
                href={`https://${PERSONAL_INFO.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-widest font-bold border-b border-canvas-light/30 pb-1 hover:border-electric transition-colors"
              >
                GitHub
              </a>
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-electric hidden md:block"></span>
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-widest font-bold border-b border-canvas-light/30 pb-1 hover:border-electric transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Work Timeline */}
      <section
        className="py-16 md:py-24 border-y border-canvas-light/10 relative overflow-hidden bg-canvas-dark/50"
        aria-label="Work & Training Experience"
      >
        <div className="px-[5vw] max-w-screen-2xl mx-auto mb-12 text-center">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-canvas-light/75">
            01 — Experience
          </h2>
        </div>

        <div className="flex justify-center w-full px-[5vw] max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
            {TRAINING.map((item, i) => (
              <div
                key={i}
                className="flex flex-col group w-full border-l border-canvas-light/10 pl-6 md:pl-8 relative transition-colors duration-300 hover:border-electric"
              >
                <div aria-hidden="true" className="absolute top-0 -left-1.5 w-2.5 h-2.5 rounded-full bg-canvas-light/20 transition-colors duration-300 group-hover:bg-electric shadow-[0_0_10px_rgba(180,255,0,0)] group-hover:shadow-[0_0_15px_rgba(180,255,0,0.5)]"></div>

                <div className="text-xs font-mono text-electric mb-4 tracking-widest uppercase">
                  {item.period}
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-electric transition-colors">
                  {item.company}
                </h3>
                <div className="text-lg text-canvas-light/80 mb-6 font-medium">
                  {item.role}
                </div>

                <ul className="space-y-3 mb-8">
                  {item.details.map((detail, j) => (
                    <li
                      key={j}
                      className="text-sm text-canvas-light/75 leading-relaxed font-sans flex gap-3"
                    >
                      <span className="text-electric mt-1 shrink-0">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {item.certificate && (
                  <div className="mt-auto">
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-canvas-light/75 hover:text-electric transition-colors"
                    >
                      View Certificate <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Education & 5. Stats */}
      <section 
        className="px-[5vw] max-w-screen-2xl mx-auto py-16 md:py-24"
        aria-label="Education and Statistics"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-0 lg:gap-x-20">
          {/* Education */}
          <div aria-label="Education" className="flex flex-col h-full">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-canvas-light/75 mb-12 text-center w-full">
              02 — Education
            </h2>

            <div className="relative p-6 md:p-8 border border-canvas-light/10 rounded-xl bg-canvas-dark overflow-hidden group hover:border-electric/50 transition-colors duration-500 flex-1 flex flex-col justify-center">
              {/* Decorative circuit grid bg */}
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="relative z-10">
                <div className="text-electric font-mono text-sm tracking-widest mb-4">
                  {EDUCATION.period}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
                  {EDUCATION.degree}
                </h3>
                <div className="text-canvas-light/70 text-lg md:text-xl mb-6">
                  {EDUCATION.institution}
                </div>

                {EDUCATION.details && EDUCATION.details.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {EDUCATION.details.map((detail, j) => (
                      <li
                        key={j}
                        className="text-sm text-canvas-light/75 leading-relaxed font-sans flex gap-3"
                      >
                        <span className="text-electric mt-1 shrink-0">▹</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 border border-electric/30 rounded text-electric text-xs md:text-sm font-mono uppercase tracking-widest bg-electric/5">
                      Cumulative: {EDUCATION.grade}
                    </div>
                    {EDUCATION.projectGrade && (
                      <div className="inline-flex items-center justify-center px-4 py-1.5 border border-canvas-light/20 rounded text-canvas-light/80 text-xs md:text-sm font-mono uppercase tracking-widest bg-canvas-light/5">
                        Project: {EDUCATION.projectGrade}
                      </div>
                    )}
                  </div>
                  {EDUCATION.certificate && (
                    <a
                      href={EDUCATION.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-canvas-light/75 hover:text-electric transition-colors mt-2 sm:mt-0 sm:ml-auto"
                    >
                      View Certificate <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col h-full">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-canvas-light/75 mb-12 text-center w-full">
              03 — By the Numbers
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 flex-1 content-center">
              <div className="flex flex-col">
                <div className="text-5xl md:text-7xl font-black text-canvas-light flex items-start">
                  <span ref={projectsRef}>0</span>+
                </div>
                <div className="text-sm font-mono uppercase tracking-widest text-canvas-light/75 mt-4">
                  Projects
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-5xl md:text-7xl font-black text-electric flex items-start drop-shadow-[0_0_15px_rgba(180,255,0,0.3)]">
                  +<span ref={yearsExpRef}>0</span>
                </div>
                <div className="text-sm font-mono uppercase tracking-widest text-canvas-light/75 mt-4">
                  Years Exp.
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-5xl md:text-7xl font-black text-electric flex items-start drop-shadow-[0_0_15px_rgba(180,255,0,0.3)]">
                  +<span ref={clientsRef}>0</span>
                </div>
                <div className="text-sm font-mono uppercase tracking-widest text-canvas-light/75 mt-4">
                  Clients Worldwide
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-5xl md:text-7xl font-black text-canvas-light flex items-start">
                  +<span ref={certsRef}>0</span>
                </div>
                <div className="text-sm font-mono uppercase tracking-widest text-canvas-light/75 mt-4">
                  Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Skills Grid */}
      <section 
        className="px-[5vw] max-w-screen-2xl mx-auto py-24 md:py-32 border-t border-canvas-light/10"
        aria-label="Technical Skills"
      >
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-canvas-light/75 mb-12 md:mb-16 text-center w-full">
          04 — Technical Arsenal
        </h2>

        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {SKILL_CATEGORIES.flatMap((cat) => cat.skills)
            .map((skill, i) => {
              // Deduplicate just in case
              return skill;
            })
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((skill, i) => {
              const isHeroSkill = [
                "NestJS",
                "React",
                "PostgreSQL",
                "Docker",
                "Next.js",
                "Redis",
              ].includes(skill);
              return (
                <div
                  key={`${skill}-${i}`}
                  className={`
                     px-4 py-2 md:px-5 md:py-2.5 rounded-full font-mono text-xs md:text-sm tracking-wide transition-all duration-300 cursor-default select-none
                     ${
                       isHeroSkill
                         ? "bg-electric text-canvas-dark font-bold shadow-[0_0_15px_rgba(180,255,0,0.15)] hover:shadow-[0_0_25px_rgba(180,255,0,0.3)] hover:-translate-y-0.5"
                         : "bg-canvas-light/5 text-canvas-light/75 border border-canvas-light/10 hover:bg-canvas-light/10 hover:text-canvas-light hover:border-canvas-light/20"
                     }
                   `}
                >
                  {skill}
                </div>
              );
            })}
        </div>
      </section>

      {/* 7. CTA Strip */}
      <section 
        className="mt-10 md:mt-20 bg-electric text-canvas-dark py-20 md:py-32 px-[5vw] relative overflow-hidden group"
        aria-label="Call to action"
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight max-w-2xl leading-[1.1] text-center lg:text-left">
            Ready to build something{" "}
            <span className="text-canvas-light opacity-60 lg:opacity-50 lg:group-hover:opacity-100 transition-opacity duration-500">
              remarkable
            </span>{" "}
            together?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 shrink-0 w-full sm:w-auto">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-3 bg-canvas-dark text-canvas-light font-bold uppercase tracking-[0.15em] text-sm px-6 py-4 md:px-8 md:py-5 rounded-full hover:bg-canvas-light hover:text-canvas-dark hover:shadow-lg transition-all duration-300"
            >
              View Works <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label={`Email me at ${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-3 border-2 border-canvas-dark text-canvas-dark font-bold uppercase tracking-[0.15em] text-sm px-6 py-4 md:px-8 md:py-5 rounded-full hover:bg-canvas-dark hover:text-electric transition-colors duration-300"
            >
              Contact Me <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Subtle background texture for the CTA */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #0d0e0d 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </section>
    </div>
  );
};

export default AboutPage;
