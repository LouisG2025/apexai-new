'use client';

import { useState } from 'react';
import { Handshake, Target, Lightbulb, BarChart3 } from 'lucide-react';
import { VALUES } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const ICONS = [Handshake, Target, Lightbulb, BarChart3];

export function AboutValues() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-[#111827] py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(1,82,255,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
            Our Values
          </p>
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-white md:text-4xl">
            What We Stand For
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl font-inter text-lg"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            The standards that guide every system we build and every
            partnership we enter.
          </p>
        </div>

        <div ref={gridRef} className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => {
            const Icon = ICONS[index];
            return (
              <ValueCard
                key={value.title}
                value={value}
                Icon={Icon}
                index={index}
                gridVisible={gridVisible}
              />
            );
          })}
        </div>
      </div>

    </section>
  );
}

function ValueCard({
  value,
  Icon,
  index,
  gridVisible,
}: {
  value: { title: string; description: string };
  Icon: React.ComponentType<{ className?: string }>;
  index: number;
  gridVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl p-6"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
        opacity: gridVisible ? 1 : 0,
        transform: gridVisible ? (hovered ? 'translateY(-4px)' : 'translateY(0)') : 'translateY(24px)',
        transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 300ms cubic-bezier(0.22,1,0.36,1)',
        transitionDelay: gridVisible ? `${index * 120}ms` : '0ms',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(1,82,255,0.1) 0%, transparent 70%)',
        }}
      />
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl"
        style={{
          background: 'rgba(1,82,255,0.15)',
          border: '1px solid rgba(1,82,255,0.25)',
        }}
      >
        <Icon className="h-5 w-5 text-[#0152ff]" />
      </div>
      <h3 className="mt-5 font-cabinet text-lg font-semibold text-white">
        {value.title}
      </h3>
      <p
        className="mt-2 font-inter text-sm leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.52)' }}
        dangerouslySetInnerHTML={{ __html: value.description }}
      />
    </div>
  );
}
