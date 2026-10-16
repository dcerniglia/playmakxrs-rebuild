import React from 'react';
import type { Metadata } from 'next';

/**
 * app/contact/page.tsx is a client component, and a client component cannot
 * export `metadata` — without this layout the page silently inherits the root
 * title. Keep the two in sync if the page's framing changes.
 */
export const metadata: Metadata = {
  title: 'Start the Conversation | Playmakxrs',
  description:
    'You do not need a finished project. Tell us what you are trying to understand. All inquiries are held in confidence.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
