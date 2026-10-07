import React from 'react';
import type { Metadata } from 'next';
import { Check, Building2, Heart, Handshake } from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { AUDIENCES } from '@/lib/audiences';

export const metadata: Metadata = {
  title: 'Who We Serve | Playmakxrs',
  description:
    'Three lanes: athletic departments and universities, families and athlete estates, and sponsors and media partners.',
};

const ICONS = [Building2, Heart, Handshake];

export default function WhoWeServePage() {
  return (
    <div className="flex flex-col w-full bg-true-black">
      {/* 1. HERO */}
      <section className="py-24 md:py-28 px-6 md:px-8 bg-gradient-to-b from-deep-navy via-true-black to-true-black border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-heading tracking-widest text-xs md:text-sm text-crimson uppercase font-semibold mb-5 inline-block">
            Who We Serve
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            THREE LANES, ONE RECORD
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            A recovered story serves three parties at once. Each needs something different from it, and each has something the others cannot supply.
          </p>
        </div>
      </section>

      {/* 2. THE LANES */}
      {AUDIENCES.map((audience, i) => {
        const Icon = ICONS[i];
        const gold = audience.accent === 'gold';
        return (
          <section
            key={audience.id}
            id={audience.id}
            className={`scroll-mt-28 py-24 px-6 md:px-8 border-b border-white/10 ${
              i % 2 === 0 ? 'bg-true-black' : 'bg-deep-navy'
            }`}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 border ${
                    gold
                      ? 'bg-gold/10 border-gold/30 text-gold'
                      : 'bg-crimson/10 border-crimson/30 text-crimson'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider block mb-2 ${
                    gold ? 'text-gold' : 'text-crimson'
                  }`}
                >
                  {audience.tagline}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading text-white">
                  {audience.label}
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                  {audience.summary}
                </p>
                <ul className="space-y-3 pt-2 border-t border-white/10">
                  {audience.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 pt-1">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-1 ${
                          gold ? 'text-gold' : 'text-crimson'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-400 font-light">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Button href="/contact" variant={gold ? 'gold' : 'primary'}>
                    {audience.cta}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 3. CALL TO ACTION */}
      <section className="py-20 px-6 md:px-8 bg-crimson text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            Not Sure Which Lane?
          </h2>
          <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
            Most engagements involve more than one. Tell us what you are holding and we will tell you honestly whether there is anything in it.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="secondary" className="!bg-white !text-crimson hover:!bg-gray-100 font-bold">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
