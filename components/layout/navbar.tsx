'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full transition-[background,border-color,box-shadow] duration-300"
      style={{
        background: mobileOpen ? '#0b0f19' : 'rgba(17, 24, 39, 0.8)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/navy_blue_ApexAI_logo.png"
            alt="ApexAI"
            width={140}
            height={40}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.62)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/contact#book"
            className="inline-flex items-center rounded-full bg-[#0152ff] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110"
            style={{ boxShadow: '0 2px 16px rgba(1,82,255,0.32)' }}
          >
            Book a Discovery Call
          </Link>
        </div>

        <button
          className="md:hidden transition-colors duration-200 hover:text-white"
          style={{ color: 'rgba(255,255,255,0.7)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="border-t px-6 py-5 md:hidden"
          style={{
            background: '#0b0f19',
            borderTopColor: 'rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.62)' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#book"
              className="inline-flex items-center justify-center rounded-full bg-[#0152ff] px-5 py-3 text-sm font-semibold text-white"
              style={{ boxShadow: '0 2px 16px rgba(1,82,255,0.32)' }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
