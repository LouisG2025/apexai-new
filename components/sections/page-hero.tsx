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
      className="hero-dark relative overflow-hidden h-[100dvh] w-full flex flex-col items-center justify-center p-4 sm:p-6"
      style={{ background: '#0f172a' }}
    >
      <ThreeBackground />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center justify-center">
        <div 
          className="mx-auto max-w-4xl text-center rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-12 lg:p-16 backdrop-blur-[2px]"
          style={{
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
          }}
        >
          <h1
            className={`font-cabinet text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl duration-[700ms] ${base} ${mounted ? visible : hidden}`}
            style={{ transitionDelay: '0ms' }}
          >
            {title}
          </h1>
          {description && (
            <div
              className={`mt-4 md:mt-8 font-inter text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto duration-[700ms] ${base} ${mounted ? visible : hidden}`}
              style={{ color: 'rgba(255,255,255,0.65)', transitionDelay: '150ms' }}
            >
              {description}
            </div>
          )}
          {(ctaLabel || secondaryCtaLabel) && (
            <div
              className={`mt-8 md:mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center duration-[700ms] ${base} ${mounted ? visible : hidden}`}
              style={{ transitionDelay: '300ms' }}
            >
              {ctaLabel && (
                <Link
                  href={ctaHref}
                  className="w-full sm:w-auto inline-block rounded-full bg-[#0152ff] px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
                  style={{ boxShadow: '0 8px 32px rgba(1,82,255,0.4)' }}
                >
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="w-full sm:w-auto inline-block rounded-full border border-white/20 bg-white/5 px-10 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#0152ff] font-bold">Discover</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#0152ff] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
