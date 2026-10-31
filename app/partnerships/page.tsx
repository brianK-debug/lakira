import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import Link from 'next/link';
import { ArrowRight, Handshake, Briefcase, Users, Globe, CheckCircle2, TrendingUp, Target, Heart } from 'lucide-react';
import { OptimizedImage } from '@/components/optimized-image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships | Lakira Partners',
  description: 'Explore strategic partnership opportunities with Lakira Partners in sustainable agribusiness and renewable energy across Africa.',
};

export default function Partnerships() {
  const partnershipTypes = [
    {
      icon: Globe,
      title: 'Strategic Alliances',
      description: 'Long-term collaborations to scale impact across multiple regions and value chains',
      features: [
        'Multi-year program development',
        'Joint resource mobilization',
        'Shared expertise & networks',
        'Co-created solutions',
      ],
      gradient: 'from-primary/15 to-primary/5',
    },
    {
      icon: Briefcase,
      title: 'Investment Partnerships',
      description: 'Catalytic capital to scale proven models with measurable social and environmental returns',
      features: [
        'Debt, equity & blended finance',
        'Impact-aligned investments',
        'Scalable project portfolios',
        'Transparent impact tracking',
      ],
      gradient: 'from-secondary/20 to-secondary/10',
    },
    {
      icon: Users,
      title: 'Community Partnerships',
      description: 'Working alongside cooperatives, farmer groups, and local institutions for grassroots impact',
      features: [
        'Farmer cooperative development',
        'Youth & women empowerment',
        'Local capacity building',
        'Market access facilitation',
      ],
      gradient: 'from-accent/30 to-primary/10',
    },
    {
      icon: Handshake,
      title: 'Technology & Innovation',
      description: 'Partner with tech providers to deliver cutting-edge solutions for agriculture and energy',
      features: [
        'IoT & smart agriculture',
        'Renewable energy tech',
        'Digital platforms',
        'Research & development',
      ],
      gradient: 'from-primary/10 to-secondary/15',
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Proven Impact',
      description: 'Track record of empowering 500+ farmers and serving communities across Kenya',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Models',
      description: 'Replicable solutions designed for growth across diverse African markets',
    },
    {
      icon: Heart,
      title: 'Shared Values',
      description: 'Commitment to sustainability, equity, and long-term community development',
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'Deep understanding of African markets with strong grassroots connections',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Connect',
      description: 'Share your vision and goals with our partnerships team',
    },
    {
      step: '02',
      title: 'Align',
      description: 'Explore synergies and define shared objectives and impact goals',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Co-create a tailored partnership framework with clear deliverables',
    },
    {
      step: '04',
      title: 'Execute',
      description: 'Implement together with ongoing collaboration and support',
    },
    {
      step: '05',
      title: 'Measure & Scale',
      description: 'Track impact, learn, and expand successful initiatives',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/community.png"
            alt="Community partnerships"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-8">
              <Handshake size={16} />
              Collaborate For Impact
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-[1.1]">
              Partnerships That Drive Change
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-background/90 mb-10 leading-relaxed max-w-2xl">
              Join us in building resilient communities through sustainable agriculture and clean energy solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group hover:-translate-y-1"
            >
              Partner With Us
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Partnership Models
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              How We Collaborate
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Flexible partnership approaches tailored to your goals and capacity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <article
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${type.gradient}`} />
                  <div className="relative p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {type.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    <ul className="space-y-3">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Why Partner
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Lakira Advantage
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              What sets us apart as a partner for sustainable development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Our Process
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Partnership Journey
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A collaborative approach from first conversation to lasting impact
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                {index !== process.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
                )}
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/25 z-10">
                  {item.step}
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-foreground/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-background rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Let's Build Together
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Ready to create lasting change? Let's explore how our partnership can drive sustainable impact across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-lg bg-background text-foreground font-semibold hover:bg-background/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Start the Conversation
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-lg bg-background/10 backdrop-blur-sm border-2 border-background/40 text-primary-foreground font-semibold hover:bg-background hover:text-foreground transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
