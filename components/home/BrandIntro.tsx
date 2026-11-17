"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Layers, Zap, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Target, title: "Clear Positioning", desc: "Know exactly where your business stands in the market." },
  { icon: Layers, title: "Strong Brand", desc: "A brand that creates trust and communicates your value." },
  { icon: Users, title: "Right Audience", desc: "Reaching the people who actually need what you offer." },
  { icon: Zap, title: "Effective Offer", desc: "A compelling offer that converts interest into action." },
  { icon: TrendingUp, title: "Marketing System", desc: "A structured system that generates leads consistently." },
];

export default function BrandIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#080808] py-20 md:py-28 border-y border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label">Why GrowClickers</span>
          <h2 className="section-heading">
            Marketing Is Only One Part of{" "}
            <span className="text-[#F5B700]">Business Growth.</span>
          </h2>
          <p className="section-subheading">
            Running ads is not growth. Real business growth requires clear positioning, a strong brand, the right audience, an effective offer, and a structured marketing system that works together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-dark p-6 hover:border-[#F5B700]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-[#F5B700]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F5B700]/20 transition-colors">
                <pillar.icon size={20} className="text-[#F5B700]" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{pillar.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

