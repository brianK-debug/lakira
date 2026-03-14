import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { OptimizedImage } from '@/components/optimized-image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Lakira | Our Mission & Vision',
  description: 'Learn about Lakira Partners Limited - our mission to create sustainable agribusiness and renewable energy solutions for Africa.',
};

export default function About() {
  const values = [
    { title: 'Sustainability', description: 'Protecting our planet for future generations through responsible practices' },
    { title: 'Impact', description: 'Creating measurable positive change in communities and economies' },
    { title: 'Innovation', description: 'Developing cutting-edge solutions to agricultural and energy challenges' },
    { title: 'Integrity', description: 'Operating with transparency and ethical business practices' },
  ];

  const timeline = [
    { year: '2018', event: 'Lakira Partners Limited founded' },
    { year: '2019', event: 'Launched first solar farming initiative' },
    { year: '2021', event: 'Expanded to 5 African countries' },
    { year: '2023', event: 'Reached 500+ farmers milestone' },
    { year: '2024', event: 'Launched renewable energy hub' },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
                About Lakira Partners
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                We are committed to driving sustainable development across Africa by integrating advanced agribusiness practices with renewable energy solutions. Our mission is to empower farmers, create jobs, and build a prosperous, sustainable future.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors group"
              >
                Work With Us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden h-96">
              <OptimizedImage
                src="/solar.jpeg"
                alt="Lakira Partners Company"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Mission & Vision */}
            <div className="space-y-6">
              <div className="p-8 rounded-xl border-2 border-primary/30 bg-primary/5">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-foreground/70 leading-relaxed">
                  To transform agriculture and energy sectors across Africa through sustainable, innovative solutions that empower smallholder farmers, create economic opportunities, and ensure environmental stewardship.
                </p>
              </div>
              <div className="p-8 rounded-xl border-2 border-secondary/30 bg-secondary/5">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-foreground/70 leading-relaxed">
                  A prosperous Africa where farmers have access to modern tools, renewable energy powers communities, and sustainable practices drive economic growth while protecting our environment.
                </p>
              </div>
            </div>
            {/* Right Column - Our Journey */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Our Journey</h2>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-24">
                      <div className="text-2xl font-bold text-primary">{item.year}</div>
                    </div>
                    <div className="flex-grow pb-8 border-l-2 border-border pl-6 relative">
                      <div className="absolute -left-3 top-1 w-4 h-4 rounded-full bg-primary" />
                      <p className="text-lg text-foreground font-medium">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
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
