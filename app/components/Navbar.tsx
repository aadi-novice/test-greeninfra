"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Define the dynamic text color class
  const textColor = scrolled ? "text-gray-800" : "text-white";

  return (
    <nav
      className={`${
        scrolled ? "glass-nav bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      } fixed w-full z-50 transition-all duration-300 py-4`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-2 group z-50">
          <Image
            src="/companylogo.png"
            alt="Green Infra Projects"
            width={150}
            height={50}
            className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#about"
            className={`nav-link ${textColor} hover:text-nature-400 transition font-bold text-sm tracking-wide uppercase`}
          >
            About
          </a>

          <div className="relative group">
            <button
              className={`nav-dropdown-btn ${textColor} hover:text-nature-400 transition font-bold text-sm tracking-wide uppercase flex items-center gap-1 focus:outline-none`}
            >
              Solutions <i className="fa-solid fa-chevron-down text-xs opacity-70" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="dropdown-menu absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden border-t-4 border-nature-500 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="py-2">
                {[
                  ["Sewage Treatment Plants", "fa-recycle"],
                  ["Effluent Treatment Plants", "fa-industry"],
                  ["Water Treatment Plants", "fa-faucet-drip"],
                  ["ZLD & MEE Systems", "fa-droplet-slash"],
                  ["Leachate Treatment", "fa-dumpster"],
                  ["Oil Water Separator", "fa-oil-can"],
                  ["CGWA Telemetry", "fa-satellite-dish"],
                ].map(([label, icon]) => (
                  <a
                    key={label}
                    href="#solutions"
                    className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-nature-50 hover:text-nature-600 font-semibold transition"
                  >
                    <i className={`fa-solid ${icon} text-water-500 w-4`} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button
              className={`nav-dropdown-btn ${textColor} hover:text-nature-400 transition font-bold text-sm tracking-wide uppercase flex items-center gap-1 focus:outline-none`}
            >
              Manufacturing <i className="fa-solid fa-chevron-down text-xs opacity-70" />
            </button>

            {/* Manufacturing Dropdown */}
            <div className="dropdown-menu absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border-t-4 border-water-500 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="py-2 max-h-[70vh] overflow-y-auto">
                {[
                  ["Sewage Treatment Package Plant", "fa-recycle"],
                  ["Effluent Treatment Package Plant", "fa-flask"],
                  ["Water Treatment Plant", "fa-faucet-drip"],
                  ["Leachate Treatment Plant", "fa-droplet"],
                  ["Pressure Sand Filter MSEP", "fa-filter"],
                  ["Activated Carbon Filter MSEP", "fa-filter-circle-xmark"],
                  ["Side Stream Filter MSEP", "fa-arrows-spin"],
                  ["Agitators", "fa-gears"],
                  ["Flash Mixer", "fa-blender"],
                  ["Surface Aerators", "fa-wind"],
                  ["Flocculator Mechanism", "fa-circle-nodes"],
                  ["FRP Tanks & Lining Works", "fa-box"],
                  ["Sludge Drying Bed MSEP", "fa-layer-group"],
                ].map(([label, icon]) => (
                  <a
                    key={label}
                    href="#solutions"
                    className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-water-50 hover:text-water-600 font-semibold transition"
                  >
                    <i className={`fa-solid ${icon} text-water-500 w-4`} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#clients"
            className={`nav-link ${textColor} hover:text-nature-400 transition font-bold text-sm tracking-wide uppercase`}
          >
            Clients
          </a>

          <a
            href="#projects"
            className={`nav-link ${textColor} hover:text-nature-400 transition font-bold text-sm tracking-wide uppercase`}
          >
            Projects
          </a>

          <a
            href="#faq"
            className={`nav-link ${textColor} hover:text-nature-400 transition font-bold text-sm tracking-wide uppercase`}
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="nav-btn px-7 py-2.5 bg-gradient-to-r from-nature-600 to-nature-500 hover:from-nature-500 hover:to-nature-400 text-white rounded-full transition shadow-lg shadow-nature-500/30 font-bold text-sm tracking-wide transform hover:-translate-y-0.5"
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${open ? "text-white" : textColor} text-2xl hover:text-nature-400 transition z-50`}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-0 left-0 w-full min-h-screen bg-water-900 z-40 pt-24 pb-10 px-6 flex-col space-y-6 shadow-2xl overflow-y-auto md:hidden`}
      >
        <a
          href="#about"
          onClick={() => setOpen(false)}
          className="text-white text-xl font-bold hover:text-nature-400 border-b border-white/10 pb-4 block"
        >
          About Us
        </a>
        <div className="space-y-4">
          <div className="text-nature-400 text-sm uppercase font-bold tracking-widest">
            Our Solutions
          </div>
          {[
            "Sewage Treatment Plants (STP)",
            "Effluent Treatment Plants (ETP)",
            "Water Treatment Plants (WTP)",
            "ZLD & MEE Systems",
            "Leachate Treatment Plant",
            "Oil Water Separator",
            "CGWA Telemetry",
          ].map((item) => (
            <a
              key={item}
              href="#solutions"
              onClick={() => setOpen(false)}
              className="block text-white/90 hover:text-white pl-4 text-lg"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="space-y-4">
          <div className="text-water-400 text-sm uppercase font-bold tracking-widest">
            In-House Manufacturing
          </div>
          {[
            "Sewage Treatment Package Plant",
            "Effluent Treatment Package Plant",
            "Water Treatment Plant",
            "Leachate Treatment Plant",
            "Pressure Sand Filter MSEP",
            "Activated Carbon Filter MSEP",
            "Side Stream Filter MSEP",
            "Agitators & Flash Mixer",
            "Surface Aerators",
            "Flocculator Mechanism",
            "FRP Tanks & Lining Works",
            "Sludge Drying Bed MSEP",
          ].map((item) => (
            <a
              key={item}
              href="#solutions"
              onClick={() => setOpen(false)}
              className="block text-white/90 hover:text-white pl-4 text-lg"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#clients"
          onClick={() => setOpen(false)}
          className="text-white text-xl font-bold hover:text-nature-400 border-t border-b border-white/10 py-4 block"
        >
          Our Clients
        </a>
        <a
          href="#projects"
          onClick={() => setOpen(false)}
          className="text-white text-xl font-bold hover:text-nature-400 border-b border-white/10 pb-4 block"
        >
          Projects
        </a>
        <a
          href="#faq"
          onClick={() => setOpen(false)}
          className="text-white text-xl font-bold hover:text-nature-400 border-b border-white/10 pb-4 block"
        >
          FAQ
        </a>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="w-full block text-center px-8 py-4 bg-nature-600 text-white rounded-full font-bold shadow-lg shadow-nature-600/40"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}