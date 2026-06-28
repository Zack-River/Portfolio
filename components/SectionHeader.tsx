import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  number: string;
  align?: 'left' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, number, align = 'left' }) => {
  return (
    <div className={`relative mb-12 md:mb-16 text-center ${align === 'right' ? 'md:text-right' : 'md:text-left'}`}>
      <span className={`absolute -top-10 text-[clamp(4rem,12vw,8rem)] font-bold text-canvas-dark/3 select-none z-0 opacity-50 font-display left-1/2 -translate-x-1/2 ${parseInt(number, 10) % 2 === 1 ? 'md:left-auto md:right-0 md:translate-x-0' : 'md:left-0 md:translate-x-0'}`}>
        {number}
      </span>
      <div className="relative z-10">
        <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-display font-bold text-primary mb-2">
          {title}
        </h2>
        <div className={`h-1 w-24 bg-electric mb-4 mx-auto ${align === 'right' ? 'md:mr-0 md:ml-auto' : 'md:mr-auto md:ml-0'}`}></div>
        <p className="text-secondary font-mono tracking-widest text-sm uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;