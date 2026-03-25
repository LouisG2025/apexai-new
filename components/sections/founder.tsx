'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function Founder() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={ref}
          className="grid-section-dark relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-14"
          style={{
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.2)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 550ms cubic-bezier(0.22,1,0.36,1), transform 550ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 100% 30%, rgba(1,82,255,0.08) 0%, transparent 65%)',
            }}
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-[#0152ff]/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0152ff] mb-6">
                A Message From The Founder
              </div>
              <h2 className="font-cabinet text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.15]">
                &ldquo;We specialise in{' '}
                <span className="text-[#0152ff]">sales systems</span>.
                Creative thinking. Strategic execution.&rdquo;
              </h2>
              <div className="mt-8 space-y-4 font-inter text-base md:text-lg leading-relaxed text-slate-400">
                <p>
                  Over the last three years working at the intersection of AI,
                  marketing, and sales, one thing became clear: <strong>Tools are easy.
                  Strategy is rare.</strong>
                </p>
                <p>
                  Our team blends creative thinking with commercial awareness.
                  We examine systems from every angle. <strong>Where ROI genuinely
                  exists.</strong> Whether it risks the customer experience or brand.
                </p>
                <p className="text-white font-medium">
                  Because real growth is getting ahead, not following the herd.
                </p>
              </div>
              <Link
                href="https://www.linkedin.com/in/louis-grange0405/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/12 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
              >
                <Linkedin className="h-4 w-4 text-[#0152ff]" />
                Let&apos;s Connect
              </Link>
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center">
              <div
                className="relative aspect-square w-56 sm:w-64 md:w-72 lg:w-[400px] overflow-hidden rounded-[2.5rem]"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 32px 64px -16px rgba(0,0,0,0.5), 0 0 40px rgba(1,82,255,0.1)',
                }}
              >
                <Image
                  src="/Adobe_Express_-_file.webp"
                  alt="Louis Grange, Founder of ApexAI"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              <div className="mt-6 text-center">
                <p className="font-cabinet text-xl font-bold text-white">Louis Grange</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0152ff] mt-1">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
