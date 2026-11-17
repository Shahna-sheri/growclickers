"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function HeroSection() {
  const businessUrl = createWhatsAppUrl(WHATSAPP_MESSAGES.businessEnquiry);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,183,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,183,0,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Yellow glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B700]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Accent dots */}
      <div className="absolute top-24 left-10 w-2 h-2 bg-[#F5B700] rounded-full opacity-60" />
      <div className="absolute top-40 right-16 w-1 h-1 bg-[#F5B700] rounded-full opacity-40" />
      <div className="absolute bottom-32 left-24 w-1.5 h-1.5 bg-[#F5B700] rounded-full opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-[#F5B700]/30 bg-[#F5B700]/5 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[#F5B700] rounded-full animate-pulse" />
          <span className="text-[#F5B700] text-xs font-semibold tracking-widest uppercase">
            Business Growth Partner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          We Build Businesses
          <br />
          <span className="text-[#F5B700]">That Grow Beyond</span>
          <br />
          Marketing.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          GrowClickers helps businesses build stronger brands, attract the right audience, generate quality leads, and grow with a clear marketing strategy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={businessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            <MessageCircle size={20} />
            Discuss Your Business Growth
          </a>
          <Link href="/results" className="btn-secondary text-base px-8 py-4">
            Explore Our Results
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { label: "Growth Strategy", value: "360°" },
            { label: "Platforms", value: "Meta + Google" },
            { label: "Focus", value: "Real Results" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[#F5B700] font-bold text-lg md:text-xl">{stat.value}</div>
              <div className="text-gray-600 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Abstract visual composition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 relative max-w-3xl mx-auto"
        >
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 text-left shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-gray-600 text-xs ml-2">Growth Dashboard — Live</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[
                { label: "Strategy", status: "Active", color: "text-[#F5B700]" },
                { label: "Campaigns", status: "Running", color: "text-green-400" },
                { label: "Leads", status: "Flowing", color: "text-blue-400" },
              ].map((item) => (
                <div key={item.label} className="bg-[#1A1A1A] rounded-lg p-3 border border-[#2A2A2A]">
                  <div className="text-gray-500 text-xs">{item.label}</div>
                  <div className={`${item.color} font-semibold text-sm mt-1`}>{item.status}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[70, 55, 85, 40].map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-gray-600 text-xs w-16">
                    {["Brand", "Reach", "Leads", "ROAS"][i]}
                  </div>
                  <div className="flex-1 bg-[#1A1A1A] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#F5B700] to-[#FFD84D] h-2 rounded-full"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                  <div className="text-gray-400 text-xs w-8">{w}%</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}

