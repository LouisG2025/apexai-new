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
      className={`group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        background: hovered ? 'rgba(1,82,255,0.03)' : 'rgba(255,255,255,0.01)',
        border: hovered ? '1px solid rgba(1,82,255,0.3)' : '1px solid rgba(0,0,0,0.05)',
        boxShadow: hovered 
          ? '0 20px 40px rgba(1,82,255,0.08), inset 0 1px 1px rgba(255,255,255,0.8)' 
          : '0 4px 20px rgba(0,0,0,0.03), inset 0 1px 1px rgba(255,255,255,1)',
        transform: isVisible ? (hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0)') : 'translateY(40px)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(1,82,255,0.08) 0%, transparent 70%)',
        }}
      />
      
      <div
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl font-cabinet text-xl font-bold text-[#0152ff] shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        style={{
          background: 'white',
          border: '1px solid rgba(1,82,255,0.1)',
          boxShadow: '0 4px 12px rgba(1,82,255,0.1)',
        }}
      >
        0{index + 1}
      </div>
      
      <h3 className="font-cabinet text-xl font-bold tracking-tight text-brand-dark md:text-2xl transition-colors duration-300 group-hover:text-[#0152ff]">
        {outcome.metric}
      </h3>
      
      <p className="mt-4 font-inter text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
        {outcome.explanation}
      </p>

      <div 
        className="absolute bottom-0 left-0 h-1 bg-[#0152ff] transition-all duration-700 ease-out"
        style={{ width: hovered ? '100%' : '0%' }}
      />
    </div>
  );
}
