import React from 'react';

/**
 * Shared values referenced across the three legal pages. Update them here
 * once rather than in each document.
 *
 * NOTE: These pages are standard boilerplate and have not been reviewed by
 * counsel. Bracketed values below are placeholders pending that review.
 */
export const LEGAL_ENTITY = 'Playmakxrs Global';
export const LEGAL_CONTACT = 'contact@playmakxrs.com';
export const LEGAL_EFFECTIVE_DATE = 'September 10, 2026';
export const LEGAL_JURISDICTION = '[Governing State]';

interface LegalPageProps {
  category: string;
  title: string;
  summary: string;
  children: React.ReactNode;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  category,
  title,
  summary,
  children,
}) => (
  <div className="flex flex-col w-full bg-true-black">
    {/* Header band */}
    <section className="py-20 md:py-24 px-6 md:px-8 bg-gradient-to-b from-deep-navy via-true-black to-true-black border-b border-white/10 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="font-heading tracking-widest text-xs md:text-sm text-crimson uppercase font-semibold mb-3 inline-block">
          {category}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5">
          {title}
        </h1>
        <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
        <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
          {summary}
        </p>
        <p className="mt-8 text-xs font-mono uppercase tracking-wider text-gray-500">
          Effective {LEGAL_EFFECTIVE_DATE}
        </p>
      </div>
    </section>

    {/* Document body */}
    <section className="py-16 md:py-20 px-6 md:px-8">
      <article className="max-w-3xl mx-auto space-y-12">{children}</article>
    </section>
  </div>
);

interface LegalSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export const LegalSection: React.FC<LegalSectionProps> = ({
  number,
  title,
  children,
}) => (
  <section className="scroll-mt-28">
    <div className="flex items-baseline gap-3 mb-4">
      <span className="text-xs font-mono text-crimson pt-1">{number}</span>
      <h2 className="text-xl md:text-2xl font-heading text-white">{title}</h2>
    </div>
    <div className="space-y-4 text-sm md:text-base text-gray-300 font-light leading-relaxed pl-0 sm:pl-8">
      {children}
    </div>
  </section>
);

export const LegalList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 mt-2" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
