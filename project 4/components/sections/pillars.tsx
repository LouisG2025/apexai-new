'use client';

import { Workflow, Bot, BarChart3 } from 'lucide-react';
import { LearnMoreLink } from '@/components/shared/learn-more-link';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const PILLARS = [
  {
    icon: Workflow,
    number: '01',
    title: 'Acquisition',
    description:
      'Structuring data, enriching leads, and launching outbound systems to continuously generate, convert, or reactivate leads so your sales team operates at 10X.',
    href: '/services',
    accent: 'rgba(1,82,255,0.06)',
  },
  {
    icon: Bot,
    number: '02',
    title: 'Conversion',
    description:
      'Engineering follow-up automations, intelligent CRM logic, and sales workflows that shorten sales cycles and improve the customer experience.',
    href: '/services',
    accent: 'rgba(1,82,255,0.04)',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Operations',
    description:
      'Creating sales visibility, reporting infrastructure, admin reduction, and operational automations that support scaling without increasing headcount.',
    href: '/services',
    accent: 'rgba(1,82,255,0.06)',
  },
];

export function Pillars() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="grid-section-subtle relative bg-white py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
            Our Framework
          </p>
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Three Pillars of Sales Transformation
          </h2>
          <p className="mx-auto mt-4 font-inter text-lg text-gray-600">
            We don&apos;t just automate tasks. We <strong>architect sales systems</strong> across
            acquisition, conversion, and operations.
          </p>
        </div>

        <div ref={gridRef} className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-8"
              style={{
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0)' : 'translateY(28px)',
                transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 250ms ease',
                transitionDelay: `${i * 120}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 0 0 1px rgba(1,82,255,0.25), 0 16px 40px rgba(1,82,255,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)';
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(1,82,255,0.05) 0%, transparent 70%)',
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background: 'rgba(1,82,255,0.08)',
                      border: '1px solid rgba(1,82,255,0.12)',
                    }}
                  >
                    <pillar.icon className="h-6 w-6 text-[#0152ff]" />
                  </div>
                  <span
                    className="font-cabinet text-5xl font-extrabold tabular-nums leading-none"
                    style={{ color: 'rgba(1,82,255,0.08)' }}
                  >
                    {pillar.number}
                  </span>
                </div>

                <h3 className="mt-6 font-cabinet text-2xl font-bold tracking-tight text-brand-dark">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-gray-600">
                  {pillar.description}
                </p>
                <LearnMoreLink href={pillar.href} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
