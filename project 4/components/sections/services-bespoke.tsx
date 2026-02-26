'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const BULLETS = [
  'Built around your exact need',
  'Designed for ROI and compatibility',
  'Ready to help you scale without adding headcount',
];

export function ServicesBespoke() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-[#111827] py-20 md:py-24 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 50% 50%, rgba(1,82,255,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div
          className="grid-section-dark relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-16"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
          }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(1,82,255,0.5), transparent)',
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: '50%',
              height: '100px',
              background: 'radial-gradient(ellipse at 50% 0%, rgba(1,82,255,0.15) 0%, transparent 70%)',
            }}
          />

          <h2 className="font-cabinet text-2xl font-bold tracking-tight text-white md:text-3xl">
            BESPOKE Sales Systems
          </h2>
          <p
            className="mt-4 font-inter text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Have a specific use case in mind? If it touches <strong>sales, revenue, or
            marketing</strong>, we can most likely design and automate it.
          </p>

          <ul className="mt-6 space-y-3">
            {BULLETS.map((bullet, i) => (
              <li
                key={bullet}
                className="flex items-start gap-3"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 400ms cubic-bezier(0.22,1,0.36,1)',
                  transitionDelay: `${300 + i * 80}ms`,
                }}
              >
                <span
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0152ff]"
                  style={{ boxShadow: '0 0 6px rgba(1,82,255,0.6)' }}
                />
                <span
                  className="font-inter text-sm"
                  style={{ color: 'rgba(255,255,255,0.62)' }}
                >
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <p
            className="mt-8 font-inter text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Got something complex on your mind? Book the call. Let&apos;s break
            it down properly.
          </p>

          <div className="mt-6">
            <Link
              href="/contact#book"
              className="inline-block rounded-full bg-[#0152ff] px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px"
              style={{ boxShadow: '0 4px 20px rgba(1,82,255,0.4)' }}
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
