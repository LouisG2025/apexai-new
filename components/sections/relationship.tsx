import { Zap, Globe } from 'lucide-react';

export function Relationship() {
  return (
    <section className="bg-brand-offwhite py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            The ApexAI Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-inter text-lg text-gray-600">
            Understanding how ApexAI and After5 work together to deliver
            comprehensive solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
              <Zap className="h-6 w-6 text-brand-primary" />
            </div>
            <h3 className="mt-6 font-cabinet text-xl font-semibold text-brand-dark">ApexAI</h3>
            <p className="mt-3 font-inter leading-relaxed text-gray-600">
              Placeholder description of ApexAI and its role within the
              ecosystem. Focused on AI-powered sales automation, CRM systems,
              and revenue operations for B2B businesses.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
              <Globe className="h-6 w-6 text-brand-primary" />
            </div>
            <h3 className="mt-6 font-cabinet text-xl font-semibold text-brand-dark">After5</h3>
            <p className="mt-3 font-inter leading-relaxed text-gray-600">
              Placeholder description of After5 and its complementary role.
              Focused on broader digital transformation, marketing automation,
              and growth strategy for scaling businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
