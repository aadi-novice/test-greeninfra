"use client";

import Image from "next/image";
import { useState } from "react";

const categories = ["All", "STP", "ETP", "WTP", "ZLD"];

const projects = [
  {
    title: "100 KLD Packaged STP",
    category: "STP",
    location: "Ahmedabad, Gujarat",
    tech: "MBBR Technology",
    description: "Complete turnkey solution including design, fabrication, supply, erection, testing & commissioning for a residential township.",
    icon: "fa-recycle",
    img: "/services/stp.png",
  },
  {
    title: "250 KLD Effluent Treatment Plant",
    category: "ETP",
    location: "Ankleshwar, Gujarat",
    tech: "Extended Aeration + Tube Settlers",
    description: "Industrial ETP with full PLC/SCADA automation for a chemical manufacturing unit, ensuring GPCB compliance.",
    icon: "fa-flask",
    img: "/services/etp.png",
  },
  {
    title: "500 KLD Water Treatment Plant",
    category: "WTP",
    location: "Vadodara, Gujarat",
    tech: "Clarifier + UF + RO",
    description: "Multi-stage WTP for an industrial park including clarifier system, ultra filtration & reverse osmosis plant.",
    icon: "fa-faucet-drip",
    img: "/services/wtp.png",
  },
  {
    title: "Zero Liquid Discharge System",
    category: "ZLD",
    location: "Bharuch, Gujarat",
    tech: "RO + MEE System",
    description: "Complete ZLD solution with recycling RO and Multi Effect Evaporator for a pharmaceutical facility.",
    icon: "fa-water",
    img: "/services/zld.png",
  },
  {
    title: "300 KLD Sewage Treatment Plant",
    category: "STP",
    location: "Surat, Gujarat",
    tech: "SBR Technology",
    description: "Revamping and modification of existing STP with tertiary polishing for water reuse in gardening and flushing.",
    icon: "fa-recycle",
    img: "/services/stp.png",
  },
  {
    title: "CETP Automation Upgrade",
    category: "ETP",
    location: "Vapi, Gujarat",
    tech: "PLC + SCADA Integration",
    description: "Full automation and plant upgradation of Common ETP including debottlenecking and performance optimization.",
    icon: "fa-microchip",
    img: "/services/scada.png",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-water-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#0f4fa3] font-bold tracking-widest text-xs uppercase mb-3 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-extrabold text-gray-900 mb-6">
            Featured <span className="text-water-600">Projects</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Delivering concept-to-commissioning solutions across Gujarat and beyond.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                active === cat
                  ? "bg-water-600 text-white shadow-lg shadow-water-500/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-water-500/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8">
                {/* Icon + Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-water-100 flex items-center justify-center group-hover:bg-water-600 transition-all duration-300">
                    <i className={`fa-solid ${project.icon} text-xl text-water-600 group-hover:text-white transition`} />
                  </div>
                  <span className="text-xs font-bold text-water-600 bg-water-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-[var(--font-montserrat)] font-bold text-gray-900 mb-3 group-hover:text-water-600 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <i className="fa-solid fa-location-dot text-nature-500 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <i className="fa-solid fa-microchip text-nature-500 w-4" />
                    <span>{project.tech}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
