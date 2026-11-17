"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { section } from "framer-motion/client";

const steps = [
  {
    num: "01",
    title: "Build",
    description:
      "We start by deeply understanding your business — your goals, target audience, market position, competition, and current challenges. This forms the foundation of everything we do.",
    details: ["Business & market analysis", "Competitor research", "Audience mapping", "Goal alignment"],
  },
  {
    num: "02",
    title: "Brand",
    description:
      "We develop or refine your brand identity, positioning, value proposition, and communication strategy so your business stands out and communicates clearly.",
    details: ["Brand positioning", "Value proposition", "Visual identity direction", "Communication strategy"],
  },
  {
    num: "03",
    title: "Launch",
    description:
      "We execute marketing strategies through the most relevant channels for your business — campaigns, creative content, and advertising built for real results.",
    details: ["Campaign strategy", "Ad creative & copy", "Multi-channel execution", "Content creation"],
  },
  {
    num: "04",
    title: "Optimise",
    description:
      "We continuously review campaign performance, lead quality, cost efficiency, and marketing data to improve results and eliminate what isn't working.",
    details: ["Performance analysis", "Lead quality review", "Cost optimisation", "Data-driven decisions"],
  },
  {
    num: "05",
    title: "Scale",
    description:
      "We identify what is working and build on it — scaling successful strategies and exploring new sustainable growth opportunities for your business.",
    details: ["Scaling winning campaigns", "New channel exploration", "Growth opportunity mapping", "Long-term planning"],
  },
];

// Animation timings for the sequential glow of the 5 circles across an 8.5s cycle
const circleGlowTimings = [
  // 01 Build: glows at start (0 - 20%), fades as arrow departs
  {
    opacity: [1, 1, 0.2, 0, 0, 0, 0, 0.4, 1],
    scale: [1.06, 1.06, 1, 1, 1, 1, 1, 1, 1.06],
    shadow: [
      "0 0 24px rgba(245,183,0,0.7), inset 0 0 12px rgba(245,183,0,0.3)",
      "0 0 24px rgba(245,183,0,0.7), inset 0 0 12px rgba(245,183,0,0.3)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 10px rgba(245,183,0,0.3)",
      "0 0 24px rgba(245,183,0,0.7), inset 0 0 12px rgba(245,183,0,0.3)",
    ],
  },
  // 02 Brand: arrow arrives at ~25%
  {
    opacity: [0, 0, 1, 1, 0.2, 0, 0, 0, 0],
    scale: [1, 1, 1.06, 1.06, 1, 1, 1, 1, 1],
    shadow: [
      "0 0 0px rgba(245,183,0,0)",
      "0 0 6px rgba(245,183,0,0.2)",
      "0 0 24px rgba(245,183,0,0.7), inset 0 0 12px rgba(245,183,0,0.3)",
      "0 0 24px rgba(245,183,0,0.7), inset 0 0 12px rgba(245,183,0,0.3)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
    ],
  },
  // 03 Launch: arrow arrives at ~50%
  {
    opacity: [0, 0, 0, 0, 1, 1, 0.2, 0, 0],
    scale: [1, 1, 1, 1, 1.06, 1.06, 1, 1, 1],
    shadow: [
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 6px rgba(245,183,0,0.2)",
      "0 0 24px rgba(245,183,0,0.7), inset 0 0 12px rgba(245,183,0,0.3)",
      "0 0 24px rgba(245,183,0,0.7), inset 0 0 12px rgba(245,183,0,0.3)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
    ],
  },
  // 04 Optimise: arrow arrives at ~75%
  {
    opacity: [0, 0, 0, 0, 0, 0, 1, 1, 0],
    scale: [1, 1, 1, 1, 1, 1, 1.06, 1.06, 1],
    shadow: [
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 6px rgba(245,183,0,0.2)",
      "0 0 24px rgba(245,183,0,0.7), inset 0 0 12px rgba(245,183,0,0.3)",
      "0 0 24px rgba(245,183,0,0.7), inset 0 0 12px rgba(245,183,0,0.3)",
      "0 0 0px rgba(245,183,0,0)",
    ],
  },
  // 05 Scale: arrow arrives at ~90-100% with completion glow
  {
    opacity: [0, 0, 0, 0, 0, 0, 0, 0.4, 1],
    scale: [1, 1, 1, 1, 1, 1, 1, 1, 1.1],
    shadow: [
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 0px rgba(245,183,0,0)",
      "0 0 12px rgba(245,183,0,0.4)",
      "0 0 32px rgba(245,183,0,0.9), inset 0 0 16px rgba(245,183,0,0.4)",
    ],
  },
];

