"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  LayoutDashboard,
  Globe,
  ShieldCheck,
  Server,
  CloudLightning,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const iconMap = {
  LayoutDashboard: LayoutDashboard,
  Globe: Globe,
  ShieldCheck: ShieldCheck,
  Server: Server,
  CloudLightning: CloudLightning,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineered For Business Impact"
          title="Full-Stack Capabilities Built for"
          titleHighlight="Speed & Scalability"
          subtitle="Whether you need a full enterprise application from scratch, a lightning-fast business website, or automated operational tools, I deliver production-ready software."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || LayoutDashboard;
            const isFeatured = index === 0 || index === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between glass-card ${
                  isFeatured ? "md:col-span-1 lg:col-span-1.5" : "col-span-1"
                }`}
              >
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent group-hover:via-violet-400 transition-all duration-500" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-violet-600/15 border border-violet-500/25 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:bg-violet-600/25 transition-all duration-300 shadow-lg shadow-violet-900/20">
                      <Icon className="w-6 h-6" />
                    </div>

                    {service.badge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                        <Sparkles className="w-3 h-3" />
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <Link
                    href={`#contact?service=${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 group-hover:text-violet-400 transition-colors"
                  >
                    <span>Request consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="font-mono text-[11px] text-gray-600">0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Conversion Banner inside Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-violet-950/30 via-black to-indigo-950/30 border border-violet-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <h4 className="text-base font-semibold text-white">
              Have a custom requirement or existing system to upgrade?
            </h4>
            <p className="text-xs text-gray-400 mt-1">
              I also handle legacy system migrations, API integrations, and code reviews.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/25 transition-all"
          >
            Let&apos;s Discuss Your Stack
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
