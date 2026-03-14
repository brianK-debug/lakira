'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary dark:from-primary/20 dark:via-primary/15 dark:to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white dark:text-foreground mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-white/90 dark:text-foreground/80 max-w-2xl mx-auto">
            Join us in transforming agriculture and renewable energy across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              image: '/farmers.png',
              title: 'For Farmers',
              description: 'Access modern farming techniques and renewable energy solutions',
            },
            {
              image: '/investors.png',
              title: 'For Investors',
              description: 'Sustainable investment opportunities with proven returns',
            },
            {
              image: '/community.png',
              title: 'For Communities',
              description: 'Economic growth and environmental sustainability',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/10 dark:bg-foreground/5 backdrop-blur-sm border border-white/20 text-white dark:text-foreground text-center"
            >
              <div className="w-48 h-32 rounded-lg overflow-hidden mx-auto mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={192}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors group"
          >
            Get Started Today
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/partnerships"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors group"
          >
            Explore Partnerships
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
