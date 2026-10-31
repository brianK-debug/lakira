'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Leaf, Zap, Users } from 'lucide-react';
import { OptimizedImage } from './optimized-image';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/hero-farmer.jpg"
            alt="African farmer working in sustainable agriculture field"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/98 via-foreground/90 to-foreground/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-sm border border-primary/30 text-primary-foreground text-sm font-medium mb-8 shadow-lg shadow-primary/20">
                  <Leaf size={16} className="animate-pulse" />
                  Sustainable Agribusiness • Clean Energy
                </div>

                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-background mb-6 leading-[1.05] tracking-tight">
                  Growing{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-secondary via-secondary to-secondary/80 bg-clip-text text-transparent">
                      Africa
                    </span>
                    <svg className="absolute -bottom-3 left-0 w-full z-0" height="16" viewBox="0 0 200 16" fill="none">
                      <path d="M2 12C40 6 160 6 198 12" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                          <stop stopColor="oklch(0.72 0.16 65)" />
                          <stop offset="1" stopColor="oklch(0.72 0.16 65 / 0.8)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <br />
                  From The Ground Up
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-background/90 mb-10 leading-relaxed max-w-2xl">
                  We bridge traditional agriculture with renewable energy to cultivate thriving communities, food security, and environmental resilience across the continent.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    href="/business-areas"
                    className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl text-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group hover:-translate-y-1"
                  >
                    Discover Our Impact
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/partnerships"
                    className="inline-flex items-center justify-center px-9 py-4 rounded-xl text-lg bg-background/10 backdrop-blur-md border-2 border-background/40 text-background font-semibold hover:bg-background hover:text-foreground transition-all duration-300"
                  >
                    Become a Partner
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-background/20">
                  {[
                    { number: '500+', label: 'Farmers Empowered', icon: Users },
                    { number: '50K+', label: 'Acres Under Cultivation', icon: Leaf },
                    { number: '25MW', label: 'Clean Energy Generated', icon: Zap },
                    { number: '15+', label: 'Communities Transformed', icon: Users },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={i}
                        className="group transition-all duration-700 hover:scale-105"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Icon size={16} className="text-secondary" />
                          </div>
                        </div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-1">
                          {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-background/75 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5">
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60" />
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-background/10">
                    <OptimizedImage
                      src="/solar-installation.jpg"
                      alt="Solar energy installation in African community"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 p-6 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border max-w-xs animate-fade-in" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">Clean Energy Access</div>
                        <div className="text-xs text-foreground/70">Powering rural communities</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-8 -right-8 p-6 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border max-w-xs animate-fade-in" style={{ animationDelay: '1.2s' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Leaf size={20} className="text-secondary" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">Climate Smart Agriculture</div>
                        <div className="text-xs text-foreground/70">Sustainable farming practices</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-background/60 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="text-background/60" />
      </div>
    </section>
  );
}
