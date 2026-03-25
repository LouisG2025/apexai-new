import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Pillars } from '@/components/sections/pillars';
import { ServicesSnapshot } from '@/components/sections/services-snapshot';
import { Partnerships } from '@/components/sections/partnerships';
import { FounderRedirect } from '@/components/sections/founder-redirect';
import { FinalCta } from '@/components/sections/final-cta';
import { FaqSection } from '@/components/shared/faq-section';
import { MidPageCta } from '@/components/shared/mid-page-cta';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'ApexAI | AI-Powered Sales Automation',
  description: 'ApexAI builds intelligent AI sales systems that transform your operations into a predictable, scalable revenue machine. Based in Dubai, DIFC.',
};

export default function HomePage() {
  return (
    <div className="bg-white h-[100dvh] overflow-y-auto snap-y snap-mandatory">
      <Hero />

      <div className="mx-4 sm:mx-6 lg:mx-8 my-8 md:my-12 overflow-hidden rounded-[40px] md:rounded-[56px] snap-start">
        <Problem />
      </div>

      <div className="snap-start">
        <Pillars />
      </div>

      <div className="mx-4 sm:mx-6 lg:mx-8 my-8 md:my-12 overflow-hidden rounded-[40px] md:rounded-[56px] snap-start">
        <ServicesSnapshot />
      </div>

      <div className="snap-start">
        <MidPageCta
          headline="Ready to Build a Sales Machine?"
          subline="Book a discovery call and we can see exactly how we can help your business."
          primaryLabel="Book a Discovery Call"
          primaryHref="/contact#book"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </div>

      <div className="snap-start">
        <Partnerships />
      </div>

      <div className="mx-4 sm:mx-6 lg:mx-8 my-8 md:my-12 overflow-hidden rounded-[40px] md:rounded-[56px] snap-start">
        <FounderRedirect />
      </div>

      <div className="snap-start">
        <FinalCta />
      </div>
      <div className="snap-start">
        <FaqSection />
      </div>

      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}
