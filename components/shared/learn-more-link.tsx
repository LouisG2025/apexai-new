import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface LearnMoreLinkProps {
  href: string;
  label?: string;
  className?: string;
}

export function LearnMoreLink({ href, label = 'Learn more', className }: LearnMoreLinkProps) {
  return (
    <Link
      href={href}
      className={`group/link inline-flex items-center gap-3 text-sm font-semibold text-brand-primary ${className || ''}`}
    >
      {label}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 transition-all duration-200 group-hover/link:bg-brand-primary/20">
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
      </span>
    </Link>
  );
}
