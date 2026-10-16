import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  subtext?: string;
  badge?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  subtext,
  badge,
  className = '',
}) => {
  return (
    <div
      className={`bg-card-dark border border-white/10 p-8 rounded-sm hover:border-crimson/50 transition-all duration-300 relative group ${className}`}
    >
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase bg-crimson/20 text-crimson border border-crimson/30 px-2 py-0.5 rounded-sm">
          {badge}
        </span>
      )}
      <div className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight mb-2 group-hover:text-crimson transition-colors">
        {value}
      </div>
      <div className="text-sm font-heading tracking-wider uppercase text-gray-300 mb-2">
        {label}
      </div>
      {subtext && (
        <p className="text-xs text-gray-400 font-light leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
};
