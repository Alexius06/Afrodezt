import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import * as Lucide from "lucide-react";
import { useInView } from "../hooks/useInView";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import StatCountSection from "../components/StatCount";
import ExpandableBentoGrid from "../components/Bentogrid";
import WhatWeDoSection from "../components/Whatwedo";
import PartnerCredentialsSection from "../components/partners";
import HazardHover from "../components/hazardHover";
import Texture from "../components/texture";
import "../animations.css";

export default function About() {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.0 });
  const [partnersRef, partnersInView] = useInView({ threshold: 0.0 });
  const [founderRef, founderInView] = useInView({ threshold: 0.0 });
  const [statRef, statInView] = useInView({ threshold: 0.4 });

  return (
    <>
      {/* Sticky Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main Page Container */}
      <main className="relative min-h-screen w-full bg-paper overflow-hidden">
        {/* Global Fixed Texture Overlay */}
        <Texture className="fixed inset-0 w-full h-full opacity-40 pointer-events-none z-0" />

        {/* Bento Grid Hero */}
        <div className="relative z-10 pt-24 mt-4">
          <ExpandableBentoGrid />
        </div>

        {/* Company Narrative & Stats Section */}
        <section
          ref={aboutRef}
          className={`relative z-10 w-full flex flex-col ${
            aboutInView ? "animate-fadeInLeft" : "opacity-0"
          } md:flex-row justify-center items-center md:items-stretch py-8 px-4 gap-6`}
        >
          {/* Subtle backdrop glass for text contrast */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] pointer-events-none z-0" />

          {/* Writeup Container */}
          <div className="relative z-10 w-full md:w-[70%] rounded-lg min-h-[400px] px-4 md:px-8 py-4 mb-12 md:mb-20">
            {/* Heading & Accent Rule */}
            <div className="mb-8">
              <h1 className="font-display text-navy text-2xl md:text-4xl font-bold tracking-tight uppercase mb-3">
                AFRODEZT GLOBAL SERVICES LIMITED
              </h1>
              <div className="h-[3px] bg-maroon w-20 md:w-24 rounded-full" />
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-steel text-sm md:text-base leading-relaxed mb-10">
              <p className="text-base md:text-lg font-medium text-navy/90">
                Established in 1989, Afrodezt began its operations with a commitment to innovation and the distribution of high-quality firefighting products, with the primary objective of providing world-class services.
              </p>

              <p>
                The founder, Mazi Olugbuo Emmanuel, a Maritime Management Technology graduate from the Federal University of Technology Owerri, Imo State, recognized the critical need for specialized fire safety solutions within the Nigerian maritime industry.
              </p>

              <p>
                Today, AFRODEZT is recognized as a leading supplier of firefighting equipment and fire tenders across the West African region.
              </p>

              <p>
                AFRODEZT provides a wide array of custom-engineered safety equipment and systems, including Skylift hydraulic platform firefighting vehicles, municipal fire trucks, ambulances, mobile maintenance units, fire monitor systems, fire alarms, firefighting skids, fire pumps, fire doors, fixed foam and CO₂ fire suppression systems, and smoke ventilation solutions.
              </p>

              <p>
                Since its establishment, Afrodezt has grown to become one of the largest fire truck refurbishment companies in Nigeria, maintaining strong international partnerships across Europe, Asia, and the Americas to deliver tailor-made, international-standard solutions.
              </p>

              <p>
                Grounded in rigorous product quality and dedicated customer service, Afrodezt operates globally with the capacity to execute projects of any scale.
              </p>

              <p className="pt-2 text-steel/80 italic">
                To inquire about our products or services, please visit our contact page and leave us a message. One of our specialists will be in touch shortly.
              </p>
            </div>

            {/* CTA Button */}
            <HazardHover>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-display rounded-sm bg-fire px-8 py-3.5 text-sm md:text-base font-bold uppercase tracking-wider text-white shadow-md hover:shadow-xl active:translate-y-0 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </HazardHover>
          </div>

          {/* Stat Count Wrapper */}
          <div
            className="relative z-10 w-full ml-0 md:w-[30%] md:bg-ink/20 md:border-l-2 md:border-maroon md:rounded-sm flex md:items-center sm:items-start sm:left-0"
            ref={statRef}
          >
            <StatCountSection isVisible={statInView} ref={statRef} />
          </div>
        </section>

        {/* Founder Section */}
        <section
          ref={founderRef}
          className="relative z-10 w-full bg-maroon flex flex-col overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-100 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(208, 10, 10, 0.4) 1.5px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="w-full flex">
            <div
              className={`w-[45%] h-full flex flex-col mx-5 my-5 overflow-hidden rounded-lg hover:rotate-[-1deg] duration-700 transition-all ${
                founderInView ? "animate-reveal" : "opacity-0"
              }`}
            >
              <img
                src="/assets/hq-2.jpg"
                className="hover:scale-110 duration-700 transition-all"
                alt="Founder HQ"
              />
            </div>
            <div className="flex flex-col flex-wrap text-paper text-2xl text-center w-[55%] h-full my-40">
              <p
                className={`${
                  founderInView ? "animate-fadeInRight" : "opacity-0"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure fuga optio quis adipisci ut reprehenderit voluptatem non! Ipsum quisquam a id assumenda.
              </p>
              <div
                className={`absolute left-[50%] bottom-8 flex ${
                  founderInView ? "animate-reveal" : "opacity-0"
                }`}
              >
                <span className="inline-start text-center">-</span>
                <p className="text-center italic text-paper font-body opacity-70">
                  CEO/GMD of Afrodezt Group
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Credentials Section */}
        <section className="relative z-10">
          <PartnerCredentialsSection
            partnersRef={partnersRef}
            partnersInView={partnersInView}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}