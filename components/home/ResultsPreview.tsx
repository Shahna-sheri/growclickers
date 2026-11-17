"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Tag, Calendar, BarChart2, ShieldCheck } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function ResultsPreview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Take top 4 verified case studies for clean homepage showcase
  const previewStudies = caseStudies.slice(0, 4);

  return (
    <section ref={ref} className="bg-[#050505] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label">Verified Performance</span>
          <h2 className="section-heading">
            Real Campaigns. <span className="text-[#F5B700]">Real Data.</span>
          </h2>
          <p className="section-subheading">
            Every case study reflects authentic campaign work backed by live Ads Manager data. We never fabricate numbers or vanity metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-dark p-6 transition-all duration-300 group flex flex-col justify-between ${
                cs.isVerified
                  ? "border-[#F5B700]/50 hover:border-[#F5B700] hover:shadow-[0_0_25px_rgba(245,183,0,0.15)]"
                  : "hover:border-[#F5B700]/30"
              }`}
            >
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
                      <ShieldCheck size={11} /> Verified
                    </span>
                  )}
                </div>

                {/* Client header with logo if available */}
                <div className="flex items-center gap-3 mb-3">
                  {cs.clientLogo && (
                    <div className="w-10 h-10 rounded-lg bg-black border border-[#2D2D2D] overflow-hidden flex items-center justify-center p-1 shrink-0 shadow-md">
                      <Image
                        src={cs.clientLogo}
                        alt={cs.clientName}
                        width={36}
                        height={36}
                        className="object-contain"
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
                <div className="bg-[#111] rounded-lg p-3 mb-4 border border-[#242424]">
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
                      className={`p-2 rounded border text-center ${
                        kr.highlight
                          ? "bg-[#F5B700]/10 border-[#F5B700]/40 text-[#F5B700]"
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
                  className="inline-flex items-center gap-1.5 text-[#F5B700] text-xs font-semibold hover:gap-2.5 transition-all"
                >
                  Inspect Campaign Data & Proof
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/results" className="btn-secondary">
            View All Verified Case Studies
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
