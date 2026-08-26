import React from "react";
import { CLIENTS } from '../data/clients';

export default function ClientStrip({
    clients = CLIENTS,
    speed = "35s",
    title = "Trusted By Industry Leaders"
}) {
    const tickerItems = [...clients, ...clients];

    return (
        <div className="w-full h-full overflow-hidden">
        <section className="w-full h-[50%] bg-ink/90 border-y border-white/10 py-8 md:py-12 relative skew-y-1">
            {title && (
                <div className="flex flex-col items-center mb-6 md:mb-8 -skew-y-1 px-4">
                    <p className="text-center text-xs md:text-xl font-mono tracking-widest text-steel/70 uppercase">
                        {title}
                    </p>
                    <div className="h-[2px] md:h-[3px] bg-maroon w-16 md:w-[10%] mt-2" />
                </div>
            )}

            <div className="relative w-full max-w-full overflow-hidden">
                {/* Scaled Edge Gradient Masks for Mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

                <div className="animate-infinite-scroll flex items-center gap-10 md:gap-24 h-fit w-max"
                    style={{ animationDuration: speed }}
                >
                    {tickerItems.map((client, index) => (
                        <div
                            key={`${client.id}-${index}`}
                            className="flex-shrink-0 flex items-center justify-center px-1 md:px-2 -skew-y-1"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-8 md:h-20 w-auto object-contain filter grayscale opacity-40 brightness-125 transition-all duration-500 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
}