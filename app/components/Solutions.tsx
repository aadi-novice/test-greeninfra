"use client";
import Image from "next/image";
import { useRef } from "react";

const cards = [
  {
    title: "Sewage Treatment Plants (STP)",
    icon: "fa-recycle",
    img: "/services/stp.png",
    text: "Design, revamping and packaged STPs with MBBR, SAFF and MBR technologies.",
  },
  {
    title: "Effluent Treatment Plants (ETP)",
    icon: "fa-flask",
    img: "/services/etp.png",
    text: "Turnkey effluent treatment solutions ensuring regulatory compliance and reliability.",
  },
  {
    title: "Water Treatment Plants (WTP)",
    icon: "fa-faucet-drip",
    img: "/services/wtp.png",
    text: "Clarifiers, softeners, UF and RO systems engineered for consistent water quality.",
  },
  {
    title: "Recycling & Zero Liquid Discharge",
    icon: "fa-water",
    img: "/services/zld.png",
    text: "RO + MEE and tertiary polishing systems for reuse, recovery and ZLD applications.",
  },
  {
    title: "CGWA Telemetry & Monitoring",
    icon: "fa-satellite-dish",
    img: "/services/telemetry.png",
    text: "IoT-based telemetry, flow meters and piezometers compliant with CGWA guidelines.",
  },
  {
    title: "Automation & Plant Upgradation",
    icon: "fa-microchip",
    img: "/services/scada.png",
    text: "PLC/SCADA integration, debottlenecking and performance optimization for existing plants.",
  },
];

export default function Solutions() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth, 900) * 0.9;
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  const scrollToCard = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 0;
    el.scrollTo({ left: (cardWidth + 32) * index, behavior: "smooth" });
  };

  return (
    // Changed background to a clean, sophisticated light theme with a subtle radial glow
    <section id="solutions" className="py-20 md:py-28 relative overflow-hidden bg-slate-50">
      
      {/* Subtle Background Pattern (The "Spice") */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Center aligned with dark text for the light background */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-3">
             <span className="text-[#0f4fa3] font-bold tracking-wider text-sm uppercase border-b-2 border-[#0f4fa3] pb-1">
               What We Do
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-extrabold text-slate-900 mb-6">
            Comprehensive <span className="text-water-600">Water Management</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Building a Sustainable Tomorrow, One Drop at a Time. Explore Our Eco‑Conscious Portfolio.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Arrows (Darker for visibility) */}
          <button
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute -left-5 lg:-left-10 top-1/2 -translate-y-1/2 z-30 h-12 w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-xl border border-slate-100 hover:scale-110 hover:text-[#0f4fa3] transition-all duration-300"
          >
            <i className="fa-solid fa-chevron-left text-lg" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute -right-5 lg:-right-10 top-1/2 -translate-y-1/2 z-30 h-12 w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-xl border border-slate-100 hover:scale-110 hover:text-[#0f4fa3] transition-all duration-300"
          >
            <i className="fa-solid fa-chevron-right text-lg" />
          </button>

          {/* Cards Track */}
          <div
            ref={trackRef}
            className="flex gap-8 overflow-x-auto pb-12 pt-4 px-2 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="group relative min-w-[85vw] sm:min-w-[360px] md:min-w-[380px] max-w-[400px] flex-shrink-0 snap-center"
              >
                {/* CARD STRUCTURE CHANGE:
                  Vertical Flexbox: Image on top, Content on bottom.
                  White background, shadow for depth.
                */}
                <div className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 ease-out border border-slate-100 flex flex-col hover:-translate-y-1">
                  
                  {/* Image Section (Top 60% approx) */}
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <Image 
                      src={card.img} 
                      alt={card.title} 
                      fill 
                      sizes="(max-width: 768px) 85vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle Overlay on hover only */}
                    <div className="absolute inset-0 bg-[#0f4fa3]/0 group-hover:bg-[#0f4fa3]/10 transition-colors duration-300" />
                  </div>

                  {/* Icon Badge - Floating between image and text */}
                  <div className="relative -mt-8 mb-2 flex justify-center z-10">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-50 group-hover:scale-110 transition-transform duration-300 text-[#0f4fa3]">
                      <i className={`fa-solid ${card.icon} text-2xl`} />
                    </div>
                  </div>

                  {/* Content Section (Bottom) - Centered Alignment */}
                  <div className="px-8 pb-8 pt-2 flex-grow flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0f4fa3] transition-colors">
                      {card.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {card.text}
                    </p>
                    
                    {/* Spacer to push button to bottom if text is short */}
                    <div className="mt-auto">
                      
                    </div>
                  </div>

                  {/* Bottom Accent Line (matches the WABAG blue theme) */}
                  <div className="h-1 w-full bg-slate-100 group-hover:bg-[#0f4fa3] transition-colors duration-500" />
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 md:hidden">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className="w-2 h-2 rounded-full bg-slate-300 hover:bg-[#0f4fa3] transition-all duration-300"
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}