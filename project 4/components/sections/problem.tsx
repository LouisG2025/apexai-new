'use client';

import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const PAIN_POINTS = [
  'Follow-ups are inconsistent and depend on memory or working hours',
  'CRM data is incomplete or outdated',
  'Sales reps spend more time updating systems than closing deals',
  'Marketing and sales operate in silos',
  'Leadership lacks real pipeline visibility',
];

const STATS = [
  { icon: Clock, value: '68%', label: 'of sales time is spent on non-selling activity' },
  { icon: TrendingDown, value: '42%', label: 'of revenue is lost due to poor follow-up execution' },
  { icon: DollarSign, value: '5+ hrs', label: 'per rep, per week lost to manual admin' },
  { icon: AlertTriangle, value: '78%', label: 'of buyers choose the company that responds first' },
];

export function Problem() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div ref={headingRef}>
            <p
              className={`mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff] transition-all duration-[400ms] ease-out ${
                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              The Problem
            </p>
            <h2
              className={`font-cabinet text-3xl font-bold tracking-tight text-[#111827] md:text-4xl lg:text-[2.75rem] transition-all duration-[400ms] ease-out ${
                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '60ms' }}
            >
              Your Sales Team Should Be Selling.{' '}
              <span style={{ color: 'rgba(17,24,39,0.38)' }}>
                Not Managing Admin.
              </span>
            </h2>
            <ul className="mt-10 space-y-4">
              {PAIN_POINTS.map((point, i) => (
                <li
                  key={point}
                  className={`flex items-start gap-3 transition-all duration-[400ms] ease-out ${
                    headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${140 + i * 80}ms` }}
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0152ff]"
                    style={{ boxShadow: '0 0 6px rgba(1,82,255,0.5)' }}
                  />
                  <span className="font-inter text-base leading-relaxed text-[#374151]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={statsRef} className="grid gap-4 sm:grid-cols-2">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl p-6 hover:-translate-y-0.5"
                style={{
                  background: '#f6f6f7',
                  border: '1px solid rgba(0,0,0,0.06)',
                  opacity: statsVisible ? 1 : 0,
                  transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: 'rgba(1,82,255,0.1)',
                    border: '1px solid rgba(1,82,255,0.18)',
                  }}
                >
                  <stat.icon className="h-5 w-5 text-[#0152ff]" />
                </div>
                <p className="mt-4 font-cabinet text-3xl font-bold text-[#111827]">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-inter text-sm leading-relaxed text-[#374151]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
