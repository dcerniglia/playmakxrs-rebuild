import React from 'react';
import type { Metadata } from 'next';
import { Search, ShieldCheck, Lock, Megaphone, Archive } from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'What We Do | Playmakxrs',
  description:
    'Narrative Infrastructure that makes overlooked meaning visible, verifiable, protected and usable — then helps turn it into human connection and enduring institutional value.',
};

/**
 * Outcome-level only. Each verb says what the stage is for, never how it is
 * carried out; the methods behind them are proprietary. Keep it that way — the
 * detailed engagement architecture belongs in the applicant portal, not here.
 */
const capabilities = [
  {
    verb: 'Discover',
    Icon: Search,
    body: 'what may be overlooked — people, achievements, archives, traditions and defining moments an institution already holds.',
  },
  {
    verb: 'Verify',
    Icon: ShieldCheck,
    body: 'what can be trusted, so an institution can speak with confidence about what is actually true.',
  },
  {
    verb: 'Protect',
    Icon: Lock,
    body: 'what should not be separated from its source, keeping attribution, context and rights intact.',
  },
  {
    verb: 'Activate',
    Icon: Megaphone,
    body: 'what can responsibly create value, in forms an institution and its community can genuinely use.',
  },
  {
    verb: 'Preserve',
    Icon: Archive,
    body: 'what should endure, so meaning outlasts the project, the season and the people who happened to be in the room.',
  },
];

const SUPPORTS = [
  'Student and athlete experience',
  'Alumni and donor affinity',
  'Education and leadership',
  'Sponsorship and partnerships',
  'Institutional identity',
  'Media and public history',
  'Licensing and stewardship',
  'Community connection',
];

const RISKS = [
  'Attribution can be lost.',
  'Context can be distorted.',
  'Rights can become unclear.',
  'Ownership can become separated from contribution.',
  'Institutional memory can disappear.',
];

const PRINCIPLES = [
  'Rights before reach.',
  'Verification before amplification.',
  'Attribution before appropriation.',
  'Meaning before monetization.',
  'Stewardship before extraction.',
];

export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col w-full bg-true-black">
      {/* 1. HERO */}
      <section className="py-24 md:py-28 px-6 md:px-8 bg-gradient-to-b from-deep-navy via-true-black to-true-black border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-heading tracking-widest text-xs md:text-sm text-crimson uppercase font-semibold mb-5 inline-block">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            FROM OVERLOOKED MEANING TO ENDURING VALUE
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            We build Narrative Infrastructure&trade; for institutions and rights holders.
          </p>
        </div>
      </section>

      {/* 2. CAPABILITIES */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {capabilities.map(({ verb, Icon, body }) => (
              <li
                key={verb}
                className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8 items-start py-8"
              >
                <div className="sm:col-span-4 flex items-center gap-4">
                  <div className="w-11 h-11 flex-shrink-0 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading text-white">{verb}</h2>
                </div>
                <p className="sm:col-span-8 text-sm md:text-base text-gray-400 font-light leading-relaxed">
                  {body}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 font-light leading-relaxed mt-8">
            Our broader operating methods, analytical frameworks and engagement architecture are proprietary.
          </p>
        </div>
      </section>

      {/* 3. HUMAN CONNECTION */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            category="Human Connection"
            title="Stories Are the Vehicle. Connection Is the Outcome."
            subtitle="Playmakxrs is not simply a storytelling company. We help verify meaning and strengthen relationships among people, institutions and communities."
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            {SUPPORTS.map((item) => (
              <li
                key={item}
                className="bg-deep-navy px-5 py-6 text-sm text-gray-300 font-light leading-snug"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-white font-light leading-relaxed mt-10 text-center">
            The goal is not more content. The goal is a more meaningful connection.
          </p>
        </div>
      </section>

      {/* 4. PROTECTION MATTERS */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            category="Protection Matters"
            title="Visibility Without Stewardship Can Create Risk"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ul className="space-y-3">
              {RISKS.map((risk) => (
                <li
                  key={risk}
                  className="text-base md:text-lg text-gray-400 font-light leading-relaxed border-l-2 border-white/15 pl-4"
                >
                  {risk}
                </li>
              ))}
            </ul>
            <div>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-6">
                Playmakxrs believes important assets should be understood and protected before they are amplified.
              </p>
              <ul className="space-y-2">
                {PRINCIPLES.map((line) => (
                  <li key={line} className="text-base md:text-lg font-heading text-white">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <blockquote className="mt-14 max-w-3xl mx-auto border-l-2 border-crimson pl-6">
            <p className="font-serif-heading italic text-xl md:text-2xl text-gold leading-snug">
              You should not expose value you are not prepared to protect.
            </p>
          </blockquote>
          <div className="pt-10 text-center">
            <Button href="/rights-governance" variant="outline">
              Read the Rights Governance Standard
            </Button>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 px-6 md:px-8 bg-crimson text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            See It Proven Once
          </h2>
          <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
            The Bobby Grier Story&trade; is our founding proof case &mdash; one verified Origin Asset&trade; that reached history, athletics, education, community and media.
          </p>
          <div className="pt-4">
            <Button href="/our-proof" variant="secondary" className="!bg-white !text-crimson hover:!bg-gray-100 font-bold">
              Explore Our Proof
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
