'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BarChart2, RefreshCw, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const HIGHLIGHT_BOXES = [
  {
    icon: BarChart2,
    title: 'ROI First',
    body: 'We design for ROI, not novelty',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Optimisation',
    body: 'We optimise continuously, not once',
  },
  {
    icon: TrendingUp,
    title: 'Always Ahead',
    body: 'We keep you up to date and ahead of the game',
  },
];

function HighlightBox({
  box,
  delay,
  isVisible,
}: {
  box: typeof HIGHLIGHT_BOXES[number];
  delay: number;
  isVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl p-5 cursor-default"
      style={{
        background: hovered ? '#0152ff' : 'white',
        border: `1px solid ${hovered ? '#0152ff' : 'rgba(0,0,0,0.07)'}`,
        boxShadow: hovered ? '0 8px 32px rgba(1,82,255,0.25)' : '0 2px 12px rgba(0,0,0,0.05)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1), background 250ms ease-in-out, border-color 250ms ease-in-out, box-shadow 250ms ease-in-out',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{
          background: hovered ? 'rgba(255,255,255,0.2)' : 'rgba(1,82,255,0.08)',
          border: `1px solid ${hovered ? 'rgba(255,255,255,0.3)' : 'rgba(1,82,255,0.15)'}`,
          transition: 'background 250ms ease-in-out, border-color 250ms ease-in-out',
        }}
      >
        <box.icon
          className="h-5 w-5"
          style={{
            color: hovered ? '#ffffff' : '#0152ff',
            transition: 'color 250ms ease-in-out',
          }}
        />
      </div>
      <h4
        className="mt-3 font-cabinet text-base font-semibold"
        style={{
          color: hovered ? '#ffffff' : '#111827',
          transition: 'color 250ms ease-in-out',
        }}
      >
        {box.title}
      </h4>
      <p
        className="mt-1 font-inter text-sm leading-relaxed"
        style={{
          color: hovered ? 'rgba(255,255,255,0.8)' : '#6b7280',
          transition: 'color 250ms ease-in-out',
        }}
      >
        {box.body}
      </p>
    </div>
  );
}

export function Partnerships() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
          <div
            ref={leftRef}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
              Our Philosophy
            </p>
            <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl lg:text-5xl">
              No Clients, Just Partnerships
            </h2>
            <p className="mt-6 font-inter text-lg leading-relaxed text-gray-600">
              Our approach is consultancy-first and partner-led. We build for{' '}
              <strong className="text-brand-dark">long-term growth</strong>, not short-term gimmicks.
            </p>
            <p className="mt-4 font-inter text-lg leading-relaxed text-gray-600">
              AI will not replace businesses.{' '}
              <strong className="text-brand-dark">
                Businesses that leverage AI will replace those that don&apos;t.
              </strong>{' '}
              We help ambitious teams scale with systems that let them dominate.
              It&apos;s do or die.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {HIGHLIGHT_BOXES.map((box, i) => (
                <HighlightBox
                  key={box.title}
                  box={box}
                  delay={i * 120}
                  isVisible={leftVisible}
                />
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact#book"
                className="inline-block rounded-full bg-[#0152ff] px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px"
                style={{ boxShadow: '0 4px 20px rgba(1,82,255,0.35)' }}
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>

          <div
            ref={rightRef}
            className="hidden lg:block relative h-80 w-full overflow-hidden rounded-3xl lg:h-[480px]"
            style={{
              boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)',
              transitionDelay: '150ms',
            }}
          >
            <Image
              src="/handshake_for_apex_site.webp"
              alt="Partnership handshake"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(1,82,255,0.1) 0%, transparent 60%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
