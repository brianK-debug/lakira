'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { OptimizedImage } from './optimized-image';

interface BusinessArea {
  image: string;
  title: string;
  description: string;
  href: string;
  slug: string;
  gradient: string;
}

export function BusinessAreasCards() {
  const areas: BusinessArea[] = [
    {
      image: '/modern-farming.jpg',
      title: 'Sustainable Agriculture',
      description: 'Modern farming techniques promoting soil health, water conservation, and increased yields for smallholder farmers across diverse agro-ecological zones.',
      href: '/business-areas#sustainable-agriculture',
      slug: 'sustainable-agriculture',
      gradient: 'from-primary/15 via-primary/8 to-transparent',
    },
    {
      image: '/solar-energy.jpg',
      title: 'Solar Energy',
      description: 'Grid-connected and off-grid solar solutions powering communities, irrigation systems, and agribusinesses with clean, reliable energy.',
      href: '/business-areas#solar-energy',
      slug: 'solar-energy',
      gradient: 'from-secondary/20 via-secondary/10 to-transparent',
    },
    {
      image: '/irrigation.jpg',
      title: 'Water & Irrigation',
      description: 'Efficient irrigation systems and water management solutions reducing waste while maximizing agricultural productivity and climate resilience.',
      href: '/business-areas#water-irrigation',
      slug: 'water-irrigation',
      gradient: 'from-accent/30 via-primary/10 to-transparent',
    },
    {
      image: '/livestock.png',
      title: 'Livestock',
      description: 'Sustainable animal husbandry programs improving livestock health, breeding, value addition, and market access for farming communities.',
      href: '/business-areas#livestock',
      slug: 'livestock',
      gradient: 'from-secondary/15 via-primary/8 to-transparent',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Integrated solutions driving sustainable growth across agriculture and renewable energy sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <Link
              key={index}
              href={area.href}
              className="group h-full"
            >
              <article
                className="relative h-full overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${area.gradient}`} />
                
                <div className="relative p-6 h-full flex flex-col">
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden shadow-lg">
                    <OptimizedImage
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>

                  <p className="text-sm sm:text-base text-foreground/70 mb-6 leading-relaxed flex-grow">
                    {area.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Discover More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/business-areas"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group hover:-translate-y-1"
          >
            View All Business Areas
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
