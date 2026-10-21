"use client";

import { motion } from "framer-motion";
import { skillCategories, marqueeSkills } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import { Code, Database, Cpu, Wrench, CheckCircle } from "lucide-react";

const categoryIcons = [Code, Cpu, Database, Wrench];

export default function SkillsMarquee() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          badge="Full-Stack Technical Arsenal"
          title="Battle-Tested Technologies &"
          titleHighlight="Modern Frameworks"
          subtitle="A carefully curated stack focused on type safety, rendering speed, and maintainability across frontend, backend, and databases."
        />
      </div>

      {/* Infinite Animated Marquee Ribbon */}
      <div className="relative w-full overflow-hidden py-4 border-y border-white/[0.06] bg-black/30 backdrop-blur-sm mb-16">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
            <div
              key={`${skill}-${idx}`}
              className="flex items-center gap-2.5 mx-4 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm font-mono text-gray-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-600/10 transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group, groupIdx) => {
            const Icon = categoryIcons[groupIdx % categoryIcons.length];

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="rounded-2xl p-6 glass-card border border-white/[0.08] hover:border-violet-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                    <div className="w-9 h-9 rounded-lg bg-violet-600/15 border border-violet-500/25 flex items-center justify-center text-violet-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-violet-400/40 hover:bg-violet-500/10 transition-all cursor-default"
                      >
                        <span className="text-xs font-mono text-gray-300 group-hover/chip:text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-violet-400 opacity-60 group-hover/chip:opacity-100">
                          {skill.level === "Advanced"
                            ? "adv"
                            : skill.level === "Expert"
                            ? "exp"
                            : "pro"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-gray-500">
                  {group.skills.length} core competencies
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
