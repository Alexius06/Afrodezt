import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import * as Lucide from "lucide-react";
import * as lucideLab from '@lucide/lab';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ClientStrip from "../components/ClientStrip";
import ProjectsSection from "../components/projects";
import StatCountSection from "../components/StatCount";
import { useInView } from "../hooks/useInView";
import { CharacterReveal, WordReveal, AnimatedElement, StaggeredContainer } from "../components/AnimationComponents";
import { FloatingAccent, DrawLine, NeonText } from "../components/DecorativeElements";
import HazardHover from "../components/hazardHover";
import Texture from "../components/texture";
import "../animations.css";

// Counter Component for animated numbers
function Counter({ target, isVisible }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let current = 0;
        const increment = target / 115; // Animate over ~115 frames
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16); // ~60fps

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return <span>{count}</span>;
}

export default function LandingPage() {
    const [scale, setScale] = useState(1);
    const [servicesInView, setServicesInView] = useState(false);
    const [projectsRef, projectsInView] = useInView({ threshold: 0.4 });
    const [clientsRef, clientsInView] = useInView({ threshold: 0.4 });
    const [partnersRef, partnersInView] = useInView({ threshold: 0.4 });
    const [missionRef, missionInView] = useInView({ threshold: 0.4 });

    const bgRef = useRef(null);
    const servicesRef = useRef(null);

    const [headlineFinished, setHeadlineFinished] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // Adjust the divisor (100) to control zoom sensitivity
            const newScale = 1 + scrollTop / 3000;
            setScale(newScale);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // Intersection Observer for services section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setServicesInView(true);
                    observer.unobserve(entry.target); // Only trigger once
                }
            },
            { threshold: 0.4 }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <main className="relative z-10">
            
                <Texture className="fixed inset-0 w-full h-full opacity-50 pointer-events-none z-0" />

                <div className="bg-ink min-h-screen text-white relative">
                    {/* 1. NAVBAR: Fixed header sliding down after headline finishes */}
                    <div
                        className={`fixed top-0 left-0 right-0 z-50 ${headlineFinished ? "animate-slideDown" : "-translate-y-full invisible"
                            }`}

                    >
                        <Navbar />
                    </div>
                    {/* 2. HERO SECTION */}
                    <section id="hero-section" className="h-screen overflow-hidden relative bg-ink">

                        {/* Background Image & Overlay (Fades in over solid Ink base) */}
                        <div
                            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out pointer-events-none z-0"
                            style={{ opacity: headlineFinished ? 1 : 0 }}
                        >
                            <div
                                ref={bgRef}
                                className="absolute inset-0 w-full h-full"
                                style={{
                                    backgroundImage: "url('/assets/landing_page.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transform: `scale(${scale})`,
                                    transformOrigin: "center",
                                    transition: "transform 0.1s ease-out",
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/60" />
                        </div>

                        {/* Hero Content Flow */}
                        <div className="relative z-10 uppercase flex flex-col items-start max-w-9xl px-4 pb-10 mt-40 sm:px-8">

                            {/* Tagline */}
                            <div
                                className="transition-all duration-700 ease-out"
                                style={
                                    headlineFinished
                                        ? { opacity: 1, transform: "translateY(0)" }
                                        : { opacity: 0, transform: "translateY(-10px)", pointerEvents: "none" }
                                }
                            >
                                <p className="text-fire font-light text-lg md:text-xl font-display mb-3">
                                    Since 1989
                                </p>
                            </div>

                            {/* Headline */}
                            <CharacterReveal delay={200} onComplete={() => setHeadlineFinished(true)}>
                                <h1 className="max-w-[min(90vw,56rem)] text-3xl font-bold font-display uppercase leading-none tracking-[-5px] text-white sm:text-6xl md:text-7xl lg:text-[8rem]">
                                    <div className="flex flex-wrap items-baseline gap-x-[0.25em]">
                                        <span>Engineered</span>{" "}
                                        <span className="bg-gradient-to-r from-fire to-ember bg-clip-text text-transparent tracking-[-1px]">
                                            for
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-baseline gap-x-[0.25em]">
                                        <span className="bg-gradient-to-r from-fire to-ember bg-clip-text text-transparent tracking-[-1px]">
                                            Maritime
                                        </span>{" "}
                                        <span>Safety</span>
                                    </div>
                                </h1>
                            </CharacterReveal>

                            {/* Description & Buttons */}
                            <div
                                className=""
                                style={
                                    headlineFinished
                                        ? { animation: 'fadeInUp 0.8s ease-out 0.4s both', opacity: 1 }
                                        : { opacity: 0, pointerEvents: 'none' }
                                }
                            >
                                <p className="mt-8 max-w-[min(90vw,42rem)] text-base font-light leading-relaxed text-steel sm:text-lg md:text-xl">
                                    <span className="block">
                                        Nigeria's premier partner for high-stakes fire engineering
                                    </span>
                                    <span className="block">
                                        and maritime protection for over three decades.
                                    </span>
                                </p>

                                <div className="mt-10 flex flex-wrap gap-4 sm:gap-5">

                                        <Link
                to="/portfolio" className="inline-flex h-16 items-center justify-center hover:bg-white/10 border border-white px-6 text-base font-bold uppercase rounded-sm text-white transition-opacity hover:opacity-90 sm:px-8 ">
                                            View Portfolio
                                        </Link>
                                    <HazardHover>
                                    <Link
                to="/contact" className="inline-flex h-16 items-center justify-center bg-fire rounded-sm px-6 text-base font-bold uppercase text-white transition-colors  sm:px-8">
                                        Get in Touch
                                    </Link>
                                    </HazardHover>
                                    
                                </div>
                            </div>
                            <div
                                className="flex mt-10 items-center origin-left transition-all duration-700"
                                style={{
                                    transform: headlineFinished ? "scaleX(1)" : "scaleX(0)",
                                    opacity: headlineFinished ? 1 : 0,
                                }}
                            >
                                <div className="h-[2px] w-[250px] bg-fire"></div>
                                <div className="absolute h-[10px] w-[10px] bg-fire rounded-full left-50"></div>
                            </div>
                        </div>


                        <img
                            src="/assets/metal_pattern.png"
                            className="absolute -left-20 top-8 w-40 opacity-20 object-none sm:w-52 md:w-64 lg:top-32"
                            alt=""
                        />
                        <img
                            src="/assets/metal_pattern.png"
                            className="absolute -right-16 bottom-8 w-40 opacity-20 object-none sm:w-52 md:w-64"
                            alt=""
                        />
                    </section>

                    {/* Styles */}
                    <style>{`
                        @keyframes slideInBorder {
                            from { width: 0; }
                            to { width: 100%; }
                        }

                        .border-animate {
                            animation: slideInBorder 2s ease-out forwards;
                        }
                    `}</style>
                </div >
                <section id="services" ref={servicesRef} className="w-full h-full flex flex-row justify-center py-20 relative">
                
                    {/* Floating Decorative Elements */}
                    <FloatingAccent className="top-10 left-20 text-fire" size="w-32 h-32" duration={30} />
                    <FloatingAccent className="bottom-20 right-32 text-maroon" size="w-24 h-24" duration={25} delay={5} />


                    {/* Years Active */}



                    <div className="w-[30%]">

                        <StatCountSection isVisible={servicesInView} ref={servicesRef} />
                    </div>

                    <div id="opt-capb" className="md:w-[70%] w-full h-full uppercase font-display mr-6"
                        style={servicesInView ? { animation: 'fadeInUp 0.6s ease-out 0.3s forwards', opacity: 0, } : { opacity: 1 }}>
                        <h1 className=" font-bold text-[62px] tracking-[-2px]">
                            <span className="text-navy ">Operational&#32;</span>
                            <span className="bg-gradient-to-r from-fire to-ember bg-clip-text text-transparent">Capabilities</span>
                        </h1>
                        <div className="h-[8px] bg-maroon w-[15%] mt-3"></div>
                        <div className="grid grid-rows-2 grid-cols-3 gap-4 mt-3">
                            {/* Item 1,1 */}
                            <div
                                className="bg-paper text-fire p-6 transition-all duration-300 hover:bg-navy hover:text-paper cursor-pointer"
                                style={servicesInView ? { animation: 'fadeInUp 0.6s ease-out 0.3s forwards', opacity: 0, } : undefined}
                            >
                                <Lucide.Anchor className="font-bold mb-5" />
                                <h2 className="font-bold text-xl mb-6 block:text-navy uppercase">Maritime Safety & Fire Engineering</h2>
                                <p className="font-light font-body text-xs text-steel">Specialized suppression systems for naval and
                                    commercial vessels.</p>
                            </div>

                            {/* Item 1,2 */}
                            <div
                                className="bg-paper text-fire p-6 transition-all duration-300 hover:bg-navy hover:text-paper cursor-pointer"
                                style={servicesInView ? { animation: 'fadeInUp 0.7s ease-out 0.3s forwards', opacity: 0, } : undefined}
                            >
                                <Lucide.FireExtinguisher className="font-bold mb-6" />
                                <h2 className="font-bold text-xl mb-8 block:text-navy uppercase">Fixed Foam & FM200 Systems</h2>
                                <p className="font-light font-body text-xs text-steel">Integrated industrial gas and foam
                                    suppression for mission-critical assets.</p>
                            </div>

                            {/* Item 1,3 */}
                            <div
                                className="bg-paper text-fire p-6 transition-all duration-300 hover:bg-navy hover:text-white cursor-pointer"
                                style={servicesInView ? { animation: 'fadeInUp 0.8s ease-out 0.3s forwards', opacity: 0, } : undefined}
                            >
                                <Lucide.ShipWheel className="font-bold mb-6" />
                                <h2 className="font-bold text-xl mb-8 block:text-navy uppercase">Ship Repair & Refurbishment</h2>
                                <p className="font-light font-body text-xs text-steel">Hull maintenance and technical restoration to
                                    defense standards.</p>
                            </div>

                            {/* Item 2,1 */}
                            <div
                                className="bg-paper text-fire p-6 transition-all duration-300 hover:bg-navy hover:text-white cursor-pointer"
                                style={servicesInView ? { animation: 'fadeInUp 0.9s ease-out 0.4s forwards', opacity: 0, } : undefined}
                            >
                                <Lucide.Icon iconNode={lucideLab.faucet} className="font-bold mb-6" />
                                <h2 className="font-bold text-xl mb-8 block:text-navy uppercase">Marine Sewage Treatment</h2>
                                <p className="font-light font-body text-xs text-steel">Environmental compliance systems for
                                    offshore and coastal installations.</p>
                            </div>

                            {/* Item 2,2 */}
                            <div
                                className="bg-paper text-fire p-6 transition-all duration-300 hover:bg-navy hover:text-white cursor-pointer"
                                style={servicesInView ? { animation: 'fadeInUp 1s ease-out 0.3s forwards', opacity: 0, } : undefined}
                            >
                                <Lucide.ShieldHalf className="font-bold mb-6" />
                                <h2 className="font-bold text-xl mb-8 block:text-navy uppercase">Mechanical Security Equipment</h2>
                                <p className="font-light font-body text-xs text-steel">High-grade perimeter and asset security for
                                    government facilities.</p>
                            </div>

                            {/* Item 2,3 - Always Navy */}
                            <div
                                className="bg-navy text-white p-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-fire/50"
                                style={servicesInView ? { animation: 'fadeInRight 0.8s ease-out 0.1s forwards', opacity: 0, } : undefined}
                            >
                                <h2 className="font-bold text-xl mb-8 block:text-paper uppercase">Compliance Ready</h2>
                                <p className="font-light font-body text-xs text-steel">Contractor for Nigerian Navy, Chevron, and
                                    Presidential Air Fleet.</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="clients" ref={clientsRef} className={` w-full h-full ${clientsInView ? "animate-reveal" : "opacity-0"}`}>

                    <ClientStrip speed="40s" />
                </section>
                <section id="projects" ref={projectsRef} className="w-full h-full flex flex-col items-center  py-20 relative">
                    
                    <div className="w-[80%] flex md:flex-row flex-col md:justify-center items-center px-3 gap-3">
                        <ProjectsSection
                            projectsInView={projectsInView}
                            projectsRef={projectsRef}
                        />
                    </div>
                </section>
                <section id="partners" ref={partnersRef} className={`uppercase w-full h-full flex flex-col items-center ${partnersInView ? "animate-fadeInUp" : "opacity-0"} py-20 relative`}>
                    
                    <div className=" mb-10 ">

                        <p className="text-steel text-sm font-mono font-light text-center mb-6">Institutional Verification</p>
                        <h1 className="text-navy text-4xl tracking-[-2px] font-display font-bold text-center">Authorized Partners</h1>

                    </div>


                    <div className="md:w-[60%] h-contain border-t-2 border-steel flex flex-row justify-center pt-4 transition-all duration-700 ">

                        <div className="w-1/3 scale-90 hover:scale-110 flex flex-col items-center transition-all duration-700 "> <img src="/assets/partners/firex.jpg" className="w-50 h-50" alt="" /></div>
                        <div className="w-1/3 scale-110 hover:scale-120 flex flex-col items-center transition-all duration-700 "> <img src="/assets/partners/volkan.jpg" className="w-50 h-50" alt="" /></div>
                        <div className="w-1/3 scale-90 hover:scale-110 flex flex-col items-center transition-all duration-700 "> <img src="/assets/partners/lifeco.jpg" className="w-50 h-50" alt="" /></div>
                    </div>

                </section>
                <section id="mission" ref={missionRef} className={`uppercase font-display font-bold w-full h-full flex flex-col items-center justify-center skew-y-1 pt-20 relative bg-maroon text-paper/90 text-4xl py-20`}>
                    <div
                        className="absolute inset-0 opacity-100 pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(rgba(208, 10, 10, 0.4) 1.5px, transparent 1.5px)`,
                            backgroundSize: "24px 24px",
                        }}
                    />
                    <div
                        className={`absolute top-9 left-30 w-[20%] h-[20%]  bg-paper z-40 ${missionInView ? "animate-fadeInUp" : "opacity-0"}`}
                        style={{
                            maskImage: "url('/assets/decor/quote.svg')",
                            WebkitMaskImage: "url('/assets/decor/quote.svg')",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                        }}
                    />


                    <div className={` -skew-y-1 w-[50%] h-[40%] text-center ${missionInView ? "animate-fadeInUp" : "opacity-0"}`}>
                        <h1>
                            "To safeguard Nigeria's strategic assets through
                            uncompromising engineering excellence and technical
                            precision, ensuring national resilience since 1989."
                        </h1>
                    </div>
                </section>
                

                <Footer />




            </main >
        </>
    );
}