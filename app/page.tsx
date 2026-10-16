import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Heart, Handshake } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';
import { FeaturedIn } from '@/components/FeaturedIn';
import { AUDIENCES } from '@/lib/audiences';

const ICONS = [Building2, Heart, Handshake];

/**
 * The five public verbs. Outcomes only — what each stage is for, never how it
 * is carried out. The methods behind them are proprietary and deliberately
 * absent from the public site.
 */
const CAPABILITIES = [
  { verb: 'Discover', body: 'what may be overlooked.' },
  { verb: 'Verify', body: 'what can be trusted.' },
  { verb: 'Protect', body: 'what should not be separated from its source.' },
  { verb: 'Activate', body: 'what can responsibly create value.' },
  { verb: 'Preserve', body: 'what should endure.' },
];

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
              YOU MAY ALREADY OWN<br />
              THE VALUE YOU&rsquo;RE<br />
              <span className="text-crimson">LOOKING FOR.</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-4 max-w-xl font-light leading-relaxed">
              Playmakxrs&trade; helps institutions discover what they cannot yet see.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl font-light leading-relaxed">
              We build Narrative Infrastructure&trade; that makes overlooked meaning visible, verifiable, protected and usable, then helps turn it into human connection and enduring institutional value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/what-we-do" variant="primary">
                Explore What We Do
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

      {/* 3. HIDING IN PLAIN SIGHT */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-8 leading-tight">
            VALUABLE ASSETS ARE OFTEN HIDING IN PLAIN SIGHT
          </h2>
          <div className="w-20 h-1 bg-crimson mx-auto mb-8" />
          <div className="space-y-5 text-base md:text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Institutions already possess extraordinary people, achievements, archives, traditions, discoveries, relationships and defining moments.
            </p>
            <p>
              Yet valuable meaning can become scattered across departments, families, archives, platforms and rights holders. Some assets are overlooked. Others are understood too narrowly. Some are difficult to verify. Others are exposed before they are properly protected.
            </p>
            <p className="text-white">
              Playmakxrs helps institutions recognize what matters, establish confidence in what is true, and create responsible pathways for what comes next.
            </p>
          </div>
          <blockquote className="mt-12 border-l-2 border-crimson pl-6 text-left">
            <p className="font-serif-heading italic text-xl md:text-2xl text-gold leading-snug">
              You cannot activate value you have not learned how to see.
            </p>
          </blockquote>
        </div>
      </section>

      {/* 4. THE MEANING GAP */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-wider text-crimson">
            The Meaning Gap&trade;
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-white mt-3 mb-8 leading-tight">
            MORE CONTENT DOES NOT ALWAYS CREATE MORE CONNECTION
          </h2>
          <div className="space-y-5 text-base md:text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Organizations produce more media, campaigns, events, sponsorships and communications than ever. But activity is not the same as meaning.
            </p>
            <p>
              The Meaning Gap is the distance between what an institution possesses or produces and what gives people a durable reason to care.
            </p>
            <p className="text-white">Playmakxrs helps close that gap.</p>
          </div>
        </div>
      </section>

      {/* 5. NARRATIVE OBSERVABILITY */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-wider text-crimson">
            Narrative Observability&trade;
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-white mt-3 mb-8 leading-tight">
            WHAT IF THE VALUE ALREADY EXISTS?
          </h2>
          <div className="space-y-5 text-base md:text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Institutions are excellent at measuring what they already know to measure. Revenue. Attendance. Reach. Engagement. Donations. Performance.
            </p>
            <p>
              But important forms of value can remain invisible when no one is looking through the right lens. Narrative Observability helps institutions recognize overlooked meaning and understand where it may strengthen identity, belonging, trust, affinity and long-term value.
            </p>
            <p className="text-white">
              The asset may already exist. The institution may simply not see what it can become.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHAT WE DO */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            category="What We Do"
            title="From Overlooked Meaning to Enduring Value"
            subtitle="Playmakxrs helps institutions and rights holders:"
          />
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {CAPABILITIES.map(({ verb, body }) => (
              <li key={verb} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-5">
                <span className="text-xl md:text-2xl font-heading text-crimson w-32 shrink-0">
                  {verb}
                </span>
                <span className="text-base md:text-lg text-gray-300 font-light">{body}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 font-light leading-relaxed mt-8">
            Our broader operating methods, analytical frameworks and engagement architecture are proprietary.
          </p>
        </div>
      </section>

      {/* 7. FOUNDING PROOF */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
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
              Founding Proof
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              THE BOBBY GRIER STORY&trade;
            </h2>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
              What began as an important moment in American sports history revealed something larger: one verified Origin Asset&trade; can connect history, athletics, education, institutional identity, community, media and future opportunity.
            </p>
            <p className="text-base md:text-lg text-white font-light leading-relaxed">
              The value was already there. The infrastructure helped make more of it visible.
            </p>
            <div className="pt-2">
              <Button href="/our-proof" variant="primary">
                Explore Our Proof
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHO WE SERVE */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading category="Who We Serve" title="Who We Serve" />
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
                    <h3 className="text-xl md:text-2xl font-heading text-white mb-4">
                      {audience.label}
                    </h3>
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

      {/* 9. START WITH WHAT MATTERS */}
      <section className="py-24 px-6 md:px-8 bg-crimson text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            Start With What Matters
          </h2>
          <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
            You do not need a finished project. You may have a person, achievement, archive, anniversary, discovery, institutional first, family legacy or opportunity you cannot yet define.
          </p>
          <p className="text-base md:text-lg text-white font-light leading-relaxed">
            Tell us what you are trying to understand.
          </p>
          <div className="pt-4">
            <Button
              href="/contact"
              variant="secondary"
              className="!bg-white !text-crimson hover:!bg-gray-100 font-bold"
            >
              Start the Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
