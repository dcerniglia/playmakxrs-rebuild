import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Target, Layers, HelpCircle, ArrowRight, Building, GraduationCap, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';
import { ProcessStepper } from '@/components/ProcessStepper';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';

const institutionalFAQs: FAQItem[] = [
  {
    question: 'How does Playmakxrs differ from our in-house Sports Information / SID department?',
    answer: 'Your SID and media teams excel at immediate game-day coverage, stats tracking, and social media recaps. Playmakxrs operates as an outside forensic legacy studio. We handle the deep, time-intensive work: researching archival rights, tracking down families and estate representatives, verifying historical chain-of-title, and producing published books, museum collections, and network documentaries that your in-house staff does not have the bandwidth to execute.',
  },
  {
    question: 'What is the required time commitment from university athletic staff during the pilot?',
    answer: 'We design the 90–120 Day INI™ Pilot to be low-friction for campus personnel. Your team typically participates in one 60-minute discovery call and facilitates introductions to archival contacts or relevant alumni. Playmakxrs does 90% of the heavy lifting across research, interviews, legal chain-of-title, and production.',
  },
  {
    question: 'Who owns the intellectual property and media produced during the partnership?',
    answer: 'Through our Rights Before Reach™ framework, all underlying trademarks and institutional marks remain 100% university property, while the family’s estate retains moral rights and agreed commercial participation. Playmakxrs establishes clear tripartite agreements so there is never ambiguity, risk, or disputes over ownership.',
  },
  {
    question: 'How does narrative capital complement our current NIL initiatives?',
    answer: 'While NIL deals are transactional and change annually with the transfer portal, legacy narrative capital is permanent. It provides a timeless foundation that recruits and their families look to when choosing an institution. Honoring historic pioneers shows modern athletes that your university will care for their legacy for a lifetime.',
  },
  {
    question: 'What are the specific deliverables at the conclusion of the pilot?',
    answer: 'You receive a complete Narrative Capital™ Audit, an Archival Asset Map, a cleared Rights & Risk Analysis, a comprehensive 12-Month Activation Blueprint, and executive briefing presentations ready for Athletic Directors, Presidents, and Board of Trustees reviews.',
  },
];

export default function InstitutionsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-true-black via-deep-navy to-true-black border-b border-white/10 text-center relative">
        <div className="max-w-4xl mx-auto">
          <span className="text-crimson font-heading text-sm md:text-base tracking-widest uppercase mb-4 inline-block font-semibold">
            Institutional Narrative Infrastructure (INI™)
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white mb-6">
            THE DEFINITIVE PLATFORM FOR <br />
            <span className="text-crimson">UNIVERSITY ATHLETICS.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Empowering athletic departments and university leadership to recover, protect, and activate elite collegiate sports history with unmatched fidelity and performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="primary">
              Begin Institutional Inquiry
            </Button>
            <Button href="#process" variant="secondary">
              Review 5-Step Process
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience Matrix */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Strategic Stakeholders"
            title="Who We Serve Within The University"
            subtitle="Tailored narrative capital solutions designed to solve high-priority challenges for collegiate sports leaders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="solid" className="p-8 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center mb-6 text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-white mb-2">Athletic Directors</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Build durable competitive differentiation, elevate department prestige, and unite historic championships with forward-looking athletic strategy.
              </p>
            </Card>

            <Card variant="solid" className="p-8 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-crimson group-hover:text-crimson transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-white mb-2">Presidents & Trustees</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Safeguard institutional integrity, highlight landmark civil rights and barrier-breaking moments, and enrich campus-wide student belonging.
              </p>
            </Card>

            <Card variant="solid" className="p-8 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center mb-6 text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-white mb-2">Alumni & Donors</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Galvanize multi-generational loyalty, inspire capital gifts, and celebrate historic figures who established the tradition of excellence.
              </p>
            </Card>

            <Card variant="solid" className="p-8 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-crimson group-hover:text-crimson transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-white mb-2">Coaches & Recruits</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Provide recruits and their families undeniable proof that this university honors its legends and preserves their impact for life.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5-Step Process Stepper */}
      <section id="process" className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Engagement Architecture"
            title="The 5-Step Institutional Process"
            subtitle="From confidential discovery to high-visibility campus activation, our structured methodology guarantees clarity, speed, and safety."
          />

          <ProcessStepper />
        </div>
      </section>

      {/* Rights Before Reach Framework */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-6xl mx-auto bg-card-dark border-2 border-crimson/50 p-10 md:p-14 rounded-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase bg-crimson/20 text-crimson border border-crimson/30 px-3 py-1 rounded-sm mb-4 inline-block font-semibold">
              Proprietary Standard
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-white mb-6">
              RIGHTS BEFORE REACH™
            </h2>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed mb-6">
              Most storytelling efforts fail before they begin because institutions rush to publish content without clarifying underlying estate rights, name-image-likeness permissions, or family alignment.
            </p>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">
              Playmakxrs enforces Rights Before Reach™: we secure clear, verified, consensus-driven chain-of-title with athlete estates and family descendants before a single word is published. This protects your university from legal disputes, ensures ethical compliance, and builds unshakeable goodwill.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>Zero Chain-of-Title Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>Family Consensus First</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>NCAA & Trademark Cleared</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional FAQs Accordion */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Frequently Asked Questions"
            title="Institutional Clarifications"
            subtitle="Common inquiries from Athletic Directors, General Counsel, and University Presidents."
          />

          <FAQAccordion items={institutionalFAQs} />
        </div>
      </section>

      {/* Final Institutional CTA */}
      <section className="py-20 px-6 md:px-8 bg-true-black text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Schedule a Confidential Institutional Discovery Call
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Let us evaluate your athletic department’s narrative capital and outline how a 90–120 Day Pilot can transform your heritage into a permanent strategic advantage.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="primary">
              Begin Institutional Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
