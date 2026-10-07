import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, BookOpen, Film, FileText, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';
import { PRESS_COVERAGE } from '@/lib/press';

export const metadata: Metadata = {
  title: 'Our Proof | Playmakxrs',
  description:
    'The Bobby Grier story and the 1956 Sugar Bowl: one verified record compounding into a book, a broadcast, a Hall of Fame enshrinement, and national press coverage.',
};

export default function OurProofPage() {
  return (
    <div className="flex flex-col w-full bg-true-black">
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-end bg-true-black overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover grayscale opacity-65 mix-blend-luminosity filter contrast-125"
          style={{
            backgroundImage: "url('/assets/hero_landing.png')",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-56 md:h-64 lg:h-72 bg-gradient-to-t from-true-black via-true-black/75 via-45% to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-8 pb-8 md:pb-10 text-center w-full">
          <span className="font-heading tracking-widest text-xs md:text-sm text-white uppercase font-semibold mb-2 inline-block drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            Founding Proof
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-heading font-semibold text-gold leading-tight mb-3 drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
            The Gentleman Who Changed The Game.
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-heading tracking-widest text-gray-300 uppercase">
            A Defiant Stand: The Story of the 1956 Sugar Bowl & Bobby Grier
          </p>
        </div>
      </section>

      {/* 2. MAGAZINE EDITORIAL CONTENT */}
      <section className="py-20 px-6 md:px-8 max-w-3xl mx-auto text-gray-300 font-light text-base md:text-lg leading-relaxed">
        <div className="space-y-8 drop-cap">
          <p>
            Bobby Grier wore number 38 for the University of Pittsburgh. When Pitt accepted an invitation to face Georgia Tech in the 1956 Sugar Bowl, the Governor of Georgia demanded that Tech forfeit rather than meet a Black player on a segregated field.
          </p>

          <div className="my-12 pl-6 md:pl-8 border-l-4 border-crimson">
            <blockquote className="font-serif-heading italic text-2xl md:text-3xl text-white leading-snug">
              &ldquo;No Grier, No Game. Pitt stands together, or Pitt doesn&apos;t play.&rdquo;
            </blockquote>
            <span className="block font-heading text-xs uppercase tracking-widest text-crimson mt-3">
              — Resolution of the University of Pittsburgh Student Body & Leadership, December 1955
            </span>
          </div>

          <p>
            Pitt refused. Its students marched, and Georgia Tech students defied their own governor in support of the matchup. On January 2, 1956, Grier took the field at Tulane Stadium and broke the Sugar Bowl&rsquo;s color barrier.
          </p>

          <p>
            Decades later the significance had faded from national memory. The record was fragmented, some accounts misstated it, and the recognition the moment deserved had never arrived.
          </p>

          {/* Historical Archival Photograph: Bobby Grier (#38) */}
          <figure className="my-12 bg-card-dark border border-white/10 p-4 md:p-6 rounded-sm shadow-2xl max-w-lg mx-auto">
            <div className="relative overflow-hidden rounded-sm bg-black/40 flex justify-center">
              <img
                src="/assets/hero_about.png"
                alt="Bobby Grier (#38) running with football - University of Pittsburgh archival photo"
                className="w-full max-w-md h-auto object-contain rounded-sm filter contrast-105"
              />
            </div>
            <figcaption className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono gap-1">
              <span className="text-white font-heading tracking-wider uppercase">Bobby Grier (#38)</span>
              <span className="text-gray-500">Archival Record • University of Pittsburgh</span>
            </figcaption>
          </figure>

          <div className="bg-card-dark border border-white/10 p-8 my-10 rounded-sm">
            <h3 className="font-heading text-xl text-white mb-3">
              One Verified Origin Asset&trade;
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-light mb-4">
              Playmakxrs worked directly with Bobby Grier and his family, and continues to work with them today. What the record needed first was not amplification. It was verification, and the family&rsquo;s authority over how their own story would be used.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              From that single verified foundation came a published book, a national broadcast feature, enshrinement in the Pitt Athletics Hall of Fame, and campus curricula still in use. The value was already there. The infrastructure helped make more of it visible.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ONE STORY, MANY ASSETS */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="The Compounding Model"
            title="One Story, Many Assets"
            subtitle="What one verified Origin Asset reached once it could be trusted."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/collection#the-book" className="block group h-full">
              <Card variant="solid" className="p-8 h-full group-hover:border-crimson transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center mb-6 text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase text-crimson block mb-1">National Release</span>
                <h4 className="text-xl font-heading text-white mb-2">The Published Book</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                  <em>No Grier, No Game</em> became an Amazon Best Seller, providing the authoritative biographical account of the 1956 Sugar Bowl.
                </p>
                <span className="inline-flex items-center text-xs font-heading text-crimson uppercase tracking-wider group-hover:text-white transition-colors">
                  Order the Book
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>

            <a
              href="https://www.youtube.com/watch?v=rqKf4Es0uOU"
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <Card variant="solid" className="p-8 h-full group-hover:border-crimson transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-crimson group-hover:text-crimson transition-colors">
                  <Film className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Broadcast Media</span>
                <h4 className="text-xl font-heading text-white mb-2">Television Profile</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                  Fox 5 Atlanta investigative broadcast spotlighting the civil rights courage of Bobby Grier and teammates.
                </p>
                <span className="inline-flex items-center text-xs font-heading text-white uppercase tracking-wider group-hover:text-crimson transition-colors">
                  Watch on YouTube &middot; 4:28
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  <span className="sr-only"> &mdash; video, opens on YouTube in a new tab</span>
                </span>
              </Card>
            </a>

            <a
              href="https://pittsburghpanthers.com/honors/pitt-athletics-hall-of-fame/bobby-grier/44"
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <Card variant="solid" className="p-8 h-full group-hover:border-crimson transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center mb-6 text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase text-crimson block mb-1">Institutional Honor</span>
                <h4 className="text-xl font-heading text-white mb-2">Hall of Fame Enshrinement</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                  Permanent induction into the University of Pittsburgh Athletics Hall of Fame with full honors.
                </p>
                <span className="inline-flex items-center text-xs font-heading text-crimson uppercase tracking-wider group-hover:text-white transition-colors">
                  View Hall of Fame Profile
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  <span className="sr-only"> &mdash; opens pittsburghpanthers.com in a new tab</span>
                </span>
              </Card>
            </a>

            <Card variant="solid" className="p-8 group hover:border-crimson transition-colors">
              <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-crimson group-hover:text-crimson transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Curricular Impact</span>
              <h4 className="text-xl font-heading text-white mb-2">Educational Curriculum</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                Academic case studies and university leadership curricula teaching ethical decision-making in athletics.
              </p>
              <span className="text-xs font-heading text-white uppercase tracking-wider">Collegiate Syllabus Adoption</span>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. INDEPENDENT PRESS COVERAGE */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-deep-navy via-true-black to-true-black border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            category="Independent Coverage"
            title="In The National Press"
            subtitle="Outlets that reported this story on their own. Commissioned media proves a budget; independent coverage proves the narrative was worth recovering."
          />

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {PRESS_COVERAGE.map(({ outlet, headline, medium, duration, url, note }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline py-6 px-2 -mx-2 rounded-sm hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-true-black"
                >
                  <span className="sm:col-span-3 text-xs font-heading uppercase tracking-widest text-crimson">
                    {outlet}
                  </span>

                  <span className="sm:col-span-7 text-sm md:text-base text-gray-200 font-light leading-snug group-hover:text-white transition-colors">
                    {headline}
                    {note && (
                      <span className="block mt-1.5 text-xs text-gray-500 italic font-light">
                        {note}
                      </span>
                    )}
                  </span>

                  <span className="sm:col-span-2 inline-flex items-center sm:justify-end text-[11px] font-mono uppercase tracking-wider text-gray-500 group-hover:text-crimson transition-colors">
                    {medium}
                    {duration && <span className="ml-1.5 normal-case">{duration}</span>}
                    <ArrowUpRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    <span className="sr-only"> &mdash; opens in a new tab</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 px-6 md:px-8 bg-crimson text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            Discover Your Institution’s Bobby Grier
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Every athletic program has pioneers whose stories remain unwritten. Let us help you uncover and immortalize your founding legends.
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
