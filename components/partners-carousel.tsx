'use client';

export function PartnersCarousel() {
  const partners = [
    { name: 'Sian Biogas', initials: 'SB' }, // your partner added
    { name: 'Global Fund', initials: 'GF' },
    { name: 'World Bank', initials: 'WB' },
    { name: 'UNDP', initials: 'UN' },
    { name: 'AfDB', initials: 'AD' },
    { name: 'FAO', initials: 'FA' },
    { name: 'IRENA', initials: 'IR' },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-32 bg-foreground text-background overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Working with leading organizations to drive sustainable development
          </p>
        </div>

        <div className="relative overflow-hidden">
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .partners-scroll {
              animation: scroll-left 40s linear infinite;
              display: flex;
              gap: 24px;
            }

            .partners-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="partners-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="flex flex-col items-center justify-center gap-4 px-8 py-6">
                  <div className="w-20 h-20 rounded-full bg-background/20 border-2 border-background/40 flex items-center justify-center hover:border-primary/60 hover:bg-background/30 transition-all duration-300">
                    <span className="text-2xl font-bold text-background/90">
                      {partner.initials}
                    </span>
                  </div>
                  <p className="font-semibold text-sm text-center text-background/90 whitespace-nowrap">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-foreground to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-foreground to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}