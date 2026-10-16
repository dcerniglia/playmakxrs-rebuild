import React from 'react';
import type { Metadata } from 'next';
import { Shirt, Award, Check } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';

/**
 * The storefront is hosted on Shopify. Its own navigation points back to
 * playmakxrs.com, so this link stays correct once this site is promoted.
 */
const SHOPIFY_STORE_URL = 'https://playmakxrs.myshopify.com';

export const metadata: Metadata = {
  title: 'The Collection | Playmakxrs',
  description:
    'Hardcovers, heritage apparel, and archival replicas produced in limited runs. A physical extension of The Bobby Grier Story.',
};

const principles = [
  'Purpose over volume',
  'Simplicity over statement',
  'Quality over novelty',
  'Meaning over messaging',
];

export default function CollectionPage() {
  return (
    <div className="flex flex-col w-full bg-true-black">
      {/* 1. HERO */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-deep-navy via-true-black to-true-black border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-heading tracking-widest text-xs md:text-sm text-gold uppercase font-semibold mb-4 inline-block">
            A Way to Participate
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white mb-6">
            THE COLLECTION
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            For those who wish to carry the story forward in a tangible way. Each piece is designed with the same care and restraint that guides our storytelling.
          </p>
          <div className="pt-8">
            <Button href={SHOPIFY_STORE_URL} variant="gold">
              View the Collection
            </Button>
          </div>
        </div>
      </section>

      {/* 2. WHY IT EXISTS */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <SectionHeading
            category="Why It Exists"
            title="A Physical Extension of the Story"
            subtitle="For some, engaging with the story through reading or conversation is enough. For others, wearing or sharing a piece becomes a way to remain connected over time."
            accentColor="gold"
          />
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
            The collection extends The Bobby Grier Story into objects, built with no spectacle, no trend, and no excess. Each item is produced in limited runs and designed to endure.
          </p>
        </div>
      </section>

      {/* 3. THE BOOK — the origin piece the rest of the collection extends */}
      <section
        id="the-book"
        className="scroll-mt-28 py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Cover */}
          <div className="lg:col-span-5 flex justify-center">
            <img
              src="/assets/book-cover.jpg"
              alt="Front cover of the hardcover book No Grier, No Game by Rob and Camille Grier"
              width={768}
              height={1151}
              loading="lazy"
              decoding="async"
              className="w-full max-w-sm h-auto rounded-sm shadow-2xl border border-white/10"
            />
          </div>

          {/* Detail */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-gold">
              Where It Started &middot; Available Now
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              No Grier, No Game
            </h2>
            <p className="font-serif-heading italic text-lg md:text-xl text-gold leading-snug">
              How Bobby Grier and the Sugar Bowl Showdown Changed American Sports History
            </p>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              The authoritative account of the 1956 Sugar Bowl, written with the historical integrity the moment deserves. An Amazon Best Seller, and the foundation from which the rest of the Bobby Grier record was rebuilt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                href="https://www.amazon.com/No-Grier-Game-Showdown-American/dp/196937246X/ref=tmm_hrd_swatch_0"
                variant="gold"
              >
                Order on Amazon
              </Button>
              <Button
                href="https://www.barnesandnoble.com/w/no-grier-no-game-rob-grier/1148515839"
                variant="secondary"
              >
                Barnes &amp; Noble
              </Button>
            </div>
            <p className="text-xs text-gray-500 font-light pt-2">
              Hardcover. Also available through university programs and institutional events.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE RANGE */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="The Range"
            title="Made to Outlast the Moment"
            subtitle="Extensions of the same record, each tied directly to verified history rather than invented branding."
            accentColor="gold"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card variant="gold" className="p-8 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                <Shirt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-white mb-2">Heritage Apparel</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Heavyweight melton wool, chenille lettering, and authentic embroidery. Drawn from the period, not a trend cycle.
              </p>
            </Card>

            <Card variant="gold" className="p-8 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-white mb-2">Archival Replicas</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Museum-grade reproductions of commemorative programs and enshrinement honors, suited to alumni and donor gifts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. WHAT GUIDES IT */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            category="Operating Principles"
            title="What Guides the Collection"
            accentColor="gold"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center space-x-3 bg-card-dark border border-white/10 p-5 rounded-sm"
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm text-gray-200 font-light">{principle}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 pl-6 md:pl-8 border-l-4 border-gold">
            <h3 className="font-heading text-lg text-white mb-2">A Note on Proceeds</h3>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Proceeds support the continued preservation and stewardship of authentic American legacy stories. This is participation, not promotion.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-[#1E180A] via-[#2A210C] to-[#1E180A] border-t border-gold/30 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif-heading font-semibold text-white">
            Explore the Collection
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            No urgency. No pressure. Only intention.
          </p>
          <div className="pt-4">
            <Button href={SHOPIFY_STORE_URL} variant="gold">
              View the Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
