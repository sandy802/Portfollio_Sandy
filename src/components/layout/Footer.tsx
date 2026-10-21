"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { ArrowUp, Mail, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const [timeInMumbai, setTimeInMumbai] = useState("");
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeInMumbai(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#060608] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="#home"
              className="inline-flex items-center gap-2.5 text-white font-mono font-semibold tracking-tight text-lg"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-violet-500/20">
                SG
              </span>
              <span className="font-sans font-bold text-gray-100">
                Sandesh<span className="text-violet-400">.dev</span>
              </span>
            </Link>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Freelance full-stack engineer based in Mumbai, India. Engineering high-converting
              web apps, custom business portals, and resilient backend systems.
            </p>

            {/* Live Mumbai Clock */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mumbai, IN:</span>
              <span className="text-violet-400 font-semibold">{timeInMumbai || "Loading..."}</span>
              <span className="text-gray-500 text-[10px]">(IST)</span>
            </div>
          </div>

          {/* Navigation Quick Links (3 Cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-4">
              Quick Navigation
            </span>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Express Action (4 Cols) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-4">
                Connect Directly
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 hover:text-white transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 hover:text-white transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/[0.08] hover:border-emerald-500/30 text-gray-300 hover:text-emerald-400 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-gray-400 hover:text-white transition-all"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Tech Stack Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js 15, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
