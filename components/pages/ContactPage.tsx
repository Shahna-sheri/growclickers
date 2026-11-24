"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { COMPANY_SOCIAL_LINKS } from "@/data/socials";
import { EASE_PREMIUM } from "@/lib/animations";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Sparkles,
} from "lucide-react";

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface FormState {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  service: string;
  requirement: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  requirement?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    service: "",
    requirement: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [generatedMessage, setGeneratedMessage] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please provide your full name.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone/WhatsApp number.";
    } else if (!/^[0-9+ -]{7,16}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email format.";
    }

    if (!form.service) {
      newErrors.service = "Please select a service or enquiry type.";
    }

    if (!form.requirement.trim()) {
      newErrors.requirement = "Please describe your business goals or requirement.";
    } else if (form.requirement.trim().length < 10) {
      newErrors.requirement = "Please provide a bit more detail (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Construct WhatsApp message
    const message = `Hi GrowClickers, I'd like to discuss my business growth requirements:
• Name: ${form.name.trim()}
• Business: ${form.businessName.trim() || "Not specified"}
• Phone: ${form.phone.trim()}
• Email: ${form.email.trim()}
• Service: ${form.service}
• Requirement: ${form.requirement.trim()}`;

    setGeneratedMessage(message);
    setSubmitted(true);

    // Automatically trigger WhatsApp in new tab
    const url = createWhatsAppUrl(message);
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      businessName: "",
      phone: "",
      email: "",
      service: "",
      requirement: "",
    });
    setErrors({});
    setSubmitted(false);
    setGeneratedMessage("");
  };

  const directBusinessUrl = createWhatsAppUrl(WHATSAPP_MESSAGES.contactPageEnquiry);

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
            <span className="section-label mb-0">Initiate Conversation</span>
          </motion.div>

          <h1 className="section-heading mt-2 mb-6 max-w-4xl mx-auto">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
                className="inline-block"
              >
                Let&apos;s Discuss Your{" "}
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.22, ease: EASE_PREMIUM }}
                className="inline-block text-[#F5B700]"
              >
                Business Goals.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: EASE_PREMIUM }}
            className="section-subheading max-w-2xl mx-auto"
          >
            Whether you are looking to audit an underperforming ad account, scale qualified leads, or elevate your brand position, our team is ready to assist.
          </motion.p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <div className="card-dark p-8 border border-[#262626]">
              <h2 className="text-xl font-bold text-white mb-6">Contact Channels</h2>

              <ul className="space-y-6">
                <li>
                  <a
                    href={directBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-gray-300 hover:text-[#F5B700] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#F5B700]/10 border border-[#F5B700]/30 flex items-center justify-center shrink-0 group-hover:bg-[#F5B700] group-hover:text-[#050505] transition-colors">
                      <MessageCircle size={20} className="text-[#F5B700] group-hover:text-[#050505]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-mono">WhatsApp (Direct)</div>
                      <div className="text-sm font-semibold text-white mt-0.5">+91 85905 50785</div>
                      <div className="text-xs text-[#F5B700] mt-0.5">Instant response during business hours</div>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+918590550785"
                    className="flex items-start gap-4 text-gray-300 hover:text-[#F5B700] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#181818] border border-[#2B2B2B] flex items-center justify-center shrink-0 group-hover:border-[#F5B700] transition-colors">
                      <Phone size={20} className="text-gray-400 group-hover:text-[#F5B700]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-mono">Direct Phone Call</div>
                      <div className="text-sm font-semibold text-white mt-0.5">+91 85905 50785</div>
                      <div className="text-xs text-gray-500 mt-0.5">Mon – Sat: 9:30 AM – 6:30 PM IST</div>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:growclickers@gmail.com"
                    className="flex items-start gap-4 text-gray-300 hover:text-[#F5B700] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#181818] border border-[#2B2B2B] flex items-center justify-center shrink-0 group-hover:border-[#F5B700] transition-colors">
                      <Mail size={20} className="text-gray-400 group-hover:text-[#F5B700]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-mono">Email Inquiries</div>
                      <div className="text-sm font-semibold text-white mt-0.5">growclickers@gmail.com</div>
                      <div className="text-xs text-gray-500 mt-0.5">Guaranteed reply within 24 hours</div>
                    </div>
                  </a>
                </li>

                <li className="flex items-start gap-4 text-gray-300">
                  <div className="w-11 h-11 rounded-lg bg-[#181818] border border-[#2B2B2B] flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-mono">Office Locations</div>
                    <div className="text-sm font-semibold text-white mt-0.5">Palakkad | Kozhikode</div>
                    <div className="text-xs text-gray-500 mt-0.5">Kerala, India | UAE</div>
                  </div>
                </li>

                <li className="pt-3 border-t border-[#1F1F1F]">
                  <div className="text-xs text-gray-500 uppercase font-mono mb-3">Connect With Us</div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {[
                      { Icon: Instagram, label: "Instagram", href: COMPANY_SOCIAL_LINKS.instagram },
                      { Icon: Facebook, label: "Facebook", href: COMPANY_SOCIAL_LINKS.facebook },
                      { Icon: Youtube, label: "YouTube", href: COMPANY_SOCIAL_LINKS.youtube },
                      { Icon: Linkedin, label: "LinkedIn", href: COMPANY_SOCIAL_LINKS.linkedin },
                      { Icon: XIcon, label: "X (Twitter)", href: COMPANY_SOCIAL_LINKS.x },
                    ].map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-gray-400 hover:text-[#F5B700] hover:border-[#F5B700] transition-colors"
                        aria-label={label}
                      >
                        <Icon size={17} />
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            {/* What Happens Next Card */}
            <div className="card-dark p-6 border border-[#242424] bg-[#0E0E0E]">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Clock size={16} className="text-[#F5B700]" /> What Happens Next?
              </h3>
              <ol className="space-y-3 text-xs text-gray-400 list-decimal pl-4 leading-relaxed">
                <li>Your inquiry generates a clean, pre-filled WhatsApp message.</li>
                <li>Shafi or a senior growth strategist reviews your details.</li>
                <li>We schedule an exploratory 20-minute alignment call with zero pressure.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp-Connected Form */}
          <div className="lg:col-span-7">
            <div className="card-dark p-8 md:p-10 border border-[#282828] relative">
              <div className="mb-6">
                <span className="text-xs font-mono text-[#F5B700] uppercase tracking-wider">
                  Interactive Growth Inquiry
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  Send Your Inquiry via WhatsApp Flow
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Fill in your details below. Once clicked, this will format a structured inquiry and open WhatsApp automatically.
                </p>
              </div>

              {submitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#121212] border border-[#F5B700]/50 rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-[#F5B700]/10 border border-[#F5B700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-[#F5B700]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Inquiry Formatted Successfully!</h3>
                  <p className="text-xs text-gray-300 max-w-md mx-auto mb-6">
                    A pre-filled WhatsApp conversation has been opened in your browser or WhatsApp app.
                    If it did not launch automatically, tap the button below:
                  </p>

                  {/* Pre-formatted message box preview */}
                  <div className="bg-[#0A0A0A] border border-[#262626] rounded-lg p-4 text-left font-mono text-[11px] text-gray-300 mb-6 whitespace-pre-line overflow-x-auto">
                    {generatedMessage}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={createWhatsAppUrl(generatedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto text-sm py-3 px-6"
                    >
                      <MessageCircle size={18} />
                      Continue to WhatsApp Chat
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3 rounded-md border border-[#333] text-xs text-gray-400 hover:text-white"
                    >
                      Fill Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* The Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Full Name <span className="text-[#F5B700]">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Rahul Nair"
                        className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#F5B700] transition-colors ${
                          errors.name ? "border-red-500/80" : "border-[#333] focus:border-[#F5B700]"
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        value={form.businessName}
                        onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                        placeholder="e.g. Apex Living Developers"
                        className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#F5B700] focus:ring-1 focus:ring-[#F5B700] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        WhatsApp / Phone <span className="text-[#F5B700]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#F5B700] transition-colors ${
                          errors.phone ? "border-red-500/80" : "border-[#333] focus:border-[#F5B700]"
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Email Address <span className="text-[#F5B700]">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#F5B700] transition-colors ${
                          errors.email ? "border-red-500/80" : "border-[#333] focus:border-[#F5B700]"
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Service / Course Interested In <span className="text-[#F5B700]">*</span>
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#F5B700] transition-colors ${
                        errors.service ? "border-red-500/80" : "border-[#333] focus:border-[#F5B700]"
                      }`}
                    >
                      <option value="" className="text-gray-500">
                        -- Select an option --
                      </option>
                      <optgroup label="Agency Services">
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="GrowClickers Academy">
                        <option value="1:1 Meta Ads Mastery (Academy)">1:1 Meta Ads Mastery (Mentorship)</option>
                        <option value="1:1 Google Ads Mastery (Academy)">1:1 Google Ads Mastery (Mentorship)</option>
                        <option value="Complete Performance Marketing (1:1)">Complete Performance Marketing (1:1)</option>
                        <option value="Group Cohort Training (Academy)">Group Cohort Training</option>
                      </optgroup>
                    </select>
                    {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                  </div>

                  {/* Requirement Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Brief Requirement or Challenge <span className="text-[#F5B700]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      placeholder="Tell us about your business, current monthly ad spend or revenue, target audience, and primary growth goal..."
                      className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#F5B700] transition-colors ${
                        errors.requirement ? "border-red-500/80" : "border-[#333] focus:border-[#F5B700]"
                      }`}
                    />
                    {errors.requirement && (
                      <p className="text-red-400 text-xs mt-1">{errors.requirement}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-sm sm:text-base py-3.5 shadow-lg shadow-[#F5B700]/20"
                    >
                      <MessageCircle size={19} />
                      Generate &amp; Submit via WhatsApp
                      <ArrowRight size={17} />
                    </button>
                    <p className="text-[11px] text-gray-500 text-center mt-2.5 flex items-center justify-center gap-1.5">
                      <Shield size={12} className="text-[#F5B700]" />
                      Zero spam. Opens directly in official WhatsApp with your entered parameters.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

