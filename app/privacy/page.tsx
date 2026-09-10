import React from 'react';
import type { Metadata } from 'next';
import {
  LegalPage,
  LegalSection,
  LegalList,
  LEGAL_CONTACT,
  LEGAL_ENTITY,
} from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Playmakxrs',
  description:
    'How Playmakxrs collects, uses, shares, and protects personal information across our website and client engagements.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      category="Legal"
      title="PRIVACY POLICY"
      summary={`This policy explains what information ${LEGAL_ENTITY} collects, why we collect it, and the choices you have over how it is used.`}
    >
      <LegalSection number="01" title="Scope">
        <p>
          This policy applies to the Playmakxrs website and to the information we
          handle in the course of our engagements with institutions, families,
          and partners. It does not apply to third-party sites we link to, which
          operate under their own policies.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Information We Collect">
        <p>We collect information in three ways:</p>
        <LegalList
          items={[
            <>
              <strong className="text-white font-normal">
                Information you provide.
              </strong>{' '}
              Name, organization, role, email address, phone number, and
              anything else you include when you submit an inquiry, apply to the
              pilot program, or subscribe to updates.
            </>,
            <>
              <strong className="text-white font-normal">
                Information collected automatically.
              </strong>{' '}
              IP address, browser and device type, pages viewed, and referring
              URLs, gathered through standard server logs and analytics.
            </>,
            <>
              <strong className="text-white font-normal">
                Information from others.
              </strong>{' '}
              Records supplied by institutional partners, family
              representatives, and public or licensed archives in connection
              with an engagement.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection number="03" title="How We Use Information">
        <LegalList
          items={[
            'Responding to inquiries and evaluating pilot program applications.',
            'Delivering, administering, and improving our services.',
            'Verifying archival records and establishing chain-of-title.',
            'Sending updates you have asked to receive.',
            'Maintaining the security and integrity of our systems.',
            'Meeting legal, regulatory, and contractual obligations.',
          ]}
        />
      </LegalSection>

      <LegalSection number="04" title="How We Share Information">
        <p>We do not sell personal information. We share it only:</p>
        <LegalList
          items={[
            'With service providers who process data on our behalf under contract.',
            'With institutional or family counterparties where an engagement requires it, and with the relevant consent in place.',
            'Where required by law, regulation, subpoena, or other legal process.',
            'In connection with a merger, acquisition, or sale of assets, subject to this policy.',
          ]}
        />
      </LegalSection>

      <LegalSection number="05" title="Cookies and Analytics">
        <p>
          We use cookies and similar technologies to operate the site, remember
          preferences, and understand aggregate usage. Most browsers let you
          refuse or delete cookies; doing so may affect how parts of the site
          function.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Data Retention">
        <p>
          We keep personal information for as long as needed to fulfill the
          purposes described above, and thereafter as required to satisfy legal,
          accounting, or reporting obligations. Archival and chain-of-title
          records are retained for the life of the engagement and any subsequent
          rights term.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Security">
        <p>
          We maintain administrative, technical, and physical safeguards
          appropriate to the sensitivity of the information we hold. No method
          of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Your Rights and Choices">
        <p>
          Depending on where you live, you may have the right to request access
          to, correction of, or deletion of your personal information; to object
          to or restrict certain processing; to receive a portable copy; and to
          withdraw consent. You may also unsubscribe from our updates at any
          time using the link in each message. To exercise a right, contact us
          at the address below. We will not discriminate against you for making
          a request.
        </p>
      </LegalSection>

      <LegalSection number="09" title="International Transfers">
        <p>
          We operate from the United States, and information we collect may be
          processed there or in other countries whose data protection laws
          differ from those in your jurisdiction. Where required, we put
          appropriate transfer safeguards in place.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Children&rsquo;s Privacy">
        <p>
          Our site and services are directed to institutions and adults. We do
          not knowingly collect personal information from children under 13. If
          you believe a child has provided us information, contact us and we
          will delete it.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Changes to This Policy">
        <p>
          We may update this policy from time to time. Material changes will be
          reflected in the effective date above and, where appropriate,
          communicated directly.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Contact Us">
        <p>
          Questions or requests regarding this policy can be sent to{' '}
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
