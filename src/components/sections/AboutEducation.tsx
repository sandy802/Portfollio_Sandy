"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { educationHistory } from "@/data/education";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle,
  ExternalLink,
  Award,
  Zap,
} from "lucide-react";

export default function AboutEducation() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Background & Education"
          title="Bridging High-Level Code with"
          titleHighlight="Real-World Business"
          subtitle="I combine rigorous computer science theory with hands-on operational experience managing commercial software systems in Mumbai."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative & Rameshwar Story (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Story Card */}
            <div className="rounded-3xl p-8 glass-card border border-white/[0.08] relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                {/* Monogram Avatar Visual */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-700 to-purple-900 flex items-center justify-center text-white font-mono font-bold text-2xl shadow-xl shadow-violet-600/30 border border-violet-400/30 shrink-0">
                  SG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{siteConfig.name}</span>
                    <span className="text-xs font-mono font-normal text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      Freelance Engineer
                    </span>
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" />
                    <span>Malad East, Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                <p>
                  I am a full-stack engineer and MCA candidate at the{" "}
                  <strong className="text-white">University of Mumbai</strong>. Rather than just writing
                  isolated scripts, I specialize in crafting full-lifecycle systems that solve genuine
                  operational bottlenecks for small businesses, transport operators, and ambitious startups.
                </p>
                <p>
                  In addition to independent freelance client work, I lead the technical infrastructure
                  for my family&apos;s transport enterprise,{" "}
                  <strong className="text-white">Rameshwar Tours & Travels</strong> (Malad East, Mumbai).
                  Designing and deploying their commercial fleet dispatch platform taught me what truly
                  matters in production: <span className="text-violet-300">zero downtime, intuitive mobile interfaces for non-technical users, and ironclad data consistency</span>.
                </p>
              </div>

              {/* Core Working Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Pragmatic tech choices (React, Node, Python)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct founder-to-developer comms</span>
                </div>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {siteConfig.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-2xl p-4 glass-card border border-white/[0.06] text-center"
                >
                  <div className="text-2xl font-bold font-mono text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education Timeline (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl p-8 glass-card border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-violet-600/15 border border-violet-500/25 flex items-center justify-center text-violet-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Education & Degrees</h3>
                  <p className="text-xs text-gray-400">Academic Foundations</p>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/[0.06]">
                {educationHistory.map((edu, eIdx) => (
                  <div key={eIdx} className="relative pl-8">
                    {/* Node Dot */}
                    <div className="absolute left-2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-[#08080a] ring-2 ring-violet-500/40" />

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-violet-400 px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                        {edu.period}
                      </span>
                      <span className="text-[11px] font-mono text-gray-500">{edu.location}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white mt-1">{edu.degree}</h4>
                    <div className="text-xs text-gray-400 mb-2">{edu.institution}</div>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3">
                      {edu.description}
                    </p>

                    <div className="space-y-1">
                      {edu.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                          <span className="text-violet-400 mt-0.5">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
