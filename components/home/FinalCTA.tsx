"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { EASE_PREMIUM } from "@/lib/animations";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const businessUrl = createWhatsAppUrl(WHATSAPP_MESSAGES.businessEnquiry);

  return (
    <section ref={ref} className="bg-[#050505] py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F5B700] rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="bg-gradient-to-b from-[#111] via-[#0E0E0E] to-[#0A0A0A] border border-[#2A2A2A] hover:border-[#F5B700]/40 rounded-2xl p-12 md:p-16 relative overflow-hidden shadow-2xl transition-all duration-300"
        >
          {/* Subtle top border glow highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B700] to-transparent" />

          {/* Inner ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-36 bg-[#F5B700]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              className="inline-flex items-center gap-1.5 mb-3"
            >
              <Sparkles size={13} className="text-[#F5B700]" />
              <span className="section-label mb-0">Get Started</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-5 leading-tight">
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={isInView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                  className="inline-block"
                >
                  Ready to Build Your{" "}
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={isInView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.22, ease: EASE_PREMIUM }}
                  className="inline-block text-[#F5B700]"
                >
                  Next Stage of Growth?
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.35, ease: EASE_PREMIUM }}
              className="text-gray-400 text-lg max-w-xl mx-auto mb-10"
            >
              Let&apos;s discuss your business goals, challenges, and how GrowClickers can help you build a marketing system that delivers real results.
            </motion.p>

            <motion.a
              href={businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE_PREMIUM }}
              className="btn-primary btn-shimmer text-base px-10 py-4 shadow-xl shadow-[#F5B700]/25 group inline-flex items-center gap-2"
            >
              <MessageCircle size={22} className="transition-transform group-hover:rotate-12 duration-300" />
              Discuss Your Business Growth
            </motion.a>

            <p className="text-gray-500 text-sm mt-5">
              WhatsApp • Free initial consultation • No commitment required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

