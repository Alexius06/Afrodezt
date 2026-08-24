import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as Lucide from "lucide-react";
import HazardHover from "../components/hazardHover";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { PROJECTS_DATA } from "../data/projects";
import Texture from "../components/texture";

const DEFAULT_PROJECT = {
    ref: "AF-NV-042",
    title: "NNS ARADU",
    subtitle: "FLEET FLAGSHIP",
    category: "MISSION ARCHIVE",
    location: "LAGOS NAVAL DOCKYARD",
    status: "OPERATIONAL SUCCESS",
    date: "Q3 2023",
    downloadUrl: "#",
    heroImage:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
    specs: {
        serviceType: "Naval Defense Systems Integration",
        contractor: "Afrodezt Global Services",
        assetClass: "MEKO 360H1 Class Frigate",
        primaryClient: "The Nigerian Navy",
    },
    coordinates: {
        lat: "6.4654° N",
        long: "3.4064° E",
        elev: "0.0 M ASL",
    },
    evidenceLogs: [
        {
            id: "042-B",
            label: "LOG: INTERNAL PROPULSION",
            image:
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
        },
        {
            id: "042-C",
            label: "LOG: COMMUNICATIONS ARRAY",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        },
        {
            id: "042-D",
            label: "LOG: SAFETY SYSTEMS",
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
        },
    ],
    overview: [
        "Afrodezt Global Services was commissioned for the comprehensive revitalisation of the NNS ARADU, the flagship frigate of the Nigerian Navy. The scope of engagement spanned structural restoration, propulsion system overhauls, and the integration of advanced naval defense electronics.",
        "The project required tactical precision and adherence to international maritime safety standards, ensuring the vessel's return to active combat readiness. Our fire engineering division simultaneously deployed fixed gas suppression systems across the ammunition storage and engine rooms.",
    ],
    outcomes: [
        {
            icon: Lucide.ShieldAlert,
            title: "DEFENSE READINESS",
            description: "Full restoration of weaponry elevation and tracking systems.",
        },
        {
            icon: Lucide.Zap,
            title: "PROPULSION EFFICIENCY",
            description: "MTU engine overhaul resulting in 15% increase in operational speed.",
        },
        {
            icon: Lucide.Flame,
            title: "SYSTEM SAFETY",
            description: "Installation of redundant FM200 fire suppression network.",
        },
    ],
};

