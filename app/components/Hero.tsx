import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-water-950/80 via-water-900/60 to-water-900/90 z-10" />
        <Image
          src="/hero3.png"
          alt="Industrial Water Treatment Plant"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="hero-content">
          <div className="inline-block px-4 py-1 rounded-full border border-white/40 bg-white/0 backdrop-blur-none">
            <span className="text-nature-400 font-bold tracking-widest uppercase text-xs md:text-sm">
              <i className="fa-solid fa-location-dot mr-2" />Vadodara • Gujarat • India
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-[var(--font-montserrat)] font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Your Partner in Sustainable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-water-300 via-nature-400 to-nature-500">Water Management</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Delivering world-class, turnkey solutions in water and wastewater treatment with precision and reliability.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#solutions" className="px-8 py-4 bg-nature-600 hover:bg-nature-500 text-white rounded-full font-bold transition transform hover:scale-105 shadow-lg shadow-nature-500/40 flex items-center justify-center gap-2">
              Explore Solutions <i className="fa-solid fa-arrow-right" />
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-water-900 rounded-full font-bold transition backdrop-blur-sm">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-20">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
        <style>{`
          .waves { width: 100%; height: 150px; margin-bottom: -7px; min-height: 120px; max-height: 180px; }
          .parallax > use { animation: move-forever 15s cubic-bezier(.55,.5,.45,.5) infinite; }
          .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 5s; }
          .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 8s; }
          .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 11s; }
          .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 14s; }
          @keyframes move-forever { 0% { transform: translate3d(-90px,0,0);} 100% { transform: translate3d(85px,0,0);} }
        `}</style>
      </div>
    </section>
  );
}
