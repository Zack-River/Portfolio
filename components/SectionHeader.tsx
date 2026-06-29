import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  number: string;
  align?: 'left' | 'right';
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, number, align = 'left', dark = false }) => {
  return (
    <div className={`relative mb-12 md:mb-16 text-center ${align === 'right' ? 'md:text-right' : 'md:text-left'}`}>
      <span className={`absolute -top-10 text-[clamp(4rem,12vw,8rem)] font-bold select-none z-0 opacity-50 font-display left-1/2 -translate-x-1/2 ${dark ? 'text-white/15' : 'text-canvas-dark/3'} ${parseInt(number, 10) % 2 === 1 ? 'md:left-auto md:right-0 md:translate-x-0' : 'md:left-0 md:translate-x-0'}`}>
        {number}
      </span>
      <div className="relative z-10">
        <h2 className={`text-[clamp(1.75rem,5vw,3rem)] font-display font-bold mb-2 ${dark ? 'text-canvas-light' : 'text-primary'}`}>
          {title}
        </h2>
        <div className={`h-1 w-24 bg-electric mb-4 mx-auto ${align === 'right' ? 'md:mr-0 md:ml-auto' : 'md:mr-auto md:ml-0'}`}></div>
        <p className={`font-mono tracking-widest text-sm uppercase ${dark ? 'text-canvas-light/70' : 'text-secondary'}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;