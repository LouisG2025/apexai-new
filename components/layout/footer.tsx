import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: '#0d1420',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(1,82,255,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/navy_blue_ApexAI_logo.png"
                alt="ApexAI"
                width={140}
                height={40}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p
              className="mt-4 max-w-sm text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              We build AI sales systems for teams that want to work smarter,
              scale faster, and grow without operational bottlenecks.
            </p>
            <Link
              href="https://www.linkedin.com/company/apexai-agency"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              <Linkedin className="h-4 w-4 text-[#0152ff]" />
              <span className="hover:text-white transition-colors">LinkedIn</span>
            </Link>
          </div>

          <div>
            <h4
              className="mb-5 text-xs font-semibold uppercase tracking-wider text-white"
            >
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    <span className="hover:text-white transition-colors">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-5 text-xs font-semibold uppercase tracking-wider text-white"
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    <span className="hover:text-white transition-colors">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 border-t pt-8 text-center text-sm"
          style={{
            borderTopColor: 'rgba(255,255,255,0.07)',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          <p>&copy; 2025 ApexAI Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
