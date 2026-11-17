"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, CaseStudy } from "@/data/caseStudies";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  Maximize2,
  MessageCircle,
  Tag,
  X,
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface SectionHighlight {
  label: string;
  value: string;
}

interface SectionConfig {
  id: string;
  label: string;
  tag: string;
  badge: string;
  title: string;
  description: string;
  highlights: SectionHighlight[];
}

const SECTIONS: SectionConfig[] = [
  {
    id: "lead-generation",
    label: "Lead Generation",
    tag: "Lead Generation",
    badge: "DIRECT-RESPONSE ACQUISITION",
    title: "Lead Generation Campaigns",
    description:
      "Direct-response Meta Ads click-to-chat and direct messaging funnels engineered to convert cold audiences into qualified buyer inquiries and sales conversations.",
    highlights: [
      { label: "Verified Buyer Leads", value: "2,500+" },
      { label: "Record Cost Per Lead", value: "₹4.30" },
      { label: "Core Conversion Flow", value: "Click-to-WhatsApp" },
      { label: "Active Brands", value: "8 Scaled" },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    tag: "Sales",
    badge: "DIRECT PRODUCT SALES & ORDERS",
    title: "Sales Campaigns",
    description:
      "Direct-to-consumer product sales campaigns and agile micro-budget test sprints driving instant checkout inquiries and customer orders.",
    highlights: [
      { label: "Cost Per Sale Result", value: "₹6.64" },
      { label: "Direct Sales Orders", value: "33 Orders" },
      { label: "Sprint Ad Spend", value: "₹219.07" },
      { label: "Sales Channel", value: "Direct Chat Checkout" },
    ],
  },
  {
    id: "brand-awareness",
    label: "Brand Awareness",
    tag: "Brand Awareness",
    badge: "TOP-OF-FUNNEL MASS REACH",
    title: "Brand Awareness Campaigns",
    description:
      "Hyper-efficient Meta Ads reach campaigns designed to build massive regional brand recall and demographic exposure on minimal budgets.",
    highlights: [
      { label: "Total People Reached", value: "554,000+" },
      { label: "Average Cost Per Result", value: "Sub-₹4.00" },
      { label: "Lowest Reach Cost", value: "₹2.69 / result" },
      { label: "Active Brands", value: "4 Scaled" },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    tag: "Branding",
    badge: "CREATIVE & BRAND IDENTITY",
    title: "Branding Campaigns",
    description:
      "End-to-end brand identity, commercial video production, viral educational reels, and executive founder authority ecosystems that build lasting digital brand equity.",
    highlights: [
      { label: "Viral Video Traction", value: "700K+ Reel Views" },
      { label: "Founder Community", value: "22.5K+ Followers" },
      { label: "Creative Direction", value: "Cinema-Grade Commercials" },
      { label: "Active Brands", value: "4 Scaled" },
    ],
  },
];

// Reusable Case Study Card Component
function CaseStudyCard({
  study,
  idx,
  onOpenModal,
}: {
  study: CaseStudy;
  idx: number;
  onOpenModal: (study: CaseStudy) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: (idx % 2) * 0.1 }}
      className="card-dark border border-[#262626] rounded-2xl overflow-hidden hover:border-[#F5B700]/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Header Strip */}
        <div className="p-6 md:p-8 border-b border-[#202020] bg-gradient-to-r from-[#121212] to-[#181818]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap gap-2">
              {study.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium bg-[#F5B700]/10 text-[#F5B700] border border-[#F5B700]/25 px-2.5 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {study.isVerified && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  Verified
                </span>
              )}
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar size={13} />
                <span>{study.campaignPeriod}</span>
              </div>
            </div>
          </div>

          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3.5 mb-2">
            {study.clientLogo && (
              <div className="w-12 h-12 rounded-xl bg-black border border-[#2D2D2D] overflow-hidden flex items-center justify-center p-1 shrink-0 shadow-lg">
                <Image
                  src={study.clientLogo}
                  alt={study.clientName}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#F5B700] transition-colors">
                {study.clientName}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                <Tag size={12} className="text-[#F5B700]" />
                <span>Category: {study.businessCategory}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Visual Mockup / Lightbox Trigger */}
        <div className="p-6 md:p-8 bg-[#0C0C0C] border-b border-[#202020]">
          <div
            className="relative group cursor-pointer"
            onClick={() => onOpenModal(study)}
          >
            {study.screenshotImage ? (
              /* Real Screenshot Proof Card */
              <div className="relative w-full h-64 md:h-72 bg-[#141414] border border-[#2B2B2B] rounded-xl overflow-hidden transition-all duration-300 group-hover:border-[#F5B700]/70 group-hover:shadow-[0_0_24px_rgba(245,183,0,0.25)]">
                {/* Live Header Label */}
                <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between bg-black/85 backdrop-blur-md px-3.5 py-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-emerald-300 font-bold tracking-wider">
                      META ADS MANAGER PERFORMANCE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#222] text-[#F5B700] px-2 py-0.5 rounded font-bold border border-[#F5B700]/30">
                    {study.metricBadge ||
                      `${study.keyResults[0]?.value} @ ${study.keyResults[1]?.value}`}
                  </span>
                </div>

                {/* Image */}
                <Image
                  src={study.screenshotImage}
                  alt={`${study.clientName} campaign proof`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 pt-7"
                />

                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom stats pill */}
                <div className="absolute bottom-3 inset-x-3 z-20 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 bg-[#121212]/95 backdrop-blur-md border border-[#333] px-3 py-1.5 rounded-lg shadow-lg">
                    <span className="text-white font-black text-sm">
                      {study.keyResults[0]?.value}
                    </span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-[#F5B700] font-bold text-sm">
                      {study.keyResults[1]?.value}
                    </span>
                    {study.keyResults[2] && (
                      <>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-gray-300 text-xs">
                          {study.keyResults[2].value}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#F5B700] font-semibold bg-[#1C1C1C]/90 backdrop-blur-md border border-[#F5B700]/30 px-3 py-1.5 rounded-lg group-hover:bg-[#F5B700] group-hover:text-black transition-colors">
                    <Maximize2 size={13} /> Enlarge Proof
                  </div>
                </div>
              </div>
            ) : (
              /* Structured Audit Mockup */
              <div className="w-full h-56 bg-[#161616] border border-[#2B2B2B] rounded-xl flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300 group-hover:border-[#F5B700]/60">
                <div className="w-full flex items-center justify-between border-b border-[#252525] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-gray-400">
                      CAMPAIGN_ANALYTICS // {study.id}
                    </span>
                  </div>
                  <span className="text-[11px] bg-[#222] text-[#F5B700] px-2 py-0.5 rounded font-mono">
                    Documented Audit
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 w-full mb-4">
                  {study.keyResults.map((kr, i) => (
                    <div
                      key={i}
                      className="bg-[#1E1E1E] p-2.5 rounded-lg border border-[#2D2D2D] text-left"
                    >
                      <div className="text-[10px] text-gray-500 uppercase">
                        {kr.label}
                      </div>
                      <div className="text-xs font-bold text-[#F5B700] mt-0.5 truncate">
                        {kr.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-xs text-[#F5B700] font-semibold bg-[#1C1C1C] border border-[#F5B700]/30 px-3 py-1.5 rounded-md group-hover:bg-[#F5B700] group-hover:text-[#050505] transition-colors">
                  <Maximize2 size={13} /> Click to Inspect Campaign Breakdown
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Objective & Challenge & Strategy */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Results highlight cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {study.keyResults.map((kr, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg border ${kr.highlight
                    ? "bg-[#F5B700]/10 border-[#F5B700]/40"
                    : "bg-[#141414] border-[#262626]"
                  }`}
              >
                <div className="text-[10px] text-gray-400 uppercase font-medium">
                  {kr.label}
                </div>
                <div
                  className={`text-sm font-black mt-1 ${kr.highlight ? "text-[#F5B700]" : "text-white"
                    }`}
                >
                  {kr.value}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#F5B700] uppercase mb-1.5 flex items-center gap-1.5">
              <BarChart3 size={14} /> Objective
            </h4>
            <p className="text-sm text-gray-300 font-medium">
              {study.campaignObjective}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1.5">
              The Challenge
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1.5 flex items-center gap-1.5">
              <Zap size={13} className="text-[#F5B700]" /> Strategic Approach
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {study.strategy}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
              Execution Steps
            </h4>
            <ul className="space-y-2">
              {study.execution.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed"
                >
                  <CheckCircle2
                    size={14}
                    className="text-[#F5B700] shrink-0 mt-0.5"
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer & CTA */}
      <div className="p-6 md:p-8 bg-[#111111] border-t border-[#202020] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-gray-500 italic max-w-xs">
          {study.summaryNote}
        </p>
        <a
          href={createWhatsAppUrl(
            `Hi GrowClickers, I reviewed your case study "${study.clientName} (${study.businessCategory})" and would like to discuss similar growth strategies for my business.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs py-2.5 px-4 whitespace-nowrap shrink-0"
        >
          <MessageCircle size={15} /> Discuss Similar Results
        </a>
      </div>
    </motion.article>
  );
}

// Section Block Component
function CaseStudySectionBlock({
  section,
  studies,
  onOpenModal,
}: {
  section: SectionConfig;
  studies: CaseStudy[];
  onOpenModal: (study: CaseStudy) => void;
}) {
  return (
    <section id={section.id} className="py-12 md:py-16 border-b border-[#1A1A1A] last:border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Banner */}
        <div className="bg-gradient-to-r from-[#101010] via-[#141414] to-[#101010] border border-[#262626] rounded-2xl p-6 sm:p-8 md:p-10 mb-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F5B700] font-bold">
                  {section.badge}
                </span>
                <span className="text-xs font-mono bg-[#1E1E1E] text-gray-300 border border-[#333] px-2.5 py-0.5 rounded-full ml-1">
                  {studies.length} Verified Campaign{studies.length !== 1 ? "s" : ""}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {section.title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 mt-2 max-w-3xl leading-relaxed">
                {section.description}
              </p>
            </div>

            <a
              href={createWhatsAppUrl(
                `Hi GrowClickers, I am looking to scale my brand's ${section.label} and want to discuss campaign setup and strategy.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs sm:text-sm py-3 px-5 whitespace-nowrap shrink-0 self-start lg:self-center"
            >
              <MessageCircle size={16} /> Plan a {section.label} Campaign
            </a>
          </div>

          {/* Section Metrics Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-[#202020]">
            {section.highlights.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0B0B0B] border border-[#222] rounded-xl p-3.5 sm:p-4"
              >
                <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-lg sm:text-xl font-black text-[#F5B700] mt-1">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {studies.map((study, idx) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              idx={idx}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ResultsPage() {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<string>("all");

  // Filter case studies by active section
  const leadGenStudies = caseStudies.filter((s) =>
    s.tags.includes("Lead Generation")
  );
  const salesStudies = caseStudies.filter((s) =>
    s.tags.includes("Sales")
  );
  const awarenessStudies = caseStudies.filter((s) =>
    s.tags.includes("Brand Awareness")
  );
  const brandingStudies = caseStudies.filter((s) =>
    s.tags.includes("Branding")
  );

  const sectionsToRender =
    activeSectionId === "all"
      ? SECTIONS
      : SECTIONS.filter((s) => s.id === activeSectionId);

  const getStudiesForSection = (sectionId: string) => {
    switch (sectionId) {
      case "lead-generation":
        return leadGenStudies;
      case "sales":
        return salesStudies;
      case "brand-awareness":
        return awarenessStudies;
      case "branding":
        return brandingStudies;
      default:
        return [];
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-24 text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-[#1A1A1A]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,183,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,183,0,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#F5B700]/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Verified Track Record</span>
            <h1 className="section-heading mt-3 mb-6 max-w-4xl mx-auto">
              Real Campaigns. <span className="text-[#F5B700]">Real Data.</span>
            </h1>
            <p className="section-subheading max-w-3xl mx-auto">
              We stand for radical integrity in marketing. We never fabricate results, purchase testimonials,
              or present inflated vanity metrics. Every case study below outlines our strategic approach and verified performance data.
            </p>
          </motion.div>

          {/* Ethics Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 max-w-2xl mx-auto bg-[#141414] border border-[#2C2C2C] rounded-lg p-4 flex items-center gap-3 text-left"
          >
            <AlertCircle size={20} className="text-[#F5B700] shrink-0" />
            <p className="text-xs text-gray-400">
              <strong className="text-gray-200">Our Transparency Commitment:</strong> We showcase authentic Ads Manager screenshots and documented performance metrics so you see exactly what sustainable business growth looks like.
            </p>
          </motion.div>

          {/* Section Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-10"
          >
            <button
              onClick={() => setActiveSectionId("all")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border ${activeSectionId === "all"
                  ? "bg-[#F5B700] text-[#050505] border-[#F5B700] shadow-sm shadow-[#F5B700]/30 font-bold"
                  : "bg-[#111111] text-gray-400 border-[#2A2A2A] hover:border-[#F5B700]/40 hover:text-white"
                }`}
            >
              All Sections
            </button>

            {SECTIONS.map((section) => {
              const isActive = activeSectionId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border ${isActive
                      ? "bg-[#F5B700] text-[#050505] border-[#F5B700] shadow-sm shadow-[#F5B700]/30 font-bold"
                      : "bg-[#111111] text-gray-400 border-[#2A2A2A] hover:border-[#F5B700]/40 hover:text-white"
                    }`}
                >
                  {section.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Render Sections */}
      <div>
        {sectionsToRender.map((section) => (
          <CaseStudySectionBlock
            key={section.id}
            section={section}
            studies={getStudiesForSection(section.id)}
            onOpenModal={(study) => setActiveModalStudy(study)}
          />
        ))}
      </div>

      {/* Lightbox Modal (Click to Enlarge / Full Breakdown) */}
      <AnimatePresence>
        {activeModalStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#121212] border border-[#333] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#222] text-gray-400 hover:text-white hover:bg-[#333] transition-colors z-30"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3.5 mb-4">
                {activeModalStudy.clientLogo && (
                  <div className="w-14 h-14 rounded-xl bg-black border border-[#2D2D2D] overflow-hidden flex items-center justify-center p-1.5 shrink-0 shadow-lg">
                    <Image
                      src={activeModalStudy.clientLogo}
                      alt={activeModalStudy.clientName}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-mono uppercase text-[#F5B700] tracking-widest">
                      Detailed Case Study Breakdown
                    </span>
                    {activeModalStudy.isVerified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        <ShieldCheck size={12} /> Verified Ads Manager
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {activeModalStudy.clientName}
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Category: {activeModalStudy.businessCategory} •{" "}
                    {activeModalStudy.campaignPeriod}
                  </p>
                </div>
              </div>

              {/* Full-Resolution Screenshot Proof if available */}
              {activeModalStudy.screenshotImage && (
                <div className="mb-6 rounded-xl overflow-hidden border border-[#2C2C2C] bg-black shadow-2xl">
                  <div className="flex items-center justify-between bg-[#181818] px-4 py-2.5 border-b border-[#2C2C2C]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider">
                        LIVE META ADS MANAGER DASHBOARD SCREENSHOT
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#F5B700] font-semibold">
                      {activeModalStudy.metricBadge ||
                        `${activeModalStudy.keyResults[1]?.value} • ${activeModalStudy.keyResults[0]?.value}`}
                    </span>
                  </div>
                  <div className="relative w-full bg-black p-2 sm:p-4 flex items-center justify-center">
                    <Image
                      src={activeModalStudy.screenshotImage}
                      alt={`${activeModalStudy.clientName} Performance Overview Proof`}
                      width={1024}
                      height={400}
                      className="w-full h-auto object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
              )}

              {/* Performance Audit Panel */}
              <div className="bg-[#0A0A0A] border border-[#262626] rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between border-b border-[#222] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5B700]" />
                    <span className="text-xs font-mono text-gray-300">
                      CAMPAIGN METRICS AUDIT
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    GROWCLICKERS DATA-VAULT
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {activeModalStudy.keyResults.map((r, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border ${r.highlight
                          ? "bg-[#F5B700]/10 border-[#F5B700]/50"
                          : "bg-[#141414] border-[#282828]"
                        }`}
                    >
                      <div className="text-xs text-gray-400 font-medium">
                        {r.label}
                      </div>
                      <div
                        className={`text-base font-black mt-1 ${r.highlight ? "text-[#F5B700]" : "text-white"
                          }`}
                      >
                        {r.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#171717] rounded-lg p-4 border border-[#2B2B2B]">
                  <div className="text-xs text-gray-400 font-semibold mb-2 flex items-center gap-1.5">
                    <TrendingUp size={14} className="text-[#F5B700]" /> Strategic
                    Execution Notes
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {activeModalStudy.strategy}
                  </p>
                </div>
              </div>

              {/* Execution Steps */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Step-by-Step Implementation
                </h4>
                <div className="space-y-2.5">
                  {activeModalStudy.execution.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-300 bg-[#171717] p-3 rounded-lg border border-[#242424]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#F5B700]/20 text-[#F5B700] text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#222]">
                <button
                  onClick={() => setActiveModalStudy(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md border border-[#333] text-sm text-gray-400 hover:text-white"
                >
                  Close Inspection
                </button>
                <a
                  href={createWhatsAppUrl(
                    `Hi GrowClickers, I'd like to discuss the ${activeModalStudy.clientName} case study in detail and explore how this applies to my brand.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-primary text-sm py-2.5 px-6"
                >
                  <MessageCircle size={16} /> Consult on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="bg-[#0A0A0A] border-t border-[#1F1F1F] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Want to achieve similar acquisition numbers for your business?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Connect with Shafi and the GrowClickers team to analyse your growth opportunities and establish performance benchmarks.
          </p>
          <a
            href={createWhatsAppUrl(
              "Hi GrowClickers, I reviewed your verified client case studies (VIPIN KK & CO, Saife Valappra, COCS, PREP D, SIZORE, Savari Cycles, GIFTED, KOKKADANS, Momo Chat, Pecific Appliances, Z1fitto, Noushi's Naturals, RADGIVER, and RAYYAN) and want to discuss building a high-performing growth system for my brand."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Start Your Campaign Planning on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
