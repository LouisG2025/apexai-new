import { PageHero } from '@/components/sections/page-hero';
import { ProcessApproach } from '@/components/sections/process-approach';
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { FinalCta } from '@/components/sections/final-cta';

export const metadata = {
  title: 'Our Process | ApexAI',
  description: 'A proven 5-step process from discovery to launch.',
};

export default function ProcessPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Our Process"
        description="A structured 5-step build process: from discovery through to deployment and continuous optimisation."
      />

      <ProcessApproach />

      <div className="mx-4 sm:mx-6 lg:mx-8 my-8 md:my-12 overflow-hidden rounded-[40px] md:rounded-[56px]">
        <ProcessTimeline />
        <FinalCta />
      </div>
    </div>
  );
}
