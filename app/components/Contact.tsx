"use client";

import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-water-950 text-white overflow-hidden"
    >
      {/* Water Background Effect */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-nature-900 via-water-900 to-water-950"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-nature-900/50 border border-nature-500/30 text-nature-400 text-xs font-bold tracking-widest uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              Let's Build a <br />{" "}
              <span className="text-nature-500">Sustainable Future</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Reach out for a consultation or quote. We are ready to assist you
              with your wastewater treatment and licensing needs.
            </p>

            <div className="space-y-8">
              {/* Person */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-water-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-nature-400 group-hover:bg-nature-600 group-hover:text-white transition duration-300 shadow-lg shadow-black/20">
                  <i className="fa-solid fa-user-tie text-2xl"></i>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Imran Rathod</h5>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
                    Chief Executive Officer
                  </p>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-water-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-nature-400 group-hover:bg-nature-600 group-hover:text-white transition duration-300 shadow-lg shadow-black/20">
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Location</h5>
                  <p className="text-gray-400 text-sm">
                    314, 3rd Floor, Mangla Trade Hub, <br></br>
                    Vadsar Ring Road, Near Billabong School, <br></br>
                    Vadsar, Vadodara, Gujarat – 390010, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-water-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-nature-400 group-hover:bg-nature-600 group-hover:text-white transition duration-300 shadow-lg shadow-black/20">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Call Us</h5>
                  <a
                    href="tel:+918160564096"
                    className="text-gray-400 hover:text-white transition"
                  >
                    +91 81605 64096
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-water-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-nature-400 group-hover:bg-nature-600 group-hover:text-white transition duration-300 shadow-lg shadow-black/20">
                  <i className="fa-solid fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Email</h5>
                  <a
                    href="mailto:greeninfra22@gmail.com"
                    className="text-gray-400 hover:text-white transition"
                  >
                    greeninfra22@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form className="bg-white p-8 md:p-10 rounded-3xl text-gray-800 shadow-2xl border-t-8 border-nature-500">
              <h3 className="text-2xl font-bold mb-8 text-water-900 flex items-center gap-3">
                Send us a Message
                <span className="text-sm font-normal text-gray-400 bg-gray-100 px-3 py-1 rounded-full hidden sm:inline-block">
                  We typically reply in 24h
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border focus:bg-white focus:border-nature-500 focus:ring-4 focus:ring-nature-500/20 transition outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border focus:bg-white focus:border-nature-500 focus:ring-4 focus:ring-nature-500/20 transition outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Service Interested In
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border focus:bg-white focus:border-nature-500 focus:ring-4 focus:ring-nature-500/20 transition outline-none appearance-none cursor-pointer">
                    <option>Sewage Treatment Plant (STP)</option>
                    <option>Effluent Treatment Plant (ETP)</option>
                    <option>RO Plant</option>
                    <option>GPCB Licensing</option>
                    <option>Rainwater Harvesting</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border focus:bg-white focus:border-nature-500 focus:ring-4 focus:ring-nature-500/20 transition outline-none resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-water-900 hover:bg-nature-600 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Submit Inquiry{" "}
                <i className="fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}