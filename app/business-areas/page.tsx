import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { OptimizedImage } from '@/components/optimized-image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Areas | Lakira Partners',
  description: 'Explore our agribusiness and renewable energy solutions across sustainable agriculture, solar energy, and water management.',
};

export default function BusinessAreas() {
  const businessAreas = [
    {
      id: 1,
      slug: 'sustainable-agriculture',
      image: '/modern-farming.jpg',
      title: 'Sustainable Agriculture',
      description: 'Empowering farmers with modern techniques and technologies',
      details: [
        'Soil health management and conservation',
        'Precision farming technologies',
        'Climate-smart agriculture practices',
        'Training and capacity building',
        'Market linkage programs',
      ],
    },
    {
      id: 2,
      slug: 'solar-energy',
      image: '/solar-energy.jpg',
      title: 'Solar Energy Solutions',
      description: 'Grid-connected and off-grid solar installations',
      details: [
        'Residential solar systems',
        'Commercial & industrial solutions',
        'Agricultural solar pumping',
        'Energy storage systems',
        'Maintenance & monitoring',
      ],
    },
    {
      id: 3,
      slug: 'renewable-energy',
      image: '/energy.jpg',
      title: 'Renewable Energy Integration',
      description: 'Holistic energy solutions combining multiple renewables',
      details: [
        'Wind energy projects',
        'Hybrid solar-wind systems',
        'Battery storage solutions',
        'Microgrid development',
        'Energy efficiency consulting',
      ],
    },
    {
      id: 4,
      slug: 'water-irrigation',
      image: '/irrigation.jpg',
      title: 'Water & Irrigation',
      description: 'Efficient water management for agriculture',
      details: [
        'Solar-powered water systems',
        'Drip irrigation technology',
        'Water conservation programs',
        'Borehole management',
        'Water quality monitoring',
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-center">
            Our Business Areas
          </h1>
          <p className="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
            Integrated solutions across agriculture and renewable energy sectors
          </p>
        </div>
      </section>

      {/* Business Areas Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {businessAreas.map((area, index) => (
              <div
                key={area.id}
                id={area.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2 lg:[direction:rtl]' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                    {area.title}
                  </h2>
                  <p className="text-lg text-foreground/70 mb-8">
                    {area.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {area.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors group"
                  >
                    Contact Us
                    <Phone size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden h-96">
                  <OptimizedImage
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            Why Integrated Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cost Efficiency',
                description: 'Combined solutions reduce operational costs by up to 40%',
              },
              {
                title: 'Increased Productivity',
                description: 'Sustainable farming + renewable energy = higher yields with lower costs',
              },
              {
                title: 'Climate Resilience',
                description: 'Diversified approaches build resilience against climate impacts',
              },
              {
                title: 'Scalability',
                description: 'Modular solutions that grow with your business needs',
              },
              {
                title: 'Environmental Impact',
                description: 'Measurable reduction in carbon footprint and water usage',
              },
              {
                title: 'Community Benefits',
                description: 'Job creation and economic growth at the local level',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
