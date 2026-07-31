import React, { useRef, useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { TESTIMONIALS, SITE_CONTENT } from '../constants';
import GSAPReveal from './GSAPReveal';
import { Star, Quote, Play, Pause, Volume2 } from 'lucide-react';
import StarsBackground from './StarsBackground';
import FloatingPolymers from './FloatingPolymers';
import gsap from 'gsap';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  image: string;
  link?: string;
  voiceNote?: string;
}



/* ── VOICE NOTE PLAYER ── */
const VoiceNotePlayer: React.FC<{ src: string }> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); } else { audio.play(); }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleLoaded = () => setDuration(audioRef.current?.duration ?? 0);
  const handleEnded = () => { setIsPlaying(false); setProgress(0); };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
    setProgress(pct * 100);
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="mt-3 rounded-xl bg-white/5 border border-electric/10 p-2 flex items-center gap-2.5 relative z-20 shadow-sm" onClick={(e) => e.stopPropagation()}>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoaded} onEnded={handleEnded} preload="metadata" />
      <button onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'} className="shrink-0 w-8 h-8 rounded-full bg-electric flex items-center justify-center hover:bg-electric/80 transition-colors shadow-md shadow-electric/30">
        {isPlaying ? <Pause size={13} className="text-white fill-white" /> : <Play size={13} className="text-white fill-white ml-0.5" />}
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 mb-1">
          <Volume2 size={10} className="text-electric shrink-0" />
          <span className="font-mono text-[8.5px] text-electric/80 uppercase tracking-widest">Voice Review</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full cursor-pointer overflow-hidden" onClick={handleSeek}>
          <div className="h-full bg-electric rounded-full transition-none" style={{ width: `${progress}%` }} />
        </div>
        {duration > 0 && (
          <div className="text-right mt-0.5 font-mono text-[8.5px] text-white/40">
            {fmt((progress / 100) * duration)} / {fmt(duration)}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── TESTIMONIAL CARD ── */
const TestimonialCard: React.FC<{ testo: Testimonial }> = ({ testo }) => (
  <div className="shrink-0 w-[320px] md:w-95 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col group hover:bg-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden mx-3">
    {testo.link && (
      <a href={testo.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 cursor-pointer" title={`View ${testo.name}'s profile`} />
    )}
    <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-bl-[6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 group-hover:text-electric/20 transition-colors duration-500 pointer-events-none" />

    <div className="flex items-center gap-4 mb-6 relative z-0 pointer-events-none">
      <div className="relative">
        <div className="absolute inset-0 bg-electric rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        <img src={testo.image} alt={testo.name} loading="lazy" width="56" height="56" className="relative w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-electric transition-colors duration-300" />
      </div>
      <div>
        <h3 className="font-display font-medium text-lg text-white flex items-center gap-2">
          {testo.name}
          {testo.link && <span className="text-[9px] font-mono text-electric/60 border border-electric/20 rounded-full px-1.5 py-0.5 leading-none">fb</span>}
        </h3>
        <div className="flex gap-1 mt-1">
          {[...Array(testo.rating)].map((_, i) => <Star key={i} size={14} className="fill-[#F9A825] text-[#F9A825]" />)}
        </div>
      </div>
    </div>

    <p className="text-white/70 text-sm leading-relaxed grow relative z-0 font-sans pointer-events-none">"{testo.text}"</p>

    {testo.voiceNote && (
      <div className="relative z-20">
        <VoiceNotePlayer src={testo.voiceNote} />
      </div>
    )}
  </div>
);

/* ── MAIN SECTION ── */
const Testimonials: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Duplicate testimonials for seamless infinite loop
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Wait for layout to settle then measure the width of one set
    const totalWidth = track.scrollWidth / 3; // 3 copies

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 28,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: string) => parseFloat(x) % totalWidth),
      },
    });

    // Pause on hover
    const wrapper = wrapperRef.current;
    const pause = () => tweenRef.current?.pause();
    const resume = () => tweenRef.current?.play();
    wrapper?.addEventListener('mouseenter', pause);
    wrapper?.addEventListener('mouseleave', resume);

    return () => {
      tweenRef.current?.kill();
      wrapper?.removeEventListener('mouseenter', pause);
      wrapper?.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-canvas-dark dark:bg-[#0d0d0f] text-canvas-light relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[45%] h-[70%] md:h-[60%] bg-electric/25 rounded-full blur-[140px] pointer-events-none z-0 hidden md:block"></div>
      <StarsBackground colorClass="bg-electric" count={20} />
      <FloatingPolymers />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <GSAPReveal>
          <SectionHeader
            title="Client Reviews"
            subtitle="What People Say"
            number="04"
            align="right"
            dark={true}
          />
        </GSAPReveal>
      </div>

      {/* Full-width marquee — no max-w constraint */}
      <div ref={wrapperRef} className="relative z-10 mt-12 overflow-hidden cursor-default">
        {/* Left/right fade vignette */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-canvas-dark to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-canvas-dark to-transparent z-10" />

        <div ref={trackRef} className="flex will-change-transform py-4">
          {doubled.map((testo, idx) => (
            <TestimonialCard key={idx} testo={testo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
