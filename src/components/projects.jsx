import React from "react";
import * as Lucide from "lucide-react";

// Project domain data - easy to edit or expand
const PROJECT_DOMAINS = [
    {
        id: "01",
        title: "Maritime Fire Engineering",
        subtitle: "Naval & Offshore Safety",
        image: "/assets/projects/ship-safety-cover.jpg",
        initialHalf: "top", // Top half visible initially
        description: "Custom high-expansion foam & FM200 clean agent gas suppression engineered for active warships and commercial vessels.",
        specs: ["45+ Warships Equipped", "NFPA & SOLAS Compliant"],
        linkText: "Explore Systems",
    },
    {
        id: "02",
        title: "Fire Truck Refurbishment & Management",
        subtitle: "High-Risk Asset Security",
        image: "/assets/projects/fire-truck-refurb-cover.jpg",
        initialHalf: "bottom", // Bottom half visible initially
        description: "Integrated fire pumps, deluge networks, and continuous gas detection for deepwater platforms and refineries.",
        specs: ["100% Zero-Downtime Record", "Chevron Certified"],
        linkText: "View Infrastructure",
    },

    {
        id: "03",
        title: "Personnel & Systems Training",
        subtitle: "Workforce Readiness & Capacity Building",
        image: "/assets/projects/training-cover.jpg",
        initialHalf: "top", // Top half visible initially
        description: "Hands-on operational training and technical capacity building to empower client professionals and crews to safely operate and maintain newly integrated safety systems.",
        specs: ["OEM Standard Operator Protocols", "On-Site & Vessel-Based Modules", "Maintainer Certification Programs"],
        linkText: "Explore Training Modules",
    }
];

export default function ProjectsSection({ projectsInView, projectsRef }) {
    return (
        <section id="projects" ref={projectsRef} className="w-full my-24 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Row */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className={`uppercase flex-start ${projectsInView ? "animate-fadeInLeft" : "translate-x-full invisible"}`}>
                        <p className="text-fire font-display font-bold  text-xs ml-[-1] mb-3">Operational Excellence</p>
                        <h1 className="text-navy font-display tracking-[-4px] text-6xl font-bold">Projects</h1>
                    </div>

                </div>

                {/* 3 Domain Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">
                    {PROJECT_DOMAINS.map((domain, i) => {
                        const isTopInitial = domain.initialHalf === "top";

                        return (
                            <div
                                key={domain.id}
                                className={` relative h-full w-full bg-transparent border border-white/10  overflow-hidden group cursor-pointer`}
                                style={
                                    projectsInView
                                        ? { animation: `fadeInUp 0.8s ease-in-out ${i / 10}s both` }
                                        : { opacity: 0 }
                                }
                            >
                                {/* 1. UNWRAPPING IMAGE CONTAINER */}
                                <div
                                    className={`absolute left-0 right-0 overflow-hidden transition-all duration-700 ease-in-out z-0 ${isTopInitial
                                        ? "top-0 h-1/2 group-hover:h-full"
                                        : "bottom-0 h-1/2 group-hover:h-full"
                                        }`}
                                >
                                    <img
                                        src={domain.image}
                                        alt={domain.title}
                                        className="w-full h-[500px] object-cover filter grayscale opacity-90 brightness-90 
                                                   group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 
                                                   transition-all duration-700 ease-in-out"
                                    />
                                </div>

                                {/* 2. INITIAL UNHOVERED LABEL (Fades out on hover) */}
                                <div
                                    className={`absolute left-6 right-6 z-10 transition-opacity duration-300 group-hover:opacity-0 ${isTopInitial ? "top-6" : "top-[56%]"
                                        }`}
                                >

                                    <h3 className="text-navy font-display font-bold text-xl uppercase tracking-tight">
                                        {domain.title}
                                    </h3>
                                </div>

                                {/* 3. DIRECTIONAL CHEVRON INDICATOR (Fades out on hover) */}
                                <div
                                    className={`absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-300 group-hover:opacity-0 group-hover:scale-50 ${isTopInitial ? "top-3/5" : "bottom-3/5"
                                        }`}
                                >
                                    {isTopInitial ? (
                                        <Lucide.ChevronDown className="w-6 h-6 text-fire animate-bounce" />
                                    ) : (
                                        <Lucide.ChevronUp className="w-6 h-6 text-fire animate-bounce" />
                                    )}
                                </div>

                                {/* 4. OPPOSITE-DIRECTION OVERLAY (Grows from opposite edge on hover) */}
                                <div
                                    className={`absolute left-0 right-0 overflow-hidden transition-all duration-700 ease-in-out z-20 flex flex-col justify-between p-8 opacity-0 ${isTopInitial
                                        ? "bottom-0 h-0 group-hover:h-full bg-gradient-to-t from-ink via-ink/90 to-ink/60 group-hover:opacity-100"
                                        : "top-0 h-0 group-hover:h-full bg-gradient-to-b from-ink via-ink/90 to-ink/60 group-hover:opacity-100"
                                        }`}
                                >
                                    {/* Content inside overlay (Fades in smoothly) */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 flex flex-col h-full justify-between">

                                        {/* Top Meta */}
                                        <div className="h-full inline-flex flex flex-col flex-end">


                                            <h3 className="text-2xl font-bold font-display uppercase text-white mb-3 tracking-tight">
                                                {domain.title}
                                            </h3>

                                            <p className="text-steel font-body text-xs leading-relaxed mb-6">
                                                {domain.description}
                                            </p>

                                            {/* Specs List */}
                                            <ul className="space-y-2 mb-6">
                                                {domain.specs.map((spec, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-xs font-mono text-white/90">
                                                        <Lucide.CheckCircle2 className="w-3.5 h-3.5 text-fire flex-shrink-0" />
                                                        <span>{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Bottom CTA */}
                                        <button className="inline-flex items-center gap-2 text-xs font-bold font-display uppercase tracking-widest text-fire hover:text-white transition-colors group/btn pt-4 border-t border-white/10">
                                            <span>{domain.linkText}</span>
                                            <Lucide.ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </button>

                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}