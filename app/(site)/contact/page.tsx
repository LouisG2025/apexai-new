import { PageHero } from '@/components/sections/page-hero';
import { ContactPageContent } from '@/components/sections/contact-form';

export const metadata = {
  title: 'Contact | ApexAI',
  description: 'Book a free discovery call with ApexAI.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Ready to get started?"
        description="Book a Discovery Call or drop us a message."
      />

      <ContactPageContent />
    </div>
  );
}
