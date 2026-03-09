"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: "fa-diagram-project" },
  { value: 500, suffix: "+", label: "KLD Capacity Installed", icon: "fa-droplet" },
  { value: 10, suffix: "+", label: "States Served", icon: "fa-map-location-dot" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: "fa-handshake" },
];

function useCountUp(target: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [trigger, target]);
  return count;
}

function StatCard({ value, suffix, label, icon, inView }: {
  value: number; suffix: string; label: string; icon: string; inView: boolean;
}) {
  const count = useCountUp(value, inView);
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-nature-500 group-hover:scale-110 transition-all duration-300">
        <i className={`fa-solid ${icon} text-2xl text-nature-400 group-hover:text-white transition`} />
      </div>
      <div className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-extrabold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 bg-water-950 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-water-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
