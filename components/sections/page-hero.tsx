'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThreeBackground } from '@/components/shared/three-background';

interface PageHeroProps {
  title: string;
  description?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function PageHero({
  title,
  description,
  ctaLabel,
  ctaHref = '/contact',
  secondaryCtaLabel,
  secondaryCtaHref,
}: PageHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const base = 'transition-all ease-[cubic-bezier(0.22,1,0.36,1)]';
  const visible = 'opacity-100 translate-y-0';
  const hidden = 'opacity-0 translate-y-6';

  return (
    <section
      className="hero-dark relative overflow-hidden py-24 md:py-32"
      style={{ background: '#111827' }}
    >
      <ThreeBackground />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 70% -10%, rgba(1,82,255,0.2) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 10% 90%, rgba(1,82,255,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className={`font-cabinet text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-[3.25rem] duration-[500ms] ${base} ${mounted ? visible : hidden}`}
            style={{ transitionDelay: '0ms' }}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`mt-6 font-inter text-lg leading-relaxed duration-[500ms] ${base} ${mounted ? visible : hidden}`}
              style={{ color: 'rgba(255,255,255,0.58)', transitionDelay: '120ms' }}
            >
              {description}
            </p>
          )}
          {(ctaLabel || secondaryCtaLabel) && (
            <div
              className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center duration-[500ms] ${base} ${mounted ? visible : hidden}`}
              style={{ transitionDelay: '240ms' }}
            >
              {ctaLabel && (
                <Link
                  href={ctaHref}
                  className="inline-block rounded-full bg-[#0152ff] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 4px 24px rgba(1,82,255,0.45)' }}
                >
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-block rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
