'use client';

import { useEffect, useRef, useState } from 'react';
import { Leaf, Zap, Users, TrendingUp } from 'lucide-react';

interface Counter {
  icon: React.ReactNode;
  label: string;
  target: number;
  suffix: string;
}

export function ImpactCounters() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const counters: Counter[] = [
    { icon: <Leaf className="w-8 h-8" />, label: 'Farmers Empowered', target: 100, suffix: '+' },
    { icon: <Zap className="w-8 h-8" />, label: 'Renewable Energy Capacity (MW)', target: 25, suffix: '' },
    { icon: <Users className="w-8 h-8" />, label: 'Community Members Impacted', target: 1000, suffix: '+' },
    { icon: <TrendingUp className="w-8 h-8" />, label: 'Agricultural Land (Acres)', target: 800, suffix: '+' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    counters.forEach((counter, index) => {
      let currentStep = 0;
      const increment = counter.target / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.round(increment * currentStep), counter.target);
        
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = newValue;
          return updated;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  return (
    <section ref={containerRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Measurable difference across agriculture and renewable energy sectors in Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white dark:bg-card border border-border text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                {counter.icon}
              </div>
              
              <div className="mb-3">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {counts[index].toLocaleString()}
                  <span className="text-primary ml-1">{counter.suffix}</span>
                </div>
              </div>

              <p className="text-sm md:text-base font-medium text-foreground/80">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
