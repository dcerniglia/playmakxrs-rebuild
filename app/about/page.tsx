import React from 'react';
import Link from 'next/link';
import { Award, BookOpen, Film, FileText, XCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';

export default function AboutPage() {
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
            The Founding Case Study & Origin
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
            Bobby Grier wore jersey number 38 for the University of Pittsburgh Panthers. In late 1955, when Pitt accepted an invitation to face Georgia Tech in the Sugar Bowl at Tulane Stadium in New Orleans, the contest was instantly thrust into the vortex of the American civil rights movement.
          </p>

          <p>
            The Governor of Georgia, Marvin Griffin, issued an ultimatum demanding that Georgia Tech forfeit rather than allow a Black player to take the field against them in the segregated Deep South. Segregationist politicians and editorial boards across the region mobilized to block Pitt from boarding the train to Louisiana.
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
            The university leadership refused to buckle. The Pitt student body marched on the streets in solidarity, and even Georgia Tech students defied their own governor, rallying on their Atlanta campus in support of Grier and the matchup.
          </p>

          <p>
            On January 2, 1956, Bobby Grier stepped onto the field at Tulane Stadium, officially breaking the color barrier in the Sugar Bowl and altering the trajectory of collegiate athletic history forever.
          </p>

          <p>
            Decades later, despite the monumental significance of this breakthrough, the story had faded from popular national memory. The historical documentation was fragmented, unauthorized accounts misstated key facts, and the Grier family had never received the comprehensive institutional and commercial recognition the moment deserved.
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
              How Playmakxrs Rebuilt the Narrative Capital
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-light mb-4">
              Playmakxrs partnered directly with Bobby Grier and his family. Under our Rights Before Reach framework, we verified original historical telegrams, newspaper archives, and oral recollections, securing the official family chain-of-title.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              From this single foundation, we published the bestselling book, structured a national broadcast feature with Fox 5 Atlanta, coordinated the official enshrinement of Bobby Grier into the Pitt Athletics Hall of Fame, and developed campus educational curricula that continue to inspire collegiate athletes today.
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
            subtitle="How forensic verification and narrative packaging turn a single historical moment into a multi-format ecosystem."
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

      {/* 4. WHAT WE ARE NOT */}
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
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            Discover Your Institution’s Bobby Grier
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Every athletic program has pioneers whose stories remain unwritten. Let us help you uncover and immortalize your founding legends.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="secondary" className="!bg-white !text-crimson hover:!bg-gray-100 font-bold">
              Begin Institutional Narrative Discovery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
