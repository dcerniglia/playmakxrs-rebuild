import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading tracking-wider uppercase text-sm font-semibold px-7 py-3.5 transition-all duration-300 rounded-sm cursor-pointer';
  
  const variants = {
    primary: 'bg-crimson hover:bg-red-700 text-white shadow-lg shadow-crimson/20 active:scale-[0.98]',
    secondary: 'bg-transparent border border-white/30 text-white hover:bg-white hover:text-black active:scale-[0.98]',
    outline: 'border border-crimson text-crimson hover:bg-crimson hover:text-white active:scale-[0.98]',
    gold: 'border border-gold text-gold hover:bg-gold hover:text-black shadow-lg shadow-gold/10 active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // Absolute URLs leave the site, so they need a plain anchor that opens in a
    // new tab. next/link is for internal routes only.
    if (/^https?:\/\//.test(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
