'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Institutions', href: '/institutions' },
    { name: 'Families', href: '/families' },
    { name: 'Sponsors', href: '/partners' },
    { name: 'Stories', href: '/about' },
    { name: 'Collection', href: '/collection' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-true-black/95 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
          : 'bg-gradient-to-b from-true-black/90 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl xl:text-3xl font-heading font-bold tracking-wider text-white">
            PLAYMAKXRS<span className="text-crimson transition-transform inline-block group-hover:scale-125">™</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 text-sm font-medium tracking-wide uppercase">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 py-1 border-b-2 ${
                  isActive
                    ? 'text-white border-crimson font-semibold'
                    : 'text-gray-300 border-transparent hover:text-white hover:border-gray-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button href="/contact" variant="primary" className="!py-2.5 !px-6 text-xs">
            Pilot Program
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-true-black"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-true-black/98 border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-heading tracking-wider uppercase py-2 transition-colors ${
                    isActive ? 'text-crimson font-bold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10">
              <Button href="/contact" variant="primary" className="w-full text-center">
                Apply for Pilot Program
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
