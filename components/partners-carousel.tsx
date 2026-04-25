'use client';

export function PartnersCarousel() {
  const partner = { name: 'Sian Biogas', initials: 'SB' };

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="w-full mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Our Partner
        </h2>
        <p className="text-lg text-background/80 max-w-2xl mx-auto mb-12">
          Working with leading organizations to drive sustainable development
        </p>
        
        {/* Partner Showcase */}
        <div className="inline-block">
          <div className="w-32 h-32 rounded-full bg-background/10 border-2 border-background/20 flex items-center justify-center mb-6 hover:border-primary/60 hover:bg-background/20 transition-all duration-300">
            <span className="text-4xl font-bold text-background/90">{partner.initials}</span>
          </div>
          <p className="font-semibold text-xl text-background/90">{partner.name}</p>
        </div>
        
        {/* Optional: Add some decorative elements or additional info */}
        <div className="mt-16 max-w-xl mx-auto text-sm text-background/60">
          <p>Proudly collaborating with Sian Biogas to advance renewable energy solutions and sustainable development initiatives.</p>
        </div>
      </div>
    </section>
  );
}