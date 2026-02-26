'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface MidPageCtaProps {
  headline: string;
  subline?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function MidPageCta({
  headline,
  subline,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: MidPageCtaProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={ref}
          className="cta-grid-dark relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-16"
          style={{
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.2)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: '60%',
              height: '160px',
              background: 'radial-gradient(ellipse at 50% 0%, rgba(1,82,255,0.22) 0%, transparent 70%)',
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(1,82,255,0.55), transparent)',
            }}
          />

          <div className="relative text-center">
            <h2 className="font-cabinet text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.6rem]">
              {headline}
            </h2>
            {subline && (
              <p
                className="mx-auto mt-4 max-w-xl font-inter text-lg leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.52)' }}
              >
                {subline}
              </p>
            )}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex items-center rounded-full bg-[#0152ff] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110"
                style={{ boxShadow: '0 4px 28px rgba(1,82,255,0.45)' }}
              >
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/30 hover:-translate-y-px"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
