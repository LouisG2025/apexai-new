'use client';

import { useState } from 'react';
import { Eye, Settings, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const DIFFERENTIATORS = [
  {
    icon: Eye,
    title: 'We Start With Reality',
    description:
      'We look at how your team works today. The gaps. The friction. The manual steps. The opportunities. <strong>Then we build from there.</strong>',
  },
  {
    icon: Settings,
    title: 'Built Around Your Operations',
    description:
      "No pre-built templates. No forcing you into someone else's system. Everything is <strong>designed around how you operate</strong>.",
  },
  {
    icon: BarChart3,
    title: 'Focused on Measurable Outcomes',
    description:
      "If it doesn't increase revenue, cut costs or erase admin, we don't build it.",
  },
] as const;

export function ProcessApproach() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div
            ref={leftRef}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 550ms cubic-bezier(0.22,1,0.36,1), transform 550ms cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
              Why This Works
            </p>
            <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              Why This Works
            </h2>
            <p className="mt-4 font-inter text-lg leading-relaxed text-gray-600">
              Most automation projects fail because they start with software.
              We start with{' '}
              <strong className="text-brand-dark">how your sales team sells</strong>{' '}
              and how your marketing team markets.
            </p>
          </div>

          <div ref={rightRef} className="space-y-6">
            {DIFFERENTIATORS.map((item, index) => (
              <DifferentiatorCard key={item.title} item={item} index={index} parentVisible={rightVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorCard({
  item,
  index,
  parentVisible,
}: {
  item: typeof DIFFERENTIATORS[number];
  index: number;
  parentVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex gap-5 rounded-2xl p-6"
      style={{
        background: hovered ? '#0152ff' : 'white',
        border: hovered ? '1px solid #0152ff' : '1px solid rgba(0,0,0,0.06)',
        boxShadow: hovered ? '0 8px 32px rgba(1,82,255,0.25)' : '0 2px 12px rgba(0,0,0,0.04)',
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? (hovered ? 'translateX(4px)' : 'translateX(0)') : 'translateX(24px)',
        transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 250ms ease, background 250ms ease, border-color 250ms ease, box-shadow 250ms ease',
        transitionDelay: parentVisible ? `${index * 150}ms` : '0ms',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
        style={{
          background: hovered ? 'rgba(255,255,255,0.2)' : 'rgba(1,82,255,0.08)',
          border: hovered ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(1,82,255,0.15)',
          transition: 'background 250ms ease, border-color 250ms ease',
        }}
      >
        <item.icon
          className="h-5 w-5"
          style={{ color: hovered ? 'white' : '#0152ff', transition: 'color 250ms ease' }}
        />
      </div>
      <div>
        <h3
          className="font-cabinet text-lg font-semibold"
          style={{ color: hovered ? 'white' : '#111827', transition: 'color 250ms ease' }}
        >
          {item.title}
        </h3>
        <p
          className="mt-2 font-inter text-sm leading-relaxed"
          style={{ color: hovered ? 'rgba(255,255,255,0.8)' : '#4B5563', transition: 'color 250ms ease' }}
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
    </div>
  );
}
