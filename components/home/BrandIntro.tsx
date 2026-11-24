"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Layers, Zap, TrendingUp, Sparkles } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/animations";

const pillars = [
  { icon: Target, title: "Clear Positioning", desc: "Know exactly where your business stands in the market.", step: "01" },
  { icon: Layers, title: "Strong Brand", desc: "A brand that creates trust and communicates your value.", step: "02" },
  { icon: Users, title: "Right Audience", desc: "Reaching the people who actually need what you offer.", step: "03" },
  { icon: Zap, title: "Effective Offer", desc: "A compelling offer that converts interest into action.", step: "04" },
  { icon: TrendingUp, title: "Marketing System", desc: "A structured system that generates leads consistently.", step: "05" },
];

export default function BrandIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
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
    <section ref={ref} className="bg-[#080808] py-20 md:py-28 border-y border-[#1A1A1A] relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#F5B700]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="inline-flex items-center gap-1.5 mb-3"
          >
            <Sparkles size={13} className="text-[#F5B700]" />
            <span className="section-label mb-0">Why GrowClickers</span>
          </motion.div>

          <h2 className="section-heading">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                className="inline-block"
              >
                Marketing Is Only One Part of
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.22, ease: EASE_PREMIUM }}
                className="inline-block text-[#F5B700]"
              >
                Business Growth.
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.35, ease: EASE_PREMIUM }}
            className="section-subheading"
          >
            Running ads is not growth. Real business growth requires clear positioning, a strong brand, the right audience, an effective offer, and a structured marketing system that works together.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: EASE_PREMIUM },
              }}
              className="card-dark p-6 hover:border-[#F5B700]/50 transition-all duration-300 group relative overflow-hidden cursor-default"
            >
              {/* Subtle top border glow bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#F5B700]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F5B700]/20 transition-all duration-300 group-hover:scale-110">
                  <pillar.icon size={20} className="text-[#F5B700] transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <span className="text-[11px] font-mono text-gray-600 group-hover:text-[#F5B700]/80 transition-colors">
                  {pillar.step}
                </span>
              </div>

              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-[#F5B700] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

