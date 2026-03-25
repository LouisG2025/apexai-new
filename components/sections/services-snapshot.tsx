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
import { motion } from 'framer-motion';

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
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-24 md:py-32">
      {/* Dynamic Background Elements */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(1, 82, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(1, 82, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(1, 82, 255, 0.03) 0%, transparent 100%)
          `
        }}
      />
      
      {/* Animated Mesh Gradients */}
      <div className="absolute top-0 right-0 -tr-1/4 w-[500px] h-[500px] bg-[#0152ff]/10 blur-[120px] rounded-full pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 tr-1/4 w-[500px] h-[500px] bg-[#0152ff]/5 blur-[120px] rounded-full pointer-events-none opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-[#0152ff]/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0152ff] mb-6">
            What We Build
          </div>
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.12]">
            What We Actually <span className="text-[#0152ff]">Implement</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-2xl font-inter text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            End-to-end automation solutions for every stage of your sales
            operation. We don&apos;t just advise &mdash; we build.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-6 sm:grid-cols-2 lg:gap-8">
          {SERVICES_GRID.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Card Hover Gradient */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at center, rgba(1, 82, 255, 0.12) 0%, transparent 100%)',
                }}
              />
              
              {/* Light Sweep Effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              <div className="flex flex-col gap-6 z-10 h-full">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(1,82,255,0.4)]"
                  style={{
                    background: 'rgba(1, 82, 255, 0.15)',
                    border: '1px solid rgba(1, 82, 255, 0.25)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <service.icon className="h-7 w-7 text-[#0152ff] transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(1,82,255,0.8)]" />
                </div>
                
                <div className="flex flex-col flex-1">
                  <h3 className="font-cabinet text-xl font-bold text-white leading-tight md:text-2xl transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p
                    className="mt-4 font-inter text-[15px] md:text-base leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                  
                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6 transition-all duration-500 group-hover:from-[#0152ff]/30" />
                    <LearnMoreLink href="/services" className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
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
