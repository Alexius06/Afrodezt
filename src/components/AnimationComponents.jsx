import { useInView } from "../hooks/useInView";
import { useEffect, useState, useRef } from "react";
import React, { Children, isValidElement, cloneElement } from "react";



/**
 * Wrapper for elements that animate when entering viewport
 */
export function AnimatedElement({
    children,
    animation = "fadeInUp",
    delay = 0,
    threshold = 0.2,
    className = "",
    start = true,
}) {
    const [ref, isInView] = useInView({ threshold });

    const shouldAnimate = isInView && start;

    return (
        <div
            ref={ref}
            className={`${shouldAnimate ? `animate-${animation}` : "opacity-0"} ${className}`}
            style={{
                animationDelay: isInView ? `${delay}ms` : "0ms",
            }}
        >
            {children}
        </div>
    );
}

/**
 * Staggered animation for multiple children
 */
export function StaggeredContainer({
    children,
    animation = "fadeInUp",
    staggerDelay = 100,
    threshold = 0.2,
    className = "",
}) {
    const [ref, isInView] = useInView({ threshold });

    return (
        <div ref={ref} className={className}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <div
                        key={index}
                        className={isInView ? `animate-${animation}` : "opacity-0"}
                        style={{
                            animationDelay: isInView ? `${index * staggerDelay}ms` : "0ms",
                        }}
                    >
                        {child}
                    </div>
                ))
                : children}
        </div>
    );
}

/**
 * Character-by-character reveal for text
 */

/**
 * Character-by-character reveal that recursively inspects children,
 * preserves custom child tags/styles, and fixes bg-clip-text on 3D transforms.
 */
export function CharacterReveal({ children, delay = 0, stagger = 30, threshold = 0.5, className = "", onComplete, }) {
    const [ref, isInView] = useInView({ threshold });

    let globalCharIndex = 0;

    const processNode = (node, parentGradient = "") => {
        if (node === null || node === undefined || typeof node === "boolean") {
            return null;
        }

        // 1. Process Raw Text & Numbers
        if (typeof node === "string" || typeof node === "number") {
            const str = String(node);
            if (!str.trim()) return str;

            const words = str.split(" ");

            return words.map((word, wordIndex) => {
                if (word === "") return " ";

                const chars = word.split("");

                const animatedChars = chars.map((char, charIndex) => {
                    const charDelay = delay + globalCharIndex * stagger;
                    globalCharIndex++;

                    return (
                        <span
                            key={`char-${globalCharIndex}-${charIndex}`}
                            className={`inline-block ${isInView ? "animate-charReveal" : "opacity-0"
                                } ${parentGradient
                                    ? `${parentGradient} bg-clip-text text-transparent`
                                    : ""
                                }`}
                            style={{
                                animationDelay: isInView ? `${charDelay}ms` : "0ms",
                                transformOrigin: "center center",
                                willChange: "transform, opacity",
                            }}
                        >
                            {char}
                        </span>
                    );
                });

                return (
                    <span
                        key={`word-${wordIndex}-${globalCharIndex}`}
                        className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
                    >
                        {animatedChars}
                    </span>
                );
            });
        }

        // 2. Process React Elements (<h1>, <div>, <span>, etc.)
        if (isValidElement(node)) {
            const nodeClassName = node.props.className || "";
            const classes = nodeClassName.split(/\s+/);

            // Extract gradient classes (e.g. bg-gradient-to-r from-fire to-ember)
            const gradientClasses = classes
                .filter(
                    (c) =>
                        (c.startsWith("bg-") && c !== "bg-clip-text") ||
                        c.startsWith("from-") ||
                        c.startsWith("to-") ||
                        c.startsWith("via-")
                )
                .join(" ");

            const activeGradient = gradientClasses || parentGradient;

            // Strip gradient & clip classes off the parent wrapper so it doesn't draw a solid box
            const cleanedClassName = classes
                .filter(
                    (c) =>
                        !c.startsWith("from-") &&
                        !c.startsWith("to-") &&
                        !c.startsWith("via-") &&
                        c !== "bg-clip-text" &&
                        c !== "text-transparent" &&
                        !(c.startsWith("bg-") && c.includes("gradient"))
                )
                .join(" ");

            const processedChildren = Children.map(node.props.children, (child) =>
                processNode(child, activeGradient)
            );

            return cloneElement(node, {
                ...node.props,
                className: cleanedClassName,
                children: processedChildren,
            });
        }

        // 3. Process Arrays of Nodes
        if (Array.isArray(node)) {
            return Children.map(node, (child) => processNode(child, parentGradient));
        }

        return node;
    };
    useEffect(() => {
        if (isInView && onComplete) {
            const totalTime = delay + globalCharIndex * stagger + 600;
            const timer = setTimeout(() => onComplete(), totalTime);
            return () => clearTimeout(timer);
        }
    }, [isInView, delay, stagger, globalCharIndex, onComplete]);

    return (
        <div
            ref={ref}
            className={`block transition-opacity duration-300 ${isInView ? "opacity-100" : "opacity-0 pointer-events-none"
                } ${className}`}
            style={{ perspective: "1000px" }}
        >
            {processNode(children)}
        </div>
    );
}

/**
 * Word-by-word reveal for text
 */
export function WordReveal({ text, delay = 0, className = "" }) {
    const [ref, isInView] = useInView({ threshold: 0.5 });
    const words = text.split(" ");

    return (
        <div ref={ref} className={className}>
            {words.map((word, index) => (
                <span
                    key={index}
                    className={isInView ? "animate-wordReveal" : "opacity-0"}
                    style={{
                        animationDelay: isInView ? `${delay + index * 60}ms` : "0ms",
                        display: "inline-block",
                        marginRight: "0.25em",
                    }}
                >
                    {word}
                </span>
            ))}
        </div>
    );
}
