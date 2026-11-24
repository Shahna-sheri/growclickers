"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { EASE_PREMIUM } from "@/lib/animations";
import {
  Compass,
  Instagram,
  Linkedin,
  MessageCircle,
  Shield,
  Target,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#F5B700]/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="inline-flex items-center gap-1.5 mb-3"
          >
            <Sparkles size={13} className="text-[#F5B700]" />
            <span className="section-label mb-0">Brand & Leadership</span>
          </motion.div>

          <h1 className="section-heading mt-2 mb-6 max-w-4xl mx-auto">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                className="inline-block"
              >
                Built on Strategy. Driven by Real{" "}
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.22, ease: EASE_PREMIUM }}
                className="inline-block text-[#F5B700]"
              >
                Business Growth.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: EASE_PREMIUM }}
            className="section-subheading max-w-3xl mx-auto"
          >
            GrowClickers was born out of a clear realization: traditional marketing agencies sell clicks and superficial impressions, but businesses actually need qualified customers, brand strength, and predictable revenue systems.
          </motion.p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Visual Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative accent frames */}
              <div className="absolute -top-3 -left-3 w-28 h-28 border-t-2 border-l-2 border-[#F5B700]" />
              <div className="absolute -bottom-3 -right-3 w-28 h-28 border-b-2 border-r-2 border-[#F5B700]" />

              {/* Full portrait photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] group">
                <Image
                  src="/images/shafi-pulakkad.jpg"
                  alt="Shafi Pulakkad - Founder & Growth Strategist"
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Shafi Pulakkad</h3>
                  <p className="text-[#F5B700] text-xs font-mono uppercase tracking-widest mb-3">
                    Founder & Growth Strategist
                  </p>
                  <p className="text-gray-400 text-xs mb-4">
                    Palakkad | Kozhikode, Kerala, India | UAE
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/muhammed-shafi-v/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-[#F5B700] hover:border-[#F5B700] transition-colors"
                      aria-label="Shafi Pulakkad LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="https://www.instagram.com/shafi_pulakkad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-[#F5B700] hover:border-[#F5B700] transition-colors"
                      aria-label="Shafi Pulakkad Instagram"
                    >
                      <Instagram size={16} />
                    </a>
                    <a
                      href={createWhatsAppUrl(
                        "Hi Shafi, I would like to connect with you regarding business growth and marketing."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#F5B700] text-[#050505] font-bold hover:bg-[#FFD84D] transition-colors"
                      aria-label="Chat on WhatsApp"
                    >
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founder Bio / Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F5B700] uppercase tracking-wider">
              <Compass size={14} /> The Story Behind GrowClickers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              &ldquo;Marketing without strategic business clarity is merely an expensive gamble.&rdquo;
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded by performance marketing practitioner <strong>Shafi Pulakkad</strong>, GrowClickers was created to bridge a massive gap in the market: business owners were spending heavily on agencies that celebrated vanity metrics — likes, shares, and superficial impressions — while sales pipelines remained dry.
              </p>
              <p>
                Shafi began his marketing journey working deeply with ad platforms, testing hypotheses across Meta Ads and Google Ads ecosystems. Through years of hands-on campaign execution across real estate, education, local enterprises, and high-ticket service brands, one core reality became evident:
              </p>
              <blockquote className="border-l-2 border-[#F5B700] pl-4 italic text-gray-200 bg-[#111] p-3 rounded-r-lg">
                &ldquo;Running ads cannot rescue an unclear offer, a weak brand, or a broken sales process. True growth happens when your brand positioning, your customer value proposition, and your ad campaigns operate in unison.&rdquo;
              </blockquote>
              <p>
                Today, GrowClickers acts as a dedicated strategic growth partner. We sit on the same side of the table as business owners — reviewing cost per acquisition, customer qualification, brand perception, and sustainable scaling.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-[#121212] border border-[#242424] rounded-xl p-4">
                <div className="text-2xl font-black text-[#F5B700]">100%</div>
                <div className="text-xs text-gray-400 mt-1">Verified Campaign Ethics</div>
              </div>
              <div className="bg-[#121212] border border-[#242424] rounded-xl p-4">
                <div className="text-2xl font-black text-[#F5B700]">360°</div>
                <div className="text-xs text-gray-400 mt-1">Growth Methodology</div>
              </div>
              <div className="bg-[#121212] border border-[#242424] rounded-xl p-4 col-span-2 sm:col-span-1">
                <div className="text-2xl font-black text-[#F5B700]">Dual Track</div>
                <div className="text-xs text-gray-400 mt-1">Agency + Practical Academy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values / Philosophy */}
      <section className="py-20 bg-[#090909] border-y border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Our Principles</span>
            <h2 className="section-heading mt-2">
              How We Think &amp; Work
            </h2>
            <p className="section-subheading">
              Four fundamental rules govern every client engagement, ad dollar spent, and academy module taught.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Radical Transparency",
                desc: "We never conceal data or fabricate results. If an ad angle fails, we analyze why and iterate openly with real numbers.",
              },
              {
                icon: Target,
                title: "Business-First Thinking",
                desc: "We prioritize bottom-line business metrics — qualified leads, customer acquisition cost, and revenue — over vanity clicks.",
              },
              {
                icon: TrendingUp,
                title: "Sustainable Scalability",
                desc: "We build systems that continue generating inquiries over time, avoiding flash-in-the-pan gimmicks that hurt brand equity.",
              },
              {
                icon: Users,
                title: "Partnership, Not Outsourcing",
                desc: "We operate as an extension of your executive leadership, providing strategic counsel beyond tactical media buying.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="card-dark p-7 border border-[#242424] hover:border-[#F5B700]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5B700]/10 flex items-center justify-center mb-5">
                  <v.icon size={24} className="text-[#F5B700]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          Looking for a strategic partner to steer your business growth?
        </h3>
        <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
          Reach out to discuss your current business status and explore whether GrowClickers is the right growth partner for your vision.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Contact GrowClickers
          </Link>
          <a
            href={createWhatsAppUrl(
              "Hi Shafi, I read the GrowClickers story and would like to arrange a growth discussion."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MessageCircle size={16} />
            Connect directly on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

