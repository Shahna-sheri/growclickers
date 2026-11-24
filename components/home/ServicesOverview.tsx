"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Layers, User, Target, Search, Share2, Globe, Zap, MessageCircle, Sparkles, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { EASE_PREMIUM } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp, Layers, User, Target, Search, Share2, Globe, Zap,
};

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#F5B700]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="inline-flex items-center gap-1.5 mb-3"
          >
            <Sparkles size={13} className="text-[#F5B700]" />
            <span className="section-label mb-0">What We Do</span>
          </motion.div>

          <h2 className="section-heading">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                className="inline-block"
              >
                Services Built for{" "}
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.22, ease: EASE_PREMIUM }}
                className="inline-block text-[#F5B700]"
              >
                Business Growth
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.35, ease: EASE_PREMIUM }}
            className="section-subheading"
          >
            Every service we offer is designed to contribute to one goal — growing your business with strategy, clarity, and measurable results.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || TrendingUp;
            const url = createWhatsAppUrl(service.whatsappMessage);
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25, ease: EASE_PREMIUM },
                }}
                className="card-dark p-6 hover:border-[#F5B700]/50 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top border glow bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="w-11 h-11 bg-[#F5B700]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F5B700]/20 transition-all duration-300 group-hover:scale-110">
                    <Icon size={22} className="text-[#F5B700] transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 leading-snug group-hover:text-[#F5B700] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222]">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#F5B700] text-xs font-semibold hover:gap-2.5 transition-all group/link"
                  >
                    <MessageCircle size={13} className="transition-transform group-hover/link:rotate-12" />
                    Enquire Now
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: EASE_PREMIUM }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_PREMIUM }}
            className="inline-block"
          >
            <Link href="/services" className="btn-secondary group">
              View All Services
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

