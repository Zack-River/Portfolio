import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  number: string;
  align?: 'left' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, number, align = 'left' }) => {
  return (
    <div className={`relative mb-16 ${align === 'right' ? 'text-right' : 'text-left'}`}>
      <span className="absolute -top-10 left-0 text-[8rem] font-bold text-charcoal select-none z-0 opacity-50 font-serif">
        {number}
      </span>
      <div className="relative z-10">
        <h2 className={`text-4xl md:text-5xl font-serif font-bold text-stone-200 mb-2`}>
          {title}
        </h2>
        <div className={`h-1 w-24 bg-amber-600 mb-4 ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}></div>
        <p className="text-stone-400 font-mono tracking-widest text-sm uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;