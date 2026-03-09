"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/aboutus/1.jpeg", alt: "Plant" },
  { src: "/aboutus/2.jpeg", alt: "Water Treatment Plant" },
  { src: "/aboutus/3.jpeg", alt: "Industrial Valves" },
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="about-img relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-nature-100 rounded-full -z-10 transition-transform group-hover:scale-125" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-water-100 rounded-full -z-10 transition-transform group-hover:scale-125" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[550px]">
              {slides.map((s, i) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  fill
                  className={`object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            </div>
            <div className="absolute bottom-10 -left-5 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border-l-4 border-nature-500 z-20">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-nature-600">2022</div>
                <div className="text-sm text-gray-600 font-semibold leading-tight">Established &amp; <br />Growing Strong</div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-nature-500 rounded-full" />
              <span className="text-nature-600 font-bold uppercase tracking-wider text-sm">Who We Are</span>
            </div>
            <h2 className="text-4xl font-[var(--font-montserrat)] font-bold text-gray-900 mb-6 leading-tight">
              Techno-Economical Solutions in <br /> <span className="text-water-600">Water Engineering</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Established in <strong>2022</strong>, GREEN INFRA PROJECTS caters to the global market with techno-economical solutions through innovative ideas and indigenous technologies in the field of wastewater pollution control and solid waste management.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With in-house Design, Execution, Erection &amp; Commissioning departments, we undertake every project from <strong>Concept to Commissioning</strong> — delivering robust, reliable, and environmentally safe water treatment solutions from our headquarters in Vadodara, Gujarat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <i className="fa-solid fa-circle-check text-nature-500 text-xl" />
                <span className="font-semibold text-gray-700">Turnkey Projects</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <i className="fa-solid fa-certificate text-nature-500 text-xl" />
                <span className="font-semibold text-gray-700">GPCB Licensing</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <i className="fa-solid fa-industry text-nature-500 text-xl" />
                <span className="font-semibold text-gray-700">In-House Manufacturing</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <i className="fa-solid fa-satellite-dish text-nature-500 text-xl" />
                <span className="font-semibold text-gray-700">CGWA Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
