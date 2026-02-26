'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const BLOCKS = [
  {
    title: 'Read About Us',
    teaser: 'Discover how we help sales teams automate their way to predictable revenue.',
    href: '/about',
  },
  {
    title: "Founder's Story",
    teaser: 'Built by an operator who lived the pain of broken sales systems firsthand.',
    href: '/about',
  },
  {
    title: 'Explore Our Process',
    teaser: 'See the structured methodology behind every system we engineer.',
    href: '/process',
  },
] as const;

export function FounderRedirect() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-[#111827] py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 50% 50%, rgba(1,82,255,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start lg:gap-16">
          <div
            ref={leftRef}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
              Who We Are
            </p>
            <h3 className="font-cabinet text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Where Tech Meets Creative Execution
            </h3>
            <p
              className="mt-4 font-inter leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              ApexAI was founded by an operator who lived the pain of broken
              sales systems firsthand. Our approach is rooted in <strong>real-world
              experience</strong>, not theory.
            </p>
          </div>

          <div ref={rightRef} className="grid gap-4 sm:grid-cols-3">
            {BLOCKS.map((block, i) => (
              <Link
                key={block.title}
                href={block.href}
                className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                  opacity: rightVisible ? 1 : 0,
                  transform: rightVisible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(1,82,255,0.1) 0%, transparent 70%)',
                  }}
                />
                <h4 className="font-cabinet text-base font-semibold text-white">
                  {block.title}
                </h4>
                <p
                  className="mt-2 font-inter text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {block.teaser}
                </p>
                <span className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-[#0152ff]">
                  Learn more
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: 'rgba(1,82,255,0.15)',
                      border: '1px solid rgba(1,82,255,0.25)',
                    }}
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #111827 100%)',
        }}
      />
    </section>
  );
}
