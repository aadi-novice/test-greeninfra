"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What types of Sewage Treatment Plants (STP) do you offer?",
    a: "We offer STPs using Conventional Aeration (Surface Aerator/Diffusers), MBBR, SAFF, SBR, and MBR technologies. We also provide Packaged STPs in capacities up to 300 KLD — ideal for residential complexes, townships, and commercial buildings.",
  },
  {
    q: "Do you handle complete turnkey projects?",
    a: "Yes. Green Infra Projects provides end-to-end turnkey solutions — from concept design and detailed engineering to fabrication, supply, erection, piping, electrical, instrumentation, testing, and commissioning.",
  },
  {
    q: "Can you revamp or upgrade an existing treatment plant?",
    a: "Absolutely. We specialize in revamping, debottlenecking, and modification of existing STPs/ETPs. We also integrate PLC/SCADA automation for full plant upgradation.",
  },
  {
    q: "What is Zero Liquid Discharge (ZLD) and do you offer it?",
    a: "ZLD is a treatment approach where all wastewater is treated and recycled, leaving zero liquid waste. We offer complete ZLD systems including Recycling RO and Multi Effect Evaporator (MEE) systems.",
  },
  {
    q: "What is CGWA Telemetry and is it mandatory?",
    a: "CGWA (Central Ground Water Authority) mandates IoT-enabled telemetry systems for industries extracting groundwater exceeding 10 cubic meters per day. We install digital flow meters (electromagnetic), piezometers, and IoT telemetry compliant with CGWA NOC guidelines. Installation must be done within 90 days of NOC receipt.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve pharmaceutical, chemical, textile, food & beverage, real estate, municipal bodies, industrial parks, and commercial establishments — across Gujarat and other states in India.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-water-100/30 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#0f4fa3] font-bold tracking-widest text-xs uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-extrabold text-gray-900 mb-6">
            Frequently Asked <span className="text-water-600">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Find answers to common questions about our water treatment solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  isOpen ? "border-water-300 shadow-lg shadow-water-500/10" : "border-gray-100 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className={`font-bold text-lg transition ${isOpen ? "text-water-600" : "text-gray-800"}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-water-600 text-white rotate-180" : "bg-gray-100 text-gray-500"
                  }`}>
                    <i className="fa-solid fa-chevron-down text-sm" />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
