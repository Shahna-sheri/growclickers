"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin, Instagram, Sparkles } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/animations";

export default function FounderPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#050505] py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-[#F5B700]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photo frame with ambient float & decorative corners */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Decorative accent frames */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#F5B700] transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#F5B700] transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

              {/* Founder Photo */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                className="relative bg-[#111] border border-[#2A2A2A] rounded-xl aspect-[4/5] overflow-hidden shadow-2xl group cursor-pointer"
              >
                <Image
                  src="/images/shafi-pulakkad.jpg"
                  alt="Shafi Pulakkad - Founder, GrowClickers"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-bold text-lg drop-shadow-md">Shafi Pulakkad</p>
                  <p className="text-[#F5B700] text-xs font-mono tracking-wider uppercase drop-shadow">Founder, GrowClickers</p>
                </div>
              </motion.div>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-5 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.linkedin.com/in/muhammed-shafi-v/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs py-2 px-4 group"
                >
                  <Linkedin size={14} className="transition-transform group-hover:rotate-6" />
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.instagram.com/shafi_pulakkad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs py-2 px-4 group"
                >
                  <Instagram size={14} className="transition-transform group-hover:rotate-6" />
                  Instagram
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_PREMIUM }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              className="inline-flex items-center gap-1.5 mb-3"
            >
              <Sparkles size={13} className="text-[#F5B700]" />
              <span className="section-label mb-0">The Founder</span>
            </motion.div>

            <h2 className="section-heading mb-5">
              <span className="block overflow-hidden py-2 -my-1.5">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={isInView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                  className="inline-block"
                >
                  <motion.span
                    whileHover={{
                      y: -8,
                      scale: 1.035,
                      filter: "drop-shadow(0 12px 24px rgba(255, 255, 255, 0.25)) drop-shadow(0 4px 10px rgba(245, 183, 0, 0.3))",
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
                    Built Through Experience.{" "}
                  </motion.span>
                </motion.span>
              </span>
              <span className="block overflow-hidden py-2 -my-1.5">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={isInView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.22, ease: EASE_PREMIUM }}
                  className="inline-block text-[#F5B700]"
                >
                  <motion.span
                    whileHover={{
                      y: -8,
                      scale: 1.04,
                      filter: "drop-shadow(0 14px 28px rgba(245, 183, 0, 0.7))",
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
                    Driven by Growth.
                  </motion.span>
                </motion.span>
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.35, ease: EASE_PREMIUM }}
              className="space-y-4 text-gray-400 leading-relaxed mb-8"
            >
              <p>
                GrowClickers was founded by <strong className="text-white">Shafi Pulakkad</strong>, a performance marketer and business growth strategist based in Kerala, India.
              </p>
              <p>
                With hands-on experience in managing Meta Ads and Google Ads campaigns across multiple industries, Shafi built GrowClickers to offer businesses something beyond typical agency work — a genuine growth partnership built on strategy, transparency, and real results.
              </p>
              <p>
                The same experience that drives client campaigns now powers GrowClickers Academy, where Shafi personally mentors students in performance marketing through practical, real-world learning.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Platform Expertise", value: "Meta + Google" },
                { label: "Approach", value: "Strategy First" },
                { label: "Location", value: "Kerala, India" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 + idx * 0.08, ease: EASE_PREMIUM }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="card-dark p-3 text-center hover:border-[#F5B700]/40 transition-colors"
                >
                  <div className="text-[#F5B700] font-bold text-xs">{item.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/about" className="btn-primary group">
                Meet the Founder
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

