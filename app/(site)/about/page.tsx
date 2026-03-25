import { PageHero } from '@/components/sections/page-hero';
import { Founder } from '@/components/sections/founder';
import { AboutValues } from '@/components/sections/about-values';
import { CampusSection } from '@/components/sections/campus-section';
import { Partnerships } from '@/components/sections/partnerships';
import { FinalCta } from '@/components/sections/final-cta';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'About | ApexAI',
  description: 'Meet the team behind ApexAI.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Why We Started"
        description="Who we are. What we stand for. Where we're based."
      />

      <Founder />

      <div className="mx-4 sm:mx-6 lg:mx-8 my-8 md:my-12 overflow-hidden rounded-[40px] md:rounded-[56px]">
        <AboutValues />
      </div>

      <CampusSection />
      <Partnerships />

      <div className="mx-4 sm:mx-6 lg:mx-8 my-8 md:my-12 overflow-hidden rounded-[40px] md:rounded-[56px]">
        <FinalCta />
      </div>
      <Footer />
    </div>
  );
}
