import { Navbar, Hero, About, Vision, Stats, Solutions, Projects, Clients, Testimonials, FAQ, Contact, Footer, WhatsAppCTA } from "./components";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Stats />
      <Solutions />
      <Projects />
      <Clients />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
