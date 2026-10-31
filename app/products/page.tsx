import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { OptimizedImage } from '@/components/optimized-image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Services | Lakira Partners',
  description: 'Discover our innovative products and services in sustainable agriculture and renewable energy. Tailored solutions for farmers, communities, and businesses.',
};

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Solar Farm Kit',
      category: 'Renewable Energy',
      image: '/solar-installation.jpg',
      description: 'Complete solar-powered solutions for irrigation, processing, and farm operations.',
      features: [
        'Solar panels (3-50kW capacity)',
        'Battery storage system',
        'Smart inverter & monitoring',
        'Installation & training',
        '5-year warranty',
      ],
    },
    {
      id: 2,
      name: 'Smart Irrigation System',
      category: 'Agriculture',
      image: '/irrigation.jpg',
      description: 'IoT-enabled precision irrigation for optimal water usage and maximum yields.',
      features: [
        'Soil moisture sensors',
        'Mobile app control',
        'Weather-based automation',
        'Water usage analytics',
        'Remote monitoring',
      ],
    },
    {
      id: 3,
      name: 'AgriBoost Program',
      category: 'Agriculture',
      image: '/modern-farming.jpg',
      description: 'Comprehensive training and support for climate-smart, sustainable farming practices.',
      features: [
        'Intensive training program',
        'Soil health certification',
        'Climate-smart techniques',
        'Market linkage support',
        'Post-training mentorship',
      ],
    },
    {
      id: 4,
      name: 'Community Microgrid',
      category: 'Renewable Energy',
      image: '/solar-energy.jpg',
      description: 'Integrated renewable energy systems bringing reliable power to rural communities.',
      features: [
        'Solar + hybrid integration',
        'Battery storage (50-200kWh)',
        'Smart grid management',
        'Energy access for all',
        '20-year performance guarantee',
      ],
    },
    {
      id: 5,
      name: 'Water Harvesting Solutions',
      category: 'Water Management',
      image: '/irrigation.jpg',
      description: 'Rainwater harvesting and storage systems built for resilience in arid and semi-arid regions.',
      features: [
        'Catchment infrastructure',
        'Advanced filtration',
        'Large-scale storage tanks',
        'Distribution network',
        'Maintenance training',
      ],
    },
    {
      id: 6,
      name: 'Livestock Development',
      category: 'Agriculture',
      image: '/livestock.png',
      description: 'Sustainable livestock programs improving health, breeding, and market access.',
      features: [
        'Improved breeding stock',
        'Veterinary support',
        'Feed formulation',
        'Value addition training',
        'Market linkages',
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/modern-farming.jpg"
            alt="Modern sustainable farming"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-8">
              <Sparkles size={16} />
              Innovative Solutions
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-[1.1]">
              Products & Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-background/90 mb-10 leading-relaxed max-w-2xl">
              Practical, scalable solutions designed to transform agriculture and energy access across Africa
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group hover:-translate-y-1"
            >
              Get a Custom Quote
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Our Offerings
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              What We Deliver
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              End-to-end solutions combining technology, expertise, and local knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                  >
                    Request Quote
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-foreground/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-background rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Every project is unique. We work closely with you to design tailored solutions that fit your specific needs, budget, and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-lg bg-background text-foreground font-semibold hover:bg-background/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Schedule Consultation
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/business-areas"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-lg bg-background/10 backdrop-blur-sm border-2 border-background/40 text-primary-foreground font-semibold hover:bg-background hover:text-foreground transition-all duration-300"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
