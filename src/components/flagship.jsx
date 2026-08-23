import React from "react";
import * as Lucide from "lucide-react";

export default function Flagship() {
  return (
    <section className="bg-ink/50 text-white py-16 px-6 md:px-12 relative overflow-hidden font-body selection:bg-fire selection:text-white">
      {/* Decorative Hazard Stripes Overlay on Far Left */}
      <div
        className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #D2231F, #D2231F 10px, transparent 10px, transparent 20px)",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* LEFT COLUMN: MISSION BRIEF */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow Header */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-6 bg-fire inline-block" />
            <span className="font-mono text-xs text-fire font-bold tracking-widest uppercase">
              FLAGSHIP ENGAGEMENT
            </span>
          </div>

          {/* Title with Red Accent Highlight */}
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[-2px] leading-tight text-white">
            PROJECT <span className="text-fire inline-block">VANGUARD</span>:
            <br />
            NAVAL FLEET REVITALIZATION
          </h2>

          {/* Description */}
          <p className="text-steel font-body text-sm md:text-base leading-relaxed max-w-xl font-light">
            Our most comprehensive naval engineering initiative to date. A 36-month
            strategic engagement focusing on the structural integrity and weaponry
            systems modernization of Nigeria's primary patrol fleet.
          </p>

          {/* Divider */}
          <div className="border-t border-white/10 w-full pt-6" />

          {/* Metric Indicators */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <div className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight">
                14 VESSELS
              </div>
              <div className="font-mono text-[10px] text-steel font-bold tracking-widest uppercase">
                SERVICE SCOPE
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight">
                100% READY
              </div>
              <div className="font-mono text-[10px] text-steel font-bold tracking-widest uppercase">
                COMBAT READINESS
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="pt-4">
            <a
              href="#case-study"
              className="inline-flex items-center gap-3 text-fire hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200 group"
            >
              <span>READ MISSION CASE STUDY</span>
              <Lucide.ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: FEATURED ASSET IMAGE FRAME */}
        <div className="lg:col-span-6">
          {/* Outer container div truncated/chamfered at the bottom-right corner */}
          <div
            className="relative border border-white/10 p-2 bg-white/5 shadow-2xl"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 44px), calc(100% - 44px) 100%, 0 100%)",
            }}
          >
            {/* Image Container with matching bottom-right truncation */}
            <div
              className="relative h-[380px] sm:h-[450px] md:h-[500px] w-full overflow-hidden bg-ink"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              }}
            >
              <img
                src="/assets/landing_page.jpg"
                alt="NNS Thunder (F90) Naval Vessel"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />

              {/* Standard rectangular Red Banner inside */}
              <div className="absolute bottom-0 right-0 bg-fire text-white p-5 md:p-6 shadow-xl">
                <span className="font-mono text-[10px] uppercase font-bold text-white/80 tracking-widest block mb-1">
                  ENGAGED ASSET:
                </span>
                <span className="font-display text-2xl md:text-3xl uppercase font-bold text-white tracking-wide block leading-none">
                  NNS THUNDER (F90)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}