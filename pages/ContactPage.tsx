import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
// Minimal shape we need from gsap.Context (avoids importing gsap at module level)
type GsapContext = { revert: () => void };

import Footer from "../components/Footer";
import { PERSONAL_INFO } from "../constants";
import { Mail, MapPin, Linkedin, Github, Phone, Briefcase, Facebook, Globe, Circle } from "lucide-react";

// Lazy-load the heavy form section to prioritize LCP rendering
const LazyContactForm = React.lazy(() => import("../components/ContactForm"));

const PAGE_URL = `https://${PERSONAL_INFO.website}/contact`;
const PAGE_TITLE = `Contact | ${PERSONAL_INFO.name}`;
const PAGE_DESC = `Get in touch with ${PERSONAL_INFO.name}. Open for freelance opportunities, backend engineering roles, and web development projects.`;



const ContactPage: React.FC = () => {


  const gsapCtxRef = useRef<GsapContext | null>(null);
  const rafRef = useRef<number>(0);
  const raf2Ref = useRef<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // setTimeout + dynamic GSAP import: React paints LCP first, GSAP loads after
    let timeoutId = window.setTimeout(() => {
        import('gsap').then(({ default: gsap }) => {
          gsapCtxRef.current = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
              gsap.from(".contact-letter", {
                y: 120,
                opacity: 0,
                stagger: 0.08,
                duration: 1.2,
                ease: "power4.out",
              });
              gsap.from(".contact-divider", {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1.5,
                delay: 0.5,
                ease: "power3.out",
              });
              gsap.from(".contact-tagline", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out",
              });
              gsap.from(".bento-card", {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                delay: 0.8,
                ease: "power3.out",
              });
            });
          });
        });
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      gsapCtxRef.current?.revert();
    };
  }, []);




  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div 
        className="flex flex-col min-h-screen bg-canvas-light dark:bg-canvas-dark text-canvas-dark dark:text-canvas-light"
        aria-label="Contact Page"
      >
        {/* 1. Masthead Header */}
        <section 
          className="flex flex-col justify-center w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 md:pt-40 pb-8 md:pb-12 relative z-10 overflow-hidden"
          aria-label="Contact Header"
        >
          <h1 className="sr-only">Contact {PERSONAL_INFO.name}</h1>
          <div
            aria-hidden="true"
            className="flex items-center justify-center font-black uppercase leading-none tracking-tighter w-full overflow-visible py-4"
            style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
          >
            <span className="contact-letter inline-block">C</span>
            <span className="contact-letter inline-block">O</span>
            <span className="contact-letter inline-block">N</span>
            <span className="contact-letter inline-block">T</span>
            <span className="contact-letter inline-block relative">
              <span className="relative z-10 text-electric drop-shadow-[0_0_30px_rgba(180,255,0,0.8)]">
                A
              </span>
            </span>
            <span className="contact-letter inline-block">C</span>
            <span className="contact-letter inline-block">T</span>
          </div>

          <p className="contact-tagline text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-canvas-dark/60 dark:text-canvas-light/60 mt-2 text-center">
            Reach out and let's build something extraordinary.
          </p>

          <div className="w-full h-px bg-canvas-dark/10 dark:bg-canvas-light/10 mt-6 md:mt-10 contact-divider" role="separator"></div>
        </section>

        {/* 2. Main Content Bento Box Layout */}
        <section className="px-[5vw] max-w-screen-2xl mx-auto py-8 lg:py-10 w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Info Bento */}
            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 h-full order-2 lg:order-1">
              
              {/* Primary Info Card */}
              <div className="bento-card flex-1 bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-canvas-dark/10 dark:border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden group hover:border-electric/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 rounded-bl-full blur-3xl -z-10 group-hover:bg-electric/20 transition-all duration-700"></div>
                
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-canvas-dark/10 dark:border-white/10 bg-canvas-dark/5 dark:bg-white/5 mb-8">
                    <Circle className="fill-electric text-electric animate-pulse" size={10} />
                    <span className="text-sm font-mono tracking-widest uppercase">Available for Work</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's build<br/>something<br/><span className="text-electric">extraordinary.</span></h2>
                  <p className="text-canvas-dark/60 dark:text-canvas-light/60">I'm currently seeking new opportunities in Backend Engineering and full-stack development.</p>
                </div>

                <div className="space-y-4">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center gap-4 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/8 text-canvas-dark/70 dark:text-canvas-light/70 group-hover:border-electric/60 group-hover:bg-electric/10 group-hover:text-electric dark:group-hover:border-electric/60 dark:group-hover:bg-electric/10 dark:group-hover:text-electric group-hover:shadow-[0_0_12px_rgba(180,255,0,0.25)] transition-all duration-200 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-mono text-canvas-dark/50 dark:text-canvas-light/50 uppercase tracking-wider mb-1">Email</p>
                      <span className="text-lg group-hover:text-electric transition-colors">{PERSONAL_INFO.email}</span>
                    </div>
                  </a>
                  
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="group flex items-center gap-4 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/8 text-canvas-dark/70 dark:text-canvas-light/70 group-hover:border-electric/60 group-hover:bg-electric/10 group-hover:text-electric dark:group-hover:border-electric/60 dark:group-hover:bg-electric/10 dark:group-hover:text-electric group-hover:shadow-[0_0_12px_rgba(180,255,0,0.25)] transition-all duration-200 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-mono text-canvas-dark/50 dark:text-canvas-light/50 uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                      <span className="text-lg group-hover:text-electric transition-colors">{PERSONAL_INFO.phone}</span>
                    </div>
                  </a>

                  <div className="group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/8 text-canvas-dark/70 dark:text-canvas-light/70 group-hover:border-electric/60 group-hover:bg-electric/10 group-hover:text-electric dark:group-hover:border-electric/60 dark:group-hover:bg-electric/10 dark:group-hover:text-electric group-hover:shadow-[0_0_12px_rgba(180,255,0,0.25)] transition-all duration-200 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-mono text-canvas-dark/50 dark:text-canvas-light/50 uppercase tracking-wider mb-1">Location</p>
                      <span className="text-lg group-hover:text-electric transition-colors">Qalubiya, Egypt (Remote)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Social Card */}
              <div className="bento-card bg-canvas-dark dark:bg-canvas-light text-canvas-light dark:text-canvas-dark rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute -bottom-12 -right-12 text-electric/10">
                  <Globe size={180} strokeWidth={1} />
                </div>
                <p className="font-mono text-sm uppercase tracking-widest opacity-70 mb-6">Connect across the web</p>
                <div className="flex flex-wrap gap-4 relative z-10">
                  <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/10 dark:bg-black/10 border border-transparent hover:border-electric/60 hover:bg-electric hover:text-white dark:hover:text-white hover:shadow-[0_0_12px_rgba(180,255,0,0.4)] transition-all duration-300" aria-label="GitHub">
                    <Github size={24} />
                  </a>
                  <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/10 dark:bg-black/10 border border-transparent hover:border-electric/60 hover:bg-electric hover:text-white dark:hover:text-white hover:shadow-[0_0_12px_rgba(180,255,0,0.4)] transition-all duration-300" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://mostaql.com/u/ZackRiver" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/10 dark:bg-black/10 border border-transparent hover:border-electric/60 hover:bg-electric hover:text-white dark:hover:text-white hover:shadow-[0_0_12px_rgba(180,255,0,0.4)] transition-all duration-300" aria-label="Mostaql">
                    <Briefcase size={24} />
                  </a>
                  <a href={`https://${PERSONAL_INFO.facebook}`} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/10 dark:bg-black/10 border border-transparent hover:border-electric/60 hover:bg-electric hover:text-white dark:hover:text-white hover:shadow-[0_0_12px_rgba(180,255,0,0.4)] transition-all duration-300" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Form Bento */}
            <div className="bento-card lg:col-span-7 bg-white dark:bg-white/5 border border-canvas-dark/10 dark:border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-canvas-dark/5 flex flex-col h-full order-1 lg:order-2">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Send a Message</h3>
                <p className="text-canvas-dark/60 dark:text-canvas-light/60">Fill out the form below and I'll get back to you within 24 hours.</p>
              </div>

              <React.Suspense fallback={
                <div className="flex-1 flex flex-col space-y-4 min-h-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="w-full h-12 bg-canvas-dark/5 dark:bg-white/5 animate-pulse rounded-xl" />
                    <div className="w-full h-12 bg-canvas-dark/5 dark:bg-white/5 animate-pulse rounded-xl" />
                  </div>
                  <div className="w-full h-12 bg-canvas-dark/5 dark:bg-white/5 animate-pulse rounded-xl" />
                  <div className="w-full h-32 bg-canvas-dark/5 dark:bg-white/5 animate-pulse rounded-xl flex-1" />
                  <div className="w-full sm:w-48 h-12 bg-canvas-dark/10 dark:bg-white/10 animate-pulse rounded-xl" />
                </div>
              }>
                <LazyContactForm />
              </React.Suspense>
            </div>
          </div>
        </section>

        {/* 3. Unified Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
