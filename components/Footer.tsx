'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronUp, ArrowRight } from 'lucide-react';

/**
 * Brand marks as inline SVG — lucide dropped its brand icon set, and these are
 * the only three the site needs. Paths are the standard simple-icons glyphs.
 */
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
  </svg>
);

/**
 * Canonical profile URLs. Production links to a Facebook share shortlink and an
 * Instagram URL carrying QR tracking params; these are the clean equivalents
 * they resolve to.
 */
const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/Playmakxrsglobal', Icon: FacebookIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/playmakxrs', Icon: InstagramIcon },
  { name: 'TikTok', href: 'https://www.tiktok.com/@playmakxrs', Icon: TikTokIcon },
];

/**
 * Mailchimp list endpoint carried over from playmakxrs.com. The honeypot field
 * name is list-specific and must stay in sync with the action URL.
 */
const MAILCHIMP_ACTION =
  'https://playmakxrs.us14.list-manage.com/subscribe/post?u=7013731699bc1120e9b60ea42&id=f601130e8e';
const MAILCHIMP_HONEYPOT = 'b_7013731699bc1120e9b60ea42_f601130e8e';

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
              &ldquo;The family is the source. The institution is the platform. Playmakxrs is the bridge.&rdquo;
            </p>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Helping athletic departments, legacy families, and sports brands recover, verify, protect, package, and activate overlooked sports narrative capital.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-widest text-white font-heading mb-3">
                Stay Informed on Narrative Capital
              </span>
              <form
                action={MAILCHIMP_ACTION}
                method="post"
                target="_blank"
                className="flex max-w-md"
              >
                {/* Mailchimp bot trap: a real subscriber never fills this in. */}
                <div className="absolute -left-[5000px]" aria-hidden="true">
                  <input
                    type="text"
                    name={MAILCHIMP_HONEYPOT}
                    tabIndex={-1}
                    defaultValue=""
                    autoComplete="off"
                  />
                </div>
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="EMAIL"
                  required
                  autoComplete="email"
                  placeholder="Enter institutional or estate email"
                  className="bg-white/5 border border-white/15 text-white px-4 py-2.5 text-sm rounded-l-sm focus:outline-none focus:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/70 flex-grow placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="bg-crimson hover:bg-red-700 text-white px-5 py-2.5 text-sm font-heading tracking-wider uppercase rounded-r-sm transition-colors flex items-center"
                >
                  <span className="sr-only">Subscribe</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
                <Link href="/collection" className="hover:text-white transition-colors">
                  The Collection
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

              {/* Social profiles */}
              <div className="pt-2">
                <span className="block text-xs uppercase tracking-widest text-white font-heading mb-3">
                  Follow the Legacy
                </span>
                <ul className="flex items-center gap-3">
                  {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} (opens in a new tab)`}
                        className="flex items-center justify-center w-10 h-10 rounded-sm border border-white/15 text-gray-300 hover:text-white hover:border-crimson hover:bg-crimson/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-true-black"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-500 space-y-1">
                <p>Rights Before Reach Framework</p>
                <p>Narrative Capital Architecture</p>
                <p>Institutional Narrative Infrastructure (INI)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Playmakxrs Global™. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/rights-governance" className="hover:text-white transition-colors">
              Rights Governance
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 bg-crimson hover:bg-red-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-true-black"
        aria-label="Scroll back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
