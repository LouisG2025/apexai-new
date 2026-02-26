import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'offwhite' | 'dark';
  overlay?: 'grid' | 'grid-light' | 'none';
}

export function SectionContainer({
  children,
  className,
  bg = 'white',
  overlay = 'none',
}: SectionContainerProps) {
  const bgClasses = {
    white: 'bg-white',
    offwhite: 'bg-brand-offwhite',
    dark: 'bg-brand-dark text-white',
  };

  const overlayClasses = {
    grid: 'grid-overlay',
    'grid-light': 'grid-overlay-light',
    none: '',
  };

  return (
    <section
      className={cn(
        'py-20 md:py-28',
        bgClasses[bg],
        overlayClasses[overlay],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
