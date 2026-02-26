'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function FinalCta() {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      className="relative overflow-hidden bg-white py-20 md:py-24"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-12 md:px-16 md:py-16"
          style={{
            background: '#0a0f1e',
            border: '1px solid rgba(1,82,255,0.15)',
            boxShadow: hovered
              ? '0 32px 80px rgba(1,82,255,0.12), 0 0 0 1px rgba(1,82,255,0.2)'
              : '0 16px 48px rgba(0,0,0,0.12)',
            transition: 'box-shadow 600ms ease',
          }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(1,82,255,0.5), transparent)',
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: '50%',
              height: '120px',
              background: 'radial-gradient(ellipse at 50% 0%, rgba(1,82,255,0.18) 0%, transparent 70%)',
            }}
          />

          <div ref={ref} className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div>
              <h2
                className="font-cabinet text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '0ms' }}
              >
                Ready to Supercharge Your Sales?
              </h2>
              <p
                className="mt-4 font-inter text-lg leading-relaxed transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ color: 'rgba(255,255,255,0.5)', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '120ms' }}
              >
                Serious about growth? Book the call.
              </p>
              <div
                className="mt-8 transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '240ms' }}
              >
                <Link
                  href="/contact#book"
                  className="inline-block rounded-full bg-[#0152ff] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px"
                  style={{ boxShadow: '0 4px 24px rgba(1,82,255,0.45)' }}
                >
                  Book a Call
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div
                className="relative h-44 w-44 overflow-hidden rounded-2xl"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 0 40px rgba(1,82,255,0.15)',
                }}
              >
                <Image
                  src="/4342.webp"
                  alt="Person ascending illuminated stairway"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
