import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We map your current operations, identify bottlenecks, and define measurable success criteria.',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description: 'A custom automation roadmap tailored to your revenue goals and tech stack.',
  },
  {
    number: '03',
    title: 'Build, Test & Launch',
    description: 'We build, rigorously test, and deploy your systems with hands-on support.',
  },
];

export function ProcessPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            A Proven Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-inter text-lg text-gray-600">
            From discovery to deployment, our structured approach ensures
            predictable outcomes every time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-cabinet text-5xl font-bold text-brand-primary/10">
                {step.number}
              </span>
              <h3 className="font-cabinet mt-2 text-xl font-semibold text-brand-dark">
                {step.title}
              </h3>
              <p className="mt-3 font-inter text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
          >
            View full process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