export default function ProjectDetails({ project }) {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedImage(null);
    }, [id]);

    const matchedProject = PROJECTS_DATA?.find((item) => String(item.id) === String(id));
    const activeRecord = matchedProject || project || {};

    const data = {
        ...DEFAULT_PROJECT,
        ...activeRecord,
        specs: { ...DEFAULT_PROJECT.specs, ...(activeRecord.specs || {}) },
        coordinates: { ...DEFAULT_PROJECT.coordinates, ...(activeRecord.coordinates || {}) },
    };

    const handleLogClick = (imageSrc) => {
        setSelectedImage((prev) => (prev === imageSrc ? null : imageSrc));
    };

    const currentHeroImage = selectedImage || data.heroImage || data.image;

    return (
        <main className="min-h-screen bg-paper text-ink font-body flex flex-col justify-between selection:bg-fire selection:text-white">
            <Navbar
                backTo="/portfolio"
                backLabel="BACK TO ARCHIVES"
                refCode={data.ref}
            />

            <div className="pt-20 md:pt-24 flex-grow relative z-10">


                <Texture className="fixed inset-0 w-full h-full opacity-35 pointer-events-none z-0" />


                <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="h-[2px] w-8 bg-fire inline-block" />
                                <span className="font-display text-xs font-bold text-maroon uppercase tracking-widest">
                                    // {data.category}
                                </span>
                            </div>

                            <h1 className="font-display font-bold text-4xl md:text-6xl text-navy uppercase tracking-tight leading-none">
                                {data.title}{" "}
                                {data.subtitle && (
                                    <span className="text-steel/50 font-light">/ {data.subtitle}</span>
                                )}
                            </h1>

                            <div className="mt-4 font-mono text-[11px] md:text-xs text-steel uppercase tracking-wider flex flex-wrap items-center gap-2">
                                <span>LOCATION: {data.location}</span>
                                <span>|</span>
                                <span>STATUS: {data.status}</span>
                                {data.date && (
                                    <>
                                        <span>|</span>
                                        <span>DATE: {data.date}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        
                    </div>

                    {/* Main Showcase Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2 relative group bg-ink border border-navy/15 shadow-sm overflow-hidden min-h-[380px] lg:min-h-[480px]">
                            <img
                                key={currentHeroImage}
                                src={currentHeroImage}
                                alt={data.title}
                                style={{
                                    transition: "all 700ms cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                                className="w-full h-full object-cover opacity-90 group-hover:scale-102 absolute inset-0"
                            />
                            <div className="absolute top-4 left-4 bg-ink/90 backdrop-blur-sm text-white font-mono text-[10px] px-3 py-1.5 border border-white/20 uppercase tracking-widest z-10 flex items-center gap-2">
                                <span>
                                    {selectedImage
                                        ? "ASSET OVERRIDE // EVIDENCE VIEW"
                                        : "ASSET SCAN 01 // PRIMARY PROFILE"}
                                </span>
                                {selectedImage && (
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="ml-2 text-fire hover:underline text-[9px]"
                                    >
                                        [RESET]
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Specs Sidebar */}
                        <div className="flex flex-col gap-6">
                            <div
                                style={{
                                    clipPath:
                                        "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
                                }}
                                className="bg-maroon text-white p-6 md:p-8 border border-navy/20 flex-grow shadow-md"
                            >
                                <h3 className="font-display font-bold text-lg uppercase border-b border-white/15 pb-3 mb-6 tracking-wider">
                                    MISSION SPECS
                                </h3>

                                <div className="space-y-5 font-mono text-xs">
                                    <div>
                                        <p className="text-fire uppercase font-bold text-[10px] tracking-widest mb-1">
                                            SERVICE TYPE
                                        </p>
                                        <p className="text-white font-medium text-sm leading-snug">
                                            {data.specs.serviceType || data.type}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-fire uppercase font-bold text-[10px] tracking-widest mb-1">
                                            CONTRACTOR
                                        </p>
                                        <p className="text-steel font-medium">{data.specs.contractor}</p>
                                    </div>

                                    <div>
                                        <p className="text-fire uppercase font-bold text-[10px] tracking-widest mb-1">
                                            ASSET CLASS
                                        </p>
                                        <p className="text-steel font-medium">{data.specs.assetClass}</p>
                                    </div>

                                    <div>
                                        <p className="text-fire uppercase font-bold text-[10px] tracking-widest mb-1">
                                            PRIMARY CLIENT
                                        </p>
                                        <p className="text-white font-semibold text-sm">
                                            {data.specs.primaryClient || data.client}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Coordinates Box */}
                            <div className="bg-white/80 backdrop-blur-sm border border-navy/15 p-5 font-mono text-xs shadow-sm">
                                <p className="text-steel uppercase font-bold text-[10px] tracking-widest mb-3 border-b border-black/5 pb-1.5">
                                    COORDINATE DATA
                                </p>
                                <div className="space-y-2 text-ink">
                                    <div className="flex justify-between items-center">
                                        <span className="text-steel font-medium">LAT:</span>
                                        <span className="font-bold tracking-wider">{data.coordinates.lat}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-steel font-medium">LONG:</span>
                                        <span className="font-bold tracking-wider">{data.coordinates.long}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-steel font-medium">ELEV:</span>
                                        <span className="font-bold tracking-wider">{data.coordinates.elev}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Evidence Logs Section */}
                    {data.evidenceLogs && data.evidenceLogs.length > 0 && (
                        <div className="mb-16">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-navy/15 pb-3 mb-6 gap-2">
                                <h2 className="font-display font-bold text-2xl text-navy uppercase tracking-tight">
                                    VISUAL EVIDENCE LOGS
                                </h2>
                                <div className="flex items-center gap-2 font-mono text-xs text-steel uppercase tracking-widest">
                                    <span>CLICK TO VIEW // CLICK AGAIN TO RESET</span>
                                    <Lucide.ArrowRight className="w-3.5 h-3.5 text-fire animate-pulse" />
                                </div>
                            </div>

                            {/* Scrollable Container with inline scrollbar styling */}
                            {/* Scoped style tag to strip WebKit arrow buttons and track */}
                            <style>{`
                                .custom-scroll::-webkit-scrollbar {
                                  height: 4px;
                                }
                                .custom-scroll::-webkit-scrollbar-button {
                                  display: none;
                                  width: 0;
                                  height: 0;
                                }
                                .custom-scroll::-webkit-scrollbar-track {
                                  background: transparent;
                                }
                                .custom-scroll::-webkit-scrollbar-thumb {
                                  background-color: #E63946;
                                  border-radius: 2px;
                                }
                            `}
                            </style>
                            <div

                                className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory custom-scroll"
                            >
                                {data.evidenceLogs.map((log) => {
                                    const isSelected = selectedImage === log.image;

                                    return (
                                        <div
                                            key={log.id}
                                            onClick={() => handleLogClick(log.image)}
                                            className="shrink-0 w-[280px] sm:w-[340px] snap-start group cursor-pointer"
                                        >
                                            <div
                                                style={{
                                                    transition: "all 700ms cubic-bezier(0.4, 0, 0.2, 1)",
                                                }}
                                                className={`relative overflow-hidden bg-ink aspect-[4/3] mb-2.5 border shadow-sm ${isSelected
                                                    ? "border-fire ring-2 ring-fire"
                                                    : "border-navy/15 group-hover:border-fire/60"
                                                    }`}
                                            >
                                                <img
                                                    src={log.image}
                                                    alt={log.label}
                                                    style={{
                                                        transition: "all 700ms cubic-bezier(0.4, 0, 0.2, 1)",
                                                    }}
                                                    className={`w-full h-full object-cover ${isSelected
                                                        ? "opacity-100 scale-105"
                                                        : "opacity-80 group-hover:scale-105 group-hover:opacity-100"
                                                        }`}
                                                />
                                                {isSelected && (
                                                    <div className="absolute top-2 right-2 bg-fire text-white font-mono text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider z-10 shadow">
                                                        SELECTED
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex justify-between items-center font-mono text-[11px] uppercase font-medium">
                                                <span className={isSelected ? "text-fire font-bold" : "text-steel"}>
                                                    {log.label}
                                                </span>
                                                <span className="text-steel/70">SCAN ID: {log.id}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Overview & Outcomes */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="font-display font-bold text-2xl text-navy uppercase tracking-tight mb-6">
                                MISSION OVERVIEW
                            </h2>
                            <div className="space-y-4 font-body text-steel text-sm md:text-base leading-relaxed">
                                {Array.isArray(data.overview) ? (
                                    data.overview.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
                                ) : (
                                    <p>{data.overview}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-2xl text-navy uppercase tracking-tight mb-6">
                                STRATEGIC OUTCOMES
                            </h2>
                            <div className="space-y-4">
                                {data.outcomes.map((outcome, idx) => {
                                    const IconComponent = outcome.icon || Lucide.ShieldCheck;
                                    return (
                                        <div
                                            key={idx}
                                            className="bg-white border-l-4 border-fire p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                                        >
                                            <div className="p-2 bg-fire/10 text-fire flex-shrink-0 mt-0.5">
                                                <IconComponent className="w-5 h-5 text-fire" />
                                            </div>
                                            <div>
                                                <h3 className="font-display font-bold text-sm text-navy uppercase tracking-wider mb-1">
                                                    {outcome.title}
                                                </h3>
                                                <p className="font-body text-xs md:text-sm text-steel leading-relaxed">
                                                    {outcome.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}