import * as Lucide from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HazardHover from "../components/hazardHover";
import Texture from "../components/texture";

export default function Contact() {
    return (
        <div className="bg-paper min-h-screen text-navy flex flex-col font-sans relative overflow-hidden">
            <Navbar />

            <main className="flex flex-col flex-grow pt-28 w-full relative bg-paper z-10">
                <Texture className="fixed inset-0 w-full h-full opacity-35 pointer-events-none z-0" />



                {/* 1. INTRO + CTAS SECTION */}
                <section className="relative max-w-7xl mx-auto pb-20  w-full pt-4 rounded-2xl md:px-0 px-5">
                    <div className="absolute inset-0  pointer-events-none z-0" />

                    {/* Foreground Content */}
                    <div className="relative z-10 max-w-4xl space-y-4 mb-10">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-6 bg-fire inline-block" />
                            <span className="font-mono text-xs text-maroon uppercase tracking-widest font-bold">
                            // Direct Emergency & Inquiries
                            </span>
                        </div>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-navy uppercase tracking-tight leading-none">
                            Initiate Direct Contact
                        </h1>
                        <p className="text-steel text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                            Connect directly with our central administrative command, naval defense refurbishment specialists, and emergency tender support teams.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="relative z-10 flex flex-wrap items-center gap-4">
                        <HazardHover>
                            <a
                                href="tel:08055449002"
                                className="inline-flex items-center justify-center gap-3 bg-fire text-white font-display font-bold text-base md:text-lg uppercase tracking-wide px-8 py-4 rounded transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <Lucide.PhoneCall className="w-5 h-5" />
                                <span>CALL 0805 544 9002</span>

                            </a>
                        </HazardHover>

                        <a
                            href="mailto:afrodezt1@yahoo.com"
                            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 border-2 border-navy text-navy font-display font-bold text-base md:text-lg uppercase tracking-wider px-8 py-4 rounded transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <span className="absolute inset-0 h-full w-full bg-navy -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                            <span className="relative z-10 flex items-center gap-3 group-hover:text-paper transition-colors duration-300">
                                <Lucide.Mail className="w-5 h-5" />
                                <span>EMAIL AFRODEZT</span>
                            </span>
                        </a>
                    </div>
                </section>

                {/* 2. PHOTO SECTION */}
                <section className="relative  pb-20 px-4 md:px-12 w-full">
                    <div className="relative z-10 h-[320px] md:h-[480px] max-w-7xl mx-auto w-full rounded-2xl overflow-hidden border border-navy/10 shadow-xl group">
                        <img
                            src="/assets/afrodezt-hq.jpg"
                            alt="Safety and Fire Tender Asset"
                            className="w-full h-full object-cover contrast-125 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-paper">
                            <div>
                                <span className="font-mono text-xs text-paper bg-maroon px-2.5 py-1 rounded font-bold uppercase tracking-wider mb-2 inline-block">
                                    ABUJA HQ PHOTO
                                </span>
                                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase">
                                    Our Central Operations Headquarters
                                </h3>
                            </div>
                            <span className="font-mono text-xs text-paper/70">
                                Abuja, Federal Capital Territory
                            </span>
                        </div>
                    </div>
                </section>

                {/* 3. OFFICE CARDS SECTION */}
                <section className="relative py-16 px-4 md:px-12 shadow-inner overflow-hidden">


                    <div className="relative z-10 max-w-7xl mx-auto w-full">
                        <div className="mb-8 border-b border-navy/10 pb-4">
                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-6 bg-fire inline-block" />
                                <span className="font-mono text-xs text-maroon font-bold uppercase tracking-widest">
                                // Regional Command Hubs
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1: Abuja HQ */}
                            <div className="bg-white border border-navy/10 rounded-sm p-8 flex flex-col justify-between shadow-sm hover:border-maroon/50 hover:shadow-md transition-all duration-300">
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
                                                <p className="text-steel">Plot 1162, CAD Zone B18, Mazi Emmanuel Olugbuo Close</p>
                                                <p className="text-steel">Sector Center D, Gudu</p>
                                                <p className="text-steel">Abuja 920001, Federal Capital Territory</p>




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
                            <div className="bg-white border border-navy/10 rounded-sm p-8 flex flex-col justify-between shadow-sm hover:border-maroon/50 hover:shadow-md transition-all duration-300">
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
                                                <p className="text-steel">Reclamation Road
                                                    Port Harcourt, Rivers State,
                                                    Nigeria</p>
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
                    </div>
                </section>

                {/* 4. MAP SECTION */}
                <section id="map-section" className="relative mx-auto pt-20 pb-20 px-4 md:px-12 w-full">


                    <div className="relative max-w-7xl h-[400px] md:h-[500px] bg-white mx-auto rounded-2xl overflow-hidden border border-navy/10 shadow-xl z-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.775560461616!2d7.469391074858226!3d8.992788691067112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d53c4ff151f%3A0xa0a0e6e88d238e93!2sAfrodezt%20House!5e0!3m2!1sen!2suk!4v1787148977823!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            className="filter contrast-125 opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />

                        {/* Map Overlay Badge */}
                        <div className="absolute bottom-6 left-6 bg-navy text-paper p-4 rounded-sm shadow-2xl border border-white/10 hidden sm:block max-w-xs font-mono text-xs z-10">
                            <p className="text-maroon font-bold uppercase mb-1">// EMBEDDED GOOGLE MAP — ABUJA HQ</p>
                            <p className="text-paper/80">Co-ordinates: 8.9928° N, 7.4694° E</p>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}