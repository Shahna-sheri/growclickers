"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Monitor, Video, FileText, GraduationCap, Sparkles } from "lucide-react";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { EASE_PREMIUM } from "@/lib/animations";

const features = [
  { icon: Users, title: "Personal 1:1 Mentorship", desc: "One-on-one sessions tailored to your pace and goals." },
  { icon: Monitor, title: "Group Training", desc: "Collaborative learning with structured live sessions." },
  { icon: Video, title: "Live Sessions", desc: "Real-time learning with practical demonstrations." },
  { icon: FileText, title: "Campaign Planning", desc: "Learn by building and planning real campaigns." },
];

export default function AcademyPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const academyUrl = createWhatsAppUrl(WHATSAPP_MESSAGES.academyEnquiry);

  return (
    <section ref={ref} className="bg-[#080808] py-20 md:py-28 border-y border-[#1A1A1A] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[350px] bg-[#F5B700]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              className="inline-flex items-center gap-1.5 mb-3"
            >
              <Sparkles size={13} className="text-[#F5B700]" />
              <span className="section-label mb-0">GrowClickers Academy</span>
            </motion.div>

            <h2 className="section-heading mb-5">
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={isInView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                  className="inline-block"
                >
                  Learn Marketing Through{" "}
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={isInView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.22, ease: EASE_PREMIUM }}
                  className="inline-block text-[#F5B700]"
                >
                  Practical Experience.
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.35, ease: EASE_PREMIUM }}
              className="text-gray-400 leading-relaxed mb-8"
            >
              GrowClickers Academy teaches performance marketing through hands-on, practical learning — not just theory. Every lesson is built around real campaigns, real data, and real business scenarios.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: EASE_PREMIUM }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-start gap-3 group cursor-default"
                >
                  <div className="w-9 h-9 bg-[#F5B700]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#F5B700]/20 transition-all duration-300 group-hover:scale-110">
                    <f.icon size={18} className="text-[#F5B700] transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm group-hover:text-[#F5B700] transition-colors">{f.title}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: EASE_PREMIUM }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="/academy" className="btn-primary group">
                  <GraduationCap size={18} className="transition-transform duration-300 group-hover:rotate-6" />
                  Explore Academy Courses
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                  Enquire Now
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Course cards preview */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE_PREMIUM }}
            className="space-y-4"
          >
            {[
              { type: "1:1 Mentorship", title: "Meta Ads Mastery", duration: "3 Months", fee: "₹49,999", badge: "Most Popular" },
              { type: "1:1 Mentorship", title: "Google Ads Mastery", duration: "3 Months", fee: "₹59,999" },
              { type: "Group Training", title: "Complete Performance Marketing", duration: "6 Months", fee: "₹34,999", badge: "Best Value" },
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: EASE_PREMIUM }}
                whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.25, ease: EASE_PREMIUM } }}
                className="card-dark p-5 flex items-center justify-between gap-4 hover:border-[#F5B700]/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle top border glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-gray-400 font-medium">{course.type}</span>
                    {course.badge && (
                      <span className="text-[10px] bg-[#F5B700] text-[#050505] font-bold px-1.5 py-0.5 rounded shadow-sm shadow-[#F5B700]/30">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-white font-semibold text-sm group-hover:text-[#F5B700] transition-colors">{course.title}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{course.duration}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[#F5B700] font-bold text-base">{course.fee}</div>
                  <div className="text-gray-500 text-xs">onwards</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

