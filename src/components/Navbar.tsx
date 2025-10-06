'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Our Programs' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/donate', label: 'Donate' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-dark text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>0433821437</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉️</span>
              <span>admin@ngowebsite.com.ng</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="inline-block">
              <Image src="/icons/facebook.svg" alt="Facebook" width={18} height={18} className="opacity-90 hover:opacity-100 transition" />
            </a>
            <a href="#" aria-label="Twitter" className="inline-block">
              <Image src="/icons/twitter.svg" alt="Twitter" width={18} height={18} className="opacity-90 hover:opacity-100 transition" />
            </a>
            <a href="#" aria-label="Instagram" className="inline-block">
              <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} className="opacity-90 hover:opacity-100 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-dark">
                <div className="text-sm font-light font-heading">HOPE AND DIGNITY</div>
                <div className="text-lg font-bold font-heading">EMPOWERMENT INITIATIVE</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-dark hover:text-primary transition-colors font-body font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-cta text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors font-body font-medium"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-dark hover:text-primary focus:outline-none focus:text-primary"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-dark hover:text-primary transition-colors font-body font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block px-3 py-2 bg-cta text-white rounded-md hover:bg-opacity-90 transition-colors font-body font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
