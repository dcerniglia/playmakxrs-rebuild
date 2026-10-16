import React from 'react';
import { FEATURED_LOGOS } from '@/lib/press';

/**
 * "As Featured In" strip — the credibility band.
 *
 * These are outlets that covered the work, NOT clients. Keep the label honest:
 * Playmakxrs has one institutional engagement, and presenting press marks as a
 * client roster would misrepresent that.
 *
 * The source SVGs carry whatever fills their owners ship — white, brand red,
 * near-black — several of which vanish on a dark ground. `brightness(0)
 * invert(1)` flattens all of them to a single white, which both solves the
 * contrast problem and gives the strip the uniform look it wants.
 */
export const FeaturedIn: React.FC<{ className?: string }> = ({ className = '' }) => (
  <section className={`py-16 px-6 md:px-8 bg-true-black border-y border-white/10 ${className}`}>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-xs font-heading uppercase tracking-[0.2em] text-gray-500 mb-10">
        As Featured In
      </h2>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14">
        {FEATURED_LOGOS.map(({ outlet, url, logo, logoIsLight }) => (
          <li key={outlet}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${outlet} coverage (opens in a new tab)`}
              className="block opacity-50 hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-4 focus-visible:ring-offset-true-black rounded-sm"
            >
              <img
                src={logo}
                alt={outlet}
                className={`h-6 md:h-7 w-auto ${
                  logoIsLight ? '' : '[filter:brightness(0)_invert(1)]'
                }`}
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
