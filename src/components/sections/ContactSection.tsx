"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { siteConfig } from "@/data/siteConfig";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import SectionHeader from "@/components/ui/SectionHeader";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import {
  Send,
  MessageSquare,
  Mail,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";

const projectTypes = [
  "Full-Stack Web App",
  "Business Website",
  "Custom Admin Dashboard",
  "Backend / API Integration",
  "Maintenance & Cloud Support",
  "Other / General Inquiry",
] as const;

const budgetRanges = [
  "< ₹40,000 (~$500)",
  "₹40,000 – ₹1,00,000 (~$500 – $1,200)",
  "₹1,00,000 – ₹2,50,000 (~$1,200 – $3,000)",
  "₹2,50,000+ (~$3,000+)",
  "Flexible / Discussion",
] as const;

const timelines = [
  "Urgent (< 2 weeks)",
  "Standard (2 – 4 weeks)",
  "Flexible (1 – 2 months)",
  "Future Planning",
] as const;

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    budget: "₹40,000 – ₹1,00,000 (~$500 – $1,200)",
    timeline: "Standard (2 – 4 weeks)",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Validate using Zod
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validation.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        // Fire celebration confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#8b5cf6", "#10b981", "#6366f1"],
        });
      } else {
        setServerError(data.message || "Failed to submit. Please try WhatsApp.");
      }
    } catch {
      setServerError("Network error. Please try WhatsApp or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Start A Conversation"
          title="Have an Idea or System to Build?"
          titleHighlight="Let’s Make It Happen"
          subtitle="Tell me about your product requirements, target timeline, and budget. I will review and reply within 24 hours with an actionable roadmap."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Express Channels (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Express WhatsApp Card */}
            <div className="rounded-3xl p-6 sm:p-8 glass-card border border-emerald-500/25 bg-gradient-to-b from-emerald-950/20 via-black to-black relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Need a Fast Response?</h3>
                  <p className="text-xs text-gray-400">Direct WhatsApp Chat</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Skip the back-and-forth emails. Message me directly on WhatsApp to discuss
                your timeline, tech requirements, or urgent fixes.
              </p>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email & Contact Info */}
            <div className="rounded-3xl p-6 sm:p-8 glass-card border border-white/[0.08] space-y-5">
              <div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-2">
                  Direct Email
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2.5 text-xs text-gray-200 font-mono truncate">
                    <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>{siteConfig.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Profiles */}
              <div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-3">
                  Developer Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-violet-500/30 text-xs font-medium text-gray-300 hover:text-white transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-violet-400" />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-violet-500/30 text-xs font-medium text-gray-300 hover:text-white transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Availability Guarantee */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-violet-400 shrink-0" />
                <span>
                  Current local time in Mumbai (IST, UTC+5:30) • Guaranteed response under 24 hours.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Project Inquiry Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 glass-card border border-white/[0.08] relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-gray-200">{formData.name}</strong>. I have
                    logged your project details and will review them carefully. Expect an email
                    at <span className="text-violet-400">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "Full-Stack Web App",
                        budget: "₹40,000 – ₹1,00,000 (~$500 – $1,200)",
                        timeline: "Standard (2 – 4 weeks)",
                        message: "",
                      });
                    }}
                    className="mt-6 px-5 py-2.5 rounded-full text-xs font-semibold text-gray-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {serverError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-2">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-gray-600 outline-none transition-all"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-2">
                        Your Work Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-gray-600 outline-none transition-all"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Selector Pills */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2.5">
                      What are you looking to build?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            formData.projectType === type
                              ? "bg-violet-600 text-white border border-violet-500 shadow-md shadow-violet-600/30"
                              : "bg-white/[0.03] text-gray-400 border border-white/[0.06] hover:text-white hover:bg-white/[0.06]"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2.5">
                      Approximate Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            formData.budget === b
                              ? "bg-violet-600 text-white border border-violet-500 shadow-md shadow-violet-600/30"
                              : "bg-white/[0.03] text-gray-400 border border-white/[0.06] hover:text-white hover:bg-white/[0.06]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Timeline */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2.5">
                      Target Timeline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timelines.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            formData.timeline === t
                              ? "bg-emerald-600 text-white border border-emerald-500 shadow-md shadow-emerald-600/30"
                              : "bg-white/[0.03] text-gray-400 border border-white/[0.06] hover:text-white hover:bg-white/[0.06]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Project Scope Textarea */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2">
                      Project Details & Goals <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe what you want to achieve, any key features, or links to references..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] font-mono text-gray-500">
                    No spam ever. Direct consultation with Sandesh Ghule.
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
