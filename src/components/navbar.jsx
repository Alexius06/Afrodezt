import { Link } from "react-router-dom";
import { useScroll } from "../hooks/useScroll";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" }

];

export default function Navbar() {
  const scrollY = useScroll();

  // Shrink nav on scroll
  const navWidth = Math.max(55, 65 - (scrollY / 10) * 10);
  const navBgOpacity = Math.min(0.95, 0.1 + scrollY / 100);


  return (
    <header
      
      className=" inset-x-0 top-0 z-50 w-full flex items-center flex-col pointer-events-none">
      <nav
        className="flex md:h-15 items-center justify-between px-8 backdrop-blur-md sm:h-10 md:px-16 rounded-b-lg pointer-events-auto border border-white/20 transition-all duration-300"
        style={{
          backgroundColor: `rgba(10, 13, 27, ${navBgOpacity})`,
          width: `${navWidth}%`,
          transformOrigin: "top",

        }}
      >
        <Link
          to="/"
          className="font-display text-xl font-bold text-white w-fit h-fit transition-transform duration-300"
          style={{

            transformOrigin: "left center",
          }}
        >
          <img src="/assets/favicon.png" className="w-12 h-12 my-1" alt="Afrodezt logo" />
        </Link>

        <ul className="hidden items-center hidden md:block md:gap-1 md:flex justify-between w-[40%]">
          {NAV_LINKS.map((link, index) => (
            <li key={link.label} className="relative group">
              <Link
                to={link.href}
                className="font-body text-xs font-small uppercase text-steel transition-colors hover:text-white duration-300"
              >
                {link.label}
              </Link>
              {/* Underline reveal on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-fire w-0 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="font-display rounded-sm bg-gradient-to-r from-fire to-ember px-5 py-2 text-xs font-bold uppercase text-white hover:shadow-lg hover:shadow-fire/50 transition-all duration-300"
        >
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
