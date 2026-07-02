import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import Footer from '../components/Footer';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Activity,
  Layers,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  X,
} from 'lucide-react';
import { UseCase } from '../types';

/* ── USE CASE CAROUSEL COMPONENT ── */
const UseCaseCarousel: React.FC<{ useCases: UseCase[]; title: string }> = ({ useCases, title }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const prev = () => goTo((current - 1 + useCases.length) % useCases.length);
  const next = () => goTo((current + 1) % useCases.length);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  if (useCases.length === 0) return null;

  return (
    <div className="w-full">
      <div className="relative w-full aspect-square md:aspect-video lg:aspect-21/9 bg-[radial-gradient(circle_at_center,#ffffff_0%,#e5e7eb_100%)] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-xl flex items-center justify-center p-6 md:p-16">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full p-8 md:p-16 flex flex-col justify-center overflow-y-auto scrollbar-hide"
          >
            <div className="max-w-3xl mx-auto w-full pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <span className="self-start px-3 py-1 bg-electric/10 text-electric text-xs font-mono rounded-full border border-electric/20 whitespace-nowrap">
                  {useCases[current].id}
                </span>
                <h3 className="text-xl md:text-3xl font-display font-bold text-electric leading-tight">
                  {useCases[current].title}
                </h3>
              </div>
              <p className="text-black/80 text-sm md:text-base leading-relaxed mb-6 font-sans">
                {useCases[current].description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-black/10">
                <div>
                  <p className="font-mono text-xs text-electric uppercase tracking-widest mb-2">Steps</p>
                  <p className="text-black text-sm leading-relaxed font-medium">{useCases[current].steps}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-electric uppercase tracking-widest mb-2">Expected Result</p>
                  <p className="text-black text-sm leading-relaxed font-medium">{useCases[current].expectedResult}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient vignette on sides */}
        <div className="absolute inset-0 bg-linear-to-r from-black/5 via-transparent to-black/5 pointer-events-none" />

        {useCases.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous use case"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/50 backdrop-blur-md border border-black/10 rounded-full text-black/50 hover:text-black hover:bg-white/80 hover:border-black/20 transition-all duration-200 shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next use case"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/50 backdrop-blur-md border border-black/10 rounded-full text-black/50 hover:text-black hover:bg-white/80 hover:border-black/20 transition-all duration-200 shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {useCases.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {useCases.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to use case ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-electric w-6' : 'bg-black/20 hover:bg-black/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


/* ── CAROUSEL COMPONENT ── */
const Carousel: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  const prev = useCallback(() => goTo((current - 1 + images.length) % images.length), [current, images.length, goTo]);
  const next = useCallback(() => goTo((current + 1) % images.length), [current, images.length, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'Escape') setIsModalOpen(false);
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, next, prev]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  if (images.length === 0) return null;

  return (
    <div className="w-full">
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-110 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="relative w-full h-full max-w-7xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.img
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  src={images[current]}
                  alt={`${title} – fullscreen screenshot ${current + 1}`}
                  className="absolute max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </AnimatePresence>
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-110 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors border border-white/10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-110 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors border border-white/10"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide container */}
      <div 
        className="relative w-full aspect-video bg-canvas-dark rounded-2xl overflow-hidden ring-1 ring-canvas-dark/10 shadow-xl cursor-zoom-in group"
        onClick={() => setIsModalOpen(true)}
      >
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.img
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            src={images[current]}
            alt={`${title} – screenshot ${current + 1}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
          />
        </AnimatePresence>

        {/* Gradient vignette on sides */}
        <div className="absolute inset-0 bg-linear-to-r from-canvas-dark/30 via-transparent to-canvas-dark/30 pointer-events-none" />

        {/* Prev / Next buttons — same width as the container, anchored inside it */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Slide counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-electric w-6' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden ring-2 transition-all duration-200 ${
                i === current ? 'ring-electric' : 'ring-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`thumb ${i + 1}`} loading="lazy" className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ── MAIN PAGE ── */
const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);
  const heroRef = useRef<HTMLDivElement>(null);
  const [stickyVisible, setStickyVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.85, 0.97]);

  useEffect(() => {
    const onScroll = () => {
      setStickyVisible(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-canvas-light text-canvas-dark gap-6">
        <h1 className="text-4xl font-display font-bold">Project Not Found</h1>
        <Link
          to="/"
          className="flex items-center gap-2 text-electric border border-electric/30 px-5 py-2 rounded-full hover:bg-electric hover:text-white transition-all"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : project.image ? [project.image] : [];

  return (
    <div className="bg-canvas-light text-canvas-dark min-h-screen font-sans overflow-x-hidden">

      {/* ── STICKY TOP NAV BAR ── */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: stickyVisible ? 0 : -80 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-canvas-light/80 backdrop-blur-xl border-b border-canvas-dark/10 flex items-center justify-between px-6 md:px-12 h-16"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-canvas-dark/70 hover:text-canvas-dark transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} /> Portfolio
        </Link>
        <span className="font-display font-bold text-canvas-dark tracking-tight hidden md:block">
          {project.title}
        </span>
        <div className="flex items-center gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-canvas-dark/70 hover:text-canvas-dark transition-colors border border-canvas-dark/15 px-4 py-1.5 rounded-full"
            >
              <Github size={16} />
              <span className="hidden md:inline">Source Code</span>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium bg-electric text-white px-4 py-1.5 rounded-full hover:bg-electric/80 transition-colors"
            >
              <ExternalLink size={14} />
              <span className="hidden md:inline">Live Demo</span>
            </a>
          )}
        </div>
      </motion.nav>

      {/* ── IMMERSIVE HERO ── */}
      <section
        ref={heroRef}
        className="relative h-[90vh] min-h-[550px] flex items-end overflow-hidden"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full bg-canvas-dark" />
          )}
        </motion.div>

        {/* Base dark layer for overall dimming */}
        <div className="absolute inset-0 bg-canvas-dark/60" />

        {/* Dynamic gradient */}
        <motion.div
          className="absolute inset-0 bg-linear-to-t from-canvas-dark via-canvas-dark/40 to-transparent z-10 pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #3d7fff 1px, transparent 1px), linear-gradient(to bottom, #3d7fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <Link
          to="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full transition-colors z-10"
        >
          <ArrowLeft size={14} /> Back
        </Link>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-16 md:pb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-electric text-xs tracking-[0.3em] uppercase mb-4"
          >
            Case Study / {String(PROJECTS.findIndex((p) => p.id === id) + 1).padStart(2, '0')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'circOut' }}
            className="text-[clamp(3rem,10vw,8rem)] font-display font-bold text-white leading-none tracking-[-0.03em] mb-4"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/60 font-mono text-sm md:text-base max-w-2xl"
          >
            {project.subtitle}
          </motion.p>

          {/* Hero action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <Github size={16} /> Source Code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-electric text-white rounded-full text-sm font-medium hover:bg-electric/80 transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'circOut' }}
            className="mt-8 h-[2px] w-24 bg-electric origin-left"
          />
        </motion.div>
      </section>

      {/* ── CONTENT BODY ── */}
      <div className="relative bg-canvas-light">

        {/* ── EXECUTIVE OVERVIEW STRIP ── */}
        <section className="border-b border-canvas-dark/10 bg-canvas-dark text-white">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-white/10">
            <div className="sm:pr-8">
              <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Role</p>
              <p className="text-white font-medium">Backend / Full-Stack Engineer</p>
            </div>
            <div className="sm:px-8">
              <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Context</p>
              <p className="text-white font-medium">Personal Project · Solo Architecture</p>
            </div>
            <div className="sm:pl-8">
              <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Core Stack</p>
              <p className="text-white font-medium">{project.tags.slice(0, 4).join(', ')}</p>
            </div>
          </div>
        </section>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* ── ENGINEERING IMPACT ── */}
          <section className="py-16 md:py-24 border-b border-canvas-dark/10">
            <div className="flex items-center gap-3 mb-10">
              <Activity size={18} className="text-electric" />
              <p className="font-mono text-xs text-canvas-dark/50 uppercase tracking-[0.25em]">
                Engineering Impact
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative card-base card-hover p-8 overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="text-electric font-mono text-4xl font-bold leading-none">
                    {i === 0 ? '∞' : i === 1 ? '~35%' : '~50%'}
                  </span>
                  <p className="mt-4 text-canvas-dark/80 text-sm leading-relaxed">{stat}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── NARRATIVE DESCRIPTION ── */}
          <section className="py-16 md:py-24 border-b border-canvas-dark/10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
              <div className="md:sticky md:top-24 md:self-start">
                <p className="font-mono text-xs text-canvas-dark/40 uppercase tracking-[0.25em] mb-3">
                  Overview
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-canvas-dark leading-tight">
                  The Engineering Story
                </h2>
                <div className="mt-4 h-[2px] w-12 bg-electric" />
              </div>
              <div>
                <p className="text-lg text-canvas-dark/80 font-light leading-relaxed mb-8 first-letter:text-5xl first-letter:font-display first-letter:mr-2 first-letter:float-left first-letter:text-electric first-letter:font-bold">
                  {project.description}
                </p>
                <p className="text-canvas-dark/60 leading-relaxed">
                  Every architectural decision was made with long-term scalability in mind.
                  The goal was not to build a system that works today, but one that continues to
                  perform as the product grows — a philosophy that guided every design trade-off
                  from data modelling to API contract design.
                </p>

                {/* CTA Links — GitHub + Demo side by side */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Github size={18} /> Source Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ── ARCHITECTURE & USE CASE ── */}
          {(project.schemaImage || project.useCaseImage) && (
            <section className="py-16 md:py-24 border-b border-canvas-dark/10">
              <div className="flex items-center gap-3 mb-10">
                <Layers size={18} className="text-electric" />
                <p className="font-mono text-xs text-canvas-dark/50 uppercase tracking-[0.25em]">
                  Architecture & Use Cases
                </p>
              </div>
              <div className="grid grid-cols-1 gap-16">
                {project.schemaImage && (
                  <div className="flex flex-col gap-6">
                    <h3 className="font-display text-2xl font-bold text-canvas-dark">Database Schema</h3>
                    <div className="w-full bg-white rounded-xl overflow-hidden ring-1 ring-canvas-dark/10 shadow-xl p-2 md:p-6 flex items-center justify-center">
                      <img src={project.schemaImage} alt="Database Schema" className="max-w-full h-auto rounded shadow-sm" />
                    </div>
                  </div>
                )}
                {project.useCaseImage && (
                  <div className="flex flex-col gap-6">
                    <h3 className="font-display text-2xl font-bold text-canvas-dark">Use Case Diagram</h3>
                    <div className="w-full bg-white rounded-xl overflow-hidden ring-1 ring-canvas-dark/10 shadow-xl p-2 md:p-6 flex items-center justify-center">
                      <img src={project.useCaseImage} alt="Use Case Diagram" className="max-w-full h-auto rounded shadow-sm" />
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── USE CASES CAROUSEL ── */}
          {project.useCases && project.useCases.length > 0 && (
            <section className="py-16 md:py-24 border-b border-canvas-dark/10">
              <div className="flex items-center gap-3 mb-10">
                <LayoutGrid size={18} className="text-electric" />
                <p className="font-mono text-xs text-canvas-dark/50 uppercase tracking-[0.25em]">
                  Use Cases
                </p>
                <span className="ml-auto font-mono text-xs text-canvas-dark/30">
                  {project.useCases.length} {project.useCases.length === 1 ? 'case' : 'cases'}
                </span>
              </div>
              <UseCaseCarousel useCases={project.useCases} title={`${project.title} Use Cases`} />
              <p className="mt-4 text-center text-canvas-dark/40 font-mono text-xs">
                Use the arrows or dots to navigate
              </p>
            </section>
          )}

          {/* ── GALLERY CAROUSEL ── */}
          {gallery.length > 0 && (
            <section className="py-16 md:py-24 border-b border-canvas-dark/10">
              <div className="flex items-center gap-3 mb-10">
                <LayoutGrid size={18} className="text-electric" />
                <p className="font-mono text-xs text-canvas-dark/50 uppercase tracking-[0.25em]">
                  Project Gallery
                </p>
                <span className="ml-auto font-mono text-xs text-canvas-dark/30">
                  {gallery.length} {gallery.length === 1 ? 'screenshot' : 'screenshots'}
                </span>
              </div>
              <Carousel images={gallery} title={project.title} />
              <p className="mt-4 text-center text-canvas-dark/40 font-mono text-xs">
                Use the arrows or dots to navigate · Add more images via <code className="text-electric">gallery[]</code> in constants.ts
              </p>
            </section>
          )}

          {/* ── TECH STACK ── */}
          <section className="py-16 md:py-24 border-b border-canvas-dark/10">
            <div className="flex items-center gap-3 mb-10">
              <Layers size={18} className="text-electric" />
              <p className="font-mono text-xs text-canvas-dark/50 uppercase tracking-[0.25em]">
                Technology Stack
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-5 py-2.5 bg-white ring-1 ring-canvas-dark/10 shadow-sm rounded-xl font-mono text-sm text-canvas-dark/80 hover:ring-electric hover:text-electric hover:bg-electric/5 transition-all duration-200 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </section>

          {/* ── NEXT PROJECT / BACK ── */}
          <section className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
            <Link
              to="/"
              className="flex items-center gap-3 text-canvas-dark/60 hover:text-canvas-dark transition-colors font-medium group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            {(() => {
              const currentIdx = PROJECTS.findIndex((p) => p.id === id);
              const next = PROJECTS[(currentIdx + 1) % PROJECTS.length];
              return (
                <Link
                  to={`/project/${next.id}`}
                  className="group flex items-center gap-4 card-base card-hover px-6 py-4"
                >
                  <div>
                    <p className="font-mono text-xs text-canvas-dark/40 uppercase tracking-widest mb-1">
                      Next Project
                    </p>
                    <p className="font-display font-bold text-canvas-dark text-lg">{next.title}</p>
                    <p className="text-electric font-mono text-xs">{next.subtitle}</p>
                  </div>
                  <ChevronRight
                    size={24}
                    className="text-canvas-dark/30 group-hover:text-electric group-hover:translate-x-1 transition-all"
                  />
                </Link>
              );
            })()}
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
