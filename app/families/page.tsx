import React from 'react';
import Link from 'next/link';
import { BookOpen, Shirt, ShieldCheck, Heart, Sparkles, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';

export default function FamiliesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-true-black via-[#16130B] to-true-black border-b border-gold/20 text-center relative">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-heading text-sm tracking-widest uppercase mb-4 inline-block font-semibold">
            For Families, Athletes, & Estates
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-heading font-semibold text-white mb-6">
            Where Legacy Lives Forever.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Helping families protect their pioneer’s name, organize precious archival assets, and create permanent, dignified storytelling pathways that honor generational sacrifice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="gold">
              Protect Your Family Legacy
            </Button>
            <Button href="/about" variant="secondary" className="!border-gold/40 hover:!border-gold">
              The Grier Family Proof Case
            </Button>
          </div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS OF LEGACY */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Enduring Pathways"
            title="Three Pillars of Family Preservation"
            subtitle="How we transform oral memories and vintage relics into enduring physical and cultural milestones."
            accentColor="gold"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Book Publishing */}
            <Card variant="gold" className="p-8 md:p-10 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-serif-heading text-white mb-2">Book Publishing</h3>
                <div className="w-12 h-[1px] bg-gold mb-6" />
                <span className="font-heading text-gold text-xs tracking-widest uppercase block mb-3 font-semibold">
                  Tell Their Complete Story
                </span>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                  We capture oral histories from living family members, review personal correspondence and journals, and publish authoritative, beautifully bound hardcover books distributed nationally on Amazon, Barnes & Noble, and collegiate bookstores.
                </p>
              </div>
              <div className="text-xs text-gray-300 space-y-1.5 pt-4 border-t border-white/10">
                <p>• Amazon Best-Seller Campaign Structuring</p>
                <p>• Library of Congress & Academic Indexing</p>
                <p>• Full Estate Approval on Every Chapter</p>
              </div>
            </Card>

            {/* Pillar 2: Authentic Apparel & Memorabilia */}
            <Card variant="gold" className="p-8 md:p-10 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                  <Shirt className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-serif-heading text-white mb-2">Heritage Apparel</h3>
                <div className="w-12 h-[1px] bg-gold mb-6" />
                <span className="font-heading text-gold text-xs tracking-widest uppercase block mb-3 font-semibold">
                  Wear Your History
                </span>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                  We design museum-grade, vintage-inspired letterman jackets, throwback jerseys, caps, and historical pins that allow fans, alumni, and future generations to physically wear and cherish your family’s history.
                </p>
              </div>
              <div className="text-xs text-gray-300 space-y-1.5 pt-4 border-t border-white/10">
                <p>• Premium Wool & Leather Craftsmanship</p>
                <p>• Official Trademark & University Licensing</p>
                <p>• Generational Merchandise Royalty Models</p>
              </div>
            </Card>

            {/* Pillar 3: Estate Rights Protection */}
            <Card variant="gold" className="p-8 md:p-10 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-serif-heading text-white mb-2">Rights Governance</h3>
                <div className="w-12 h-[1px] bg-gold mb-6" />
                <span className="font-heading text-gold text-xs tracking-widest uppercase block mb-3 font-semibold">
                  Secure Your Pioneer&apos;s Name
                </span>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                  We help families clarify estate authority, audit unauthorized uses of likeness, protect intellectual property, and negotiate formal partnership terms with university athletic departments and media producers.
                </p>
              </div>
              <div className="text-xs text-gray-300 space-y-1.5 pt-4 border-t border-white/10">
                <p>• Rights Before Reach Chain-of-Title</p>
                <p>• Estate Name-Image-Likeness Protection</p>
                <p>• University Co-Licensing Agreements</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. THE FAMILY FIRST GUARANTEE */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            category="Our Commitment"
            title="The Family First Guarantee"
            subtitle="Commercial storytelling must never come at the expense of family dignity, privacy, or moral ownership."
            accentColor="gold"
          />

          <div className="bg-card-dark border border-gold/40 p-8 md:p-12 rounded-sm space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 font-bold" />
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-1">100% Final Editorial Approval</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Not a single chapter, video frame, or merchandise piece is released without the express written approval of designated family trustees.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 font-bold" />
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-1">Permanent Digital Archiving</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  We provide high-resolution, archival-grade scanning of all family photographs, letters, telegrams, and scrapbooks, returning originals safely to your care.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 font-bold" />
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-1">Generational Commercial Rights</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Commercial returns from books, documentaries, and apparel flow transparently to the family estate to benefit descendants and educational foundations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 font-bold" />
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-1">Official University Enshrinement</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  We broker permanent campus recognitions, hall of fame inductions, and university archival exhibitions that permanently honor your pioneer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHYSICAL OBJECT SHOWCASE */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Physical Tangibility"
            title="Artifacts That Stand the Test of Time"
            subtitle="Real physical assets that families, universities, and alumni can hold in their hands."
            accentColor="gold"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/collection#the-book" className="block group h-full">
              <div className="bg-card-dark border border-white/10 p-6 rounded-sm text-center h-full group-hover:border-gold group-hover:-translate-y-1 transition-all duration-300">
                <div className="h-40 bg-true-black/60 rounded-sm mb-6 flex items-center justify-center border border-white/5 p-3">
                  <img
                    src="/assets/book-cover.jpg"
                    alt="No Grier, No Game hardcover"
                    width={768}
                    height={1151}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-auto object-contain rounded-sm"
                  />
                </div>
                <h4 className="font-heading text-white text-lg mb-1">Published Hardcovers</h4>
                <p className="text-xs text-gray-400 font-light">
                  Distributed through premier national book retailers.
                </p>
                <span className="inline-flex items-center justify-center text-[11px] font-heading uppercase tracking-wider text-gold group-hover:text-white transition-colors mt-4">
                  Order the Book
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link href="/collection" className="block group h-full">
              <div className="bg-card-dark border border-white/10 p-6 rounded-sm text-center h-full group-hover:border-gold group-hover:-translate-y-1 transition-all duration-300">
                {/* Placeholder until the Shopify store opens and real product imagery is available. */}
                <div className="h-40 bg-true-black/60 rounded-sm mb-6 flex items-center justify-center border border-white/5 font-heading text-crimson text-3xl font-bold">
                  #38
                </div>
                <h4 className="font-heading text-white text-lg mb-1">Vintage Letterman &amp; Jersey</h4>
                <p className="text-xs text-gray-400 font-light">
                  Heavyweight melton wool, chenille lettering, and authentic embroidery.
                </p>
                <span className="inline-flex items-center justify-center text-[11px] font-heading uppercase tracking-wider text-gold group-hover:text-white transition-colors mt-4">
                  View the Collection
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link href="/collection" className="block group h-full">
              <div className="bg-card-dark border border-white/10 p-6 rounded-sm text-center h-full group-hover:border-gold group-hover:-translate-y-1 transition-all duration-300">
                {/* Placeholder until the Shopify store opens and real product imagery is available. */}
                <div className="h-40 bg-true-black/60 rounded-sm mb-6 flex items-center justify-center border border-white/5 font-serif-heading text-gray-300 text-sm p-4">
                  1956 Sugar Bowl Commemorative Program
                </div>
                <h4 className="font-heading text-white text-lg mb-1">Archival Replicas</h4>
                <p className="text-xs text-gray-400 font-light">
                  Museum-grade historical reproductions for alumni and donor gifts.
                </p>
                <span className="inline-flex items-center justify-center text-[11px] font-heading uppercase tracking-wider text-gold group-hover:text-white transition-colors mt-4">
                  View the Collection
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <a
              href="https://pittsburghpanthers.com/honors/pitt-athletics-hall-of-fame/bobby-grier/44"
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <div className="bg-card-dark border border-white/10 p-6 rounded-sm text-center h-full group-hover:border-gold group-hover:-translate-y-1 transition-all duration-300">
                {/* Placeholder until real installation photography is available. */}
                <div className="h-40 bg-true-black/60 rounded-sm mb-6 flex items-center justify-center border border-white/5 font-serif-heading text-gold text-sm p-4">
                  Pitt Hall of Fame Induction Plaque
                </div>
                <h4 className="font-heading text-white text-lg mb-1">Enshrinement Honors</h4>
                <p className="text-xs text-gray-400 font-light">
                  Official university campus installations and stadium plaques.
                </p>
                <span className="inline-flex items-center justify-center text-[11px] font-heading uppercase tracking-wider text-gold group-hover:text-white transition-colors mt-4">
                  View the Profile
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  <span className="sr-only"> &mdash; opens pittsburghpanthers.com in a new tab</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-[#1E180A] via-[#2A210C] to-[#1E180A] border-t border-gold/30 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif-heading font-semibold text-white">
            Begin a Confidential Family Consultation
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Every sports pioneer deserves to have their full story known and protected for future generations. Let us discuss how to safeguard your family’s legacy.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="gold">
              Inquire as a Family or Athlete Estate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
