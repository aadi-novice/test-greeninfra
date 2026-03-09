import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

function getClientLogos(): string[] {
  const dir = path.join(process.cwd(), "public", "clients");
  if (!fs.existsSync(dir)) return [];
  
  const allowed = new Set([".png", ".jpg", ".jpeg", ".svg", ".webp"]);
  
  return fs
    .readdirSync(dir)
    .filter((f) => allowed.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));
}

export default function Clients() {
  const files = getClientLogos();
  
  // Triple loop for seamless scrolling
  const marquee = [...files, ...files, ...files];

  if (files.length === 0) return null;

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-[#0f4fa3] font-bold tracking-widest text-xs uppercase mb-3 block">
          Our Partners
        </span>
        <h2 className="text-3xl md:text-4xl font-[var(--font-montserrat)] font-bold text-gray-900 mb-6">
          Trusted by Industry Leaders
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-[#0f4fa3] mx-auto rounded-full" />
      </div>

      <div className="relative w-full max-w-[98vw] mx-auto">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Marquee Track */}
        <div className="w-full overflow-hidden">
          {/* FIX APPLIED HERE: Added 'w-max' 
             This forces the div to take the full width of the logos, 
             so the animation percentage is calculated correctly.
          */}
          <div className="flex w-max min-w-full items-center gap-12 md:gap-20 animate-marquee whitespace-nowrap group hover:[animation-play-state:paused] py-4 px-10">
            {marquee.map((name, i) => (
              <div 
                key={`${name}-${i}`} 
                className="shrink-0 relative flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <div className="h-16 md:h-24 w-auto relative aspect-[3/1]">
                  <Image
                    src={`/clients/${name}`}
                    alt={name.replace(/[-_]/g, " ").replace(/\.[a-zA-Z0-9]+$/, "")}
                    height={100} 
                    width={200}
                    className="h-full w-auto object-contain transition-all duration-500  hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          /* 40s is the sweet spot for a smooth, readable speed */
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}