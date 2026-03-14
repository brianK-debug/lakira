'use client';

export function PartnersCarousel() {
  const partners = [
    { name: 'Global Fund', initials: 'GF' },
    { name: 'World Bank', initials: 'WB' },
    { name: 'UNDP', initials: 'UN' },
    { name: 'AfDB', initials: 'AD' },
    { name: 'FAO', initials: 'FA' },
    { name: 'IRENA', initials: 'IR' },
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Working with leading organizations to drive sustainable development
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes scroll-left-bounce {
              0% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(-1px);
              }
              100% {
                transform: translateX(calc(-50% - 12px));
              }
            }

            .partners-scroll {
              animation: scroll-left-bounce 40s linear infinite;
              display: flex;
              gap: 24px;
            }

            .partners-scroll:hover {
              animation-play-state: paused;
            }

            .partner-item {
              flex-shrink: 0;
              animation: bounce 2s ease-in-out infinite;
            }

            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-8px);
              }
            }
          `}</style>

          <div className="partners-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="partner-item"
              >
                <div className="flex flex-col items-center justify-center gap-4 px-8 py-6">
                  <div className="w-20 h-20 rounded-full bg-background/20 border-2 border-background/40 flex items-center justify-center hover:border-primary/60 hover:bg-background/30 transition-all duration-300">
                    <span className="text-2xl font-bold text-background/90">{partner.initials}</span>
                  </div>
                  <p className="font-semibold text-sm text-center text-background/90 whitespace-nowrap">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-foreground to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-foreground to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
