export default function Vision() {
  return (
    <section className="py-24 bg-gradient-to-br from-water-950 via-water-900 to-water-950 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-nature-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-water-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-nature-400 font-bold tracking-widest text-xs uppercase mb-3 block">
            Our Guiding Principles
          </span>
          <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-extrabold text-white mb-4">
            Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-water-300 to-nature-400">Mission</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-nature-600/20 flex items-center justify-center mb-6 group-hover:bg-nature-600 transition-all duration-300">
              <i className="fa-solid fa-eye text-2xl text-nature-400 group-hover:text-white transition" />
            </div>
            <h3 className="text-2xl font-[var(--font-montserrat)] font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Emerging as the most potent and reliable company of integrated water &amp; wastewater solutions. Our vision of{" "}
              <span className="text-nature-400 font-semibold">&ldquo;creating a vivid, optimistic future, together&rdquo;</span>{" "}
              is a message to our employees, clients &amp; all industries that we are more than a premise — we are a collection of purpose-driven projects and partnerships.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-water-600/20 flex items-center justify-center mb-6 group-hover:bg-water-600 transition-all duration-300">
              <i className="fa-solid fa-bullseye text-2xl text-water-400 group-hover:text-white transition" />
            </div>
            <h3 className="text-2xl font-[var(--font-montserrat)] font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              To deliver techno-economical solutions through innovative ideas and indigenous technologies in the field of wastewater pollution control and solid waste management — from concept to commissioning — empowering industries and communities with sustainable water practices.
            </p>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-center text-xl font-[var(--font-montserrat)] font-bold text-white mb-8 uppercase tracking-wider">
            In-House Capabilities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "fa-drafting-compass", label: "Design & Engineering" },
              { icon: "fa-gears", label: "Fabrication & Manufacturing" },
              { icon: "fa-helmet-safety", label: "Erection & Execution" },
              { icon: "fa-plug-circle-check", label: "Testing & Commissioning" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-nature-500/30 transition-all duration-300 group"
              >
                <i className={`fa-solid ${item.icon} text-xl text-water-400 group-hover:text-nature-400 transition`} />
                <span className="text-gray-300 text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
