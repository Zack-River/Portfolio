import React, { useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { Star, Quote, Play, Pause, Volume2 } from 'lucide-react';
import StarsBackground from './StarsBackground';
import FloatingPolymers from './FloatingPolymers';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  image: string;
  link?: string;
  voiceNote?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mostafa N.",
    rating: 5,
    text: "Honestly, working with Zack was very comfortable. He understands his work and delivered a website better than I imagined. Delivery was on time with no delays.",
    image: "/clients/mostafa.webp",
    link: "https://www.facebook.com/DR.MostafaNawareg",
    voiceNote: "/audio/MostafaNawareg.mp3",
  },
  {
    name: "Jaffar S.",
    rating: 5,
    text: "Truly professional work! The site is fast and very elegant. Most importantly, he followed up with me step by step until everything was perfect.",
    image: "/clients/jaffar.webp",
  },
  {
    name: "Ali I.",
    rating: 5,
    text: "One of the best engineers I've dealt with. He always finds solutions to complex programming challenges and the design was a perfect fit for my brand. Highly recommended.",
    image: "/clients/ahmed.webp",
  },
  {
    name: "Heba A.",
    rating: 5,
    text: "An exceptionally skilled and dedicated developer who is honest, reliable, and highly professional. I would gladly recommend him to anyone looking for quality work.",
    image: "/clients/heba.webp",
  },
];

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
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleLoaded = () => {
    setDuration(audioRef.current?.duration ?? 0);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    audio.currentTime = pct * audio.duration;
    setProgress(pct * 100);
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="mt-3 rounded-xl bg-white/5 border border-electric/10 p-2 flex items-center gap-2.5 relative z-20 shadow-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoaded}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause voice note' : 'Play voice note'}
        className="shrink-0 w-8 h-8 rounded-full bg-electric flex items-center justify-center hover:bg-electric/80 transition-colors shadow-md shadow-electric/30"
      >
        {isPlaying
          ? <Pause size={13} className="text-white fill-white" />
          : <Play  size={13} className="text-white fill-white ml-0.5" />
        }
      </button>

      <div className="flex-1 min-w-0">
        {/* Label */}
        <div className="flex items-center gap-1 mb-1">
          <Volume2 size={10} className="text-electric shrink-0" />
          <span className="font-mono text-[8.5px] text-electric/80 uppercase tracking-widest">Voice Review</span>
        </div>

        {/* Progress bar */}
        <div
          className="h-1 bg-white/10 rounded-full cursor-pointer overflow-hidden"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-electric rounded-full transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Duration */}
        {duration > 0 && (
          <div className="text-right mt-0.5 font-mono text-[8.5px] text-white/40">
            {fmt((progress / 100) * duration)} / {fmt(duration)}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── MAIN SECTION ── */
const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-canvas-dark text-canvas-light relative overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grain-overlay"></div>

      {/* Cyan Blur BG */}
      <div className="absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[45%] h-[70%] md:h-[60%] bg-electric/15 rounded-full blur-[120px] pointer-events-none z-0 hidden md:block"></div>

      {/* Stars and Wireframe Polymers */}
      <StarsBackground colorClass="bg-electric" count={60} />
      <FloatingPolymers />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Reveal>
          <SectionHeader
            title="Client Reviews"
            subtitle="What People Say"
            number="04"
            align="right"
            dark={true}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {TESTIMONIALS.map((testo, idx) => {
            return (
              <Reveal key={idx} delay={idx * 0.1} className="h-full">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 h-full flex flex-col hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden">
                  
                  {/* Link Overlay (Sits Below Voice Note) */}
                  {testo.link && (
                    <a
                      href={testo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 cursor-pointer"
                      title={`View ${testo.name}'s Facebook profile`}
                    />
                  )}

                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-bl-[6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 group-hover:text-electric/20 transition-colors duration-500 pointer-events-none" />

                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-6 relative z-0 pointer-events-none">
                    <div className="relative">
                      <div className="absolute inset-0 bg-electric rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <img
                        src={testo.image}
                        alt={testo.name}
                        loading="lazy"
                        width="56"
                        height="56"
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-electric transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-lg text-white flex items-center gap-2">
                        {testo.name}
                        {testo.link && (
                          <span className="text-[9px] font-mono text-electric/60 border border-electric/20 rounded-full px-1.5 py-0.5 leading-none">
                            fb
                          </span>
                        )}
                      </h3>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testo.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#F9A825] text-[#F9A825]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-white/70 text-sm leading-relaxed grow relative z-0 font-sans pointer-events-none">
                    "{testo.text}"
                  </p>

                  {/* Voice Note Player (Sits Above Link Overlay) */}
                  {testo.voiceNote && (
                    <div className="relative z-20">
                      <VoiceNotePlayer src={testo.voiceNote} />
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
