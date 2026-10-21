"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Client Endorsements"
          title="What Founders & Operations Leaders"
          titleHighlight="Say About Working With Me"
          subtitle="Real feedback from transport operators, startup founders, and engineering managers who partnered with me to build mission-critical tools."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="rounded-3xl p-7 glass-card border border-white/[0.08] hover:border-violet-500/30 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-mono mb-5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{item.highlight}</span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <div className="text-xs text-gray-400">
                    {item.role}, <span className="text-gray-300">{item.company}</span>
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 mt-0.5">
                    {item.location}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-violet-600/15 border border-violet-500/25 flex items-center justify-center text-violet-400">
                  <Quote className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
