import { ImageIcon } from 'lucide-react';
import { LearnMoreLink } from '@/components/shared/learn-more-link';

interface ServiceCategoryProps {
  title: string;
  description: string;
  bullets: readonly string[];
  reversed?: boolean;
  slug?: string;
}

export function ServiceCategory({
  title,
  description,
  bullets,
  reversed = false,
  slug,
}: ServiceCategoryProps) {
  const contactHref = slug
    ? `/contact?service=${encodeURIComponent(slug)}`
    : '/contact';

  return (
    <div
      className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
        reversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div>
        <h3 className="font-cabinet text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
          {title}
        </h3>
        <p className="mt-4 font-inter leading-relaxed text-gray-600">{description}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-primary" />
              <span className="text-sm text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <LearnMoreLink href={contactHref} label="Get started with this service" />
        </div>
      </div>

      <div className="flex h-64 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 lg:h-80">
        <div className="text-center">
          <ImageIcon className="mx-auto h-12 w-12 text-gray-300" />
          <p className="mt-3 text-sm text-gray-400">Image Placeholder</p>
        </div>
      </div>
    </div>
  );
}
