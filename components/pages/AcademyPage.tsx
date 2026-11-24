"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses, Course } from "@/data/courses";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { EASE_PREMIUM } from "@/lib/animations";
import {
  CheckCircle2,
  Clock,
  GraduationCap,
  HelpCircle,
  MessageCircle,
  Users,
  Video,
  X,
  BookOpen,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AcademyPage() {
  const [selectedFormat, setSelectedFormat] = useState<"all" | "one-on-one" | "group">("all");
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const filteredCourses = courses.filter((c) => {
    if (selectedFormat === "all") return true;
    return c.category === selectedFormat;
  });

  return (
    <div className="bg-[#050505] min-h-screen pt-24 text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-[#1A1A1A]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,183,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,183,0,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-[#F5B700]/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="inline-flex items-center gap-2 border border-[#F5B700]/30 bg-[#F5B700]/10 rounded-full px-4 py-1.5 mb-6 shadow-sm shadow-[#F5B700]/10"
          >
            <GraduationCap size={16} className="text-[#F5B700]" />
            <span className="text-[#F5B700] text-xs font-semibold tracking-widest uppercase">
              GrowClickers Academy
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                className="inline-block"
              >
                Don&apos;t Just Learn Marketing.
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.22, ease: EASE_PREMIUM }}
                className="inline-block text-[#F5B700]"
              >
                Learn How to Generate Real Results.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: EASE_PREMIUM }}
            className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            No generic theory or outdated tutorials. Master performance marketing directly on real ad accounts,
            live campaign setups, and actual client scenarios guided by seasoned practitioners.
          </motion.p>

          {/* Quick value propositions */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { icon: Users, title: "1:1 & Group Tracks", desc: "Choose your pace and coaching depth" },
              { icon: Video, title: "Live Ad Accounts", desc: "Hands-on execution, zero dummy tasks" },
              { icon: BookOpen, title: "Strategic Thinking", desc: "Beyond button clicking into business ROI" },
              { icon: ShieldCheck, title: "Post-Course Support", desc: "Ongoing mentorship for campaigns" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: EASE_PREMIUM }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#111] border border-[#262626] hover:border-[#F5B700]/40 rounded-xl p-4 transition-colors"
              >
                <item.icon size={20} className="text-[#F5B700] mb-2" />
                <div className="text-white text-xs font-bold">{item.title}</div>
                <div className="text-gray-500 text-[11px] mt-0.5">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Filter Pills with smooth spring hover */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: EASE_PREMIUM }}
            className="flex justify-center gap-3 mt-12"
          >
            {[
              { id: "all", label: "All Programs" },
              { id: "one-on-one", label: "Personal 1:1 Mentorship" },
              { id: "group", label: "Group Cohorts" },
            ].map((f) => (
              <motion.button
                key={f.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedFormat(f.id as "all" | "one-on-one" | "group")}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 border ${
                  selectedFormat === f.id
                    ? "bg-[#F5B700] text-[#050505] border-[#F5B700] shadow-md shadow-[#F5B700]/25 font-bold"
                    : "bg-[#111111] text-gray-400 border-[#2A2A2A] hover:border-[#F5B700]/40 hover:text-white"
                }`}
              >
                {f.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => {
            const courseWaUrl = createWhatsAppUrl(course.whatsappMessage);

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: EASE_PREMIUM }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE_PREMIUM } }}
                className="card-dark border border-[#282828] rounded-2xl overflow-hidden hover:border-[#F5B700]/50 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Badge if exists */}
                {course.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-[#F5B700] text-[#050505] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                    {course.badge}
                  </div>
                )}

                <div>
                  {/* Top Bar */}
                  <div className="p-6 md:p-7 border-b border-[#222] bg-gradient-to-br from-[#141414] to-[#181818]">
                    <div className="text-[11px] font-mono text-[#F5B700] uppercase tracking-wider mb-2">
                      {course.type}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#F5B700] transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                      <Clock size={14} className="text-[#F5B700]" />
                      <span>Duration: <strong className="text-white">{course.duration}</strong></span>
                    </div>
                  </div>

                  {/* Pricing Strip */}
                  <div className="px-6 py-5 bg-[#0D0D0D] border-b border-[#222] flex items-baseline justify-between">
                    <div>
                      <div className="text-[11px] text-gray-500 uppercase font-medium">Program Fee</div>
                      <div className="text-3xl font-black text-[#F5B700] tracking-tight">{course.fee}</div>
                    </div>
                    <span className="text-[11px] text-gray-500 italic">All-inclusive fee</span>
                  </div>

                  {/* Body & Highlights */}
                  <div className="p-6 space-y-5">
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {course.shortDescription}
                    </p>

                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Program Highlights
                      </h4>
                      <ul className="space-y-2">
                        {course.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <CheckCircle2 size={14} className="text-[#F5B700] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 border-t border-[#222] bg-[#101010] space-y-2.5">
                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="w-full text-center py-2.5 px-4 text-xs font-semibold text-gray-300 border border-[#333] rounded-md hover:border-[#F5B700] hover:text-[#F5B700] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <BookOpen size={14} />
                    View Curriculum & Modules
                  </button>
                  <a
                    href={courseWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-xs py-3"
                  >
                    <MessageCircle size={15} />
                    Apply / Enquire for this Course
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Curriculum Modal */}
      <AnimatePresence>
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#121212] border border-[#333] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
            >
              <button
                onClick={() => setActiveCourseModal(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#222] text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="text-xs font-mono uppercase text-[#F5B700] tracking-widest mb-1">
                {activeCourseModal.type}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeCourseModal.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-gray-400 pb-4 border-b border-[#242424] mb-6">
                <span>Duration: <strong className="text-white">{activeCourseModal.duration}</strong></span>
                <span>•</span>
                <span>Fee: <strong className="text-[#F5B700]">{activeCourseModal.fee}</strong></span>
              </div>

              {/* Modules breakdown */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold text-[#F5B700] uppercase tracking-wider">
                  Detailed Syllabus & Modules
                </h4>
                {activeCourseModal.modules.map((mod, i) => (
                  <div key={i} className="bg-[#181818] border border-[#262626] rounded-xl p-4">
                    <h5 className="text-sm font-bold text-white mb-2.5 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F5B700]/20 text-[#F5B700] text-[11px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      {mod.title}
                    </h5>
                    <ul className="space-y-1.5 pl-7">
                      {mod.topics.map((t, idx) => (
                        <li key={idx} className="text-xs text-gray-400 list-disc marker:text-[#F5B700]">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#242424]">
                <button
                  onClick={() => setActiveCourseModal(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md border border-[#333] text-xs text-gray-400 hover:text-white"
                >
                  Close Curriculum
                </button>
                <a
                  href={createWhatsAppUrl(activeCourseModal.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-primary text-xs py-2.5 px-6"
                >
                  <MessageCircle size={16} />
                  Enquire Admission on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Academy FAQ / Learning Journey */}
      <section className="bg-[#0A0A0A] border-t border-[#1F1F1F] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Common Inquiries</span>
            <h3 className="section-heading mt-2">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the difference between 1:1 Mentorship and Group Training?",
                a: "In 1:1 Mentorship, sessions are conducted privately with personalized pacing, custom business case reviews, and direct mentor attention to your specific ad campaigns. Group cohorts follow structured weekly schedules with collaborative peer interactions and group doubt clearing.",
              },
              {
                q: "Do I get to run campaigns on real ad accounts?",
                a: "Yes. Our philosophy is 100% practical. You will set up real Business Managers, configure Meta and Google conversion tracking, construct audiences, and optimize real campaigns instead of working solely on mock setups.",
              },
              {
                q: "Are the courses suitable for beginners or experienced marketers?",
                a: "We offer curricula that begin with core fundamentals and advance to complex attribution, scaling strategies, and multi-channel performance marketing suitable for business owners, agency freelancers, and aspiring marketers.",
              },
              {
                q: "How does admission work?",
                a: "Since cohort seats and 1:1 mentorship slots are strictly capped for personalized quality, admission is confirmed via a preliminary WhatsApp discussion where we evaluate your goals and ensure alignment with the curriculum.",
              },
            ].map((faq, i) => (
              <div key={i} className="card-dark p-6 border border-[#242424]">
                <h4 className="text-white font-semibold text-sm sm:text-base flex items-start gap-3 mb-2">
                  <HelpCircle size={18} className="text-[#F5B700] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Final Academy CTA */}
          <div className="mt-14 text-center">
            <p className="text-gray-400 text-sm mb-5">
              Ready to take your digital marketing career or business advertising to a professional level?
            </p>
            <a
              href={createWhatsAppUrl(
                "Hi GrowClickers Academy, I'd like to consult on which performance marketing course is best for my background."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Talk to Academy Counsellor on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

