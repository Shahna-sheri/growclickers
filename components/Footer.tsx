import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { navItems } from "@/data/navigation";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { COMPANY_SOCIAL_LINKS } from "@/data/socials";

function XIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const businessUrl = createWhatsAppUrl(WHATSAPP_MESSAGES.businessEnquiry);
  const academyUrl = createWhatsAppUrl(WHATSAPP_MESSAGES.academyEnquiry);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E]">
      {/* CTA Strip */}
      <div className="bg-[#F5B700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#050505] text-2xl md:text-3xl font-bold">
              Ready to Grow Your Business?
            </h3>
            <p className="text-[#050505]/70 mt-1 text-sm">
              Let&apos;s discuss your goals and build the right strategy.
            </p>
          </div>
          <a
            href={businessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#050505] text-white font-bold px-7 py-3.5 rounded-md hover:bg-[#1A1A1A] transition-colors whitespace-nowrap"
          >
            <MessageCircle size={18} />
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-4 group">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-black flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#F5B700] transition-colors shrink-0">
              <Image
                src="/logo.png"
                alt="GrowClickers Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="text-white font-bold text-lg group-hover:text-[#F5B700] transition-colors">
              Grow<span className="text-[#F5B700]">Clickers</span>
            </span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            We help businesses build stronger brands, generate quality leads, and grow with a clear marketing strategy.
          </p>
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
                className="w-9 h-9 rounded-md bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-[#F5B700] hover:border-[#F5B700] transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-gray-500 hover:text-[#F5B700] transition-colors text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academy */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Academy</h4>
          <ul className="space-y-2.5">
            {[
              "1:1 Meta Ads Mastery",
              "1:1 Google Ads Mastery",
              "Complete Performance Marketing",
              "Group Training Courses",
            ].map((name) => (
              <li key={name}>
                <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#F5B700] transition-colors text-sm">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href={businessUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-gray-500 hover:text-[#F5B700] transition-colors text-sm">
                <MessageCircle size={15} className="mt-0.5 shrink-0" />
                +91 85905 50785
              </a>
            </li>
            <li>
              <a href="tel:+918590550785" className="flex items-start gap-2.5 text-gray-500 hover:text-[#F5B700] transition-colors text-sm">
                <Phone size={15} className="mt-0.5 shrink-0" />
                +91 85905 50785
              </a>
            </li>
            <li>
              <a href="mailto:growclickers@gmail.com" className="flex items-start gap-2.5 text-gray-500 hover:text-[#F5B700] transition-colors text-sm">
                <Mail size={15} className="mt-0.5 shrink-0" />
                growclickers@gmail.com
              </a>
            </li>
            <li>
              <span className="flex items-start gap-2.5 text-gray-500 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                Palakkad | Kozhikode, Kerala, India | UAE
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© {currentYear} GrowClickers. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Business Growth & Performance Marketing | Kerala, India • UAE</p>
        </div>
      </div>
    </footer>
  );
}

