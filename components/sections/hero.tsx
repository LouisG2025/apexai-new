'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HeroBrandIcons } from './hero-brand-icons';
import { ThreeBackground } from '@/components/shared/three-background';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const base = 'transition-all ease-[cubic-bezier(0.22,1,0.36,1)]';
  const visible = 'opacity-100 translate-y-0';
  const hidden = 'opacity-0 translate-y-6';

  return (
    <section className="hero-dark relative overflow-hidden min-h-[100dvh] flex flex-col items-center justify-center snap-start" style={{ background: '#111827' }}>
      <ThreeBackground />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 z-10 flex flex-col items-center justify-center">
        <div className="mx-auto max-w-3xl text-center" style={{ position: 'relative' }}>
          <p
            className={`mb-5 text-xs font-semibold uppercase tracking-widest text-[#0152ff] duration-[450ms] ${base} ${mounted ? visible : hidden}`}
            style={{ transitionDelay: '0ms' }}
          >
            AI Sales Automation Specialists
          </p>

          <h1
            className={`font-cabinet text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.75rem] duration-[500ms] ${base} ${mounted ? visible : hidden}`}
            style={{ textShadow: '0 2px 48px rgba(0,0,0,0.45)', transitionDelay: '120ms' }}
          >
            We Build{' '}
            <span
              className="text-[#0152ff]"
              style={{ textShadow: '0 0 28px rgba(1,82,255,0.38)' }}
            >
              AI Systems
            </span>{' '}
            To Supercharge Your Sales
          </h1>

          <p
            className={`mx-auto mt-6 max-w-2xl font-inter text-lg leading-relaxed duration-[500ms] ${base} ${mounted ? visible : hidden}`}
            style={{ color: 'rgba(255,255,255,0.58)', transitionDelay: '240ms' }}
          >
            We design and deploy intelligent sales systems that eliminate the manual work, accelerate your pipeline, and give your team an unfair advantage.
          </p>

          <div
            className={`mt-12 flex flex-col items-center gap-4 duration-[500ms] ${base} ${mounted ? visible : hidden}`}
            style={{ transitionDelay: '360ms' }}
          >
            <p
              className="font-inter text-sm font-medium tracking-wide"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Interested in what&apos;s possible?
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact#book"
                className="inline-flex items-center rounded-full bg-[#0152ff] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  boxShadow: '0 4px 28px rgba(1,82,255,0.45), 0 1px 6px rgba(0,0,0,0.35)',
                }}
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                }}
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-gradient-to-b from-[#0152ff] to-transparent"
        />
      </motion.div>
    </section>
  );
}
