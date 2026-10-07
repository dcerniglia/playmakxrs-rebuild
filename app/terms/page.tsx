import React from 'react';
import type { Metadata } from 'next';
import {
  LegalPage,
  LegalSection,
  LegalList,
  LEGAL_CONTACT,
  LEGAL_ENTITY,
  LEGAL_JURISDICTION,
} from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Engagement | Playmakxrs',
  description:
    'The terms governing use of the Playmakxrs website and the framework under which our institutional, family, and partner engagements operate.',
};

export default function TermsPage() {
  return (
    <LegalPage
      category="Legal"
      title="TERMS OF ENGAGEMENT"
      summary={`These terms govern your use of this website and set the framework under which ${LEGAL_ENTITY} enters into client engagements.`}
    >
      <LegalSection number="01" title="Acceptance">
        <p>
          By accessing this site or engaging our services, you agree to these
          terms. If you are agreeing on behalf of an institution or organization,
          you represent that you have authority to bind it.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Scope of Services">
        <p>
          Playmakxrs builds Narrative Infrastructure for institutions, families,
          and partners &mdash; helping them discover, verify, protect, activate and
          preserve meaning they already hold. The specific services, deliverables,
          timelines, and fees for any engagement are defined in a separate written
          agreement or statement of work.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Engagement Agreements Control">
        <p>
          Where a signed engagement agreement or statement of work conflicts with
          these terms, that agreement controls for the engagement it covers.
          These terms continue to govern your use of the website in all cases.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Client Responsibilities">
        <LegalList
          items={[
            'Providing accurate information and timely access to relevant archival contacts, records, and personnel.',
            'Securing the internal approvals required for the engagement to proceed.',
            'Confirming that materials you supply may lawfully be shared with us and used for the agreed purposes.',
            'Designating a point of contact authorized to give direction and approve deliverables.',
          ]}
        />
      </LegalSection>

      <LegalSection number="05" title="Fees and Payment">
        <p>
          Fees, invoicing schedules, and expense handling are set out in the
          applicable engagement agreement. Unless that agreement states
          otherwise, invoices are due within thirty (30) days, fees are
          non-refundable once the corresponding work is performed, and amounts
          are exclusive of applicable taxes.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Intellectual Property">
        <p>
          The Playmakxrs name, wordmark, frameworks, methodologies, and the
          content of this site remain our property. Institutional trademarks and
          marks remain the property of the institution. Rights in works produced
          during an engagement — books, documentary footage, curricula, and
          related materials — are allocated in the engagement agreement, and are
          subject to the consents described in our Rights Governance policy.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Confidentiality">
        <p>
          Each party will protect the other&rsquo;s confidential information with
          at least reasonable care and use it only for the engagement.
          Obligations do not extend to information that is public through no
          fault of the receiving party, independently developed, or required to
          be disclosed by law.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Third-Party and Archival Materials">
        <p>
          Engagements routinely involve materials sourced from institutional
          archives, private collections, and public records. Use of those
          materials is subject to the terms under which they are licensed or
          contributed, and to the verification and consent process described in
          our Rights Governance policy.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Disclaimers">
        <p>
          This website and its content are provided &ldquo;as is&rdquo; without
          warranties of any kind, express or implied, including implied
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement. Nothing on this site is legal advice. Historical
          research is conducted to professional standards but is inherently
          dependent on the completeness of surviving records.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Limitation of Liability">
        <p>
          To the maximum extent permitted by law, neither party is liable for
          indirect, incidental, special, consequential, or punitive damages, or
          for lost profits or revenue. Our total liability arising out of an
          engagement will not exceed the fees paid to us under that engagement in
          the twelve (12) months preceding the claim.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Indemnification">
        <p>
          Each party will indemnify the other against third-party claims arising
          from its own breach of these terms, negligence, or willful misconduct,
          subject to prompt notice and reasonable cooperation in the defense.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Term and Termination">
        <p>
          Either party may terminate an engagement as provided in the applicable
          agreement. On termination, you remain responsible for fees for work
          performed through the termination date, and the confidentiality,
          intellectual property, and liability provisions survive.
        </p>
      </LegalSection>

      <LegalSection number="13" title="Governing Law">
        <p>
          These terms are governed by the laws of {LEGAL_JURISDICTION}, without
          regard to its conflict of laws rules. The parties will attempt to
          resolve disputes in good faith before pursuing formal proceedings, and
          submit to the exclusive jurisdiction of the courts located there.
        </p>
      </LegalSection>

      <LegalSection number="14" title="Changes to These Terms">
        <p>
          We may revise these terms from time to time. Continued use of the site
          after revisions take effect constitutes acceptance of the updated
          terms.
        </p>
      </LegalSection>

      <LegalSection number="15" title="Contact Us">
        <p>
          Questions about these terms can be sent to{' '}
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
