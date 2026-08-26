import React from "react";
import * as Lucide from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS_DATA } from "../data/projects"



export default function ProjectsSection({ projectsInView, projectsRef }) {
    const featuredProjects = PROJECTS_DATA.filter((p) => p.featuredOnIndex);
    return (
        <section id="projects" ref={projectsRef} className="w-full my-24 px-4 sm:px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto">

        {/* Header Row */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className={`uppercase flex-start ${projectsInView ? "animate-fadeInLeft" : "translate-x-full invisible"}`}>
                <div className="flex items-center ml-1 mb-3 justify-start md:justify-center gap-3">
                    <span className="h-[2px] w-8 bg-fire inline-block" />
                    <p className="text-maroon text-xs font-mono font-light">// Operational Excellence</p>
                </div>
                <h1 className="text-navy font-display tracking-[-2px] md:tracking-[-4px] text-4xl md:text-6xl font-bold">Projects</h1>
            </div>
        </div>

        {/* 3 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
            {featuredProjects.map((project, i) => {
                const isTopInitial = project.initialHalf === "top";
                const specsList = Array.isArray(project.specs)
                    ? project.specs
                    : project.cardSpecs || [];

                return (
                    <Link
                        to={`/portfolio/${project.id}`}
                        key={project.id}
                        /* Mobile: fixed height so image & overlay span full height. Desktop: h-full */
                        className="relative h-[480px] md:h-full w-full bg-transparent border border-white/10 overflow-hidden group cursor-pointer block"
                        style={
                            projectsInView
                                ? { animation: `fadeInUp 0.8s ease-in-out ${i / 10}s both` }
                                : { opacity: 0 }
                        }
                    >
                        {/* 1. BACKGROUND IMAGE 
                            Mobile: Full height, full color. Desktop: Unwraps from initial half on hover 
                        */}
                        <div
                            className={`absolute inset-0 md:inset-auto md:left-0 md:right-0 overflow-hidden transition-all duration-700 ease-in-out z-0 h-full ${
                                isTopInitial
                                    ? "md:top-0 md:h-1/2 md:group-hover:h-full"
                                    : "md:bottom-0 md:h-1/2 md:group-hover:h-full"
                            }`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full md:h-[500px] object-cover filter grayscale-0 md:grayscale opacity-100 md:opacity-90 md:brightness-90 
                                md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-105 
                                transition-all duration-700 ease-in-out"
                            />
                        </div>

                        {/* 2. INITIAL UNHOVERED LABEL (Desktop only) */}
                        <div
                            className={`hidden md:block absolute left-6 right-6 z-10 transition-opacity duration-300 group-hover:opacity-0 ${
                                isTopInitial ? "top-6" : "top-[56%]"
                            }`}
                        >
                            <h3 className="text-navy font-display font-bold text-xl uppercase tracking-tight">
                                {project.title}
                            </h3>
                        </div>

                        {/* 3. DIRECTIONAL CHEVRON INDICATOR (Desktop only) */}
                        <div
                            className={`hidden md:block absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-300 group-hover:opacity-0 group-hover:scale-50 ${
                                isTopInitial ? "top-3/5" : "bottom-3/5"
                            }`}
                        >
                            {isTopInitial ? (
                                <Lucide.ChevronDown className="w-6 h-6 text-fire animate-bounce" />
                            ) : (
                                <Lucide.ChevronUp className="w-6 h-6 text-fire animate-bounce" />
                            )}
                        </div>

                        {/* 4. OVERLAY & CONTENT
                            Mobile: Permanently active gradient overlay & content. 
                            Desktop: Slides in on hover.
                        */}
                        <div
                            className={`absolute left-0 right-0 inset-0 md:inset-auto z-20 flex flex-col justify-between p-6 sm:p-8 transition-all duration-700 ease-in-out h-full opacity-100 bg-gradient-to-t from-ink via-ink/90 to-ink/50 md:opacity-0 ${
                                isTopInitial
                                    ? "md:bottom-0 md:h-0 md:group-hover:h-full md:bg-gradient-to-t md:from-ink md:via-ink/90 md:to-ink/60 md:group-hover:opacity-100"
                                    : "md:top-0 md:h-0 md:group-hover:h-full md:bg-gradient-to-b md:from-ink md:via-ink/90 md:to-ink/60 md:group-hover:opacity-100"
                            }`}
                        >
                            {/* Inner Content: Always visible on mobile, fades in on desktop hover */}
                            <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-300 flex flex-col h-full justify-between">

                                {/* Meta Content */}
                                <div className="h-full flex flex-col justify-end">
                                    <h3 className="text-xl sm:text-2xl font-bold font-display uppercase text-white mb-2 sm:mb-3 tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-steel font-body text-xs leading-relaxed mb-4 sm:mb-6">
                                        {project.summary || project.description}
                                    </p>

                                    {/* Specs List */}
                                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                                        {specsList.map((spec, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-xs font-mono text-white/90"
                                            >
                                                <Lucide.CheckCircle2 className="w-3.5 h-3.5 text-fire flex-shrink-0" />
                                                <span>{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom CTA */}
                                <div className="inline-flex items-center gap-2 text-xs font-bold font-display uppercase tracking-widest text-fire hover:text-white transition-colors group/btn pt-3 sm:pt-4 border-t border-white/10">
                                    <span>{project.linkText || "INSPECT MISSION"}</span>
                                    <Lucide.ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </div>

                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>

    </div>
</section>
    );
}