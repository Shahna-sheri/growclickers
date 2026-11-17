"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin, Instagram } from "lucide-react";

export default function FounderPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#050505] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#F5B700]" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#F5B700]" />

              {/* Founder Photo */}
              <div className="relative bg-[#111] border border-[#2A2A2A] rounded-xl aspect-[4/5] overflow-hidden shadow-2xl group">
                <Image
                  src="/images/shafi-pulakkad.jpg"
                  alt="Shafi Pulakkad - Founder, GrowClickers"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-bold text-lg drop-shadow-md">Shafi Pulakkad</p>
                  <p className="text-[#F5B700] text-xs font-mono tracking-wider uppercase drop-shadow">Founder, GrowClickers</p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-5 justify-center lg:justify-start">
                <a href="https://www.linkedin.com/in/muhammed-shafi-v/" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-4">
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/shafi_pulakkad/" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-4">
                  <Instagram size={14} />
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">The Founder</span>
            <h2 className="section-heading mb-5">
              Built Through Experience.{" "}
              <span className="text-[#F5B700]">Driven by Growth.</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>
                GrowClickers was founded by <strong className="text-white">Shafi Pulakkad</strong>, a performance marketer and business growth strategist based in Kerala, India.
              </p>
              <p>
                With hands-on experience in managing Meta Ads and Google Ads campaigns across multiple industries, Shafi built GrowClickers to offer businesses something beyond typical agency work — a genuine growth partnership built on strategy, transparency, and real results.
              </p>
              <p>
                The same experience that drives client campaigns now powers GrowClickers Academy, where Shafi personally mentors students in performance marketing through practical, real-world learning.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Platform Expertise", value: "Meta + Google" },
                { label: "Approach", value: "Strategy First" },
                { label: "Location", value: "Kerala, India" },
              ].map((item) => (
                <div key={item.label} className="card-dark p-3 text-center">
                  <div className="text-[#F5B700] font-bold text-xs">{item.value}</div>
                  <div className="text-gray-600 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Meet the Founder
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

