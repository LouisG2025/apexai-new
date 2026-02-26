'use client';

import { Target, TrendingUp, Settings } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const LAYERS = [
  {
    icon: Target,
    label: 'ACQUISITION',
    subtitle: 'Build prospecting infrastructure that feeds your sales team with structured, enriched, sales-ready data at scale.',
    capabilities: [
      'Lead scraping systems',
      'Automated prospect data enrichment',
      'Multichannel outbound for client acquisition (email & LinkedIn)',
      'Lead reactivation campaigns',
      'Lead capture systems',
    ],
    expandedContent: {
      intro: 'Acquisition is where <strong>revenue begins</strong>. We engineer automated systems that find, qualify, and engage prospects so your team never starts from zero.',
      sections: [
        {
          title: 'Intelligent Prospecting',
          text: 'Automated research and enrichment layers identify high-value targets before your team picks up the phone.',
        },
        {
          title: 'Multi-Channel Outreach',
          text: 'Coordinated sequences across email, LinkedIn, and calls that adapt based on prospect behaviour.',
        },
        {
          title: 'Database Reactivation',
          text: 'Dormant contacts are systematically re-engaged through personalised, timed outreach flows.',
        },
      ],
    },
  },
  {
    icon: TrendingUp,
    label: 'CONVERSION',
    subtitle: 'Building conversion systems that capture, qualify and convert. Eliminating inconsistency and <strong>shortening sales cycles</strong> without killing momentum.',
    capabilities: [
      'AI appointment setters for lead capture, qualification and booking',
      'Intelligent CRM Automation',
      'Automated follow-up logic',
      'Pipeline optimisation frameworks',
      'Objection tracking and call intelligence',
    ],
    expandedContent: {
      intro: 'Conversion is where <strong>deals are won or lost</strong>. We remove every point of friction between first meeting and closed deal.',
      sections: [
        {
          title: 'Pipeline Architecture',
          text: 'CRM stages, automations, and routing rules designed around how your team actually sells.',
        },
        {
          title: 'Automated Follow-Up',
          text: 'Sequenced touchpoints trigger based on deal activity, ensuring no opportunity goes cold.',
        },
        {
          title: 'AI-Powered Scheduling',
          text: 'Intelligent appointment setting removes back-and-forth and gets meetings booked faster.',
        },
      ],
    },
  },
  {
    icon: Settings,
    label: 'OPERATIONS',
    subtitle: 'Build revenue control systems that give leadership clarity, forecasting confidence, and operational scale.',
    capabilities: [
      'Sales visibility dashboards',
      'Proposal, document, invoicing automation',
      'Intelligent CRM Setup',
      'AI assistants',
    ],
    expandedContent: {
      intro: 'Operations is the <strong>silent revenue killer</strong>. We automate the admin layer so your team spends time selling, not typing.',
      sections: [
        {
          title: 'Document Generation',
          text: 'Proposals, contracts, and invoices created automatically from CRM data with zero manual formatting.',
        },
        {
          title: 'Post-Call Automation',
          text: 'Call summaries, action items, and CRM updates generated instantly after every conversation.',
        },
      ],
    },
  },
] as const;

function LayerCard({ layer, index }: { layer: typeof LAYERS[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 ease-out md:p-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(1,82,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                background: 'rgba(1,82,255,0.15)',
                border: '1px solid rgba(1,82,255,0.25)',
              }}
            >
              <layer.icon className="h-5 w-5 text-[#0152ff]" />
            </div>
            <h3 className="font-cabinet text-2xl font-bold tracking-wide text-white">
              {layer.label}
            </h3>
          </div>
          <p
            className="mt-4 font-inter text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            dangerouslySetInnerHTML={{ __html: layer.subtitle }}
          />
        </div>

        <div className="flex-1">
          <div className="grid gap-2.5 sm:grid-cols-2">
            {layer.capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-2.5 rounded-xl px-4 py-3 transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0152ff]"
                  style={{ boxShadow: '0 0 6px rgba(1,82,255,0.5)' }}
                />
                <span className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-8 border-t pt-6"
        style={{ borderTopColor: 'rgba(255,255,255,0.07)' }}
      >
        <p
          className="font-inter text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.55)' }}
          dangerouslySetInnerHTML={{ __html: layer.expandedContent.intro }}
        />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {layer.expandedContent.sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-cabinet text-sm font-semibold text-white">
                {section.title}
              </h4>
              <p
                className="mt-1.5 font-inter text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesFramework() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-[#111827] py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(1,82,255,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`mx-auto max-w-3xl text-center transition-all duration-500 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
            The Framework
          </p>
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-white md:text-4xl">
            The Three Layers of Sales Automation
          </h2>
          <p
            className="mt-4 font-inter text-lg"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            We don&apos;t automate tasks. We engineer revenue systems across
            acquisition, conversion, and operations.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {LAYERS.map((layer, index) => (
            <LayerCard key={layer.label} layer={layer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
