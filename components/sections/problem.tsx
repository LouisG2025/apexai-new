'use client';

import { useRef, useEffect } from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

const PAIN_POINTS = [
  'Follow-ups are inconsistent and depend on memory or working hours',
  'CRM data is incomplete or outdated',
  'Sales reps spend more time updating systems than closing deals',
  'Marketing and sales operate in silos',
  'Leadership lacks real pipeline visibility',
];

const STATS = [
  { 
    icon: Clock, 
    value: 68, 
    suffix: '%', 
    label: 'of sales time is spent on non-selling activity' 
  },
  { 
    icon: TrendingDown, 
    value: 42, 
    suffix: '%', 
    label: 'of revenue is lost due to poor follow-up execution' 
  },
  { 
    icon: DollarSign, 
    value: 5, 
    prefix: '', 
    suffix: '+ hrs', 
    label: 'per rep, per week lost to manual admin' 
  },
  { 
    icon: AlertTriangle, 
    value: 78, 
    suffix: '%', 
    label: 'of buyers choose the company that responds first' 
  },
];

function StatCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 45,
    damping: 20,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (latest) => 
    `${prefix}${Math.floor(latest)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function Problem() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
              The Problem
            </p>
            <h2 className="font-cabinet text-3xl font-bold tracking-tight text-[#111827] md:text-4xl lg:text-[2.75rem]">
              Your Sales Team Should Be Selling.{' '}
              <span className="text-gray-400">
                Not Managing Admin.
              </span>
            </h2>
            <ul className="mt-10 space-y-4">
              {PAIN_POINTS.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0152ff]"
                    style={{ boxShadow: '0 0 6px rgba(1,82,255,0.5)' }}
                  />
                  <span className="font-inter text-base leading-relaxed text-[#374151]">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div ref={containerRef} className="grid gap-4 sm:grid-cols-2">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#f6f6f7] p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-black/5 border border-transparent hover:border-black/5"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0152ff]/10 border border-[#0152ff]/20 transition-transform duration-300 group-hover:scale-110"
                >
                  <stat.icon className="h-5 w-5 text-[#0152ff]" />
                </div>
                <p className="mt-4 font-cabinet text-3xl font-bold text-[#111827]">
                  <StatCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 font-inter text-sm leading-relaxed text-[#374151]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
