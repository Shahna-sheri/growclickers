"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const businessUrl = createWhatsAppUrl(WHATSAPP_MESSAGES.businessEnquiry);

  return (
    <section ref={ref} className="bg-[#050505] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-[#2A2A2A] rounded-2xl p-12 md:p-16 relative overflow-hidden"
        >
          {/* BG glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#F5B700]/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <span className="section-label">Get Started</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-5 leading-tight">
              Ready to Build Your{" "}
              <span className="text-[#F5B700]">Next Stage of Growth?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Let&apos;s discuss your business goals, challenges, and how GrowClickers can help you build a marketing system that delivers real results.
            </p>
            <a
              href={businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4 shadow-lg shadow-[#F5B700]/20"
            >
              <MessageCircle size={22} />
              Discuss Your Business Growth
            </a>
            <p className="text-gray-600 text-sm mt-5">
              WhatsApp • Free initial consultation • No commitment required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

