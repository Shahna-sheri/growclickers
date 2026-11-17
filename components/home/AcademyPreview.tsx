"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Monitor, Video, FileText, GraduationCap } from "lucide-react";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

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
    <section ref={ref} className="bg-[#080808] py-20 md:py-28 border-y border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">GrowClickers Academy</span>
            <h2 className="section-heading mb-5">
              Learn Marketing Through{" "}
              <span className="text-[#F5B700]">Practical Experience.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              GrowClickers Academy teaches performance marketing through hands-on, practical learning — not just theory. Every lesson is built around real campaigns, real data, and real business scenarios.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 bg-[#F5B700]/10 rounded-lg flex items-center justify-center shrink-0">
                    <f.icon size={18} className="text-[#F5B700]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{f.title}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/academy" className="btn-primary">
                <GraduationCap size={18} />
                Explore Academy Courses
              </Link>
              <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Enquire Now
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Course cards preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { type: "1:1 Mentorship", title: "Meta Ads Mastery", duration: "3 Months", fee: "₹49,999", badge: "Most Popular" },
              { type: "1:1 Mentorship", title: "Google Ads Mastery", duration: "3 Months", fee: "₹59,999" },
              { type: "Group Training", title: "Complete Performance Marketing", duration: "6 Months", fee: "₹34,999", badge: "Best Value" },
            ].map((course, i) => (
              <div key={i} className="card-dark p-5 flex items-center justify-between gap-4 hover:border-[#F5B700]/30 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-gray-500 font-medium">{course.type}</span>
                    {course.badge && (
                      <span className="text-[10px] bg-[#F5B700] text-[#050505] font-bold px-1.5 py-0.5 rounded">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-white font-semibold text-sm">{course.title}</h4>
                  <p className="text-gray-600 text-xs mt-0.5">{course.duration}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[#F5B700] font-bold text-base">{course.fee}</div>
                  <div className="text-gray-600 text-xs">onwards</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

