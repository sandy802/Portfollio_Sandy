"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import SectionHeader from "@/components/ui/SectionHeader";
import { CheckCircle2, Clock, Calendar, Rocket, Sparkles } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Structured & Transparent"
          title="A Predictable 4-Step Journey from"
          titleHighlight="Concept to Launch"
          subtitle="No ghosting, no surprise scope-creeps. Every milestone comes with direct communication, git progress demos, and clear deliverables."
        />

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative rounded-2xl p-6 glass-card border border-white/[0.08] hover:border-violet-500/30 transition-all flex flex-col justify-between group"
            >
              {/* Connector line for desktop */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-gradient-to-r from-violet-500/40 to-transparent z-10" />
              )}

              <div>
                {/* Step number badge & Duration */}
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-xl bg-violet-600/15 border border-violet-500/25 flex items-center justify-center font-mono font-bold text-violet-400 text-sm group-hover:scale-105 transition-transform">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-gray-400">
                    <Clock className="w-3 h-3 text-violet-400" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-violet-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-4 border-t border-white/[0.05]">
                  <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.03] text-[11px] font-mono text-violet-400/80">
                Phase {idx + 1} of 4
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
