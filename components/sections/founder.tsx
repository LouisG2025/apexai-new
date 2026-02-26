'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function Founder() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={ref}
          className="grid-section-dark relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-14"
          style={{
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.2)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 550ms cubic-bezier(0.22,1,0.36,1), transform 550ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 100% 30%, rgba(1,82,255,0.08) 0%, transparent 65%)',
            }}
          />

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12 flex-col-reverse lg:flex-none">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0152ff]">
                A Message From The Founder
              </p>
              <h2 className="mt-3 font-cabinet text-2xl font-bold tracking-tight text-white md:text-3xl">
                &ldquo;We specialise in{' '}
                <span className="text-[#0152ff]">sales systems</span>.
                Creative thinking. Strategic execution. We automate what
                actually drives ROI and ignore the BS in between.&rdquo;
              </h2>
              <div className="mt-5 space-y-3.5 font-inter text-base leading-[1.75]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <p>
                  Over the last three years working at the intersection of AI,
                  marketing, and sales, one thing became clear. <strong>Tools are easy.
                  Strategy is rare.</strong>
                </p>
                <p>
                  Our team blends creative thinking with commercial awareness.
                  We examine systems from every angle before touching a single
                  workflow. What works. What doesn&apos;t. <strong>Where ROI genuinely
                  exists.</strong> Whether it risks the customer experience or brand.
                </p>
                <p>
                  We build deliberately. We think long term. We avoid shortcuts
                  or following trends.
                </p>
                <p className="text-white">
                  Because real growth is getting ahead, not following the herd.
                </p>
              </div>
              <Link
                href="https://www.linkedin.com/in/louis-grange0405/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <Linkedin className="h-4 w-4 text-[#0152ff]" />
                Let&apos;s Connect
              </Link>
            </div>

            <div className="flex flex-col items-center lg:items-end lg:justify-end order-first lg:order-none">
              <div
                className="relative aspect-square w-40 flex-shrink-0 overflow-hidden rounded-3xl md:w-48 lg:w-80"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 0 40px rgba(1,82,255,0.15), 0 16px 48px rgba(0,0,0,0.3)',
                }}
              >
                <Image
                  src="/Adobe_Express_-_file.webp"
                  alt="Louis Grange, Founder of ApexAI"
                  fill
                  className="object-cover"
                />
              </div>
              <p
                className="mt-2 text-center text-sm font-semibold"
                style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}
              >
                Louis Grange
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
