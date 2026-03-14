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
  color: string;
}

export function BusinessAreasCards() {
  const areas: BusinessArea[] = [
    {
      image: '/modern-farming.jpg',
      title: 'Sustainable Agriculture',
      description: 'Modern farming techniques promoting soil health, water conservation, and increased yields for smallholder farmers.',
      href: '/business-areas#sustainable-agriculture',
      slug: 'sustainable-agriculture',
      color: 'from-primary/20 to-primary/10',
    },
    {
      image: '/solar-energy.jpg',
      title: 'Solar Energy',
      description: 'Grid-connected and off-grid solar systems powering communities and agribusinesses across Africa.',
      href: '/business-areas#solar-energy',
      slug: 'solar-energy',
      color: 'from-secondary/20 to-secondary/10',
    },
    {
      image: '/energy.jpg',
      title: 'Energy Solutions',
      description: 'Integrated renewable energy solutions combining solar, wind, and storage technologies for reliable power.',
      href: '/business-areas#renewable-energy',
      slug: 'renewable-energy',
      color: 'from-primary/10 to-secondary/10',
    },
    {
      image: '/irrigation.jpg',
      title: 'Water & Irrigation',
      description: 'Efficient irrigation systems reducing water waste while increasing agricultural productivity and resilience.',
      href: '/business-areas#water-irrigation',
      slug: 'water-irrigation',
      color: 'from-primary/20 to-secondary/20',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
            Integrated solutions across agriculture and renewable energy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Link
              key={index}
              href={area.href}
              className="group h-full"
            >
              <div
                className={`h-full p-8 rounded-2xl bg-gradient-to-br ${area.color} border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
              >
                <div className="relative h-56 mb-5 rounded-xl overflow-hidden">
                  <OptimizedImage
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>

                <p className="text-base text-foreground/70 mb-6 leading-relaxed">
                  {area.description}
                </p>

                <div className="flex items-center gap-2 text-primary font-medium text-base group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

                <div className="text-center mt-12">
          <Link
            href="/business-areas"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors group"
          >
            Explore All Business Areas
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
