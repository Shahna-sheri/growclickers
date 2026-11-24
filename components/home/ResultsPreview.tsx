"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Tag, Calendar, BarChart2, ShieldCheck, Sparkles } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { EASE_PREMIUM } from "@/lib/animations";

export default function ResultsPreview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Take top 4 verified case studies for clean homepage showcase
  const previewStudies = caseStudies.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <section ref={ref} className="bg-[#050505] py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F5B700]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="inline-flex items-center gap-1.5 mb-3"
          >
            <Sparkles size={13} className="text-[#F5B700]" />
            <span className="section-label mb-0">Verified Performance</span>
          </motion.div>

          <h2 className="section-heading">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                className="inline-block"
              >
                Real Campaigns.{" "}
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.22, ease: EASE_PREMIUM }}
                className="inline-block text-[#F5B700]"
              >
                Real Data.
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.35, ease: EASE_PREMIUM }}
            className="section-subheading"
          >
            Every case study reflects authentic campaign work backed by live Ads Manager data. We never fabricate numbers or vanity metrics.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {previewStudies.map((cs) => (
            <motion.div
              key={cs.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: EASE_PREMIUM },
              }}
              className={`card-dark p-6 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                cs.isVerified
                  ? "border-[#F5B700]/50 hover:border-[#F5B700] hover:shadow-[0_12px_36px_rgba(245,183,0,0.18)]"
                  : "hover:border-[#F5B700]/40"
              }`}
            >
              {/* Subtle top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Tags & Verified Badge */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold bg-[#F5B700]/10 text-[#F5B700] px-2 py-0.5 rounded-full border border-[#F5B700]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {cs.isVerified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      <ShieldCheck size={11} className="animate-pulse" /> Verified
                    </span>
                  )}
                </div>

                {/* Client header with logo if available */}
                <div className="flex items-center gap-3 mb-3">
                  {cs.clientLogo && (
                    <div className="w-10 h-10 rounded-lg bg-black border border-[#2D2D2D] overflow-hidden flex items-center justify-center p-1 shrink-0 shadow-md group-hover:border-[#F5B700]/50 transition-colors">
                      <Image
                        src={cs.clientLogo}
                        alt={cs.clientName}
                        width={36}
                        height={36}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-white font-bold text-base leading-snug group-hover:text-[#F5B700] transition-colors">
                      {cs.clientName}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-0.5">
                      <Tag size={11} className="text-[#F5B700]" />
                      <span>{cs.businessCategory}</span>
                    </div>
                  </div>
                </div>

                {/* Objective */}
                <div className="bg-[#111] rounded-lg p-3 mb-4 border border-[#242424] group-hover:border-[#333] transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart2 size={13} className="text-[#F5B700]" />
                    <span className="text-gray-500 text-xs font-medium">Objective</span>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">{cs.campaignObjective}</p>
                </div>

                {/* Key Metrics row */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {cs.keyResults.slice(0, 2).map((kr, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded border text-center transition-all duration-300 ${
                        kr.highlight
                          ? "bg-[#F5B700]/10 border-[#F5B700]/40 text-[#F5B700] group-hover:bg-[#F5B700]/15"
                          : "bg-[#161616] border-[#2B2B2B] text-white"
                      }`}
                    >
                      <div className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">
                        {kr.label}
                      </div>
                      <div className="text-xs font-black mt-0.5">{kr.value}</div>
                    </div>
                  ))}
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                  <Calendar size={12} />
                  <span>{cs.campaignPeriod}</span>
                </div>
              </div>

              {/* Summary note & Link */}
              <div className="border-t border-[#1E1E1E] pt-4">
                <p className="text-gray-500 text-xs leading-relaxed italic mb-3">
                  {cs.summaryNote}
                </p>
                <Link
                  href="/results"
                  className="inline-flex items-center gap-1.5 text-[#F5B700] text-xs font-semibold hover:gap-2.5 transition-all group/link"
                >
                  Inspect Campaign Data & Proof
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE_PREMIUM }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_PREMIUM }}
            className="inline-block"
          >
            <Link href="/results" className="btn-secondary group">
              View All Verified Case Studies
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
