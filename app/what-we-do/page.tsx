import React from 'react';
import type { Metadata } from 'next';
import { Search, ShieldCheck, Lock, Package, Megaphone } from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { ProcessStepper } from '@/components/ProcessStepper';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'What We Do | Playmakxrs',
  description:
    'We recover, verify, protect, package and activate overlooked sports history — under a Rights Before Reach standard that clears consent before anything is published.',
};

const capabilities = [
  {
    verb: 'Recover',
    Icon: Search,
    body: 'Locate and authenticate what survives — archives, correspondence, contemporaneous press, institutional files, and the people who remember.',
  },
  {
    verb: 'Verify',
    Icon: ShieldCheck,
    body: 'Establish what actually happened and who holds the rights to it, documenting gaps and contradictions rather than papering over them.',
  },
  {
    verb: 'Protect',
    Icon: Lock,
    body: 'Secure chain-of-title and written family consent, and settle ownership between institution, estate and Playmakxrs before any release.',
  },
  {
    verb: 'Package',
    Icon: Package,
    body: 'Build the durable artifacts — hardcover books, documentary footage, exhibits, curricula — rather than content with a two-week shelf life.',
  },
  {
    verb: 'Activate',
    Icon: Megaphone,
    body: 'Place the work where it compounds: national press, game-week recognition, enshrinement, classrooms, and partner campaigns.',
  },
];

const faqs: FAQItem[] = [
  {
    question: 'How does Playmakxrs differ from our in-house Sports Information / SID department?',
    answer: 'Your SID and media teams excel at immediate game-day coverage, stats tracking, and social media recaps. Playmakxrs operates as an outside forensic legacy studio. We handle the deep, time-intensive work: researching archival rights, tracking down families and estate representatives, verifying historical chain-of-title, and producing published books, museum collections, and network documentaries that your in-house staff does not have the bandwidth to execute.',
  },
  {
    question: 'What is the required time commitment from university athletic staff during the pilot?',
    answer: 'We design the 90–120 Day INI Pilot to be low-friction for campus personnel. Your team typically participates in one 60-minute discovery call and facilitates introductions to archival contacts or relevant alumni. Playmakxrs does 90% of the heavy lifting across research, interviews, legal chain-of-title, and production.',
  },
  {
    question: 'Who owns the intellectual property and media produced during the partnership?',
    answer: 'Through our Rights Before Reach framework, all underlying trademarks and institutional marks remain 100% university property, while the family’s estate retains moral rights and agreed commercial participation. Playmakxrs establishes clear tripartite agreements so there is never ambiguity, risk, or disputes over ownership.',
  },
  {
    question: 'How does narrative capital complement our current NIL initiatives?',
    answer: 'While NIL deals are transactional and change annually with the transfer portal, legacy narrative capital is permanent. It provides a timeless foundation that recruits and their families look to when choosing an institution. Honoring historic pioneers shows modern athletes that your university will care for their legacy for a lifetime.',
  },
  {
    question: 'What are the specific deliverables at the conclusion of the pilot?',
    answer: 'You receive a complete Narrative Capital Audit, an Archival Asset Map, a cleared Rights & Risk Analysis, a comprehensive 12-Month Activation Blueprint, and executive briefing presentations ready for Athletic Directors, Presidents, and Board of Trustees reviews.',
  },
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
            FIVE THINGS, IN ORDER
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Recover, verify, protect, package, activate. The order matters more than any single step — publishing before the rights are settled is how most of these efforts fail.
          </p>
        </div>
      </section>

      {/* 2. CAPABILITIES */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {capabilities.map(({ verb, Icon, body }, i) => (
              <li
                key={verb}
                className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8 items-start py-8"
              >
                <div className="sm:col-span-4 flex items-center gap-4">
                  <div className="w-11 h-11 flex-shrink-0 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-xl md:text-2xl font-heading text-white">{verb}</h2>
                  </div>
                </div>
                <p className="sm:col-span-8 text-sm md:text-base text-gray-400 font-light leading-relaxed">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. RIGHTS BEFORE REACH */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-crimson">
            Proprietary Standard
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-white mt-3 mb-6">
            RIGHTS BEFORE REACH
          </h2>
          <div className="w-20 h-1 bg-crimson mx-auto mb-8" />
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed mb-6">
            Most storytelling efforts fail before they begin, because institutions rush to publish without clarifying estate rights, name-image-likeness permissions, or family alignment.
          </p>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
            We secure clear, verified, consensus-driven chain-of-title with estates and descendants <strong className="text-white font-normal">before a single word is published</strong>. Institutional marks remain institutional property. Families retain moral rights and agreed participation. Nobody is surprised later by how a story gets used.
          </p>
          <div className="pt-8">
            <Button href="/rights-governance" variant="outline">
              Read the Rights Governance Standard
            </Button>
          </div>
        </div>
      </section>

      {/* 4. THE PILOT */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Engagement Architecture"
            title="The 90–120 Day Pilot"
            subtitle="A fixed-scope, low-friction engagement that proves narrative value before anyone commits to a program."
          />
          <ProcessStepper />
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            category="Frequently Asked"
            title="Practical Questions"
            subtitle="What institutions ask before committing to a pilot."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 px-6 md:px-8 bg-crimson text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            See It Done Once
          </h2>
          <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
            The Bobby Grier story is the full model executed end to end — recovered, verified, published, enshrined, and covered nationally.
          </p>
          <div className="pt-4">
            <Button href="/our-proof" variant="secondary" className="!bg-white !text-crimson hover:!bg-gray-100 font-bold">
              See Our Proof
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
