import React from 'react';
import type { Metadata } from 'next';
import { XCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'About | Playmakxrs',
  description:
    'The family is the source. The institution is the platform. Playmakxrs is the bridge. What we build, and the boundaries we hold.',
};

const BOUNDARIES = [
  {
    title: 'Not a PR Firm',
    body: 'We do not manufacture spin or reactive messaging. We deal in what can be verified.',
  },
  {
    title: 'Not a Content Shop',
    body: 'We do not chase short-lived trends. We build work intended to outlast the people who commissioned it.',
  },
  {
    title: 'Not a Player Agency',
    body: 'We do not negotiate active contracts or broker transfer deals. Our concern is legacy.',
  },
  {
    title: 'Not an Extractive Broker',
    body: 'We do not publish or monetize a story without the consent, participation and authority of its source.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-true-black">
      {/* 1. POSITIONING */}
      <section className="py-24 md:py-28 px-6 md:px-8 bg-gradient-to-b from-deep-navy via-true-black to-true-black border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-heading tracking-widest text-xs md:text-sm text-crimson uppercase font-semibold mb-5 inline-block">
            About Playmakxrs
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-8">
            THE FAMILY IS THE SOURCE.<br />
            THE INSTITUTION IS THE PLATFORM.<br />
            <span className="text-crimson">PLAYMAKXRS IS THE BRIDGE.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            We build Narrative Infrastructure&trade; for meaning that institutions already hold but cannot yet see, use or protect.
          </p>
        </div>
      </section>

      {/* 2. WHY THIS EXISTS */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed">
          <SectionHeading
            category="Why This Exists"
            title="Meaning Needs Infrastructure"
          />
          <p>
            Institutions compete for attention using the same tools as everyone else. Meanwhile the one asset nobody can copy is what actually happened, to real people, in their own care. It often sits unexamined and unprotected.
          </p>
          <p>
            Not every story should be optimized for attention. Some shape identity, trust and public memory, and they reward restraint. Handled well, they strengthen the institution carrying them.
          </p>
          <p className="text-white">
            Playmakxrs exists to close that gap without taking the story away from the people it belongs to.
          </p>
        </div>
      </section>

      {/* 3. OPERATIONAL BOUNDARIES */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            category="Operational Boundaries"
            title="What Playmakxrs Is Not"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BOUNDARIES.map(({ title, body }) => (
              <div key={title} className="bg-card-dark border border-white/10 p-6 rounded-sm">
                <div className="flex items-center space-x-3 text-crimson mb-3">
                  <XCircle className="w-5 h-5" aria-hidden="true" />
                  <h3 className="font-heading text-lg text-white">{title}</h3>
                </div>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 px-6 md:px-8 bg-crimson text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            Start With What Matters
          </h2>
          <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
            Tell us what you are trying to understand.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="secondary" className="!bg-white !text-crimson hover:!bg-gray-100 font-bold">
              Start the Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
