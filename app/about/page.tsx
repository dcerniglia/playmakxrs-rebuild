import React from 'react';
import type { Metadata } from 'next';
import { Users, Zap, Building, XCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'About | Playmakxrs',
  description:
    'The family is the source. The institution is the platform. Playmakxrs is the bridge. How the model works, and the boundaries it holds.',
};

const triad = [
  {
    step: '01',
    role: 'Originator',
    title: 'The Family',
    body: 'Holds the personal artifacts, letters, oral histories and moral authority. Nothing proceeds without their verified consent.',
    Icon: Users,
    accent: 'gold' as const,
  },
  {
    step: '02',
    role: 'Catalyst',
    title: 'Playmakxrs',
    body: 'Applies Rights Before Reach: forensic verification, chain-of-title, publishing, production and commercial structuring.',
    Icon: Zap,
    accent: 'crimson' as const,
  },
  {
    step: '03',
    role: 'Amplifier',
    title: 'The Institution',
    body: 'Provides the stadium, campus, alumni network and game-week platform that enshrines the story permanently.',
    Icon: Building,
    accent: 'gold' as const,
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
            Overlooked athletic history is an asset most institutions already own and cannot use. We recover it, verify it, clear the rights, and hand it back in a form that holds up.
          </p>
        </div>
      </section>

      {/* 2. THE THESIS */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed">
          <SectionHeading
            category="Why This Exists"
            title="Narrative Capital"
            subtitle="The value an institution holds in its own verified history — and loses by leaving it unexamined."
          />
          <p>
            Athletic departments compete for attention with the same tools as everyone else, against programs with deeper budgets. Meanwhile the one asset nobody can copy &mdash; what actually happened on their own fields &mdash; sits in boxes, uncataloged and unprotected.
          </p>
          <p>
            Not every story should be optimized for attention. Some shape identity, trust and public memory, and they reward restraint. Handled well they strengthen the institution carrying them. Handled badly they fragment, or get told by someone with no obligation to get them right.
          </p>
          <p className="text-white">
            Playmakxrs exists to close that gap without taking the story away from the people it belongs to.
          </p>
        </div>
      </section>

      {/* 3. THE TRIAD */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="How It Works"
            title="The Playmakxrs Triad"
            subtitle="Three parties, one record. Each holds something the other two cannot supply."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {triad.map(({ step, role, title, body, Icon, accent }) => (
              <div
                key={step}
                className={`bg-card-dark border p-8 rounded-sm transition-colors ${
                  accent === 'crimson'
                    ? 'border-crimson/40 hover:border-crimson'
                    : 'border-white/10 hover:border-gold/60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 border ${
                    accent === 'crimson'
                      ? 'bg-crimson/10 border-crimson/30 text-crimson'
                      : 'bg-gold/10 border-gold/30 text-gold'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-1">
                  {step} &middot; {role}
                </span>
                <h3 className="text-2xl font-heading text-white mb-3">{title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPERATIONAL BOUNDARIES */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            category="Operational Boundaries"
            title="What Playmakxrs Is Not"
            subtitle="To understand our depth, it is critical to understand the boundaries we strictly uphold."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card-dark border border-white/10 p-6 rounded-sm">
              <div className="flex items-center space-x-3 text-crimson mb-3">
                <XCircle className="w-5 h-5" />
                <h4 className="font-heading text-lg text-white">Not A PR Spin Firm</h4>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                We do not manufacture artificial media spin or reactive public relations statements. We deal strictly in verified historical reality.
              </p>
            </div>

            <div className="bg-card-dark border border-white/10 p-6 rounded-sm">
              <div className="flex items-center space-x-3 text-crimson mb-3">
                <XCircle className="w-5 h-5" />
                <h4 className="font-heading text-lg text-white">Not A Viral Video Shop</h4>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                We do not chase short-lived algorithmic social media trends. We build hardcover books, museum exhibits, and network films that last 50 years.
              </p>
            </div>

            <div className="bg-card-dark border border-white/10 p-6 rounded-sm">
              <div className="flex items-center space-x-3 text-crimson mb-3">
                <XCircle className="w-5 h-5" />
                <h4 className="font-heading text-lg text-white">Not A Player Agency</h4>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                We do not negotiate active player contracts or broker transfer portal deals. We are dedicated to pioneering legacy preservation.
              </p>
            </div>

            <div className="bg-card-dark border border-white/10 p-6 rounded-sm">
              <div className="flex items-center space-x-3 text-crimson mb-3">
                <XCircle className="w-5 h-5" />
                <h4 className="font-heading text-lg text-white">Not A Dusty Storage Archive</h4>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                We do not let assets sit dormant in basements. We active historical truth into commercial, educational, and institutional reach.
              </p>
            </div>

            <div className="bg-card-dark border border-white/10 p-6 rounded-sm">
              <div className="flex items-center space-x-3 text-crimson mb-3">
                <XCircle className="w-5 h-5" />
                <h4 className="font-heading text-lg text-white">Not An Exploitative Broker</h4>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                We never monetize or publish an athlete&apos;s story without full family consensus, clear legal title, and equitable participation.
              </p>
            </div>

            <div className="bg-card-dark border border-white/10 p-6 rounded-sm">
              <div className="flex items-center space-x-3 text-crimson mb-3">
                <XCircle className="w-5 h-5" />
                <h4 className="font-heading text-lg text-white">Not A Cheap Merch Vendor</h4>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                We design museum-grade, heirloom apparel and hardcover volumes crafted to represent the dignity of the pioneer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 px-6 md:px-8 bg-crimson text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            Start With One Story
          </h2>
          <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
            A 90&ndash;120 day pilot is the shortest route from an uncataloged archive to something your institution can use.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="secondary" className="!bg-white !text-crimson hover:!bg-gray-100 font-bold">
              Begin a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
