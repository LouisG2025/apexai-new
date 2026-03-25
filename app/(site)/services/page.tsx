import { PageHero } from '@/components/sections/page-hero';
import { ServicesFramework } from '@/components/sections/services-framework';
import { ServicesOutcomes } from '@/components/sections/services-outcomes';
import { ServicesPractice } from '@/components/sections/services-practice';
import { ServicesBespoke } from '@/components/sections/services-bespoke';
import { FinalCta } from '@/components/sections/final-cta';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'Services | ApexAI',
  description: 'AI-powered automation services for sales teams.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Our AI Sales Solutions"
        description="Built to design, deploy, and optimise AI systems that turn pipeline into predictable revenue."
      />

      <ServicesOutcomes />

      <div className="mx-4 sm:mx-6 lg:mx-8 my-8 md:my-12 overflow-hidden rounded-[40px] md:rounded-[56px]">
        <ServicesFramework />
      </div>

      <ServicesPractice />

      <div className="mx-4 sm:mx-6 lg:mx-8 my-8 md:my-12 overflow-hidden rounded-[40px] md:rounded-[56px]">
        <ServicesBespoke />
        <FinalCta />
      </div>
      <Footer />
    </div>
  );
}
