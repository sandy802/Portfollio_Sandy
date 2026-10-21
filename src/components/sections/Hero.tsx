"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowRight,
  Code2,
  Terminal,
  Sparkles,
  CheckCircle2,
  Database,
  Layers,
  Cpu,
  Download,
} from "lucide-react";

export default function Hero() {
  const headlineWords = [
    "I",
    "build",
    "fast,",
    "reliable",
    "web",
    "products",
    "for",
    "growing",
    "businesses.",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Prop & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for freelance work • Mumbai, IN</span>
            </motion.div>

            {/* Word-by-Word Staggered Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block mr-3 ${
                    word === "fast," || word === "reliable"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300"
                      : word === "products"
                      ? "text-white underline decoration-violet-500/50 underline-offset-8"
                      : "text-gray-100"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheading / Value Proposition narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-8"
            >
              Hi, I’m <strong className="text-gray-200 font-semibold">{siteConfig.name}</strong>.
              I turn complex operational challenges into sleek, high-performing websites,
              custom web apps, and automated admin systems that save time and drive revenue.
            </motion.p>

            {/* Conversion CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#work"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-violet-500/30 transition-all duration-200 backdrop-blur-md"
              >
                <span>Explore Work</span>
                <span className="text-xs font-mono text-gray-500 group-hover:text-violet-400">
                  (4 Case Studies)
                </span>
              </Link>

              <a
                href={siteConfig.resumeUrl}
                download="Sandesh_Ghule_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-gray-300 hover:text-white bg-white/[0.04] hover:bg-violet-600/10 border border-white/[0.08] hover:border-violet-500/40 transition-all duration-200 backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
                <span>Resume / CV</span>
              </a>
            </motion.div>

            {/* Trust Proof Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-10 mt-8 border-t border-white/[0.06] w-full max-w-lg"
            >
              <div>
                <div className="text-2xl font-bold font-mono text-white">100%</div>
                <div className="text-xs text-gray-400 mt-0.5">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">4+</div>
                <div className="text-xs text-gray-400 mt-0.5">Core Systems Shipped</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">&lt; 24h</div>
                <div className="text-xs text-gray-400 mt-0.5">Direct Response</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Interactive Code & Architecture Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl glass-panel p-5 shadow-2xl shadow-violet-950/40 border border-white/[0.08] overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-xs font-mono text-gray-400">
                    sandesh-ghule-stack.config.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded">
                  <Sparkles className="w-3 h-3" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs leading-relaxed space-y-2 text-gray-300">
                <p className="text-gray-500">// Full-Stack Architecture Blueprint</p>
                <p>
                  <span className="text-purple-400">export const</span>{" "}
                  <span className="text-blue-400">developerProfile</span> = {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">engineer:</span>{" "}
                  <span className="text-emerald-400">&apos;Sandesh Ghule&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">location:</span>{" "}
                  <span className="text-emerald-400">&apos;Mumbai, India&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">education:</span>{" "}
                  <span className="text-emerald-400">&apos;MCA (Univ. of Mumbai)&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">coreStack:</span> [
                </p>
                <div className="pl-8 flex flex-wrap gap-1.5 py-1">
                  {["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Tailwind"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-violet-300 text-[11px]"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-gray-400">activeVenture:</span>{" "}
                  <span className="text-amber-300">&apos;Rameshwar Tours Tech Lead&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">acceptingClients:</span>{" "}
                  <span className="text-emerald-400">true</span>,
                </p>
                <p>{"}"};</p>
              </div>

              {/* Mini Interactive Bento Cards inside Code preview */}
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-white/[0.06]">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 text-violet-400 flex items-center justify-center">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-200">Robust SQL</div>
                    <div className="text-[10px] text-gray-500">PostgreSQL / MySQL</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-200">Fast APIs</div>
                    <div className="text-[10px] text-gray-500">Node / Python / REST</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
