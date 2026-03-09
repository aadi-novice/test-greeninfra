import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-water-950 text-white pt-32 pb-10 overflow-hidden">
      
      {/* THE FIX FOR CLUTTER: 
         A Wave Separator to create a smooth transition from the Contact section 
      */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px] fill-water-900" // Change fill to match your Contact Section background
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative Background Element (Leaf) - Lowered opacity to reduce clutter */}
      <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.03] pointer-events-none">
        <i className="fa-solid fa-leaf text-[300px] md:text-[500px]"></i>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-xl w-fit backdrop-blur-sm border border-white/5">
              {/* Replace src with your actual logo path */}
              <Image 
                src="/companylogo.png" 
                alt="Green Infra Projects" 
                width={150} 
                height={60}
                className="h-28 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Pioneering sustainable water management solutions for a cleaner, greener future. Specialized in STP, ETP, and Environmental Compliance.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon="fa-linkedin-in" />
              <SocialLink href="#" icon="fa-twitter" />
              <SocialLink href="#" icon="fa-instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide border-b border-nature-500/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#" text="Home" />
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#projects" text="Projects" />
              <FooterLink href="#clients" text="Clients" />
              <FooterLink href="#faq" text="FAQ" />
              <FooterLink href="#contact" text="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide border-b border-nature-500/30 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              <FooterLink href="#" text="Sewage Treatment" />
              <FooterLink href="#" text="Effluent Treatment" />
              <FooterLink href="#" text="RO Plants" />
              <FooterLink href="#" text="ZLD & MEE Systems" />
              <FooterLink href="#" text="CGWA Telemetry" />
              <FooterLink href="#" text="GPCB Licensing" />
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide border-b border-nature-500/30 pb-2 inline-block">Locate Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 text-gray-400 text-sm group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-nature-500 group-hover:bg-nature-500 group-hover:text-white transition">
                   <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="leading-relaxed">314, 3rd Floor, Mangla Trade Hub,<br />Vadodara, Gujarat, India</span>
              </li>
              <li className="flex gap-4 text-gray-400 text-sm group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-nature-500 group-hover:bg-nature-500 group-hover:text-white transition">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span className="mt-1">+91 81605 64096</span>
              </li>
              <li className="flex gap-4 text-gray-400 text-sm group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-nature-500 group-hover:bg-nature-500 group-hover:text-white transition">
                   <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="mt-1">greeninfra22@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 Green Infra Projects. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span className="w-2 h-2 bg-nature-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
            <span className="text-gray-300 text-xs font-medium">Save Water, Save Environment.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Helper Components to keep the main code clean

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-nature-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
      >
        <i className="fa-solid fa-angle-right text-[10px] opacity-50 group-hover:opacity-100 group-hover:text-nature-500"></i> 
        {text}
      </a>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-nature-600 hover:border-nature-600 hover:text-white transition-all duration-300 hover:scale-110"
    >
      <i className={`fa-brands ${icon}`}></i>
    </a>
  );
}