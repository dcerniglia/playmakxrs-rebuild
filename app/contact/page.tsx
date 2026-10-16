'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SectionHeading } from '@/components/SectionHeading';
import { Select, type SelectOption } from '@/components/Select';

/**
 * Netlify form name. The schema is mirrored in public/__forms.html, which is
 * what Netlify's build bot scans — a JSX-only form is invisible to it. Both
 * must change together. Rename here and there to merge submissions into an
 * existing Netlify form.
 */
const FORM_NAME = 'pilot-application';

/**
 * Field styling is shared so inputs and selects cannot drift apart — they had,
 * which is how the two selects ended up a shade darker and a pixel shorter
 * than the inputs beside them.
 *
 * Selects are not here: the native control is replaced by <Select>, which
 * matches these classes on its own trigger.
 */
const FIELD_CLASSES =
  'w-full bg-true-black/60 border border-white/15 rounded-sm px-4 py-3 text-sm leading-5 text-white focus:outline-none focus:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/70 transition-colors';

const INQUIRER_TYPES: SelectOption[] = [
  { value: 'university', label: 'University Athletic Department' },
  { value: 'family', label: 'Family Estate / Athlete Descendant' },
  { value: 'sponsor', label: 'Corporate Sponsor / Brand' },
  { value: 'media', label: 'Media / Broadcast Network' },
  { value: 'other', label: 'Other Institutional Inquirer' },
];

const OBJECTIVES: SelectOption[] = [
  { value: 'discover', label: 'Understand what we may be holding' },
  { value: 'verify', label: 'Establish what can be verified' },
  { value: 'protect', label: 'Protect a legacy or an estate' },
  { value: 'partner', label: 'Explore a sponsorship or partnership' },
  { value: 'general', label: 'Something else' },
];

