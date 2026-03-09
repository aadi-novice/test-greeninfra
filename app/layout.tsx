import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Infra Projects | Sustainable Water & Wastewater Solutions",
  description:
    "Green Infra Projects — Turnkey water & wastewater solutions: STP, ETP, WTP, RO, ZLD/MEE, CGWA Telemetry, and GPCB Compliance. Concept to Commissioning since 2022. Vadodara, Gujarat, India.",
  keywords: [
    "sewage treatment plant",
    "effluent treatment plant",
    "water treatment plant",
    "STP",
    "ETP",
    "WTP",
    "ZLD",
    "MEE",
    "CGWA telemetry",
    "GPCB licensing",
    "wastewater treatment",
    "Green Infra Projects",
    "Vadodara",
    "Gujarat",
    "India",
    "MBBR",
    "SBR",
    "MBR",
    "reverse osmosis",
    "turnkey water projects",
  ],
  openGraph: {
    title: "Green Infra Projects | Sustainable Water Management",
    description: "Turnkey STP, ETP, WTP, ZLD & CGWA Telemetry solutions — Concept to Commissioning.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* FontAwesome CDN for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
