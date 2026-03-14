import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { BarChart3, TrendingUp, Users, Leaf, Zap, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Impact | Lakira Partners',
  description: 'Explore the measurable impact Lakira Partners has made in agriculture and renewable energy across Africa.',
};

export default function Impact() {
  const impactMetrics = [
    {
      icon: <Users className="w-8 h-8" />,
      label: 'Farmers Empowered',
      value: '500+',
      description: 'Direct beneficiaries of our programs',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      label: 'Agricultural Land (Acres)',
      value: '50,000+',
      description: 'Under improved management',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: 'Renewable Energy (MW)',
      value: '25',
      description: 'Installed capacity',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      label: 'Income Generated',
      value: '$10M+',
      description: 'For farming communities',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: 'Yield Increase',
      value: '35%',
      description: 'Average improvement',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      label: 'Jobs Created',
      value: '2,000+',
      description: 'Direct and indirect employment',
    },
  ];

  const stories = [
    {
      name: 'Amara Okafor',
      location: 'Nigeria',
      story: 'Through Lakira\'s sustainable farming program, I increased my crop yield by 40% while reducing water usage. The training and solar irrigation system have transformed my farm.',
      image: '👩‍🌾',
    },
    {
      name: 'Joseph Kipchoge',
      location: 'Kenya',
      story: 'Installing solar panels on my farm reduced energy costs by 60%. Now I have reliable power for irrigation and my income has doubled.',
      image: '👨‍🌾',
    },
    {
      name: 'Grace Mwangi',
      location: 'Kenya',
      story: 'The AgriBoost training program equipped me with modern farming techniques. I\'m now training 50 other farmers in my community.',
      image: '👩‍💼',
    },
  ];

  const sdgs = [
    { number: 1, title: 'No Poverty', indicator: 'Income increase for farmers' },
    { number: 2, title: 'Zero Hunger', indicator: 'Improved food security' },
    { number: 7, title: 'Affordable Energy', indicator: 'Clean energy access' },
    { number: 12, title: 'Responsible Consumption', indicator: 'Sustainable practices' },
    { number: 13, title: 'Climate Action', indicator: 'Carbon reduction' },
    { number: 15, title: 'Life on Land', indicator: 'Soil & ecosystem health' },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-center">
            Our Impact
          </h1>
          <p className="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
            Measurable change across agriculture, energy, and communities in Africa
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                  {metric.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{metric.label}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <p className="text-sm text-foreground/70">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            Stories of Change
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{story.image}</div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {story.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">{story.location}</p>
                <p className="text-foreground/70 leading-relaxed italic">
                  {story.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN SDGs Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            UN Sustainable Development Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgs.map((sdg, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-bold text-primary mb-2">
                  SDG {sdg.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{sdg.title}</h3>
                <p className="text-sm text-foreground/70">{sdg.indicator}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            Environmental Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Carbon Emissions Reduced',
                stat: '150,000 tons CO₂',
                description: 'Through renewable energy deployment',
              },
              {
                title: 'Water Saved Annually',
                stat: '500M+ liters',
                description: 'Via efficient irrigation systems',
              },
              {
                title: 'Soil Health Improved',
                stat: '100% of farms',
                description: 'Using regenerative practices',
              },
              {
                title: 'Forest Cover Protected',
                stat: '50,000 acres',
                description: 'Through alternative livelihoods',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white border-2 border-primary/20 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
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
