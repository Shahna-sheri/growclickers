"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Layers, User, Target, Search, Share2, Globe, Zap, MessageCircle, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp, Layers, User, Target, Search, Share2, Globe, Zap,
};

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#080808] py-20 md:py-28 border-y border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label">What We Do</span>
          <h2 className="section-heading">
            Services Built for{" "}
            <span className="text-[#F5B700]">Business Growth</span>
          </h2>
          <p className="section-subheading">
            Every service we offer is designed to contribute to one goal — growing your business with strategy, clarity, and measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || TrendingUp;
            const url = createWhatsAppUrl(service.whatsappMessage);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-dark p-6 hover:border-[#F5B700]/40 transition-all duration-300 group flex flex-col"
              >
                <div className="w-11 h-11 bg-[#F5B700]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F5B700]/20 transition-colors">
                  <Icon size={22} className="text-[#F5B700]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2 leading-snug">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{service.shortDescription}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F5B700] text-xs font-semibold hover:gap-2.5 transition-all"
                >
                  <MessageCircle size={13} />
                  Enquire Now
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
          <Link href="/services" className="btn-secondary">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

