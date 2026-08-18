import React, { useState } from "react";
import { 
  ShieldCheck, 
  Wrench, 
  Truck, 
  GraduationCap, 
  ChevronRight, 
  Activity, 
  Cpu 
} from "lucide-react";

const CAPABILITIES = [
  {
    id: "01",
    title: "Maritime Fire Suppression",
    category: "Naval Engineering",
    icon: ShieldCheck,
    image: "/assets/afrodezt-hq.jpg",
    tagline: "High-expansion foam & FM200 clean agent gas systems for active warships and commercial fleets.",
    specs: [
      { label: "Standard", value: "SOLAS & NFPA Compliant" },
      { label: "Deployment", value: "Fixed & Mobile Vessels" },
      { label: "Suppression", value: "Clean Agent / CO2 / Foam" }
    ],
    highlight: "Equipped over 45+ active naval and commercial vessels across West Africa."
  },
  {
    id: "02",
    title: "Fleet Overhaul & Refurbishment",
    category: "Heavy Operations",
    icon: Wrench,
    image: "/assets/overview-trucks.jpg",
    tagline: "Complete mechanical security, hull restoration, and life-extension overhauls for aging municipal & industrial fire tenders.",
    specs: [
      { label: "Lifespan Extension", value: "+15 Years Operational" },
      { label: "Turnaround", value: "OEM-Grade Shipyard Testing" },
      { label: "Structural", value: "Pump & Chassis Re-engineering" }
    ],
    highlight: "Nigeria’s premier facility for multi-scale fire tender restoration."
  },
  {
    id: "03",
    title: "Specialized Vehicle Supply",
    category: "Equipment & Logistics",
    icon: Truck,
    image: "/assets/official-handover.jpg",
    tagline: "Tailor-made municipal fire trucks, Skylift hydraulic platforms, mobile maintenance units, and ambulance fleets.",
    specs: [
      { label: "Reach", value: "Up to 54m Hydraulic Lift" },
      { label: "Customization", value: "100% Client Spec Matching" },
      { label: "Sourcing", value: "Europe, Asia & US Partners" }
    ],
    highlight: "Go-to partner for municipal and high-hazard industrial emergency fleets."
  },
  {
    id: "04",
    title: "Capacity Building & Training",
    category: "Workforce Readiness",
    icon: GraduationCap,
    image: "/assets/hq-2.jpg",
    tagline: "On-site and vessel-based operator certification, emergency protocols, and preventative maintenance modules.",
    specs: [
      { label: "Certification", value: "OEM Operator Level" },
      { label: "Modules", value: "System Maintenance & Rapid Response" },
      { label: "Location", value: "On-site / Vessel / HQ Yard" }
    ],
    highlight: "Training client crews to safely master and maintain newly integrated systems."
  }
];

export default function WhatWeDoSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCap = CAPABILITIES[activeIdx];
  const ActiveIcon = activeCap.icon;

  return (
    <section className="w-full bg-maroon py-20 px-4 md:px-12 relative overflow-hidden border-y border-white/10">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="w-4 h-4 text-fire animate-pulse" />
            <span className="text-fire font-mono text-xs tracking-widest uppercase font-bold">
              Operational Scope
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-paper uppercase tracking-tight">
            Capabilities Matrix
          </h2>
          <div className="h-[3px] bg-maroon w-20 mt-4 rounded-full" />
        </div>

        {/* Command Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeIdx === idx;
              const Icon = cap.icon;

              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`
                    w-full text-left p-5 rounded-lg border transition-all duration-300 group flex items-center justify-between
                    ${isActive 
                      ? "bg-white/5 border-fire shadow-lg shadow-fire/10 translate-x-2" 
                      : "bg-transparent border-white/10 hover:border-white/30 hover:bg-white/[0.02]"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      p-3 rounded-md transition-colors duration-300
                      ${isActive ? "bg-fire text-white" : "bg-white/5 text-steel group-hover:text-paper"}
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-fire/80 uppercase block">
                        {cap.id} // {cap.category}
                      </span>
                      <h3 className={`font-display font-bold text-base md:text-lg transition-colors ${isActive ? "text-paper" : "text-steel group-hover:text-paper"}`}>
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? "text-fire translate-x-1" : "text-steel/40 opacity-0 group-hover:opacity-100"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Tactical Viewport (7 cols) */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[480px]">
            
            {/* Top Scanning Laser Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fire to-transparent opacity-70 animate-pulse" />

            {/* Viewport Meta Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-fire" />
                <span className="font-mono text-xs text-paper uppercase font-semibold">
                  Directive {activeCap.id} Viewport
                </span>
              </div>
              <span className="font-mono text-[11px] text-steel/60 uppercase tracking-widest">
                System Active
              </span>
            </div>

            {/* Active Content Display */}
            <div className="space-y-6 my-auto">
              <div>
                <span className="text-fire font-mono text-xs uppercase tracking-widest block mb-1">
                  {activeCap.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-paper uppercase tracking-tight">
                  {activeCap.title}
                </h3>
              </div>

              <p className="text-steel text-sm md:text-base leading-relaxed">
                {activeCap.tagline}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {activeCap.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-white/5 border border-white/5 rounded p-3">
                    <span className="font-mono text-[10px] text-steel/70 uppercase block mb-1">
                      {spec.label}
                    </span>
                    <span className="font-display font-semibold text-xs md:text-sm text-paper">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Operational Highlight Callout */}
              <div className="p-4 rounded border-l-2 border-fire bg-fire/5 text-xs text-paper/90 font-mono leading-relaxed">
                <span className="text-fire font-bold mr-2">// HIGHLIGHT:</span>
                {activeCap.highlight}
              </div>
            </div>

            {/* Bottom Controls / Status Footnote */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-steel/60 font-mono">
              <span>AFRODEZT SPEC-SHEET 2026</span>
              <span className="text-fire/80">READY FOR DEPLOYMENT</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}