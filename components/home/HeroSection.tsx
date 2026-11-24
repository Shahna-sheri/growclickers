"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, ChevronDown, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { EASE_PREMIUM } from "@/lib/animations";

export default function HeroSection() {
  const [isRevealed, setIsRevealed] = useState(false);
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

      {/* Floating ambient glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.12, 0.06],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#F5B700] rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.03, 0.07, 0.03],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#FFD84D] rounded-full blur-[150px] pointer-events-none"
      />

      {/* Accent floating dots */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 left-12 w-2 h-2 bg-[#F5B700] rounded-full opacity-60 shadow-[0_0_10px_#F5B700]"
      />
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-44 right-20 w-1.5 h-1.5 bg-[#F5B700] rounded-full opacity-40 shadow-[0_0_8px_#F5B700]"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-36 left-28 w-2 h-2 bg-[#F5B700] rounded-full opacity-30 shadow-[0_0_10px_#F5B700]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 border border-[#F5B700]/30 bg-[#F5B700]/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_rgba(245,183,0,0.1)] cursor-default transition-all duration-300 hover:border-[#F5B700]/60"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B700] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5B700]" />
          </span>
          <span className="text-[#F5B700] text-xs font-semibold tracking-widest uppercase">
            Business Growth Partner
          </span>
        </motion.div>

        {/* Headline with word-reveal animation & smooth hover pop-up */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6">
          <span className={`block transition-all duration-300 ${isRevealed ? "overflow-visible" : "overflow-hidden"} py-2 sm:py-3 -my-1.5 sm:-my-2`}>
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_PREMIUM }}
              onAnimationComplete={() => setIsRevealed(true)}
              className="inline-block"
            >
              <motion.span
                whileHover={{
                  y: -10,
                  scale: 1.04,
                  filter: "drop-shadow(0 14px 30px rgba(255, 255, 255, 0.28)) drop-shadow(0 4px 12px rgba(245, 183, 0, 0.35))",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 18,
                  mass: 0.75,
                }}
                className="inline-block cursor-pointer select-none origin-center transition-colors duration-200"
              >
                We Build Businesses
              </motion.span>
            </motion.span>
          </span>
          <span className={`block transition-all duration-300 ${isRevealed ? "overflow-visible" : "overflow-hidden"} py-2 sm:py-3 -my-1.5 sm:-my-2`}>
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.22, ease: EASE_PREMIUM }}
              className="inline-block text-[#F5B700]"
            >
              <motion.span
                whileHover={{
                  y: -10,
                  scale: 1.045,
                  filter: "drop-shadow(0 14px 35px rgba(245, 183, 0, 0.75))",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 18,
                  mass: 0.75,
                }}
                className="inline-block cursor-pointer select-none origin-center transition-colors duration-200"
              >
                That Grow Beyond
              </motion.span>
            </motion.span>
          </span>
          <span className={`block transition-all duration-300 ${isRevealed ? "overflow-visible" : "overflow-hidden"} py-2 sm:py-3 -my-1.5 sm:-my-2`}>
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.34, ease: EASE_PREMIUM }}
              className="inline-block"
            >
              <motion.span
                whileHover={{
                  y: -10,
                  scale: 1.045,
                  filter: "drop-shadow(0 14px 30px rgba(255, 255, 255, 0.28)) drop-shadow(0 4px 12px rgba(245, 183, 0, 0.35))",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 18,
                  mass: 0.75,
                }}
                className="inline-block cursor-pointer select-none origin-center transition-colors duration-200"
              >
                Marketing.
              </motion.span>
            </motion.span>
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE_PREMIUM }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          GrowClickers helps businesses build stronger brands, attract the right audience, generate quality leads, and grow with a clear marketing strategy.
        </motion.p>

        {/* Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_PREMIUM }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={businessUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_PREMIUM }}
            className="btn-primary btn-shimmer text-base px-8 py-4 shadow-lg shadow-[#F5B700]/20 group"
          >
            <MessageCircle size={20} className="transition-transform group-hover:rotate-12 duration-300" />
            Discuss Your Business Growth
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_PREMIUM }}
          >
            <Link href="/results" className="btn-secondary text-base px-8 py-4 group">
              Explore Our Results
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5 duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Row with hover and entrance stagger */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68, ease: EASE_PREMIUM }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { label: "Growth Strategy", value: "360°" },
            { label: "Platforms", value: "Meta + Google" },
            { label: "Focus", value: "Real Results" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.2, ease: EASE_PREMIUM }}
              className="text-center p-2 rounded-lg transition-colors hover:bg-white/[0.02]"
            >
              <div className="text-[#F5B700] font-bold text-lg md:text-xl">{stat.value}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Abstract visual composition with floating pills & continuous ambient float */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: EASE_PREMIUM }}
          className="mt-16 relative max-w-3xl mx-auto"
        >
          {/* Left floating badge */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden sm:flex absolute -top-5 -left-6 z-20 items-center gap-2 bg-[#121212]/90 backdrop-blur-md border border-[#F5B700]/30 px-3.5 py-2 rounded-xl shadow-xl"
          >
            <Sparkles size={14} className="text-[#F5B700]" />
            <span className="text-xs font-semibold text-white tracking-wide">360° Marketing System</span>
          </motion.div>

          {/* Right floating badge */}
          <motion.div
            animate={{
              y: [6, -6, 6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden sm:flex absolute -bottom-5 -right-6 z-20 items-center gap-2 bg-[#121212]/90 backdrop-blur-md border border-emerald-500/30 px-3.5 py-2 rounded-xl shadow-xl"
          >
            <TrendingUp size={14} className="text-emerald-400" />
            <span className="text-xs font-semibold text-white tracking-wide">Verified Client Outcomes</span>
          </motion.div>

          {/* Main Dashboard Card with subtle ambient float */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-[#111111]/95 backdrop-blur-sm border border-[#2A2A2A] hover:border-[#F5B700]/40 rounded-xl p-6 text-left shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex items-center gap-2 ml-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-gray-400 text-xs font-mono">Growth Dashboard — Live</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[
                { label: "Strategy", status: "Active", color: "text-[#F5B700]" },
                { label: "Campaigns", status: "Running", color: "text-green-400" },
                { label: "Leads", status: "Flowing", color: "text-blue-400" },
              ].map((item) => (
                <div key={item.label} className="bg-[#1A1A1A] rounded-lg p-3 border border-[#2A2A2A] hover:border-[#F5B700]/30 transition-colors">
                  <div className="text-gray-500 text-xs">{item.label}</div>
                  <div className={`${item.color} font-semibold text-sm mt-1`}>{item.status}</div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                { label: "Brand", value: 70 },
                { label: "Reach", value: 55 },
                { label: "Leads", value: 85 },
                { label: "ROAS", value: 40 },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="text-gray-400 font-mono text-xs w-16">
                    {item.label}
                  </div>
                  <div className="flex-1 bg-[#1A1A1A] rounded-full h-2.5 overflow-hidden p-0.5 border border-[#252525]">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{
                        width: [
                          "0%",
                          `${item.value}%`,
                          `${Math.min(item.value + 4, 100)}%`,
                          `${Math.max(item.value - 3, 0)}%`,
                          `${item.value}%`,
                        ],
                      }}
                      transition={{
                        duration: 3.2,
                        delay: 0.5 + i * 0.15,
                        times: [0, 0.45, 0.65, 0.85, 1],
                        repeat: Infinity,
                        repeatDelay: 2.5,
                        ease: "easeInOut",
                      }}
                      className="relative bg-gradient-to-r from-[#F5B700] via-[#FFCA28] to-[#FFD84D] h-full rounded-full shadow-[0_0_12px_rgba(245,183,0,0.45)]"
                    >
                      {/* Live light shimmer passing through */}
                      <motion.div
                        animate={{ x: ["-100%", "250%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.2,
                          delay: 1.6 + i * 0.25,
                          ease: "easeInOut",
                          repeatDelay: 1.2,
                        }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    className="text-[#F5B700] font-mono font-semibold text-xs w-10 text-right"
                  >
                    {item.value}%
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with smooth bounce */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[#F5B700] transition-colors cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" })}
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}

