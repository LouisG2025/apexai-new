'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';

function StepCard({ step, index }: { step: typeof PROCESS_STEPS[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:bg-white/5 border border-white/5 hover:border-white/10"
      style={{
        background: 'rgba(255,255,255,0.03)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      <div className="flex items-start gap-6">
        <span
          className="font-cabinet text-5xl font-bold leading-none flex-shrink-0 transition-colors duration-300 group-hover:text-[#0152ff]/40"
          style={{ color: 'rgba(1,82,255,0.2)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1">
          <h3 className="font-cabinet text-xl font-bold text-white md:text-2xl transition-colors duration-300 group-hover:text-white">
            {step.title}
          </h3>
          <p
            className="mt-3 font-inter text-[15px] leading-relaxed transition-colors duration-300 group-hover:text-white/70"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            dangerouslySetInnerHTML={{ __html: step.description }}
          />

          <ul className="mt-6 space-y-3">
            {step.details.map((detail, i) => (
              <motion.li 
                key={detail} 
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0152ff]"
                  style={{ boxShadow: '0 0 8px rgba(1,82,255,0.6)' }}
                />
                <span
                  className="font-inter text-sm"
                  style={{ color: 'rgba(255,255,255,0.62)' }}
                >
                  {detail}
                </span>
              </motion.li>
            ))}
          </ul>

          {step.ctaLabel && (
            <Link
              href="/contact#book"
              className="mt-8 inline-flex items-center gap-2.5 text-sm font-semibold text-[#0152ff] transition-all hover:gap-3.5 group-hover:translate-x-0.5"
            >
              {step.ctaLabel}
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-[#0152ff]/20"
                style={{
                  border: '1px solid rgba(1,82,255,0.3)',
                  background: 'rgba(1,82,255,0.1)',
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProcessTimeline() {
  return (
    <section className="bg-[#111827] py-24 md:py-32 relative overflow-visible rounded-[40px] md:rounded-[56px]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[380px_1fr] lg:gap-20 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="relative p-1">
              {/* Subtle background glow for sticky section */}
              <div className="absolute -inset-4 bg-[#0152ff]/5 blur-3xl rounded-full opacity-50 pointer-events-none" />
              
              <div className="relative">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
                  The Process
                </p>
                <h2 className="font-cabinet text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.15]">
                  Our 5 Step Build Process
                </h2>
                <p
                  className="mt-6 font-inter text-lg leading-relaxed max-w-[340px]"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  Every system follows the same rules.
                  Clear plan. Creative strategy. Continuous improvement.
                </p>
                <div className="mt-10">
                  <Link
                    href="/contact#book"
                    className="inline-block rounded-full bg-[#0152ff] px-10 py-4 text-base font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(1,82,255,0.5)] active:translate-y-0"
                    style={{ boxShadow: '0 4px 24px rgba(1,82,255,0.4)' }}
                  >
                    Book a Call Here
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