export default function GrowthSystem() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#050505] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Our Methodology</span>
          <h2 className="section-heading">
            The GrowClickers{" "}
            <span className="text-[#F5B700]">Growth System</span>
          </h2>
          <p className="section-subheading">
            A structured five-step process that takes your business from where it is to where it needs to be.
          </p>
        </motion.div>

        {/* Mobile Horizontal Progress Tracker */}
        <div className="md:hidden mb-8">
          <div className="relative h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-[#F5B700] to-[#FFE580] shadow-[0_0_10px_#F5B700]"
              animate={{ left: ["-30%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-[#F5B700] mt-2">
            <span>01 Build</span>
            <span>02 Brand</span>
            <span>03 Launch</span>
            <span>04 Optimise</span>
            <span>05 Scale</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          {/* Desktop Horizontal Connecting Track with Smooth Moving Glowing Arrow */}
          <div
            className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] z-0 pointer-events-none"
            aria-hidden="true"
          >
            {/* Base subtle dark gold connecting line */}
            <div className="absolute inset-0 bg-[#F5B700]/20" />

            {/* Glowing progress trail that extends along the line */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F5B700]/30 via-[#F5B700] to-[#FFE580] shadow-[0_0_12px_rgba(245,183,0,0.7)]"
              animate={{
                width: ["0%", "2%", "100%", "100%", "100%"],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.05, 0.9, 0.96, 1],
              }}
            />

            {/* Moving Arrow & Glowing Light Particle */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center z-20 pointer-events-none"
              animate={{
                left: ["0%", "2%", "100%", "100%", "100%"],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.05, 0.9, 0.96, 1],
              }}
            >
              {/* Trailing luminous light streak */}
              <div className="w-16 h-[2.5px] bg-gradient-to-r from-transparent via-[#F5B700]/60 to-[#FFE580] blur-[0.5px]" />

              {/* Core Glowing Particle with Halo */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-6 h-6 rounded-full bg-[#F5B700]/40 blur-sm animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-[#FFF3CC] shadow-[0_0_10px_#F5B700,0_0_20px_#F5B700]" />
              </div>

              {/* Crisp Dual-Chevron Golden Arrow Head */}
              <div className="ml-1 filter drop-shadow-[0_0_6px_#F5B700] flex items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 3L9 8L4 13"
                    stroke="#F5B700"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3L13 8L8 13"
                    stroke="#FFE580"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center px-4 py-6 group"
            >
              {/* Step circle container */}
              <div className="relative mb-5 flex items-center justify-center">
                {/* Synchronized glowing pulse ring when arrow reaches this step */}
                <motion.div
                  className="absolute -inset-1.5 rounded-full border border-[#F5B700] pointer-events-none"
                  animate={{
                    opacity: circleGlowTimings[i].opacity,
                    scale: circleGlowTimings[i].scale,
                    boxShadow: circleGlowTimings[i].shadow,
                  }}
                  transition={{
                    duration: 8.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.28, 0.4, 0.53, 0.65, 0.77, 0.89, 1],
                  }}
                />

                {/* Main circle */}
                <div className="w-20 h-20 rounded-full border-2 border-[#F5B700]/30 bg-[#111] flex items-center justify-center group-hover:border-[#F5B700] group-hover:shadow-[0_0_24px_rgba(245,183,0,0.5)] transition-all duration-300 relative z-10">
                  <div className="text-center">
                    <div className="text-[#F5B700] text-xs font-bold tracking-wider">{step.num}</div>
                    <div className="text-white font-black text-sm">{step.title}</div>
                  </div>
                </div>
              </div>

              {/* Step Description */}
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{step.description}</p>

              {/* Step Details */}
              <ul className="space-y-1 w-full max-w-[210px] text-left">
                {step.details.map((d) => (
                  <li key={d} className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 bg-[#F5B700] rounded-full shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {/* Mobile vertical connecting line between stacked steps */}
              {i < steps.length - 1 && (
                <div className="md:hidden w-[2px] h-6 bg-gradient-to-b from-[#F5B700]/40 to-[#F5B700]/10 my-3" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link href="/our-system" className="btn-secondary">
            Explore Our Full System
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
