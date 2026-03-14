import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import Link from 'next/link';
import { ArrowRight, Handshake, Briefcase, Users, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships | Lakira Partners',
  description: 'Explore partnership opportunities with Lakira Partners in agribusiness and renewable energy.',
};

export default function Partnerships() {
  const partnershipTypes = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Strategic Partnerships',
      description: 'Collaborate with us on large-scale initiatives across multiple countries',
      features: [
        'Multi-year commitments',
        'Joint program development',
        'Co-branding opportunities',
        'Shared resources & expertise',
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Investment Opportunities',
      description: 'Invest in sustainable growth with measurable returns',
      features: [
        'Debt & equity options',
        'Blended finance structures',
        'Impact investing programs',
        'Tax-efficient structures',
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Partnerships',
      description: 'Work together to empower local communities',
      features: [
        'Farmer cooperative engagement',
        'Community education programs',
        'Local supply chain development',
        'Youth employment initiatives',
      ],
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Technology Partnerships',
      description: 'Integrate complementary technologies and solutions',
      features: [
        'IoT & digital platforms',
        'Hardware integration',
        'Software development',
        'Research & innovation',
      ],
    },
  ];

  const currentPartners = [
    { name: 'Global Environmental Fund', category: 'Funding', years: '3 years' },
    { name: 'World Bank', category: 'Development', years: '5 years' },
    { name: 'UN Development Program', category: 'Sustainability', years: '4 years' },
    { name: 'African Development Bank', category: 'Finance', years: '2 years' },
    { name: 'FAO', category: 'Agriculture', years: '3 years' },
    { name: 'IRENA', category: 'Renewable Energy', years: '2 years' },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-center">
            Partnership Opportunities
          </h1>
          <p className="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
            Join us in creating sustainable impact across Africa
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            How We Partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-border hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-background/30"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-foreground/70 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            Our Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary text-lg">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{partner.name}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-primary font-medium">{partner.category}</span>
                  <span className="text-foreground/60">{partner.years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            Partnership Journey
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                step: 1,
                title: 'Initial Conversation',
                description: 'We understand your goals, interests, and how we can work together effectively.',
              },
              {
                step: 2,
                title: 'Feasibility Assessment',
                description: 'We evaluate alignment, capacity, and potential impact of collaboration.',
              },
              {
                step: 3,
                title: 'Partnership Framework',
                description: 'We develop a customized partnership agreement that works for both parties.',
              },
              {
                step: 4,
                title: 'Implementation',
                description: 'Joint execution of planned initiatives with regular monitoring and reporting.',
              },
              {
                step: 5,
                title: 'Growth & Expansion',
                description: 'We expand successful programs and explore new partnership opportunities.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            Why Partner With Lakira?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'Over 6 years of successful programs impacting 500+ farmers',
              },
              {
                title: 'Integrated Expertise',
                description: 'Combined knowledge of agriculture and renewable energy sectors',
              },
              {
                title: 'Local Presence',
                description: 'Operations across multiple African countries with deep community roots',
              },
              {
                title: 'Transparent Reporting',
                description: 'Regular impact metrics and financial reporting to partners',
              },
              {
                title: 'Scalable Models',
                description: 'Programs designed for rapid replication and growth',
              },
              {
                title: 'Impact Measurement',
                description: 'Robust systems to track and communicate outcomes',
              },
            ].map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border border-border">
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Let's Build Together
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Ready to explore partnership opportunities? Let's start a conversation about how we can create impact together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors group"
          >
            Start the Conversation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
