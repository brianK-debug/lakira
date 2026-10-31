'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, TrendingUp, HandHeart } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-foreground/90" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-background rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/15 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
            Join Our Mission
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Together, we're transforming Africa through sustainable agriculture, clean energy, and empowered communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {[
            {
              image: '/farmers.png',
              icon: Users,
              title: 'For Farmers',
              description: 'Access modern techniques, quality inputs, and renewable energy to boost productivity and income',
            },
            {
              image: '/investors.png',
              icon: TrendingUp,
              title: 'For Investors',
              description: 'Sustainable, scalable opportunities delivering measurable social and environmental returns',
            },
            {
              image: '/community.png',
              icon: HandHeart,
              title: 'For Communities',
              description: 'Driving economic growth, food security, and environmental stewardship across Africa',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-background/10 backdrop-blur-sm border border-background/20 hover:border-background/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-primary-foreground mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-lg bg-background text-foreground font-semibold hover:bg-background/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Get Started Today
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/partnerships"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-lg bg-background/10 backdrop-blur-sm border-2 border-background/40 text-primary-foreground font-semibold hover:bg-background hover:text-foreground transition-all duration-300"
          >
            Explore Partnerships
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
