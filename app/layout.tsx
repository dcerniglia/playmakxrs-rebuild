import type { Metadata } from 'next';
import { Inter, Oswald, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Playmakxrs™ | The Era of Legends | Narrative Capital for Sports',
  description:
    'The family is the source. The institution is the platform. Playmakxrs™ is the bridge. Recovering, verifying, protecting, packaging, and activating sports narrative capital.',
  openGraph: {
    title: 'Playmakxrs™ | Sports Narrative Capital',
    description:
      'Where legacy lives forever. Recovering and activating overlooked athletic history for universities, families, and partners.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${playfair.variable}`}
    >
      <body className="bg-true-black text-white antialiased min-h-screen flex flex-col selection:bg-crimson selection:text-white">
        <Navbar />
        <main className="flex-grow pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
