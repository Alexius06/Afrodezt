import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Lucide from "lucide-react"
import * as Icon from "react-icons/fa"
import { useInView } from "../hooks/useInView";

import "../animations.css"
import "../index.css"

 export default function Footer() {
    const [footerRef, footerInView] = useInView({ threshold: 0.4 });
    return (

        <footer ref={footerRef}
            className="w-full md:h-[70%] flex flex-col items-center font-display relative bg-ink border-t-[7px] border-fire text-paper/90 font-display  translate-y-[15px] py-36 px-6 md:px-6 overflow-hidden"
        >

            <div className=" w-[90%]  flex flex-col justify-between h-full">

                {/* 4-COLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 text-left w-full">

                    {/* COLUMN 1: BRAND & CREDENTIALS */}
                    <div className={`flex flex-col ${footerInView ? "animate-fadeInUp" : "opacity-0"} items-start `}
                        style={{
                            animationDelay: "0.6s",
                        }}>
                        <div className="flex items-center gap-2 w-20 h-20">
                            <img src="/assets/favicon.png" alt="" srcset="" />
                        </div>

                        <p className="text-steel font-mono text-xs font-light ">
                            Institutional contractor since 1989 for defense and energy infrastructure across Nigeria.
                        </p>

                        <div className="flex items-center gap-4 mt-10">

                            {/* Instagram Link */}
                            <a
                                href="#" // Replace with your Instagram URL
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="AFRODEZT Instagram"
                                className="social-icon flex items-center justify-center w-10 h-10 bg-transparent border border-steel text-paper hover:bg-fire hover:border-fire transition-all duration-300 hover:rotate-[-10deg] hover:scale-95"
                            >
                                <Icon.FaInstagram className="w-5 h-5" />
                            </a>

                            {/* LinkedIn Link */}
                            <a
                                href="#" // Replace with your LinkedIn URL
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="AFRODEZT LinkedIn"
                                className="social-icon flex items-center justify-center w-10 h-10 bg-transparent border border-steel text-paper hover:bg-fire hover:border-fire transition-all duration-300 hover:rotate-[-10deg] hover:scale-95"
                            >
                                <Icon.FaLinkedin className="w-5 h-5" />
                            </a>

                        </div>
                    </div>

                    {/* COLUMN 2: COMMAND OFFICES */}
                    <div className={`flex flex-col ${footerInView ? "animate-fadeInUp" : "opacity-0"} items-start gap-4`}
                        style={{
                            animationDelay: "0.8s",
                        }}>
                        <h3 className="text-sm font-display tracking-widest text-fire uppercase border-b border-white/10 pb-2 w-full">
                            Command Offices
                        </h3>

                        <div className="space-y-4 text-sm font-body font-normal">
                            {/* Abuja HQ */}
                            <div className="flex items-start gap-2.5">
                                <Lucide.MapPin className="w-4 h-4 text-fire flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-white uppercase text-xs font-display">Abuja HQ</p>
                                    <p className="text-steel text-xs">CBD, Federal Capital Territory</p>
                                </div>
                            </div>

                            {/* Port Harcourt */}
                            <div className="flex items-start gap-2.5">
                                <Lucide.Building2 className="w-4 h-4 text-fire flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-white uppercase text-xs font-display">Port Harcourt</p>
                                    <p className="text-steel text-xs">Trans-Amadi Industrial Layout</p>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    {/* COLUMN 3: QUICK ACCESS */}
                    <div className={`flex flex-col ${footerInView ? "animate-fadeInUp" : "opacity-0"} items-start gap-4`}
                        style={{
                            animationDelay: "1s",
                        }}>
                        <h3 className="text-sm font-display tracking-widest text-fire uppercase border-b border-white/10 pb-2 w-full">
                            Quick Access
                        </h3>

                        <ul className="space-y-2.5 text-sm font-display font-normal text-steel">
                            {[
                                { label: "Corporate Profile", href: "#profile" },
                                { label: "Get in Touch", href: "/contact" },
                                { label: "Service Catalogue", href: "#services" },
                                { label: "Project Portfolio", href: "#portfolio" },
                                { label: "Compliance Records", href: "#compliance" },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200"
                                    >
                                        
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 4: OPERATIONS */}
                    <div className={`flex flex-col ${footerInView ? "animate-fadeInUp" : "opacity-0"} items-start gap-4`}
                        style={{

                            animationDelay: "1.2s",
                        }}>
                        <h3 className="text-sm font-display tracking-widest text-fire uppercase border-b border-white/10 pb-2 w-full">
                            Operations
                        </h3>

                        <ul className="space-y-2.5 text-xs font-display tracking-widest font-normal text-steel">
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                
                                Maritime Safety & Fire Engineering
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                
                                Fixed Foam & FM200 Systems
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                
                                Ship Repair & Refurbishment
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                
                                Marine Sewage Treatment
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                
                                Mechanical Security Systems
                            </li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM BAR: COPYRIGHT & TRADEMARK */}
                <div className="pt-8 border-t bottom-4 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-steel/60">
                    <p className="text-center sm:text-left">
                        &copy; 2026 AFRODEZT GLOBAL SERVICES LTD. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-4">
                        <span>RC 129394</span>
                        <span>•</span>
                        <a href="#privacy" className="hover:text-fire transition-colors">Privacy Policy</a>
                        <span>•</span>
                        <a href="#terms" className="hover:text-fire transition-colors">Terms of Engagement</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}