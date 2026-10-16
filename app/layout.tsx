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
  title: 'Playmakxrs | Narrative Infrastructure',
  description:
    'You may already own the value you are looking for. Playmakxrs builds Narrative Infrastructure that makes overlooked meaning visible, verifiable, protected and usable.',
  openGraph: {
    title: 'Playmakxrs | Narrative Infrastructure',
    description:
      'Playmakxrs helps institutions discover what they cannot yet see, turning overlooked meaning into human connection and enduring institutional value.',
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
