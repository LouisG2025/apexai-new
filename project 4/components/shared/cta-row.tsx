import Link from 'next/link';

interface CtaRowProps {
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bg?: 'white' | 'offwhite' | 'dark';
}

export function CtaRow({
  primaryLabel = 'Book a Discovery Call',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  bg = 'white',
}: CtaRowProps) {
  const isDark = bg === 'dark';

  return (
    <section
      className={`cta-grid-dark relative overflow-hidden py-14 md:py-18 ${
        isDark
          ? 'bg-[#111827]'
          : bg === 'offwhite'
          ? 'bg-white'
          : 'bg-white'
      }`}
    >
      {isDark && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 100% at 50% 50%, rgba(1,82,255,0.08) 0%, transparent 65%)',
          }}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="rounded-full bg-[#0152ff] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px"
            style={{ boxShadow: '0 4px 24px rgba(1,82,255,0.35)' }}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`rounded-full border px-8 py-3.5 text-sm font-semibold transition-all hover:-translate-y-px ${
                isDark
                  ? 'border-white/15 text-white hover:border-white/30'
                  : 'border-gray-300 text-brand-dark hover:border-gray-400'
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
