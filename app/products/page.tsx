import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Lakira Partners',
  description: 'Discover our innovative products and services in agribusiness and renewable energy.',
};

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Solar Farm Kit',
      category: 'Renewable Energy',
      price: 'Custom Quote',
      rating: 4.8,
      description: 'Complete solar farming solution for small to medium-sized farms',
      features: [
        'Solar panels (3-10kW capacity)',
        'Battery storage system',
        'Inverter & monitoring equipment',
        '5-year warranty',
        'Installation & training',
      ],
      icon: '☀️',
    },
    {
      id: 2,
      name: 'Smart Irrigation System',
      category: 'Agriculture',
      price: 'Custom Quote',
      rating: 4.9,
      description: 'IoT-enabled irrigation system for optimal water usage',
      features: [
        'Soil moisture sensors',
        'Mobile app control',
        'Weather-based automation',
        'Water usage analytics',
        'Remote monitoring',
      ],
      icon: '💧',
    },
    {
      id: 3,
      name: 'AgriBoost Package',
      category: 'Agriculture',
      price: 'Custom Quote',
      rating: 4.7,
      description: 'Training and certification program for sustainable farming',
      features: [
        '12-week intensive program',
        'Soil health certification',
        'Climate-smart techniques',
        'Market linkage support',
        'Post-training mentorship',
      ],
      icon: '🌾',
    },
    {
      id: 4,
      name: 'Microgrid Solution',
      category: 'Renewable Energy',
      price: 'Custom Quote',
      rating: 5.0,
      description: 'Integrated renewable energy system for communities',
      features: [
        'Solar + wind integration',
        'Battery storage (50-200kWh)',
        'Smart grid management',
        'Load balancing system',
        '20-year performance guarantee',
      ],
      icon: '⚡',
    },
    {
      id: 5,
      name: 'Water Harvesting Unit',
      category: 'Water Management',
      price: 'Custom Quote',
      rating: 4.6,
      description: 'Rainwater harvesting system for dry regions',
      features: [
        'Collection infrastructure',
        'Filtration system',
        'Storage tanks (5,000-50,000L)',
        'Distribution network',
        'Maintenance training',
      ],
      icon: '🌧️',
    },
    {
      id: 6,
      name: 'Enterprise Platform',
      category: 'Digital',
      price: 'Custom Quote',
      rating: 4.9,
      description: 'Complete digital platform for farm & energy management',
      features: [
        'Production tracking',
        'Energy monitoring',
        'Financial management',
        'Weather forecasting',
        'Market price alerts',
      ],
      icon: '📱',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-center">
            Our Products & Services
          </h1>
          <p className="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
            Innovative solutions designed for modern agriculture and renewable energy
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border border-border bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Product Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                  {product.icon}
                </div>

                {/* Product Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-xl text-foreground mb-2">
                    {product.name}
                  </h3>

                  <p className="text-foreground/70 text-sm mb-4 flex-grow">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 text-sm">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/70">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Rating & Price */}
                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'fill-primary text-primary'
                                : 'text-border'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {product.rating}
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group"
                    >
                      Inquire
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            We tailor our products and services to meet your specific needs and challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors group"
          >
            Schedule a Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
