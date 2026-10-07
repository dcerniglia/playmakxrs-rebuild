import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Heart, Handshake } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';
import { FeaturedIn } from '@/components/FeaturedIn';
import { AUDIENCES } from '@/lib/audiences';

const ICONS = [Building2, Heart, Handshake];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-true-black overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[80%] lg:w-[75%] bg-no-repeat bg-cover opacity-60 mix-blend-luminosity filter contrast-125"
          style={{
            backgroundImage: "url('/assets/hero_landing.png')",
            backgroundPosition: 'left center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-true-black via-true-black/80 via-35% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-true-black via-transparent to-true-black/40 z-10 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 py-16 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight text-white mb-6">
              WE RECOVER THE HISTORY<br />
              YOUR INSTITUTION<br />
              <span className="text-crimson">ALREADY OWNS.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-light leading-relaxed">
              Verified, rights-cleared sports narrative — built into assets athletic departments, families and partners can actually use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/what-we-do" variant="primary">
                What We Do
              </Button>
              <Button href="/contact" variant="secondary">
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY STRIP */}
      <FeaturedIn />

      {/* 3. WHO WE SERVE */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Who We Serve"
            title="Three Lanes, One Record"
            subtitle="A recovered story serves three parties at once. Find the one that describes you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIENCES.map((audience, i) => {
              const Icon = ICONS[i];
              const gold = audience.accent === 'gold';
              return (
                <Link
                  key={audience.id}
                  href={`/who-we-serve#${audience.id}`}
                  className="block group h-full"
                >
                  <Card
                    variant="solid"
                    className={`p-8 h-full flex flex-col transition-all duration-300 cursor-pointer group-hover:-translate-y-1.5 ${
                      gold ? 'group-hover:border-gold/60' : 'group-hover:border-crimson/60'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 border ${
                        gold
                          ? 'bg-gold/10 border-gold/30 text-gold'
                          : 'bg-crimson/10 border-crimson/30 text-crimson'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-heading text-white mb-2">{audience.label}</h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">
                      {audience.tagline}
                    </p>
                    <p className="text-sm text-gray-400 font-light leading-relaxed flex-grow">
                      {audience.summary}
                    </p>
                    <span
                      className={`inline-flex items-center text-xs font-heading uppercase tracking-wider mt-6 transition-colors ${
                        gold
                          ? 'text-gold group-hover:text-white'
                          : 'text-crimson group-hover:text-white'
                      }`}
                    >
                      Learn More
                      <ArrowRight
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROOF TEASER */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img
              src="/assets/hero_about.png"
              alt="Bobby Grier (#38) running with the football, University of Pittsburgh archival photograph"
              width={530}
              height={680}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-sm border border-white/10 shadow-2xl grayscale contrast-125"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-crimson">
              The Founding Proof Case
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              THE BOBBY GRIER STORY
            </h2>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
              In 1956 the Governor of Georgia demanded the Sugar Bowl be cancelled to keep Bobby Grier off the field. Pitt played anyway, and Grier broke the color barrier. Decades later the record had fragmented.
            </p>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
              Working with the Grier family and Pitt Athletics, we rebuilt it — a bestselling book, a national broadcast, Hall of Fame enshrinement, campus curricula, and coverage from History to ESPN.
            </p>
            <div className="pt-2">
              <Button href="/our-proof" variant="primary">
                See Our Proof
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 px-6 md:px-8 bg-crimson text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            Discover Your Institution’s Bobby Grier
          </h2>
          <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
            Every program has pioneers whose stories were never written down. A 90–120 day pilot is the shortest way to find out what yours are worth.
          </p>
          <div className="pt-4">
            <Button
              href="/contact"
              variant="secondary"
              className="!bg-white !text-crimson hover:!bg-gray-100 font-bold"
            >
              Begin a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
