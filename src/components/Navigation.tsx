'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl">
              Chien'g Jamondo
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-200 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-200 transition">About</Link>
            <Link href="/services" className="hover:text-blue-200 transition">Services</Link>
            <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-blue-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block hover:text-blue-200 transition py-2">Home</Link>
            <Link href="/about" className="block hover:text-blue-200 transition py-2">About</Link>
            <Link href="/services" className="block hover:text-blue-200 transition py-2">Services</Link>
            <Link href="/contact" className="block hover:text-blue-200 transition py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
