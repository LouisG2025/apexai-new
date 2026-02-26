'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const OUTCOMES = [
  {
    metric: 'Shorter Sales Cycles',
    explanation: 'Speed removes hesitation. Structure removes delay.',
  },
  {
    metric: 'Higher Conversion Rates',
    explanation: 'Consistency beats randomness. Every time.',
  },
  {
    metric: 'Lower Admin Load',
    explanation: 'Sales teams sell. Systems handle the rest.',
  },
  {
    metric: 'Predictable Revenue Visibility',
    explanation: 'No more guessing. Just control.',
  },
] as const;

export function ServicesOutcomes() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`transition-all duration-500 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
            What You Gain
          </p>
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            The Outcomes We Engineer
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#0152ff]" />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((outcome, index) => (
            <OutcomeCard key={outcome.metric} outcome={outcome} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomeCard({ outcome, index }: { outcome: typeof OUTCOMES[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        border: hovered ? '1px solid #0152ff' : '1px solid rgba(0,0,0,0.06)',
        boxShadow: hovered ? '0 8px 32px rgba(1,82,255,0.12), 0 2px 16px rgba(0,0,0,0.05)' : '0 2px 16px rgba(0,0,0,0.05)',
        transform: isVisible ? (hovered ? 'translateY(-4px)' : 'translateY(0)') : 'translateY(24px)',
        transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 300ms cubic-bezier(0.22,1,0.36,1), border-color 200ms ease, box-shadow 200ms ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(1,82,255,0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg font-cabinet text-lg font-bold text-[#0152ff]"
        style={{
          background: 'rgba(1,82,255,0.08)',
          border: '1px solid rgba(1,82,255,0.15)',
        }}
      >
        0{index + 1}
      </div>
      <h3 className="font-cabinet text-xl font-bold text-brand-dark">
        {outcome.metric}
      </h3>
      <p className="mt-3 font-inter text-sm leading-relaxed text-gray-600">
        {outcome.explanation}
      </p>
    </div>
  );
}
