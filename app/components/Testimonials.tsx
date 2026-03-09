"use client";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Plant Manager, Pharmaceutical Unit",
    text: "Green Infra Projects delivered our 200 KLD ETP on time with excellent quality. Their PLC/SCADA automation has reduced our operational costs significantly. Highly recommended for turnkey projects.",
    rating: 5,
  },
  {
    name: "Amit Shah",
    role: "Director, Real Estate Group",
    text: "We engaged them for our township's STP using MBBR technology. The treated water quality is consistently within GPCB norms. Their after-sales support has been outstanding.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Operations Head, Textile Mill",
    text: "Their ZLD system with RO and MEE has been a game-changer for us. Zero liquid discharge compliance achieved seamlessly. The team's technical expertise is top-notch.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-water-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-nature-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-water-400/5 rounded-full blur-[60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-nature-400 font-bold tracking-widest text-xs uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-extrabold text-white mb-6">
            What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-water-300 to-nature-400">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-white/5 text-6xl font-serif leading-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-water-600 to-nature-500 flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
