'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  heading?: string;
  subheading?: string;
  items?: FaqItem[];
}

const DEFAULT_FAQ: FaqItem[] = [
  {
    question: 'How long does it take to implement an automation system?',
    answer:
      'Most systems are live within <strong>2 to 3 weeks</strong>. Timelines can extend depending on the number of channels we are building for, integrations required, and any compliance or scope considerations. We audit first, then build.',
  },
  {
    question: 'Do I need to replace my existing CRM?',
    answer:
      'No. We build around whatever you already use. We are experienced with a wide range of CRMs and <strong>specialise in CRM automation</strong>, so working with your existing setup is normally straightforward.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work with both B2B and B2C businesses. Our solution is <strong>completely bespoke</strong>, built around whatever your team requires when it comes to capturing and qualifying leads.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'We work on a project basis, so <strong>no large retainers</strong>. We believe in a build fee model that creates scalable infrastructure tailored to your business. If you want to discuss pricing, book a discovery call and Louis can give you a rough quote directly.',
  },
  {
    question: 'What happens after the system is launched?',
    answer:
      "We don't disappear. We see ourselves as an <strong>AI partner</strong>. We continue to monitor performance, track ROI, and optimise weekly.",
  },
];

export function FaqSection({
  heading = 'Frequently Asked Questions',
  subheading = "Got questions? We have answers. If you don't see what you're looking for, reach out to our team.",
  items = DEFAULT_FAQ,
}: FaqSectionProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: listRef, isVisible: listVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.06 });

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
            FAQ
          </p>
          <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-inter text-lg text-gray-500">
            {subheading}
          </p>
        </div>

        <div ref={listRef}>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="overflow-hidden rounded-2xl px-6"
              style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                opacity: listVisible ? 1 : 0,
                transform: listVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 450ms cubic-bezier(0.22,1,0.36,1), transform 450ms cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <AccordionTrigger className="font-cabinet py-5 text-left text-base font-semibold text-brand-dark hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-inter leading-relaxed text-gray-500">
                <span dangerouslySetInnerHTML={{ __html: item.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
      </div>
    </section>
  );
}
