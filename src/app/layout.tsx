import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import InteractiveBackground from "@/components/ui/InteractiveBackground";
import Navbar from "@/components/layout/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandesh Ghule | Freelance Full-Stack Developer & Engineer | Mumbai",
  description:
    "Freelance Full-Stack Developer based in Mumbai, India. Building fast, high-converting web applications, custom admin portals, and scalable APIs using Next.js, React, Node.js, and Python.",
  keywords: [
    "Sandesh Ghule",
    "Freelance Full Stack Developer",
    "Web Developer Mumbai",
    "Next.js Developer India",
    "React Developer Mumbai",
    "Node.js Developer",
    "Full Stack Freelancer",
    "Admin Dashboards",
    "Software Engineer Mumbai",
  ],
  authors: [{ name: "Sandesh Ghule", url: "https://github.com/sandy802" }],
  creator: "Sandesh Ghule",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sandy-portfolio-navy.vercel.app",
    title: "Sandesh Ghule | Freelance Full-Stack Developer & Engineer",
    description:
      "I build fast, reliable web products and custom business systems for growing startups. Based in Mumbai, India.",
    siteName: "Sandesh Ghule Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandesh Ghule | Freelance Full-Stack Developer",
    description: "Building fast, reliable web products for growing businesses. Based in Mumbai, India.",
    creator: "@sandeshghule",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#08080a] text-gray-100 font-sans selection:bg-violet-500/30 selection:text-white antialiased">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <InteractiveBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
