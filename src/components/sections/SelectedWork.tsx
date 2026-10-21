"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";
import { GithubIcon } from "@/components/ui/SocialIcons";
import {
  ExternalLink,
  TrendingUp,
  CheckCircle,
  Terminal,
  Activity,
  Sparkles,
  ArrowRight,
  Database,
  Truck,
  Wrench,
  Bot,
  Building2,
} from "lucide-react";

const projectIcons = {
  "rameshwar-mobility": Truck,
  "cmms-platform": Wrench,
  "aethel-realty": Building2,
  "querylens-ai": Bot,
};

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Engineering Case Studies"
          title="Proven Software Delivering"
          titleHighlight="Real Business ROI"
          subtitle="A selection of full-stack web platforms, internal business portals, developer tools, and AI assistants shipped for production environments."
        />

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const ProjectIcon =
              projectIcons[project.id as keyof typeof projectIcons] || Database;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <TiltCard className="rounded-3xl glass-card border border-white/[0.08] p-6 sm:p-8 lg:p-10 hover:border-violet-500/40 transition-colors shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left details */}
                    <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? "" : "lg:order-2"}`}>
                      <div>
                        {/* Meta Category & Accent Icon */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                            <ProjectIcon className="w-4 h-4" />
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-mono text-violet-300 bg-violet-500/10 border border-violet-500/20">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono text-gray-500">
                            Case Study 0{index + 1}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-violet-400/90 mb-5">
                          {project.tagline}
                        </p>

                        {/* Problem & Solution Narrative Bento */}
                        <div className="space-y-3 mb-6 bg-black/40 rounded-xl p-4 border border-white/[0.04]">
                          <div>
                            <span className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold">
                              The Problem:
                            </span>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                              {project.problem}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-white/[0.04]">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                              The Solution:
                            </span>
                            <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Metrics Impact Highlights */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {project.metrics.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center sm:text-left"
                            >
                              <div className="text-lg sm:text-xl font-bold font-mono text-white flex items-center justify-center sm:justify-start gap-1">
                                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                                <span>{metric.value}</span>
                              </div>
                              <div className="text-[11px] text-gray-400 mt-0.5 truncate">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-600/30 transition-all"
                          >
                            <span>Live System Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-gray-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </a>
                        )}

                        <Link
                          href={`#contact?project=${project.id}`}
                          className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-violet-400 transition-colors"
                        >
                          <span>Build something similar</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Interactive Mockup Visual Container */}
                    <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                      <div className="relative rounded-2xl bg-gradient-to-br from-[#13131a] to-[#0c0c10] border border-white/[0.08] p-5 shadow-2xl overflow-hidden group/mock">
                        {/* Browser/Window mockup header */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          </div>
                          <div className="text-[11px] font-mono text-gray-400 bg-black/40 px-3 py-0.5 rounded-md border border-white/[0.05] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>
                              {project.liveUrl
                                ? project.liveUrl.replace("https://", "")
                                : `github.com/sandy802/${project.id}`}
                            </span>
                          </div>
                          <div className="text-[11px] font-mono text-violet-400">PROD</div>
                        </div>

                        {/* Interactive UI Mock contents specialized per project */}
                        {project.id === "rameshwar-mobility" && (
                          <div className="space-y-3 font-sans text-xs">
                            <div className="flex items-center justify-between p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20">
                              <div className="flex items-center gap-2">
                                <Truck className="w-4 h-4 text-violet-400" />
                                <span className="font-semibold text-white">Active Fleet Dispatch</span>
                              </div>
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                                12 On Trip
                              </span>
                            </div>
                            <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] space-y-2 font-mono text-[11px]">
                              <div className="flex justify-between text-gray-400 border-b border-white/[0.04] pb-1.5">
                                <span>Vehicle / Driver</span>
                                <span>Route</span>
                                <span>Status</span>
                              </div>
                              <div className="flex justify-between items-center text-gray-200">
                                <span>MH-02-CD-4029 (Rajesh)</span>
                                <span className="text-gray-400">Malad ➔ Airport</span>
                                <span className="text-emerald-400">Dispatched</span>
                              </div>
                              <div className="flex justify-between items-center text-gray-200">
                                <span>MH-04-AX-8910 (Suresh)</span>
                                <span className="text-gray-400">BKC ➔ Thane</span>
                                <span className="text-blue-400">En Route</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {project.id === "cmms-platform" && (
                          <div className="space-y-3 font-sans text-xs">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
                                <div className="text-[10px] text-gray-400 uppercase font-mono">
                                  MTBF (Uptime)
                                </div>
                                <div className="text-base font-bold font-mono text-emerald-400 mt-1">
                                  99.4%
                                </div>
                              </div>
                              <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
                                <div className="text-[10px] text-gray-400 uppercase font-mono">
                                  Open Tickets
                                </div>
                                <div className="text-base font-bold font-mono text-violet-400 mt-1">
                                  3 Urgent
                                </div>
                              </div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[11px] space-y-1.5">
                              <div className="flex items-center justify-between text-gray-300">
                                <span className="font-semibold">Hydraulic Press #4</span>
                                <span className="text-amber-400 font-mono">Due in 2 days</span>
                              </div>
                              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-violet-500 h-full w-3/4 rounded-full" />
                              </div>
                            </div>
                          </div>
                        )}

                        {project.id === "aethel-realty" && (
                          <div className="space-y-3 font-sans text-xs">
                            <div className="p-3 rounded-xl bg-gradient-to-r from-amber-950/30 to-black border border-amber-500/20 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-amber-400" />
                                <span className="font-semibold text-white">The Sky Villa Luxury Residence</span>
                              </div>
                              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">
                                GSAP 60 FPS
                              </span>
                            </div>
                            <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] space-y-2">
                              <div className="flex justify-between items-center text-gray-300">
                                <span className="font-semibold text-white">Ultra-Luxury Penthouse • 4,850 sq.ft</span>
                                <span className="text-emerald-400 font-mono font-bold">₹18.5 Cr</span>
                              </div>
                              <div className="flex items-center gap-2 text-[11px] text-gray-400">
                                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-amber-300/90 font-mono">
                                  ScrollTrigger Active
                                </span>
                                <span>• Fluid Parallax Motion</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {project.id === "querylens-ai" && (
                          <div className="space-y-2.5 font-sans text-xs">
                            <div className="p-2.5 rounded-xl bg-black/50 border border-white/[0.06] font-mono text-[11px]">
                              <span className="text-gray-500">Input: </span>
                              <span className="text-white">
                                &quot;Show top 5 revenue clients in Q3 with &gt; 10 orders&quot;
                              </span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-violet-950/20 border border-violet-500/20 font-mono text-[11px] text-violet-300">
                              <div className="text-emerald-400 text-[10px] uppercase font-bold flex items-center justify-between">
                                <span>Compiled SQL (Groq LLaMA-3)</span>
                                <span>610ms</span>
                              </div>
                              <div className="text-gray-300 mt-1 overflow-x-auto text-[10px]">
                                SELECT c.name, SUM(o.total) FROM clients c JOIN orders o...
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Ambient Card Glow */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
