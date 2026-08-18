import React, { useState } from "react";

const GALLERY_ITEMS = [
    {
        id: "01",
        image: "/assets/hq-2.jpg",
        gridArea: "1 / 1 / 4 / 2", // Tall Left Pillar (Cols 1, Rows 1-3)
    },
    {
        id: "02",
        image: "/assets/afrodezt-hq.jpg",
        gridArea: "1 / 2 / 3 / 4", // Center Hero (Cols 2-3, Rows 1-2)
    },
    {
        id: "03",
        image: "/assets/overview-trucks.jpg",
        gridArea: "1 / 4 / 3 / 5", // Right Tile (Col 4, Rows 1-2)
    },
    {
        id: "04",
        image: "/assets/official-handover.jpg",
        gridArea: "3 / 2 / 4 / 5", // Bottom Banner (Cols 2-4, Row 3)
    },
];

export default function ExpandableBentoGrid() {
    const [activeId, setActiveId] = useState(null);

    // Compute dynamic track proportions depending on active tile
    const getGridTemplate = () => {
        switch (activeId) {
            case "01": // Expand Left Column
                return {
                    gridTemplateColumns: "2.5fr 0.5fr 0.5fr 0.5fr",
                    gridTemplateRows: "1fr 1fr 1fr",
                };
            case "02": // Expand Center Hero
                return {
                    gridTemplateColumns: "0.5fr 1.75fr 1.75fr 0.5fr",
                    gridTemplateRows: "1.75fr 1.75fr 0.5fr",
                };
            case "03": // Expand Right Tile
                return {
                    gridTemplateColumns: "0.5fr 0.5fr 0.5fr 2.5fr",
                    gridTemplateRows: "1.75fr 1.75fr 0.5fr",
                };
            case "04": // Expand Bottom Banner
                return {
                    gridTemplateColumns: "0.5fr 1.16fr 1.16fr 1.16fr",
                    gridTemplateRows: "0.5fr 0.5fr 2.5fr",
                };
            default: // Rest State
                return {
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gridTemplateRows: "1fr 1fr 1fr",
                };
        }
    };

    return (
        <section className="w-full bg-transparent p-4 md:p-8 rounded-2xl">
            <div
                className="w-full h-[300px] hover:h-[600px] grid gap-3 md:gap-4 transition-all duration-700 ease-in-out"
                style={getGridTemplate()}
            >
                {GALLERY_ITEMS.map((item) => {
                    const isActive = activeId === item.id;
                    const isInactive = activeId !== null && !isActive;

                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActiveId(item.id)}
                            onMouseLeave={() => setActiveId(null)}
                            style={{ gridArea: item.gridArea }}
                            className={`
                                relative overflow-hidden rounded-lg cursor-pointer
                                transition-all duration-700 ease-in-out
                                ${
                                    isActive
                                        ? "opacity-100 brightness-100"
                                        : isInactive
                                        ? "opacity-80 grayscale"
                                        : "opacity-100"
                                }
                            `}
                        >
                            <img
                                src={item.image}
                                alt={`Gallery item ${item.id}`}
                                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}