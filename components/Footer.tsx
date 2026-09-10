'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronUp, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-true-black border-t border-white/10 relative text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1: Brand & Mantra */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl md:text-3xl font-heading font-bold tracking-wider text-white">
                PLAYMAKXRS<span className="text-crimson">™</span>
              </span>
            </Link>
            <p className="text-gray-300 font-serif-heading italic text-lg leading-snug">
              &ldquo;The family is the source. The institution is the platform. Playmakxrs™ is the bridge.&rdquo;
            </p>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Helping athletic departments, legacy families, and sports brands recover, verify, protect, package, and activate overlooked sports narrative capital.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-widest text-white font-heading mb-3">
                Stay Informed on Narrative Capital™
              </span>
              <form onSubmit={(e) => e.preventDefault()} className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter institutional or estate email"
                  className="bg-white/5 border border-white/15 text-white px-4 py-2.5 text-sm rounded-l-sm focus:outline-none focus:border-crimson flex-grow placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="bg-crimson hover:bg-red-700 text-white px-5 py-2.5 text-sm font-heading tracking-wider uppercase rounded-r-sm transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-heading tracking-widest text-sm uppercase mb-4">
              Navigation Pathways
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Overview & Hub
                </Link>
              </li>
              <li>
                <Link href="/institutions" className="hover:text-white transition-colors">
                  For Institutions
                </Link>
              </li>
              <li>
                <Link href="/families" className="hover:text-white transition-colors">
                  For Families & Athletes
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Sponsors & Media
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  The Bobby Grier Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Pilot Program Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Standards */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-heading tracking-widest text-sm uppercase mb-4">
              Governance & Inquiries
            </h4>
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-white block font-heading tracking-wide">CONFIDENTIAL DISCOVERY</strong>
                Direct institutional inquiries, rights verification, and pilot assessments.
              </p>
              <p className="text-crimson font-mono text-sm pt-1">
                contact@playmakxrs.com
              </p>
              <div className="pt-4 border-t border-white/10 text-xs text-gray-500 space-y-1">
                <p>Rights Before Reach™ Framework</p>
                <p>Narrative Capital™ Architecture</p>
                <p>Institutional Narrative Infrastructure (INI™)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Playmakxrs Global™. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
            <span>Rights Governance</span>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 bg-crimson hover:bg-red-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Scroll back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
