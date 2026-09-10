import React from 'react';
import Link from 'next/link';
import { Tv, Radio, Newspaper, Landmark, Check, X, Shield, BarChart3, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';
import { MetricCard } from '@/components/MetricCard';

export default function PartnersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-true-black via-deep-navy to-true-black border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-crimson font-heading text-sm tracking-widest uppercase mb-4 inline-block font-semibold">
                Sponsors, Brands, & Media Networks
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white mb-6">
                CONNECT WITH THE WORLD&apos;S LEADING <br />
                <span className="text-crimson">SPORTS ECOSYSTEM.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-2xl">
                Align your brand with verified, rights-cleared, emotionally resonant sports milestones that command organic audience trust and deliver permanent brand equity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary">
                  Explore Partnership Opportunities
                </Button>
                <Button href="#capabilities" variant="secondary">
                  Media Capabilities
                </Button>
              </div>
            </div>

            {/* Live Metrics Showcase */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MetricCard
                value="350M+"
                label="Audience Reach"
                subtext="Organic impressions across national broadcast, streaming, and publishing channels."
                badge="Verified Reach"
              />
              <MetricCard
                value="8.4x"
                label="Engagement Depth"
                subtext="Higher audience attention retention compared to standard commercial athletic advertising."
                badge="Audience Retention"
              />
              <MetricCard
                value="100%"
                label="Brand Safety"
                subtext="Zero risk of off-field scandals or transfer portal volatility."
                badge="Sponsor-Safe"
              />
              <MetricCard
                value="50+"
                label="Global Activations"
                subtext="Multi-city collegiate and stadium activations uniting community leaders."
                badge="Multi-Market"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPONSOR-SAFE MEANING FRAMEWORK */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Strategic Brand Value"
            title="Sponsor-Safe Meaning™"
            subtitle="Why leading brands are pivoting from volatile athlete sponsorships to permanent cultural heritage."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="solid" className="p-8">
              <div className="w-12 h-12 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center mb-6 text-crimson">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-white mb-3">Impenetrable Brand Safety</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Active athlete endorsements carry constant exposure to social controversies, NCAA investigations, or team transfers. Pioneer legacy stories are historically resolved, noble, and permanently respected.
              </p>
            </Card>

            <Card variant="solid" className="p-8">
              <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-white mb-3">Compounding Media Longevity</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                A 30-second TV spot or jersey patch expires the moment the final buzzer sounds. Hardcover books, documentary films, and hall of fame plaques generate positive brand impressions for decades.
              </p>
            </Card>

            <Card variant="solid" className="p-8">
              <div className="w-12 h-12 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center mb-6 text-crimson">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-white mb-3">Cross-Generational Appeal</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Historic milestones unite grandparent alumni, working professionals, and current collegiate students around shared university pride and courage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIP COMPARISON MATRIX */}
      <section className="py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            category="Clear Boundaries"
            title="What Partnership Is vs. What It Is Not"
            subtitle="We establish unambiguous operational guidelines to ensure every corporate partnership is authentic and impactful."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Partnership Is */}
            <div className="bg-card-dark border-2 border-crimson/60 p-8 rounded-sm">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-full bg-crimson/20 text-crimson flex items-center justify-center">
                  <Check className="w-5 h-5 font-bold" />
                </div>
                <h3 className="text-2xl font-heading text-white tracking-wide">Partnership Is</h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 mt-2" />
                  <span><strong>Permanent Brand Equity:</strong> Associating with verified historical milestones that audiences cherish.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 mt-2" />
                  <span><strong>Multi-Platform Content Integration:</strong> Presenting sponsor credits on documentaries, books, and podcasts.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 mt-2" />
                  <span><strong>Community & Campus Engagement:</strong> Meaningful participation in university leadership symposia and student initiatives.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 mt-2" />
                  <span><strong>Rights-Cleared Safety:</strong> Full indemnification backed by our tripartite Rights Before Reach™ framework.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Partnership Is Not */}
            <div className="bg-card-dark border border-white/10 p-8 rounded-sm">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-full bg-white/10 text-gray-400 flex items-center justify-center">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-heading text-gray-300 tracking-wide">Partnership Is Not</h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-400 font-light">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0 mt-2" />
                  <span><strong>Disposable Advertising:</strong> We do not sell ephemeral 30-second ad slots or temporary arena banner signage.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0 mt-2" />
                  <span><strong>Hollow PR Slogans:</strong> We do not manufacture artificial corporate social responsibility campaigns.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0 mt-2" />
                  <span><strong>Uncontrolled Endorsements:</strong> We do not broker unpredictable influencer deals with active collegiate athletes.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0 mt-2" />
                  <span><strong>Unchecked Commercial Exploitation:</strong> Family estates retain moral governance over brand placement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEDIA CAPABILITIES SHOWCASE */}
      <section id="capabilities" className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Content Capabilities"
            title="Multi-Platform Story Delivery"
            subtitle="Full-cycle production and distribution across broadcast, digital, print, and live sports environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="solid" className="p-8">
              <div className="w-12 h-12 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center mb-6 text-crimson">
                <Tv className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-heading text-white mb-2">Documentary Features</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Feature-length documentary films and television specials developed for premiere sports streaming networks.
              </p>
            </Card>

            <Card variant="solid" className="p-8">
              <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
                <Radio className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-heading text-white mb-2">Narrative Podcasts</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Serialized investigative audio documentary series tracing civil rights and athletic breakthroughs.
              </p>
            </Card>

            <Card variant="solid" className="p-8">
              <div className="w-12 h-12 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center mb-6 text-crimson">
                <Newspaper className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-heading text-white mb-2">Published Books</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Hardcover biographies and commemorative photo journals distributed nationally via Amazon and university bookstores.
              </p>
            </Card>

            <Card variant="solid" className="p-8">
              <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
                <Landmark className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-heading text-white mb-2">Stadium & Campus Events</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Halftime enshrinement ceremonies, educational symposiums, and commemorative game-day activations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 px-6 md:px-8 bg-crimson text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white">
            Align Your Brand With History
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with Playmakxrs to co-create permanent, emotionally credible sports storytelling assets that your customers will celebrate.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="secondary" className="!bg-white !text-crimson hover:!bg-gray-100 font-bold">
              Inquire as a Corporate or Media Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
