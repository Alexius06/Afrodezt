import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Lucide from "lucide-react";
import Texture from "../components/texture";
import { FloatingAccent } from "../components/DecorativeElements";
import Flagship from "../components/flagship";
import "../animations.css";
import { useInView } from "../hooks/useInView";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "../data/projects";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MissionLog() {
  // Single source of truth for active category filter
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [projectsref, projectsinview] = useInView({ threshold: 0.2 });
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic handling both category selection and search query matches
  const filteredLogs = PROJECTS_DATA.filter((log) => {
    // 1. Category Check
    const matchesCategory =
      activeCategory === "ALL" ||
      activeCategory === "ALL RECORDS" ||
      (log.categories
        ? log.categories.includes(activeCategory)
        : log.category === activeCategory);

    // 2. Search Query Check
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      log.title?.toLowerCase().includes(query) ||
      log.subtitle?.toLowerCase().includes(query) ||
      log.ref?.toLowerCase().includes(query) ||
      log.location?.toLowerCase().includes(query) ||
      (log.categories
        ? log.categories.some((cat) => cat.toLowerCase().includes(query))
        : log.category?.toLowerCase().includes(query));

    // Must satisfy both conditions
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      {/* Full Page Relative Wrapper */}
      <main className="relative min-h-screen w-full bg-paper overflow-hidden">
        {/* Global Fixed Texture Overlay */}
        <Texture className="fixed inset-0 w-full h-full opacity-35 pointer-events-none z-0" />

        {/* Hero Section */}
        <section className="relative z-10 overflow-hidden w-full max-w-7xl mx-auto pt-28 md:px-0 px-6">
          <FloatingAccent className="top-4 right-10 text-fire" size="w-28 h-28" duration={28} />

          <div className="relative z-10 flex flex-col items-start gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-fire inline-block" />
              <span className="font-mono text-xs text-maroon font-bold uppercase tracking-widest">
                // Engineering Dossiers
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-8xl text-navy uppercase leading-none md:tracking-[-3px] tracking-[-2px]">
              Operational <span className="bg-gradient-to-r from-fire to-ember bg-clip-text text-transparent">Portfolio</span>
            </h1>

            <p className="font-sans font-light text-steel text-base md:text-xl max-w-3xl leading-relaxed mt-2">
              Three decades of executed defense, maritime, and high-stakes fire suppression contracts across Nigeria's most critical operational domains.
            </p>
          </div>
        </section>

        {/* Flagship Section */}
        <div className="relative z-10">
          <Flagship />
        </div>

        {/* Mission Log Grid Section */}
        <section ref={projectsref} className="relative z-10 min-h-screen text-ink py-16 px-4 md:px-10 font-sans selection:bg-fire selection:text-white">
          <div className="max-w-7xl mx-auto space-y-10">

            {/* HEADER & SECONDARY TACTICAL TAB BAR */}
            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 pb-4 border-t border-navy/15 pt-6">

              {/* Search Bar */}
              <div className="relative flex items-center w-full md:w-80">
                <Lucide.Search className="absolute left-3.5 w-4 h-4 text-fire pointer-events-none z-10" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH LOGS..."
                  className="w-full bg-white border border-navy/20 pl-10 pr-14 py-2.5 font-mono text-xs text-ink uppercase tracking-wider placeholder:text-steel/50 focus:outline-none focus:border-fire transition-colors shadow-sm"
                />
                <span className="absolute right-3 font-mono text-xs font-bold text-fire bg-fire/10 px-2 py-0.5 uppercase tracking-widest pointer-events-none">
                  {filteredLogs.length}
                </span>
              </div>

              {/* Category Filter Pills */}
              <div className="relative flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                <Lucide.Filter className="w-4 h-4 text-fire shrink-0 mr-1" />
                {PROJECT_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <div 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                          clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
                        }}
                        className={`font-mono text-xs uppercase tracking-wider px-0.25 py-0.25 rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer bg-navy/20 hover:bg-navy
                          ${isActive? "bg-navy" : undefined}`}>

                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
                        }}
                        className={`font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive
                            ? "bg-navy text-paper font-bold shadow-md"
                            : "bg-paper text-navy hover:bg-white"
                          }`}
                      >
                      // {cat}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MISSION CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLogs.map((item, index) => (
                <Link
                  key={item.id}
                  id={item.id}
                  to={`/portfolio/${item.id}`}
                  style={{
                    animationDelay: `${index * 120}ms`,
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
                  }}
                  className={`${projectsinview ? "animate-fadeInUp" : "invisible"
                    } relative min-h-[460px] border border-navy/15 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-maroon transition-all duration-300 flex flex-col justify-end group bg-ink block`}
                >
                  {/* Cover Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Ref Badge */}
                  <div className="absolute top-3 left-3 bg-fire text-white font-mono text-[11px] font-bold px-3 py-1 uppercase tracking-wider shadow z-20">
                    {item.ref}
                  </div>

                  {/* Bottom Overlay Container */}
                  <div className="relative z-10 pt-20 pb-6 px-6 bg-gradient-to-t from-ink via-ink/80 to-transparent space-y-4">
                    <div className="space-y-2">
                      <p className="font-mono text-[11px] font-bold text-steel uppercase tracking-widest">
                        CLIENT : {item.client}
                      </p>

                      <h3 className="font-display font-bold text-2xl text-white uppercase leading-tight tracking-[-0.5px] group-hover:text-fire transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Specs Table Footer */}
                    <div className="border-t border-white/15 pt-4 font-mono text-[11px] space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-steel font-medium uppercase">
                          OPERATION TYPE:
                        </span>
                        <span className="text-white font-bold uppercase">
                          {item.type}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-steel font-medium uppercase">
                          LOCATION:
                        </span>
                        <span className="text-white font-bold uppercase">
                          {item.location}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-steel font-medium uppercase">
                          STATUS:
                        </span>
                        <span className="text-fire font-bold uppercase">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}