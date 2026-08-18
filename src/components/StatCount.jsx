import React, { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";

// 1. Counter Component
export function Counter({ target, isVisible }) {
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

// 2. Parent Component Example
export default function StatCountSection({ref,isVisible}) {
    // Correct destructuring for custom hook (ref + boolean state)
    

    return (
        <div ref={ref} className={` w-full flex flex-col items-center font-display uppercase px-16`}>
            <div className="relative flex flex-col w-[80%] items-start pb-4 mb-6">
                <span className="text-navy text-[45px]">
                    <Counter target={37} isVisible />+
                </span>
                <p className="text-xl text-steel">Years Active</p>
                <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-maroon ${isVisible ? "border-animate" : ""
                        }`}
                    style={{
                        width: isVisible ? "100%" : "0%",
                        transition: "width 0.8s ease-out",
                    }}
                />
            </div>
            {/* Established */}
            <div className="relative flex flex-col w-[80%] items-start pb-4 mb-6">
                <span className="text-navy text-[45px]">
                    <Counter target={1989} isVisible />
                </span>
                <p className="text-xl text-steel">Established</p>
                <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-maroon ${isVisible ? "border-animate" : ""
                        }`}
                    style={{
                        width: isVisible ? "100%" : "0%",
                        transition: "width 0.8s ease-out",
                        transitionDelay: "0.1s",
                    }}
                />
            </div>

            {/* RC Number */}
            <div className="relative flex flex-col w-[80%] items-start pb-4 mb-6">
                <span className="text-navy text-[45px]">
                    <Counter target={129394} isVisible />
                </span>
                <p className="text-xl text-steel">RC Number</p>
                <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-maroon ${isVisible ? "border-animate" : ""
                        }`}
                    style={{
                        width: isVisible ? "100%" : "0%",
                        transition: "width 0.8s ease-out",
                        transitionDelay: "0.2s",
                    }}
                />
            </div>

            {/* Strategic Projects */}
            <div className="relative flex flex-col w-[80%] items-start pb-4 mb-6">
                <span className="text-navy text-[45px]">
                    <Counter target={227} isVisible />
                </span>
                <p className="text-xl text-steel">Strategic Projects</p>
                <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-maroon ${isVisible ? "border-animate" : ""
                        }`}
                    style={{
                        width: isVisible ? "100%" : "0%",
                        transition: "width 0.8s ease-out",
                        transitionDelay: "0.2s",
                    }}
                />
            </div>
        </div>
    );
}