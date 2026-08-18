import React from "react";

// DEFAULT DATA: Fallback list of clients if none are passed in
import { CLIENTS } from '../data/clients'

export default function ClientStrip({
    clients = CLIENTS,
    speed = "35s",
    title = "Trusted By Industry Leaders"
}) {
    // Duplicate the array so the infinite animation loops seamlessly with no gaps
    const tickerItems = [...clients, ...clients];

    return (
        <section className="w-full bg-ink/90 border-y border-white/10 py-12 overflow-hidden relative skew-y-1">

            {/* Optional Section Title (Counter-skewed so text stays level) */}
            {title && (
                <div className="flex flex-col items-center mb-8 -skew-y-1">
                    <p className="text-center text-xl font-mono tracking-widest text-steel/70 uppercase">
                        {title}
                    </p>
                    <div className="h-[3px] bg-maroon w-[10%]" />
                </div>
            )}

            {/* Container with Edge Gradient Overlays */}
            <div className="relative w-full">

                {/* Left & Right Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

                {/* Animated Track */}
                <div
                    className="animate-infinite-scroll flex items-center gap-16 md:gap-24 h-fit"
                    style={{ animationDuration: speed }}
                >
                    {tickerItems.map((client, index) => (
                        <div
                            key={`${client.id}-${index}`}
                            className="flex-shrink-0 flex items-center justify-center px-2 -skew-y-1"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-10 md:h-20 w-auto object-contain 
                                   filter grayscale opacity-40 brightness-125
                                   transition-all duration-500 ease-out
                                   hover:grayscale-0 hover:opacity-100 hover:brightness-100 hover:scale-110 
                                   cursor-pointer "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}