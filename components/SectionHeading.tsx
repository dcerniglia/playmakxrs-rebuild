import React from 'react';

interface SectionHeadingProps {
  category?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  accentColor?: 'crimson' | 'gold';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  category,
  title,
  subtitle,
  align = 'center',
  accentColor = 'crimson',
  className = '',
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const accentColors = {
    crimson: 'text-crimson bg-crimson',
    gold: 'text-gold bg-gold',
  };

  return (
    <div className={`flex flex-col ${alignment[align]} mb-14 ${className}`}>
      {category && (
        <span
          className={`font-heading tracking-widest text-xs md:text-sm font-semibold uppercase mb-3 ${
            accentColor === 'gold' ? 'text-gold' : 'text-crimson'
          }`}
        >
          {category}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      <div
        className={`w-20 h-1 mb-6 ${
          accentColor === 'gold' ? 'bg-gold' : 'bg-crimson'
        }`}
      />
      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg text-gray-400 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
