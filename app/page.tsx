import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { HeroSection } from '@/components/hero-section';
import { BusinessAreasCards } from '@/components/business-areas-cards';
import { ImpactCounters } from '@/components/impact-counters';
import { PartnersCarousel } from '@/components/partners-carousel';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lakira Partners | Sustainable Agribusiness & Renewable Energy',
  description: 'Lakira Partners Limited transforms agriculture and energy sectors across Africa with sustainable solutions. Empowering 500+ farmers with solar energy and climate-smart practices.',
  alternates: {
    canonical: 'https://www.lakirapartners.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BusinessAreasCards />
      <ImpactCounters />
      <PartnersCarousel />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
