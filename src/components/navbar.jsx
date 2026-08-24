import { useState } from "react";
import { Link } from "react-router-dom";
import * as Lucide from "lucide-react";
import { useScroll } from "../hooks/useScroll";
import HazardHover from "../components/hazardHover";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function Navbar({
  backTo = null,
  backLabel = "BACK TO ARCHIVES",
  refCode = null,
}) {
  const scrollY = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const isContextual = Boolean(backTo);

  // Dynamic width & background opacity on scroll
  const navWidth = Math.max(55, 65 - (scrollY / 10) * 10);
  const navBgOpacity = Math.min(0.95, 0.1 + scrollY / 100);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full flex items-center flex-col pointer-events-none">
      {/* Top Floating Navbar */}
      <nav
        className="relative z-50 flex h-14 md:h-16 items-center justify-between px-4 md:px-12 rounded-b-lg pointer-events-auto border border-white/20 transition-all duration-300"
        style={{
          backgroundColor: `rgba(10, 13, 27, ${navBgOpacity})`,
          width: `${navWidth}%`,
          transformOrigin: "top",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="font-display text-xl font-bold text-white w-fit h-fit transition-transform duration-300 z-50 flex items-center shrink-0"
        >
          <img
            src="/assets/favicon.png"
            className="w-8 h-8 md:w-10 md:h-10 my-1"
            alt="Afrodezt logo"
          />
        </Link>

        {/* Contextual Mode vs. Standard Mode */}
        {isContextual ? (
          /* Contextual Back Navigation */
          <div className="flex items-center gap-3">
            {refCode && (
              <span className="hidden lg:inline-block bg-fire/20 text-fire border border-fire/30 font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                REF: {refCode}
              </span>
            )}
            <Link
              to={backTo}
              onClick={closeMenu}
              className="font-mono text-xs uppercase text-white hover:text-fire transition-colors duration-300 flex items-center gap-1.5 font-medium tracking-wider"
            >
              <Lucide.ArrowLeft className="w-3.5 h-3.5 text-fire" />
              <span>{backLabel}</span>
            </Link>
          </div>
        ) : (
          /* Standard Navigation */
          <>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center justify-between gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="relative group">
                  <Link
                    to={link.href}
                    className="font-body text-xs uppercase text-steel transition-colors hover:text-white duration-300"
                  >
                    {link.label}
                  </Link>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-fire w-0 group-hover:w-full transition-all duration-300" />
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <HazardHover>
              <Link
                to="/contact"
                className="hidden md:block font-display rounded-sm bg-fire px-5 py-2 text-xs font-bold uppercase text-white transition-all duration-300"
              >
                Get in Touch
              </Link>
            </HazardHover>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 focus:outline-none"
            >
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2 bg-fire" : ""
                  }`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2 bg-fire" : ""
                  }`}
              />
            </button>
          </>
        )}
      </nav>

      {/* Mobile Menu Dropdown Overlay (Standard mode only) */}
      {!isContextual && (
        <div
          className={`fixed top-0 left-0 w-full h-[75vh] bg-ink/95 backdrop-blur-2xl border-b border-white/10 flex flex-col items-center justify-center pointer-events-auto transition-all duration-500 ease-in-out z-40 ${isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col items-center gap-8 mb-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={closeMenu}
                  className="font-display text-2xl font-bold uppercase text-paper hover:text-fire transition-colors duration-300 tracking-wider"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <HazardHover>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="font-display rounded-sm bg-gradient-to-r from-fire to-ember px-8 py-3 text-sm font-bold uppercase text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
          </HazardHover>
        </div>
      )}
    </header>
  );
}