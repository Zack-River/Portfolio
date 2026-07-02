import React from 'react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { Star, Quote } from 'lucide-react';
import StarsBackground from './StarsBackground';
import FloatingPolymers from './FloatingPolymers';

const TESTIMONIALS = [
  {
    name: "Mostafa N.",
    rating: 5,
    text: "Honestly, working with Zack was very comfortable. He understands his work and delivered a website better than I imagined. Delivery was on time with no delays.",
    image: "/clients/mostafa.webp"
  },
  {
    name: "Jaffar S.",
    rating: 5,
    text: "Truly professional work! The site is fast and very elegant. Most importantly, he followed up with me step by step until everything was perfect.",
    image: "/clients/jaffar.webp"
  },
  {
    name: "Ali I.",
    rating: 5,
    text: "One of the best engineers I've dealt with. He always finds solutions to complex programming challenges and the design was a perfect fit for my brand. Highly recommended.",
    image: "/clients/ahmed.webp"
  },
  {
    name: "Heba A.",
    rating: 5,
    text: "An exceptionally skilled and dedicated developer who is honest, reliable, and highly professional. I would gladly recommend him to anyone looking for quality work.",
    image: "/clients/heba.webp"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-canvas-dark text-canvas-light relative overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grain-overlay"></div>
      
      {/* Cyan Blur BG */}
      <div className="absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[45%] h-[70%] md:h-[60%] bg-electric/15 rounded-full blur-[120px] pointer-events-none z-0"></div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {TESTIMONIALS.map((testo, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden">
                
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-bl-[6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 group-hover:text-electric/20 transition-colors duration-500" />
                
                {/* User Info */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
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
                    <h3 className="font-display font-medium text-lg text-white">{testo.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testo.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#F9A825] text-[#F9A825]" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Review Content */}
                <p className="text-white/70 text-sm leading-relaxed grow relative z-10 font-sans">
                  "{testo.text}"
                </p>
                
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