/** Outcome-level only — never the shape of an engagement. */
const EXPECTATIONS = [
  'A reply within one business day',
  'A first conversation held in confidence',
  'An honest answer about whether we can help',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const body = new URLSearchParams(
        Array.from(new FormData(e.currentTarget), ([k, v]) => [k, String(v)]),
      ).toString();

      // Netlify accepts submissions posted to the static form definition.
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setSubmitted(true);
    } catch {
      // Never show a success state for a submission that did not land.
      setError(
        'We could not send your inquiry. Please try again, or email contact@playmakxrs.com directly.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-true-black">
      {/* Hero Header */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-b from-deep-navy to-true-black border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-crimson font-heading text-sm tracking-widest uppercase mb-4 inline-block font-semibold">
            Confidential Inquiry
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-4">
            START WITH WHAT MATTERS
          </h1>
          <p className="text-base sm:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            You do not need a finished project. Tell us what you are trying to understand.
          </p>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: What to Expect */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-5 text-gray-300 font-light leading-relaxed">
                <p className="text-base md:text-lg text-white">
                  You may have a person, achievement, archive, anniversary, discovery, institutional first, family legacy or opportunity you cannot yet define.
                </p>
                <p className="text-sm md:text-base text-gray-400">
                  That is the right place to begin. The first conversation is about understanding what you hold, not about committing to anything.
                </p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h2 className="font-heading text-xs uppercase tracking-widest text-gray-400 mb-5">
                  What to Expect
                </h2>
                <ul className="space-y-3 text-sm text-gray-300 font-light">
                  {EXPECTATIONS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h2 className="font-heading text-xs uppercase tracking-widest text-gray-400 mb-3">
                  Direct Contact
                </h2>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Prefer email? Write to{' '}
                  <a
                    href="mailto:contact@playmakxrs.com"
                    className="text-crimson hover:text-white transition-colors"
                  >
                    contact@playmakxrs.com
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right Column: Multi-Tier Intake Form */}
            <div className="lg:col-span-7">
              <div className="bg-card-dark border border-white/15 p-8 md:p-12 rounded-sm shadow-2xl">
                {submitted ? (
                  <div className="text-center py-16 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-crimson/20 border border-crimson text-crimson flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-heading text-white">
                      Inquiry Received
                    </h3>
                    <p className="text-gray-300 font-light max-w-md mx-auto text-sm leading-relaxed">
                      Thank you for writing. We will review your note and reply within one business day, in confidence.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-heading text-crimson uppercase tracking-wider hover:underline pt-4 block mx-auto"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form
                    name={FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <input type="hidden" name="form-name" value={FORM_NAME} />
                    {/* Bot trap: a real applicant never fills this in. */}
                    <p className="hidden" aria-hidden="true">
                      <label>
                        Do not fill this out
                        <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>
                    <div>
                      <h3 className="text-2xl font-heading text-white mb-2">
                        Tell Us What You Are Trying to Understand
                      </h3>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        All inquiries are held in confidence.
                      </p>
                    </div>

                    {/* Section 1: Contact Information */}
                    <div className="space-y-4">
                      <span className="text-xs font-heading uppercase tracking-widest text-crimson font-semibold block">
                        1. Contact Information
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-xs uppercase font-heading text-gray-300 mb-1.5">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            id="firstName"
                            name="firstName"
                            placeholder="e.g. Marcus"
                            className={FIELD_CLASSES}
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-xs uppercase font-heading text-gray-300 mb-1.5">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            id="lastName"
                            name="lastName"
                            placeholder="e.g. Thorne"
                            className={FIELD_CLASSES}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-xs uppercase font-heading text-gray-300 mb-1.5">
                            Official Email *
                          </label>
                          <input
                            type="email"
                            required
                            id="email"
                            name="email"
                            placeholder="name@university.edu"
                            className={FIELD_CLASSES}
                          />
                        </div>
                        <div>
                          <label htmlFor="role" className="block text-xs uppercase font-heading text-gray-300 mb-1.5">
                            Title / Role
                          </label>
                          <input
                            type="text"
                            id="role"
                            name="role"
                            placeholder="e.g. Senior Associate AD / Estate Trustee"
                            className={FIELD_CLASSES}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Organization Type */}
                    <div className="space-y-4">
                      <span className="text-xs font-heading uppercase tracking-widest text-crimson font-semibold block">
                        2. Organization
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="organization" className="block text-xs uppercase font-heading text-gray-300 mb-1.5">
                            Organization / University Name *
                          </label>
                          <input
                            type="text"
                            required
                            id="organization"
                            name="organization"
                            placeholder="e.g. University of Pittsburgh Athletics"
                            className={FIELD_CLASSES}
                          />
                        </div>
                        <div>
                          <label id="inquirerType-label" htmlFor="inquirerType" className="block text-xs uppercase font-heading text-gray-300 mb-1.5">
                            I am reaching out as: *
                          </label>
                          <Select
                            id="inquirerType"
                            name="inquirerType"
                            labelId="inquirerType-label"
                            options={INQUIRER_TYPES}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Scope & Objectives */}
                    <div className="space-y-4">
                      <span className="text-xs font-heading uppercase tracking-widest text-crimson font-semibold block">
                        3. What You Are Exploring
                      </span>
                      <div>
                        <label id="objective-label" htmlFor="objective" className="block text-xs uppercase font-heading text-gray-300 mb-1.5">
                          What are you exploring?
                        </label>
                        <Select
                          id="objective"
                          name="objective"
                          labelId="objective-label"
                          options={OBJECTIVES}
                        />
                      </div>

                      <div>
                        <label htmlFor="overview" className="block text-xs uppercase font-heading text-gray-300 mb-1.5">
                          What are you trying to understand?
                        </label>
                        <textarea
                          id="overview"
                          name="overview"
                          rows={4}
                          placeholder="Whatever prompted you to write: a person, a moment, an archive, an anniversary."
                          className={`${FIELD_CLASSES} resize-none`}
                        />
                      </div>
                    </div>

                    {error && (
                      <p
                        role="alert"
                        className="text-sm text-crimson bg-crimson/10 border border-crimson/40 rounded-sm px-4 py-3 font-light"
                      >
                        {error}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-crimson hover:bg-red-700 text-white font-heading text-base uppercase tracking-wider py-4 rounded-sm transition-colors shadow-lg shadow-crimson/20 flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-500 text-center font-light">
                      Held in confidence. We never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
