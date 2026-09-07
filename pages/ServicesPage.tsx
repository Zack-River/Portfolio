import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// Minimal shape we need from gsap.Context (avoids importing gsap at module level)
type GsapContext = { revert: () => void };
import {
  Server, Globe, Database, ShieldCheck, Monitor, PenTool,
  ArrowRight, CalendarDays, Mail
} from 'lucide-react';
import Footer from "../components/Footer";
import { SERVICES, PERSONAL_INFO } from '../constants';

const iconMap: Record<string, React.FC<{ size?: number; strokeWidth?: number }>> = {
  Server, Globe, Database, ShieldCheck, Monitor, PenTool,
};

const PAGE_URL  = `https://${PERSONAL_INFO.website}/services`;
const PAGE_IMG  = `https://${PERSONAL_INFO.website}/favicon.webp`;
const PAGE_TITLE = `Services | ${PERSONAL_INFO.name}`;
const PAGE_DESC  = 'Professional software engineering services: Full-Stack Development, Backend Architecture, Database Design, UI/UX, and Security & DevOps by Abdallah Wageeh (Zack River).';

const ServicesPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const gsapCtxRef = useRef<GsapContext | null>(null);
  const rafRef = useRef<number>(0);
  const raf2Ref = useRef<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Double-rAF ensures React paints the LCP text BEFORE GSAP runs
    // GSAP is dynamically imported so it's NOT in the critical path
    let timeoutId = window.setTimeout(() => {
        // Dynamic import keeps gsap-vendor out of the critical rendering chain
        Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
        ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger);
          gsapCtxRef.current = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add('(prefers-reduced-motion: no-preference)', () => {
              gsap.from('.svc-letter', {
                y: 120,
                opacity: 0,
                stagger: 0.06,
                duration: 1,
                ease: 'power4.out',
              });
              gsap.from('.svc-tagline', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: 'power3.out',
              });
              gsap.from('.svc-row', {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: '.svc-list',
                  start: 'top 80%',
                },
              });
              gsap.from('.process-item', {
                y: 30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: '.process-grid',
                  start: 'top 85%',
                },
              });
            });
          }, containerRef);
        });
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      gsapCtxRef.current?.revert();
    };
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'provider': {
      '@type': 'Person',
      'name': PERSONAL_INFO.name,
      'url': `https://${PERSONAL_INFO.website}`,
    },
    'serviceType': SERVICES.map(s => s.title),
    'areaServed': 'Worldwide',
    'url': PAGE_URL,
    'name': 'Software Engineering Services',
    'description': PAGE_DESC,
  };

  return (
    <div ref={containerRef} className="bg-canvas-dark text-canvas-light min-h-screen font-sans selection:bg-electric selection:text-canvas-dark overflow-hidden">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:title"       content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url"         content={PAGE_URL} />
        <meta property="og:image"       content={PAGE_IMG} />
        <meta property="og:type"        content="website" />

        {/* Twitter */}
        <meta name="twitter:card"        content="summary" />
        <meta name="twitter:title"       content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image"       content={PAGE_IMG} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── 1. Masthead Hero ────────────────────────────── */}
      <section 
        className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center pt-32 md:pt-40 pb-8 md:pb-12 relative z-10 overflow-hidden"
        aria-label="Services Header"
      >
        <h1 className="sr-only">Services & Capabilities</h1>
        
        <div
          aria-hidden="true"
          className="flex items-center justify-center font-black uppercase leading-none tracking-tighter w-full overflow-visible py-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
        >
          <span className="svc-letter inline-block">S</span>
          <span className="svc-letter inline-block">E</span>
          <span className="svc-letter inline-block">R</span>
          <span className="svc-letter inline-block relative">
            <span className="relative z-10 text-electric drop-shadow-[0_0_30px_rgba(180,255,0,0.8)]">
              V
            </span>
          </span>
          <span className="svc-letter inline-block">I</span>
          <span className="svc-letter inline-block">C</span>
          <span className="svc-letter inline-block">E</span>
          <span className="svc-letter inline-block">S</span>
        </div>

        {/* Tagline */}
        <p className="svc-tagline text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-canvas-light/60 mt-2 text-center">
          What I build.&nbsp; How I think.&nbsp; Why it works.
        </p>

        <div className="w-full h-px bg-canvas-light/20 mt-6 md:mt-8" role="separator" />
      </section>

      {/* ── 2. Numbered Service List ─────────────────────── */}
      <section
        className="px-[5vw] max-w-screen-2xl mx-auto py-16 md:py-24 svc-list"
        aria-label="Services offered"
      >
        <ul className="divide-y divide-canvas-light/10" role="list">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Server;
            const isActive = activeIndex === index;

            return (
              <li
                key={service.id}
                className="svc-row group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className={`
                    flex items-start gap-6 md:gap-10 py-8 md:py-10 
                    cursor-default transition-all duration-300
                    ${isActive ? 'pl-4 md:pl-6' : 'pl-0'}
                  `}
                >
                  {/* Index Number — decorative, hidden from AT, contrast passes with 40% opacity */}
                  <span
                    aria-hidden="true"
                    className="hidden sm:block text-4xl md:text-6xl font-black text-canvas-light/40 group-hover:text-canvas-light/50 transition-colors duration-300 w-20 shrink-0 leading-none mt-1 select-none pointer-events-none tabular-nums"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Icon (mobile only) — decorative */}
                  <div
                    aria-hidden="true"
                    className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-canvas-light/10 group-hover:border-electric/50 group-hover:bg-electric/5 transition-all duration-300 shrink-0 mt-1"
                  >
                    <Icon size={18} strokeWidth={1.5} className="text-canvas-light/40 group-hover:text-electric transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Row header */}
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        aria-hidden="true"
                        className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg border border-canvas-light/10 group-hover:border-electric/50 group-hover:bg-electric/5 transition-all duration-300 shrink-0"
                      >
                        <Icon size={16} strokeWidth={1.5} className="text-canvas-light/40 group-hover:text-electric transition-colors duration-300" />
                      </div>
                      {/* h2 is correct: each service is a major section under the h1 */}
                      <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight group-hover:text-electric transition-colors duration-300">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-canvas-light/70 leading-relaxed mb-5 max-w-2xl">
                      {service.description}
                    </p>

                    {/* Highlights pills */}
                    <div className="flex flex-wrap gap-2 mb-6" aria-label={`${service.title} highlights`}>
                      {service.highlights.map((tag, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-full text-xs font-mono tracking-wide border border-canvas-light/15 text-canvas-light/70 bg-canvas-light/5 group-hover:border-electric/40 group-hover:text-electric group-hover:bg-electric/5 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry: ${encodeURIComponent(service.title)}&body=Hi Abdallah,%0A%0AI'd like to discuss the ${encodeURIComponent(service.title)} service.%0A%0A`}
                        aria-label={`Send a contact request for ${service.title}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-canvas-light/25 text-canvas-light/80 bg-canvas-light/5 hover:border-electric hover:text-electric hover:bg-electric/10 transition-all duration-300"
                      >
                        <Mail size={13} strokeWidth={2} aria-hidden="true" />
                        Contact Request
                      </a>
                      <a
                        href="https://calendly.com/zackriver-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Book a meeting to discuss ${service.title}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-electric text-canvas-dark hover:bg-electric/90 hover:shadow-[0_0_20px_rgba(180,255,0,0.3)] transition-all duration-300"
                      >
                        <CalendarDays size={13} strokeWidth={2} aria-hidden="true" />
                        Book a Meeting
                      </a>
                    </div>
                  </div>

                  {/* Arrow — decorative */}
                  <div aria-hidden="true" className="shrink-0 mt-3">
                    <div className={`
                      w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                      ${isActive
                        ? 'border-electric bg-electric text-canvas-dark rotate-45'
                        : 'border-canvas-light/10 text-canvas-light/20'
                      }
                    `}>
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ── 3. Process Strip ─────────────────────────────── */}
      <section
        className="px-[5vw] max-w-screen-2xl mx-auto py-16 md:py-24 border-t border-canvas-light/10"
        aria-label="How the process works"
      >
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-canvas-light/60 mb-12 text-center">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 process-grid">
          {[
            { step: '01', label: 'Discovery',    desc: 'We align on your goals, constraints, and vision before a single line of code is written.' },
            { step: '02', label: 'Architecture', desc: 'I design a clean, scalable system architecture and agree on the tech stack.' },
            { step: '03', label: 'Build',        desc: 'Iterative development with weekly deliverables and transparent progress tracking.' },
            { step: '04', label: 'Launch',       desc: 'Deployment, monitoring setup, documentation handoff, and post-launch support.' },
          ].map(({ step, label, desc }) => (
            <div key={step} className="relative pl-6 border-l border-canvas-light/10 hover:border-electric transition-colors duration-300 group process-item">
              <div aria-hidden="true" className="absolute top-0 -left-1.5 w-2.5 h-2.5 rounded-full bg-canvas-light/20 group-hover:bg-electric transition-colors duration-300 shadow-[0_0_0px_transparent] group-hover:shadow-[0_0_10px_rgba(180,255,0,0.5)]" />
              <div aria-hidden="true" className="text-xs font-mono text-electric mb-3 tracking-widest">{step}</div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2 group-hover:text-electric transition-colors duration-300">{label}</h3>
              <p className="text-sm text-canvas-light/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
