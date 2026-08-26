import React from "react";
import * as Lucide from "lucide-react";
import flagshipData from "../data/flagship.json";
export default function Flagship() {
  return (
    <section className="bg-steel/50 text-white py-16 px-6 md:px-12 relative overflow-hidden font-body selection:bg-fire selection:text-white">
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
            <span className="font-mono text-xs text-maroon font-bold tracking-widest uppercase">
              {flagshipData.eyebrow}
            </span>
          </div>

          {/* Title with Red Accent Highlight */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-2px] leading-tight text-white break-words">
            {flagshipData.titlePrefix}{" "}
            <span className="text-fire inline-block">
              {flagshipData.titleHighlight}
            </span>
            <br />
            {flagshipData.titleSuffix}
          </h2>

          {/* Description */}
          <p className="text-steel font-body text-sm md:text-base leading-relaxed max-w-xl font-light">
            {flagshipData.description}
          </p>

          {/* Divider */}
          <div className="border-t border-white/10 w-full pt-6" />

          {/* Metric Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-xl">
            {flagshipData.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight">
                  {metric.value}
                </div>
                <div className="font-mono text-[10px] text-steel font-bold tracking-widest uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
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
                src="/assets/projects/vema-f-series.jpg"
                alt="NNS Thunder (F90) Naval Vessel"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />

              {/* Standard rectangular Red Banner inside */}
              <div className="absolute bottom-0 right-0 bg-fire text-white p-5 md:p-6 shadow-xl">
                <span className="font-mono text-[10px] uppercase font-bold text-white/80 tracking-widest block mb-1">
                  ENGAGED ASSET:
                </span>
                <span className="font-display text-2xl md:text-3xl uppercase font-bold text-white tracking-wide block leading-none uppercase">
                  VEMA SKYLIFT (F-SERIES)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}