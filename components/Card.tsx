import React from 'react';

interface CardProps {
  variant?: 'glass' | 'solid' | 'outlined' | 'gold';
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'solid',
  className = '',
  children,
}) => {
  const baseStyles = 'rounded-sm transition-all duration-300';

  const variants = {
    glass: 'bg-card-dark/80 backdrop-blur-md border border-white/10 shadow-xl hover:border-white/20',
    solid: 'bg-card-dark border border-white/10 hover:border-white/25',
    outlined: 'bg-transparent border border-white/15 hover:border-crimson/60',
    gold: 'bg-card-dark border border-gold/30 hover:border-gold shadow-lg shadow-gold/5',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
