'use client';

import Link from 'next/link';
import {
  GitBranch,
  Database,
  Search,
  Phone,
  FileText,
  Send,
} from 'lucide-react';
import { LearnMoreLink } from '@/components/shared/learn-more-link';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const SERVICES_GRID = [
  {
    icon: GitBranch,
    title: 'Sales Pipeline Architecture',
    description: 'Custom-built deal stages, qualification systems, and visibility dashboards designed to make you scale fast.',
  },
  {
    icon: Database,
    title: 'Intelligent CRM Systems',
    description: 'Structured, automated CRM environments that halve admin and guarantee predictability.',
  },
  {
    icon: Search,
    title: 'Lead Enrichment & Research',
    description: 'Automated enrichment systems that make reps context-ready before any conversation.',
  },
  {
    icon: Phone,
    title: 'Sales Performance & Task Assignment Systems',
    description: 'Automated call summaries for objection tracking, and structured next-step task assignment into your CRM.',
  },
  {
    icon: FileText,
    title: 'Document Automation',
    description: 'Proposal, contract, and invoicing automations that keep things running smoothly.',
  },
  {
    icon: Send,
    title: 'Custom Sales Automations',
    description: 'If it touches sales, revenue, or operations, we can most likely design and automate it.',
  },
];

export function ServicesSnapshot() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.06 });

  return (
    <section className="relative overflow-hidden bg-[#111827] py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 0% 50%, rgba(1,82,255,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(1,82,255,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
            What We Build
          </p>
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-white md:text-4xl">
            What We Actually Implement
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl font-inter text-lg"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            End-to-end automation solutions for every stage of your sales
            operation.
          </p>
        </div>

        <div ref={gridRef} className="mx-auto mt-16 grid max-w-4xl gap-5 sm:grid-cols-2">
          {SERVICES_GRID.map((service, i) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl p-7"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 220ms ease',
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 1px rgba(1,82,255,0.3), 0 12px 40px rgba(1,82,255,0.12)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.05)';
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[220ms] group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(1,82,255,0.12) 0%, transparent 70%)',
                  borderRadius: 'inherit',
                }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-[220ms] group-hover:shadow-[0_0_16px_rgba(1,82,255,0.35)]"
                  style={{
                    background: 'rgba(1,82,255,0.15)',
                    border: '1px solid rgba(1,82,255,0.25)',
                  }}
                >
                  <service.icon className="h-5 w-5 text-[#0152ff] transition-all duration-[220ms] group-hover:drop-shadow-[0_0_6px_rgba(1,82,255,0.7)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-cabinet text-lg font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  <p
                    className="mt-2 font-inter text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.52)' }}
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                  <LearnMoreLink href="/services" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p
            className="font-inter text-lg"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Just book a discovery call and we can see how we can help
          </p>
          <div className="mt-6">
            <Link
              href="/contact#book"
              className="inline-block rounded-full bg-[#0152ff] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px"
              style={{ boxShadow: '0 4px 24px rgba(1,82,255,0.4)' }}
            >
              Book a Call Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
