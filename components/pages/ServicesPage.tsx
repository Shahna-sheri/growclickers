"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import {
  TrendingUp,
  Layers,
  User,
  Target,
  Search,
  Share2,
  Globe,
  Zap,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Layers,
  User,
  Target,
  Search,
  Share2,
  Globe,
  Zap,
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "growth", label: "Strategy & Brand" },
    { id: "performance", label: "Performance Ads" },
    { id: "digital", label: "Digital & Systems" },
  ];

  const filteredServices = services.filter((service) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "growth") {
      return ["business-growth-strategy", "branding-brand-strategy", "personal-branding"].includes(service.id);
    }
    if (activeCategory === "performance") {
      return ["meta-ads", "google-ads"].includes(service.id);
    }
    if (activeCategory === "digital") {
      return ["social-media-management", "website-development", "lead-generation-marketing-systems"].includes(service.id);
    }
    return true;
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#F5B700]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">End-to-End Capabilities</span>
            <h1 className="section-heading mt-3 mb-6 max-w-4xl mx-auto">
              Strategic Services Designed for{" "}
              <span className="text-[#F5B700]">Sustainable Business Growth</span>
            </h1>
            <p className="section-subheading max-w-3xl mx-auto">
              We do not treat marketing as isolated ad clicks. We construct complete growth systems
              spanning strategic positioning, brand authority, high-intent customer acquisition, and conversion infrastructure.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mt-10"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 border ${activeCategory === cat.id
                  ? "bg-[#F5B700] text-[#050505] border-[#F5B700] shadow-md shadow-[#F5B700]/20"
                  : "bg-[#111111] text-gray-400 border-[#2A2A2A] hover:border-[#F5B700]/50 hover:text-white"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || TrendingUp;
            const waUrl = createWhatsAppUrl(service.whatsappMessage);

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-dark p-8 md:p-10 border border-[#242424] hover:border-[#F5B700]/40 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Accent corner bar */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#F5B700] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Icon & Overview */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#111111] border border-[#F5B700]/30 rounded-xl flex items-center justify-center shrink-0 group-hover:border-[#F5B700] transition-colors">
                        <IconComponent size={28} className="text-[#F5B700]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500">
                          Capability #{String(index + 1).padStart(2, "0")}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#F5B700] transition-colors">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-gray-300 text-base leading-relaxed mb-6 font-normal">
                      {service.fullDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-3 px-6 shadow-md"
                      >
                        <MessageCircle size={17} />
                        Enquire for {service.title}
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Key Capabilities List */}
                  <div className="lg:col-span-5 bg-[#121212] border border-[#262626] rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4 text-[#F5B700] text-xs font-bold tracking-widest uppercase">
                      <ShieldCheck size={16} />
                      Key Deliverables & Scope
                    </div>
                    <ul className="space-y-3">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-sm text-gray-300 leading-snug">
                          <CheckCircle2 size={16} className="text-[#F5B700] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-[#0A0A0A] border-t border-[#1F1F1F] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Not sure which service fits your current business stage?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            We evaluate your current customer acquisition channels, market position, and growth bottleneck to recommend a custom roadmap.
          </p>
          <a
            href={createWhatsAppUrl(
              "Hi GrowClickers, I'm not sure which service is right for my business. I'd like to get an initial evaluation."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Schedule a Growth Consultation on WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

