"use client";

export default function WhatsAppCTA() {
  const phone = "918160564096";
  const message = encodeURIComponent(
    "Hello Green Infra Projects! I'm interested in your water treatment solutions. Please share more details."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Ping ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />

      {/* Button */}
      <span className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105">
        <i className="fa-brands fa-whatsapp text-2xl" />
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          Chat With Us
        </span>
      </span>
    </a>
  );
}
