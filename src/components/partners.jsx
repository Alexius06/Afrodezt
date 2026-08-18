import React from "react";

const PARTNERS_DATA = [
  {
    id: "firex",
    name: "FIREX",
    domain: "Suppression & Extinguishing Systems",
    logo: "/assets/partners/firex.jpg",
    code: "OEM-01",
  },
  {
    id: "volkan",
    name: "VOLKAN",
    domain: "Fire Tenders & Hydraulic Platforms",
    logo: "/assets/partners/volkan.jpg",
    code: "OEM-02",
  },
  {
    id: "lifeco",
    name: "LIFECO",
    domain: "Life Safety & Marine Protection",
    logo: "/assets/partners/lifeco.jpg",
    code: "OEM-03",
  },
];

// Quadruple array to guarantee seamless looping across wide viewports
const CAROUSEL_ITEMS = [...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA];

export default function PartnerCarouselSection({ partnersInView, partnersRef }) {
  return (
    <section
      id="partners"
      ref={partnersRef}
      className={`w-full py-16 px-4 md:px-8 bg-paper relative overflow-hidden transition-all duration-1000 ${
        partnersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Keyframe Animation Injection */}
      <style>{`
        @keyframes partnerMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-partner-marquee {
          display: flex;
          width: max-content;
          animation: partnerMarquee 28s linear infinite;
        }
        .animate-partner-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto mb-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-navy/10 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              
              <p className="text-steel font-mono text-xs tracking-widest uppercase">
                Institutional Verification
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy uppercase tracking-tight">
              Authorized OEM Network
            </h2>
          </div>
          <p className="text-steel text-xs font-mono max-w-xs md:text-right">
            Verified equipment manufacturers & international supply partners.
          </p>
        </div>
      </div>

      {/* Infinite Carousel Viewport with Fade Masks */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Edge Gradient Blur */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-paper via-paper/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right Edge Gradient Blur */}
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-paper via-paper/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-partner-marquee gap-6">
          {CAROUSEL_ITEMS.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group relative w-[280px] md:w-[500px] shrink-0 bg-white border border-navy/10 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:border-maroon/50 hover:shadow-lg hover:shadow-navy/5 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Maroon Accent Indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-maroon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Meta Top */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-steel/60 uppercase tracking-widest">
                  {partner.code}
                </span>
                
              </div>

              {/* Logo Container */}
              <div className="w-full h-20 flex items-center justify-center p-3 mb-4 bg-paper/50 rounded border border-navy/5 group-hover:bg-white transition-colors duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter grayscale contrast-125 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Partner Information */}
              <div>
                <h3 className="text-base font-display font-bold text-navy uppercase tracking-tight mb-0.5">
                  {partner.name}
                </h3>
                <p className="text-steel text-xs text-base line-clamp-1">
                  {partner.domain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}