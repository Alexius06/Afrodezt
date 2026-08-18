import { useState, useRef, useEffect, useCallback } from "react";
import * as Lucide from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
    return ( <>
        <div className="bg-paper min-h-screen text-navy flex flex-col font-sans">
            <div className="absolute inset-0 h-full bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
            <Navbar />

            <main className="flex-grow pt-28 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full space-y-16">
                
                {/* 1. INTRO + CTAS SECTION */}
                <section className="relative pt-4">
                    

                    {/* Main Headings */}
                    <div className="max-w-4xl space-y-4 mb-10">
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-navy uppercase tracking-tight leading-none">
                            Initiate Direct Contact
                        </h1>
                        <p className="text-steel text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                            Connect directly with our central administrative command, naval defense refurbishment specialists, and emergency tender support teams.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="tel:08055449002"
                            className="inline-flex items-center justify-center gap-3 bg-maroon hover:bg-maroon/90 text-white font-display font-bold text-base md:text-lg uppercase tracking-wider px-8 py-4 rounded transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Lucide.PhoneCall className="w-5 h-5" />
                            <span>CALL 0805 544 9002</span>
                        </a>

                        <a
                            href="mailto:info@afrodezt.com"
                            className="inline-flex items-center justify-center gap-3 border-2 border-navy text-navy hover:bg-navy hover:text-paper font-display font-bold text-base md:text-lg uppercase tracking-wider px-8 py-4 rounded transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <Lucide.Mail className="w-5 h-5" />
                            <span>EMAIL AFRODEZT</span>
                        </a>
                    </div>
                </section>

                {/* 2. PHOTO SECTION */}
                <section className="relative">
                   

                    <div className="relative w-full h-[320px] md:h-[480px] rounded-xl overflow-hidden border border-navy/10 shadow-lg group">
                        <img
                            src="/assets/afrodezt-hq.jpg"
                            alt="Safety and Fire Tender Asset"
                            className="w-full h-full object-cover  contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                        
                        <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-paper">
                            <div>
                                <span className="font-mono text-xs text-maroon bg-paper px-2.5 py-1 rounded font-bold uppercase tracking-wider mb-2 inline-block">
                                    SAFETY / TRUCK PHOTO
                                </span>
                                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase">
                                    Rapid Emergency Tender & Refurbishment Fleet
                                </h3>
                            </div>
                            <span className="font-mono text-xs text-paper/70">
                                West Africa Operational Range
                            </span>
                        </div>
                    </div>
                </section>

                {/* 3. OFFICE CARDS SECTION */}
                <section className="relative">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1: Abuja HQ */}
                        <div className="bg-white border border-navy/10 rounded-xl p-8 flex flex-col justify-between shadow-sm hover:border-maroon/50 hover:shadow-md transition-all duration-300">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-navy/10 pb-4">
                                    <div>
                                        <span className="font-mono text-[10px] text-maroon font-bold uppercase tracking-widest block mb-1">
                                            National Administrative HQ
                                        </span>
                                        <h2 className="font-display text-2xl font-bold text-navy uppercase tracking-tight">
                                            Abuja HQ
                                        </h2>
                                    </div>
                                    <Lucide.Building2 className="w-6 h-6 text-navy/40" />
                                </div>

                                <div className="space-y-4 font-mono text-sm text-steel">
                                    <div className="flex items-start gap-3">
                                        <Lucide.MapPin className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-navy">Address:</p>
                                            <p className="text-steel">Plot 1042, Central Business District, Abuja, FCT, Nigeria</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Lucide.Phone className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-navy">Phone:</p>
                                            <p className="text-steel">+234 (0) 805 544 9002</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between">
                                <a
                                    href="#map-section"
                                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-navy hover:text-maroon uppercase tracking-wider transition-colors"
                                >
                                    <span>Map Link</span>
                                    <Lucide.ArrowDown className="w-4 h-4" />
                                </a>
                                <span className="font-mono text-[10px] text-steel/60 uppercase">Primary Headquarters</span>
                            </div>
                        </div>

                        {/* Card 2: Port Harcourt */}
                        <div className="bg-white border border-navy/10 rounded-xl p-8 flex flex-col justify-between shadow-sm hover:border-maroon/50 hover:shadow-md transition-all duration-300">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-navy/10 pb-4">
                                    <div>
                                        <span className="font-mono text-[10px] text-maroon font-bold uppercase tracking-widest block mb-1">
                                            Maritime Operations & Yard
                                        </span>
                                        <h2 className="font-display text-2xl font-bold text-navy uppercase tracking-tight">
                                            Port Harcourt
                                        </h2>
                                    </div>
                                    <Lucide.Anchor className="w-6 h-6 text-navy/40" />
                                </div>

                                <div className="space-y-4 font-mono text-sm text-steel">
                                    <div className="flex items-start gap-3">
                                        <Lucide.MapPin className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-navy">Address:</p>
                                            <p className="text-steel">Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Lucide.Phone className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-navy">Phone:</p>
                                            <p className="text-steel">+234 (0) 805 544 9002</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between">
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-navy hover:text-maroon uppercase tracking-wider transition-colors"
                                >
                                    <span>Map Link</span>
                                    <Lucide.ExternalLink className="w-4 h-4" />
                                </a>
                                <span className="font-mono text-[10px] text-steel/60 uppercase">Coastal Yard</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. MAP SECTION */}
                <section id="map-section" className="relative">
                
                    <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-xl overflow-hidden border border-navy/10 shadow-lg">
                        <iframe
                            title="Embedded Google Map — Abuja HQ"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.81829393608!2d7.422325389657494!3d9.057851216698692!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da78edd%3A0xe5f838237e5e3478!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="filter contrast-125 opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />

                        {/* Map Overlay Badge */}
                        <div className="absolute bottom-4 left-4 bg-navy text-paper p-4 rounded-lg shadow-xl border border-white/10 hidden sm:block max-w-xs font-mono text-xs">
                            <p className="text-maroon font-bold uppercase mb-1">// EMBEDDED GOOGLE MAP — ABUJA HQ</p>
                            <p className="text-paper/80">Co-ordinates: 9.0578° N, 7.4951° E</p>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    </>);
}