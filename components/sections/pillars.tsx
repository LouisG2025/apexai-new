'use client';

import { Workflow, Bot, BarChart3 } from 'lucide-react';
import { LearnMoreLink } from '@/components/shared/learn-more-link';
import { motion } from 'framer-motion';

const PILLARS = [
  {
    icon: Workflow,
    number: '01',
    title: 'Acquisition',
    description:
      'Structuring data, enriching leads, and launching outbound systems to continuously generate, convert, or reactivate leads so your sales team operates at 10X.',
    href: '/services',
  },
  {
    icon: Bot,
    number: '02',
    title: 'Conversion',
    description:
      'Engineering follow-up automations, intelligent CRM logic, and sales workflows that shorten sales cycles and improve the customer experience.',
    href: '/services',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Operations',
    description:
      'Creating sales visibility, reporting infrastructure, admin reduction, and operational automations that support scaling without increasing headcount.',
    href: '/services',
  },
];

export function Pillars() {
  return (
    <section className="grid-section-subtle relative bg-white py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
            Our Framework
          </p>
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl lg:text-5xl">
            Three Pillars of Sales Transformation
          </h2>
          <p className="mx-auto mt-4 font-inter text-lg text-gray-600">
            We don&apos;t just automate tasks. We <strong>architect sales systems</strong> across
            acquisition, conversion, and operations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0152ff]/10 border border-black/5"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(1,82,255,0.06) 0%, transparent 70%)',
                }}
              />

              <div className="relative flex flex-1 flex-col z-10">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0152ff]/10 border border-[#0152ff]/20 transition-transform duration-300 group-hover:scale-110">
                    <pillar.icon className="h-6 w-6 text-[#0152ff]" />
                  </div>
                  <span className="font-cabinet text-5xl font-extrabold tabular-nums leading-none text-[#0152ff]/10">
                    {pillar.number}
                  </span>
                </div>

                <div className="flex-1 flex flex-col min-h-0">
                  <h3 className="mt-6 font-cabinet text-2xl font-bold tracking-tight text-[#111827]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 font-inter text-base leading-relaxed text-[#4b5563]">
                    {pillar.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-8">
                  <LearnMoreLink href={pillar.href} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
