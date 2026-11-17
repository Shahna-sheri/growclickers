"use client";

import { motion } from "framer-motion";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Business Understanding",
    description:
      "We start with a deep dive into your business — your goals, your current position in the market, your target customers, and the challenges you are facing. Without this foundation, any marketing effort risks missing the mark.",
    points: [
      "Business goals and revenue targets",
      "Current marketing activity and results",
      "Customer profile and buying behaviour",
      "Sales process and conversion points",
      "Existing brand presence and assets",
    ],
  },
  {
    num: "02",
    title: "Market & Competitor Analysis",
    description:
      "We analyse your market landscape — where you stand, who your competitors are, what they are doing well, and where the opportunities lie for your business to differentiate and grow.",
    points: [
      "Competitor digital presence audit",
      "Market positioning analysis",
      "Pricing and offer comparison",
      "Audience gap identification",
      "Growth opportunity mapping",
    ],
  },
  {
    num: "03",
    title: "Brand & Offer Strategy",
    description:
      "We define or refine how your business is positioned, what makes it different, and how it communicates its value. A clear, compelling offer backed by strong brand positioning is essential before any marketing campaign begins.",
    points: [
      "Brand positioning statement",
      "Core value proposition development",
      "Target audience definition",
      "Offer structure and messaging",
      "Brand communication guidelines",
    ],
  },
  {
    num: "04",
    title: "Marketing Strategy",
    description:
      "Based on everything we have learned, we develop a customised marketing strategy — identifying the right channels, the right messages, the right budgets, and the right timelines to achieve your growth goals.",
    points: [
      "Channel selection and prioritisation",
      "Campaign structure and planning",
      "Budget allocation and forecasting",
      "Content and creative strategy",
      "KPIs and success metrics",
    ],
  },
  {
    num: "05",
    title: "Execution",
    description:
      "We execute the marketing strategy — building campaigns, creating content, running advertising, and managing every moving part to ensure your business is showing up in front of the right people with the right message.",
    points: [
      "Campaign setup and launch",
      "Ad creative and copywriting",
      "Audience targeting and testing",
      "Landing page and funnel alignment",
      "Real-time performance monitoring",
    ],
  },
  {
    num: "06",
    title: "Optimisation",
    description:
      "Marketing is not set and forget. We continuously review performance data, test new approaches, and optimise every element of your campaigns to improve results and ensure your budget is working as hard as possible.",
    points: [
      "Weekly campaign performance review",
      "Lead quality assessment",
      "Cost per lead optimisation",
      "Creative and audience testing",
      "Strategic adjustments and scaling",
    ],
  },
];

export default function OurSystemPage() {
  const enquiryUrl = createWhatsAppUrl(
    "Hi GrowClickers, I'd like to apply for a Growth Strategy Discussion. Please share the next steps."
  );

  return (
    <div className="bg-[#050505] min-h-screen pt-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label">Our Methodology</span>
          <h1 className="section-heading mt-3 mb-5 max-w-3xl mx-auto">
            The GrowClickers{" "}
            <span className="text-[#F5B700]">Business Growth System</span>
          </h1>
          <p className="section-subheading max-w-2xl mx-auto">
            A structured, strategic approach to business growth that goes beyond running ads — building systems, brands, and marketing infrastructure that deliver sustainable results.
          </p>
        </motion.div>
      </div>

      {/* Timeline Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5B700]/50 via-[#F5B700]/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative md:pl-24"
              >
                {/* Step number circle */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-[#111] border-2 border-[#F5B700] items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#F5B700] text-[10px] font-bold leading-none">{step.num}</div>
                  </div>
                </div>

                <div className="card-dark p-6 md:p-8 hover:border-[#F5B700]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="md:hidden text-[#F5B700] text-xs font-bold bg-[#F5B700]/10 px-2 py-1 rounded">{step.num}</span>
                    <h2 className="text-white text-xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-5">{step.description}</p>
                  <ul className="space-y-2">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-gray-500 text-sm">
                        <CheckCircle2 size={15} className="text-[#F5B700] mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 bg-[#111] border border-[#2A2A2A] rounded-xl p-10"
        >
          <h3 className="text-white text-2xl font-bold mb-3">
            Apply for a Growth Strategy Discussion
          </h3>
          <p className="text-gray-400 mb-7 max-w-lg mx-auto">
            Interested in working with GrowClickers? Let&apos;s start with a conversation about your business goals.
          </p>
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            <MessageCircle size={20} />
            Apply via WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}

