import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Building2, Users, Handshake, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-true-black overflow-hidden border-b border-white/10">
        {/* Background Vintage Player Image with Gradient Overlay */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[80%] lg:w-[75%] bg-no-repeat bg-cover opacity-60 mix-blend-luminosity filter contrast-125"
          style={{
            backgroundImage: "url('/assets/hero_landing.png')",
            backgroundPosition: "left center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-true-black via-true-black/80 via-35% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-true-black via-transparent to-true-black/40 z-10 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-10 lg:py-12 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-crimson/15 border border-crimson/30 px-3.5 py-1.5 rounded-sm mb-3.5">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              <span className="text-crimson font-heading text-xs tracking-widest uppercase font-semibold">
                The Era of Legends
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight text-white mb-4">
              THE FAMILY IS THE SOURCE.<br />
              THE INSTITUTION IS THE PLATFORM.<br />
              <span className="text-crimson">PLAYMAKXRS IS THE BRIDGE.</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-2xl font-light leading-relaxed">
              We help athletic departments, legacy families, and partners recover, verify, protect, package, and activate overlooked sports narrative capital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#pathways" variant="primary">
                Explore The 3 Pathways
              </Button>
              <Button href="/about" variant="secondary">
                The Founding Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR PATHWAY (THE THREE LANES) */}
      <section id="pathways" className="scroll-mt-28 py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="Strategic Alignment"
            title="Choose Your Pathway"
            subtitle="Tailored frameworks designed specifically for university athletics, family estates, and corporate partners."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lane 1: Institutions */}
            <Link href="/institutions" className="block group h-full">
              <Card variant="solid" className="p-8 md:p-10 flex flex-col justify-between h-full group-hover:-translate-y-1.5 group-hover:border-crimson/50 transition-all duration-300 cursor-pointer">
                <div>
                  <div className="w-14 h-14 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-crimson group-hover:bg-crimson/10 transition-colors">
                    <Building2 className="w-7 h-7 text-crimson" />
                  </div>
                  <span className="text-xs font-mono uppercase text-crimson tracking-wider">Lane 01</span>
                  <h3 className="text-2xl font-heading text-white mt-1 mb-4">
                    For Institutions
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Empowering university athletic directors and presidents to recover verified history that strengthens recruiting, alumni donor engagement, student belonging, and game-week activation.
                  </p>
                  <div className="space-y-2.5 mb-8 text-xs text-gray-300">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      <span>Rights Before Reach Framework</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      <span>5-Step Institutional Build Stepper</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      <span>90–120 Day INI Pilot Deployment</span>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center text-sm font-heading tracking-wider uppercase text-crimson group-hover:text-white transition-colors pt-2">
                  Institutional Overview <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>

            {/* Lane 2: Families */}
            <Link href="/families" className="block group h-full">
              <Card variant="gold" className="p-8 md:p-10 flex flex-col justify-between h-full group-hover:-translate-y-1.5 group-hover:border-gold transition-all duration-300 cursor-pointer">
                <div>
                  <div className="w-14 h-14 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/20 transition-colors">
                    <Users className="w-7 h-7 text-gold" />
                  </div>
                  <span className="text-xs font-mono uppercase text-gold tracking-wider">Lane 02</span>
                  <h3 className="text-2xl font-heading text-white mt-1 mb-4">
                    For Families & Athletes
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Protecting legacy, clarifying legal rights, organizing oral histories and archival relics, and building permanent, dignified commercial pathways honoring your family’s pioneer.
                  </p>
                  <div className="space-y-2.5 mb-8 text-xs text-gray-300">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>Archival Verification & Digitization</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>Book Publishing & Documentaries</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>100% Family Governance Control</span>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center text-sm font-heading tracking-wider uppercase text-gold group-hover:text-white transition-colors pt-2">
                  Family & Estate Roadmap <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>

            {/* Lane 3: Sponsors */}
            <Link href="/partners" className="block group h-full">
              <Card variant="solid" className="p-8 md:p-10 flex flex-col justify-between h-full group-hover:-translate-y-1.5 group-hover:border-crimson/50 transition-all duration-300 cursor-pointer">
                <div>
                  <div className="w-14 h-14 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-crimson group-hover:bg-crimson/10 transition-colors">
                    <Handshake className="w-7 h-7 text-crimson" />
                  </div>
                  <span className="text-xs font-mono uppercase text-crimson tracking-wider">Lane 03</span>
                  <h3 className="text-2xl font-heading text-white mt-1 mb-4">
                    Sponsors & Media
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Connecting corporate brands and broadcast networks with verified, rights-cleared, emotional sports moments that hold generational resonance and zero brand safety risk.
                  </p>
                  <div className="space-y-2.5 mb-8 text-xs text-gray-300">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      <span>350M+ Organic Audience Reach</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      <span>Sponsor-Safe Meaning Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      <span>Multi-Platform Co-Branded Media</span>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center text-sm font-heading tracking-wider uppercase text-crimson group-hover:text-white transition-colors pt-2">
                  Partnership Ecosystem <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. THE NARRATIVE CAPITAL PROBLEM & OPPORTUNITY */}
      <section className="py-24 px-6 md:px-8 bg-true-black border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            category="The Industry Shift"
            title="The Narrative Capital Imperative"
            subtitle="In an era of relentless NIL turbulence and institutional commodification, permanent legacy is a university's most undervalued asset."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card-dark border-l-4 border-crimson p-8 rounded-r-sm">
              <span className="text-xs font-mono text-gray-500 uppercase">The Challenge</span>
              <h4 className="text-xl font-heading text-white mt-1 mb-3">
                Unclaimed Historical Archives
              </h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Pioneering moments, barrier-breaking athletes, and institutional milestones are scattered across dusty storage rooms, fading oral memories, and unindexed film rolls.
              </p>
            </div>

            <div className="bg-card-dark border-l-4 border-white/40 p-8 rounded-r-sm">
              <span className="text-xs font-mono text-gray-500 uppercase">The Shift</span>
              <h4 className="text-xl font-heading text-white mt-1 mb-3">
                NIL Volatility vs. Heritage
              </h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Active athlete endorsements are transient, volatile, and high-risk. True narrative capital provides permanent, unassailable emotional equity that compounds over decades.
              </p>
            </div>

            <div className="bg-card-dark border-l-4 border-crimson p-8 rounded-r-sm">
              <span className="text-xs font-mono text-gray-500 uppercase">The Solution</span>
              <h4 className="text-xl font-heading text-white mt-1 mb-3">
                Rights-Protected Infrastructure
              </h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Playmakxrs establishes clear chain-of-title, family consensus, and verified historical documentation before a single story is activated publicly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PLAYMAKXRS MODEL: SOURCE -> PLATFORM -> BRIDGE (TOP CURTAIN) */}
      <section className="relative z-30 py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10 shadow-[0_35px_60px_-10px_rgba(0,0,0,0.95)] lg:min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeading
            category="Architectural Framework"
            title="The Playmakxrs Triad"
            subtitle="How narrative capital transforms from private memory into institutional power and commercial reach."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {/* Step 1: The Family */}
            <div className="bg-card-dark border border-white/10 p-8 rounded-sm text-center relative flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <span className="text-xs font-mono uppercase text-gold">Originator</span>
              <h3 className="text-2xl font-heading text-white mt-1 mb-3">
                1. The Family (The Source)
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Preserves personal artifacts, letters, oral histories, and family pride. Retains absolute moral authority and approval over the pioneer’s narrative.
              </p>
            </div>

            {/* Step 2: The Bridge */}
            <div className="bg-card-dark border-2 border-crimson p-8 rounded-sm text-center relative flex flex-col items-center shadow-xl shadow-crimson/10">
              <div className="w-16 h-16 rounded-full bg-crimson/10 border border-crimson flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-crimson" />
              </div>
              <span className="text-xs font-mono uppercase text-crimson">Catalyst</span>
              <h3 className="text-2xl font-heading text-white mt-1 mb-3">
                2. Playmakxrs (The Bridge)
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Applies Rights Before Reach methodology, historical forensic verification, book publishing, documentary production, and commercial structuring.
              </p>
            </div>

            {/* Step 3: The Institution */}
            <div className="bg-card-dark border border-white/10 p-8 rounded-sm text-center relative flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs font-mono uppercase text-gray-400">Amplifier</span>
              <h3 className="text-2xl font-heading text-white mt-1 mb-3">
                3. The Institution (The Platform)
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Provides the stadium, campus, global alumni network, media spotlight, and game-week activation that enshrines the story permanently into collegiate lore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE FOUNDING PROOF CASE SPOTLIGHT (UNDERNEATH SECTION 4 - REVEALED AS SECTION 4 LIFTS) */}
      <div className="relative z-10 lg:-mt-[calc(100vh-80px)] lg:h-[calc(200vh-160px)]">
        <section className="relative lg:sticky lg:top-[80px] py-16 md:py-24 px-6 md:px-8 bg-true-black border-b border-white/10 overflow-hidden flex items-center lg:min-h-[calc(100vh-80px)]">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 text-crimson font-heading text-xs uppercase tracking-widest">
                  <Award className="w-4 h-4 text-crimson" />
                  <span>Founding Proof Case</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  THE BOBBY GRIER STORY & THE 1956 SUGAR BOWL
                </h2>
                <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
                  When the Governor of Georgia demanded the 1956 Sugar Bowl be cancelled to prevent Bobby Grier (No. 38) from playing, the University of Pittsburgh and its student body stood fearless. Grier broke the Sugar Bowl color barrier.
                </p>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Playmakxrs worked closely with the Grier family and Pitt Athletics to recover, document, publish (<em>No Grier, No Game</em>, an Amazon Best Seller), and activate this history across Fox Sports, Pitt Hall of Fame enshrinement, and national media.
                </p>
                <div className="pt-2">
                  <Button href="/about" variant="primary">
                    Read The Complete Case Study
                  </Button>
                </div>
              </div>

              {/* Proof Case Media Artifacts Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/collection#the-book" className="block group h-full">
                  <div className="bg-card-dark border border-white/10 p-6 rounded-sm h-full group-hover:border-crimson/50 group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-[10px] font-mono uppercase text-crimson bg-crimson/15 px-2 py-0.5 rounded-sm">
                      Amazon Best Seller
                    </span>
                    <h4 className="text-lg font-heading text-white mt-3 mb-2">The Published Book</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      <em>No Grier, No Game</em> documented the definitive oral history and political defiance of the 1956 Sugar Bowl.
                    </p>
                    <span className="inline-flex items-center text-[11px] font-heading uppercase tracking-wider text-crimson group-hover:text-white transition-colors mt-3">
                      Order the Book
                      <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>

                <a
                  href="https://www.youtube.com/watch?v=rqKf4Es0uOU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group h-full"
                >
                  <div className="bg-card-dark border border-white/10 p-6 rounded-sm h-full group-hover:border-crimson/50 group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-[10px] font-mono uppercase text-crimson bg-crimson/15 px-2 py-0.5 rounded-sm">
                      Broadcast Feature
                    </span>
                    <h4 className="text-lg font-heading text-white mt-3 mb-2">Fox 5 Atlanta Interview</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      National broadcast profile examining the civil rights courage of Bobby Grier and his teammates.
                    </p>
                    <span className="inline-flex items-center text-[11px] font-heading uppercase tracking-wider text-crimson group-hover:text-white transition-colors mt-3">
                      Watch &middot; 4:28
                      <ArrowUpRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      <span className="sr-only"> &mdash; video, opens on YouTube in a new tab</span>
                    </span>
                  </div>
                </a>

                <a
                  href="https://pittsburghpanthers.com/honors/pitt-athletics-hall-of-fame/bobby-grier/44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group h-full"
                >
                  <div className="bg-card-dark border border-white/10 p-6 rounded-sm h-full group-hover:border-crimson/50 group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-[10px] font-mono uppercase text-crimson bg-crimson/15 px-2 py-0.5 rounded-sm">
                      University Enshrinement
                    </span>
                    <h4 className="text-lg font-heading text-white mt-3 mb-2">Pitt Hall of Fame</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Permanent enshrinement of Bobby Grier into the Pitt Athletics Hall of Fame with family ceremony.
                    </p>
                    <span className="inline-flex items-center text-[11px] font-heading uppercase tracking-wider text-crimson group-hover:text-white transition-colors mt-3">
                      View the Profile
                      <ArrowUpRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      <span className="sr-only"> &mdash; opens pittsburghpanthers.com in a new tab</span>
                    </span>
                  </div>
                </a>

                <Link href="/collection" className="block group h-full">
                  <div className="bg-card-dark border border-white/10 p-6 rounded-sm h-full group-hover:border-crimson/50 group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-[10px] font-mono uppercase text-crimson bg-crimson/15 px-2 py-0.5 rounded-sm">
                      Long-Term Value
                    </span>
                    <h4 className="text-lg font-heading text-white mt-3 mb-2">Compounding Legacy</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Active educational curriculum, game-week recognitions, and authentic memorabilia collections.
                    </p>
                    <span className="inline-flex items-center text-[11px] font-heading uppercase tracking-wider text-crimson group-hover:text-white transition-colors mt-3">
                      Browse the Collection
                      <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 6. WHY THIS MATTERS NOW (PINNED & COVERED UP ON EXIT BY SECTION 7) */}
      <div className="relative z-10 lg:h-[220vh]">
        <section className="relative lg:sticky lg:top-[80px] py-16 md:py-24 px-6 md:px-8 bg-deep-navy border-b border-white/10 overflow-hidden flex items-center lg:min-h-[calc(100vh-80px)]">
          <div className="max-w-5xl mx-auto w-full">
            <SectionHeading
              category="Strategic Value"
              title="Why This Matters Right Now"
              subtitle="Athletic departments face unprecedented pressure to differentiate. Narrative capital is the enduring answer."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card-dark/60 border border-white/10 p-6 rounded-sm flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-crimson flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading text-lg text-white mb-1">Recruiting Distinction</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Families and recruits commit to programs where their personal legacy will be respected and remembered forever.
                  </p>
                </div>
              </div>

              <div className="bg-card-dark/60 border border-white/10 p-6 rounded-sm flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-crimson flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading text-lg text-white mb-1">Alumni & Donor Galvanization</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Generational gifts flow to athletic programs that visibly honor their founding architects and historic champions.
                  </p>
                </div>
              </div>

              <div className="bg-card-dark/60 border border-white/10 p-6 rounded-sm flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-crimson flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading text-lg text-white mb-1">Authentic Community Pride</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Uniting student bodies and athletic alumni around real, verified stories of courage rather than hollow marketing slogans.
                  </p>
                </div>
              </div>

              <div className="bg-card-dark/60 border border-white/10 p-6 rounded-sm flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-crimson flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading text-lg text-white mb-1">Brand Safety for Corporate Sponsors</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Heritage stories provide pristine brand associations that can never be compromised by transfer portal exits or social controversies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 7. CALL TO ACTION BANNER (CURTAIN COVERING SECTION 6 ON EXIT) */}
      <section className="relative z-30 lg:-mt-[calc(100vh-80px)] py-24 px-6 md:px-8 bg-crimson text-white text-center shadow-[0_-40px_80px_rgba(0,0,0,0.98)] border-t-2 border-white/30 lg:min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight text-white">
            Start With One Story. Scale From Proof.
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join elite universities, athletic departments, and legacy families shaping the future of sports storytelling through the 90–120 Day Pilot Program.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="secondary" className="!bg-white !text-crimson hover:!bg-gray-100 font-bold">
              Apply For The Pilot Program
            </Button>
            <Button href="/institutions" variant="outline" className="!border-white !text-white hover:!bg-white/10">
              Review Institutional Model
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
