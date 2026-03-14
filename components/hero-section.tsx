'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { OptimizedImage } from './optimized-image';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile Layout - Image on top */}
      <div className="lg:hidden relative min-h-[75vh] pt-20">
        {/* Hero Image Background */}
        <div className="absolute inset-0 top-20">
          <div className="absolute inset-0 rounded-b-2xl overflow-hidden">
            <OptimizedImage
              src="/hero-farmer.jpg"
              alt="Farmer in agricultural field"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Text Content Overlay */}
        <div className="relative h-[75vh] flex items-center justify-center px-4">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight px-2 pt-8">
              Growth for Africa's Future
            </h1>

            <div className="flex flex-col gap-3 mt-20 mb-4">
              <Link
                href="/business-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors group"
              >
                Explore Our Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-row gap-6 pt-6 border-t border-border justify-center">
              {[
                { number: '500+', label: 'Farmers Supported' },
                { number: '50K', label: 'Acres Managed' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-xs text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative min-h-screen w-full overflow-hidden pt-16 pb-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#f5f1e8] dark:from-background dark:via-background dark:to-[#1a1a1a]" />
        
        {/* Decorative elements */}
        <div className="absolute top-24 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-12 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
                Sustainable Growth for Africa's Future
              </h1>

              <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl leading-relaxed">
                We integrate agribusiness and renewable energy to create lasting impact. Empowering farmers, transforming communities, and building a sustainable future.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Link
                  href="/business-areas"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors group"
                >
                  Explore Our Work
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                {[
                  { number: '500+', label: 'Farmers Supported' },
                  { number: '50K', label: 'Acres Managed' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-5xl font-bold text-primary">{stat.number}</div>
                    <div className="text-base text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative h-[600px] lg:h-[700px] w-full rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/hero-farmer.jpg"
                  alt="Farmer in agricultural field"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating cards */}
              <div
                className="absolute -bottom-8 -left-8 p-6 bg-white dark:bg-card rounded-xl shadow-xl border border-border max-w-sm animate-bounce"
                style={{ animationDelay: '0s' }}
              >
                <p className="text-base font-semibold text-foreground mb-2">Renewable Energy</p>
                <p className="text-sm text-foreground/60">Solar & wind power solutions</p>
              </div>

              <div
                className="absolute top-20 -right-8 p-6 bg-white dark:bg-card rounded-xl shadow-xl border border-border max-w-sm animate-bounce"
                style={{ animationDelay: '0.2s' }}
              >
                <p className="text-base font-semibold text-foreground mb-2">Sustainable Farming</p>
                <p className="text-sm text-foreground/60">Modern agricultural practices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
