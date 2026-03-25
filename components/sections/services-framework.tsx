'use client';

import { Target, TrendingUp, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-md transition-all duration-500"
      style={{
        boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 0% 0%, rgba(1,82,255,0.1) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(1,82,255,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex-[0.8]">
          <div className="inline-flex items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
              style={{
                background: 'linear-gradient(135deg, rgba(1,82,255,0.2) 0%, rgba(1,82,255,0.1) 100%)',
                border: '1px solid rgba(1,82,255,0.3)',
                boxShadow: '0 8px 16px rgba(1,82,255,0.15)',
              }}
            >
              <layer.icon className="h-7 w-7 text-[#0152ff]" />
            </div>
            <h3 className="font-cabinet text-3xl font-bold tracking-tight text-white md:text-4xl">
              {layer.label}
            </h3>
          </div>
          <p
            className="mt-6 font-inter text-lg leading-relaxed text-slate-400"
            dangerouslySetInnerHTML={{ __html: layer.subtitle }}
          />
        </div>

        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            {layer.capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/5 p-4 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/10 group/item"
              >
                <div
                  className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#0152ff] transition-transform duration-300 group-hover/item:scale-125"
                  style={{ boxShadow: '0 0 10px rgba(1,82,255,0.6)' }}
                />
                <span className="font-inter text-sm font-medium text-slate-300 group-hover/item:text-white">
                  {cap}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-12 border-t border-white/5 pt-10"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0152ff]">The Outcome</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        
        <p
          className="font-inter text-base italic leading-relaxed text-slate-400 text-center max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: layer.expandedContent.intro }}
        />
        
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {layer.expandedContent.sections.map((section) => (
            <div 
              key={section.title}
              className="rounded-2xl bg-white/[0.02] p-5 border border-white/5 transition-colors hover:bg-white/[0.04]"
            >
              <h4 className="font-cabinet text-base font-bold text-white mb-2">
                {section.title}
              </h4>
              <p className="font-inter text-sm leading-relaxed text-slate-500">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
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

        <div className="mt-16 relative">
          {LAYERS.map((layer, index) => (
            <div 
              key={layer.label} 
              className="sticky top-24 md:top-32 mb-12 last:mb-0"
              style={{ zIndex: index + 1 }}
            >
              <LayerCard layer={layer} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
