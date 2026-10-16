import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  LegalPage,
  LegalSection,
  LegalList,
  LEGAL_CONTACT,
} from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Rights Governance | Playmakxrs',
  description:
    'The Rights Before Reach standard: how Playmakxrs verifies chain-of-title, secures family consent, and protects institutional marks before anything is published.',
};

export default function RightsGovernancePage() {
  return (
    <LegalPage
      category="Operational Standard"
      title="RIGHTS GOVERNANCE"
      summary="Rights Before Reach is our governing standard: rights are cleared, verified, and agreed before a single word is published."
    >
      <LegalSection number="01" title="Purpose">
        <p>
          Most storytelling efforts fail because content is published before
          underlying rights are settled. This policy states the standard we hold
          ourselves to on every engagement, and what institutions, families, and
          partners can expect from us.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Chain-of-Title Verification">
        <p>
          Before an account is published, we establish who holds the rights to
          it. That work includes:
        </p>
        <LegalList
          items={[
            'Locating and authenticating primary source records: archives, correspondence, contemporaneous press, and institutional files.',
            'Identifying the athlete, estate, or descendants holding relevant rights.',
            'Documenting the line of succession from the original subject to the present rights holder.',
            'Recording gaps, contradictions, and unresolved questions rather than papering over them.',
          ]}
        />
      </LegalSection>

      <LegalSection number="03" title="Family and Estate Consent">
        <p>
          The family is the source. We seek informed, written consent from the
          family or estate before commercial use of a name, image, likeness, or
          personal account. Families retain moral rights in how a relative is
          portrayed, receive the agreed commercial participation, and are
          consulted on material changes to a project&rsquo;s direction. Consent
          may be conditioned or narrowed, and we honor those limits.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Institutional Marks">
        <p>
          The institution is the platform. University trademarks, logos, and
          institutional marks remain entirely the property of the institution.
          We use them only as permitted by the engagement agreement and any
          applicable licensing office, and we do not assert ownership of
          institutional marks through our work.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Tripartite Agreements">
        <p>
          Where an engagement involves an institution, a family, and Playmakxrs,
          we document the relationship among all three so that ownership, usage
          rights, approval authority, revenue participation, and duration are
          settled in advance. The aim is that no party is later surprised by how
          a story is used.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Archival Sourcing and Attribution">
        <p>
          Archival materials are used under the terms on which they are licensed
          or contributed, with the holding institution or collection credited.
          Where a rights holder cannot be identified after diligent search, we
          document the search, and we do not treat an unresolved search as
          permission.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Accuracy, Corrections, and Takedowns">
        <p>
          We deal in verified historical reality, and we correct the record when
          we get something wrong. If you believe published material is
          inaccurate, infringes your rights, or uses a likeness without proper
          consent, contact us with the specifics and supporting documentation.
          We will acknowledge the request, investigate, and where the concern is
          substantiated, correct, credit, or remove the material.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Boundaries We Uphold">
        <p>
          Our governance is defined as much by what we decline to do:
        </p>
        <LegalList
          items={[
            'We do not manufacture media spin or publish accounts we cannot substantiate.',
            'We do not negotiate active player contracts or broker transfer portal deals.',
            'We do not publish a family’s story over that family’s objection.',
            'We do not assert rights in institutional marks or in materials we do not hold.',
          ]}
        />
      </LegalSection>

      <LegalSection number="09" title="Relationship to Our Other Policies">
        <p>
          This policy sits alongside our{' '}
          <Link
            href="/terms"
            className="text-crimson hover:text-white transition-colors"
          >
            Terms of Engagement
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy"
            className="text-crimson hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          . Where a signed engagement agreement addresses a rights question in
          more detail, that agreement controls.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Contact Us">
        <p>
          Rights inquiries, correction requests, and takedown notices can be sent
          to{' '}
          <a
            href={`mailto:${LEGAL_CONTACT}`}
            className="text-crimson hover:text-white transition-colors font-mono"
          >
            {LEGAL_CONTACT}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
