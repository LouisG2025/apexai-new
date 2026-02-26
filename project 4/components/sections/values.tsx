import { Target, Handshake, Eye } from 'lucide-react';

const VALUES_DATA = [
  {
    icon: Target,
    title: 'Results Over Hype',
    description:
      'We measure success in revenue impact, not buzzwords. Every automation we build is tied to a measurable business outcome.',
  },
  {
    icon: Handshake,
    title: 'Partnership Mindset',
    description:
      'We operate as an extension of your team, not a vendor. Your success is our success, and we are invested in long-term outcomes.',
  },
  {
    icon: Eye,
    title: 'Relentless Precision',
    description:
      'Details matter. We obsess over the small things so that your systems run flawlessly and your team can trust the process.',
  },
];

export function Values() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Our Values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-inter text-lg text-gray-600">
            The principles that guide everything we build and every partnership
            we form.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {VALUES_DATA.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-gray-100 bg-white p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                <value.icon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="mt-6 font-cabinet text-xl font-semibold text-brand-dark">
                {value.title}
              </h3>
              <p className="mt-3 font-inter text-sm leading-relaxed text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
