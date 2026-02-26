'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';

function StepCard({ step, index }: { step: typeof PROCESS_STEPS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl p-8 md:p-10"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(28px)',
        transition: `opacity 500ms cubic-bezier(0.22,1,0.36,1) ${index * 60}ms, transform 500ms cubic-bezier(0.22,1,0.36,1) ${index * 60}ms`,
      }}
    >
      <div className="flex items-start gap-6">
        <span
          className="font-cabinet text-5xl font-bold leading-none flex-shrink-0"
          style={{ color: 'rgba(1,82,255,0.25)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1">
          <h3 className="font-cabinet text-xl font-bold text-white md:text-2xl">
            {step.title}
          </h3>
          <p
            className="mt-2 font-inter leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            dangerouslySetInnerHTML={{ __html: step.description }}
          />

          <ul className="mt-5 space-y-2.5">
            {step.details.map((detail) => (
              <li key={detail} className="flex items-start gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0152ff]"
                  style={{ boxShadow: '0 0 6px rgba(1,82,255,0.5)' }}
                />
                <span
                  className="font-inter text-sm"
                  style={{ color: 'rgba(255,255,255,0.62)' }}
                >
                  {detail}
                </span>
              </li>
            ))}
          </ul>

          {step.ctaLabel && (
            <Link
              href="/contact#book"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0152ff] transition-all hover:gap-3"
            >
              {step.ctaLabel}
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{
                  border: '1px solid rgba(1,82,255,0.3)',
                  background: 'rgba(1,82,255,0.1)',
                }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProcessTimeline() {
  const leftRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLeftVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#111827] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[380px_1fr] lg:gap-20 lg:items-start">
          <div
            ref={leftRef}
            className="lg:sticky"
            style={{
              top: '2rem',
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 550ms cubic-bezier(0.22,1,0.36,1), transform 550ms cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
              The Process
            </p>
            <h2 className="font-cabinet text-3xl font-bold tracking-tight text-white md:text-4xl">
              Our 5 Step Build Process
            </h2>
            <p
              className="mt-4 font-inter leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Every system follows the same rules.
              Clear plan. Creative strategy. Continuous improvement.
            </p>
            <div className="mt-8">
              <Link
                href="/contact#book"
                className="inline-block rounded-full bg-[#0152ff] px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px"
                style={{ boxShadow: '0 4px 20px rgba(1,82,255,0.35)' }}
              >
                Book a Call
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
