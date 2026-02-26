'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const CAMPUS_IMAGES = [
  {
    src: '/Love-That-Design-CP05-building-and-AI-Campus-Office-Dubai-3-1536x1024.webp',
    alt: 'DIFC Innovation One, Dubai AI Campus entrance lobby',
  },
  {
    src: '/Love-That-Design-CP05-building-and-AI-Campus-Office-Dubai-2-1536x1024.webp',
    alt: 'Dubai AI Campus, grand staircase and atrium',
  },
  {
    src: '/Love-That-Design-CP05-building-and-AI-Campus-Office-Dubai-13-1536x1024.webp',
    alt: 'Dubai AI Campus, collaborative workspace',
  },
  {
    src: '/Love-That-Design-CP05-building-and-AI-Campus-Office-Dubai-8-1536x1024.webp',
    alt: 'Dubai AI Campus, reception and open floor',
  },
  {
    src: '/Love-That-Design-CP05-building-and-AI-Campus-Office-Dubai-14-2048x1365.webp',
    alt: 'Dubai AI Campus, lounge area',
  },
];

export function CampusSection() {
  const [current, setCurrent] = useState(0);
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const advance = () => {
    setCurrent((prev) => (prev + 1) % CAMPUS_IMAGES.length);
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            ref={leftRef}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 550ms cubic-bezier(0.22,1,0.36,1), transform 550ms cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#0152ff]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0152ff]">
                Where We Operate
              </span>
            </div>
            <h2 className="mt-4 font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              Dubai AI Campus
            </h2>
            <p className="mt-4 font-inter text-lg leading-relaxed text-gray-600">
              ApexAI operates from the Dubai AI Campus in DIFC. It is the
              region&apos;s{' '}
              <strong className="text-brand-dark">leading hub for artificial intelligence</strong>{' '}
              and emerging technology companies. This means we are at the centre
              of the AI ecosystem in one of the most forward-thinking
              cities in the world. You want the most up-to-date solutions?
              Then get in touch.
            </p>
            <div className="mt-8">
              <Link
                href="/contact#book"
                className="inline-block rounded-full bg-[#0152ff] px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px"
                style={{ boxShadow: '0 4px 20px rgba(1,82,255,0.35)' }}
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div
            ref={rightRef}
            className="group relative"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 550ms cubic-bezier(0.22,1,0.36,1), transform 550ms cubic-bezier(0.22,1,0.36,1)',
              transitionDelay: '150ms',
            }}
          >
            <button
              onClick={advance}
              className="relative block w-full cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0152ff] focus-visible:ring-offset-2"
              style={{
                borderRadius: '24px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
              }}
              aria-label="View next campus image"
            >
              <div className="relative aspect-[3/2] w-full">
                {CAMPUS_IMAGES.map((img, i) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover transition-opacity duration-500 ${
                      i === current ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={i === 0}
                  />
                ))}
              </div>

              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" style={{ borderRadius: '24px' }} />

              <span
                className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-sm transition-all group-hover:scale-105"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              >
                Click to view more
              </span>
            </button>

            <div className="mt-4 flex items-center justify-center gap-1.5">
              {CAMPUS_IMAGES.map((img, i) => (
                <span
                  key={img.src}
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-[#0152ff]'
                      : 'w-1.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
