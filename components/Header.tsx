"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, GraduationCap } from "lucide-react";
import { navItems } from "@/data/navigation";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { EASE_PREMIUM } from "@/lib/animations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const businessUrl = createWhatsAppUrl(WHATSAPP_MESSAGES.businessEnquiry);
  const academyUrl = createWhatsAppUrl(WHATSAPP_MESSAGES.academyEnquiry);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-[#2A2A2A]/80 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-9 h-9 rounded-lg overflow-hidden bg-black flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#F5B700] transition-colors shrink-0"
            >
              <Image
                src="/logo.png"
                alt="GrowClickers Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-[#F5B700] transition-colors">
              Grow<span className="text-[#F5B700]">Clickers</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md group ${
                    isActive
                      ? "text-[#F5B700]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#F5B700] rounded-full shadow-[0_0_8px_#F5B700]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={academyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-[#F5B700] transition-colors px-3 py-2 group"
            >
              <GraduationCap size={16} className="transition-transform group-hover:rotate-12 duration-200" />
              Explore Academy
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href={businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-shimmer text-sm py-2.5 px-5 shadow-md shadow-[#F5B700]/20 group"
            >
              <MessageCircle size={16} className="transition-transform group-hover:rotate-12 duration-200" />
              Discuss Your Growth
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: EASE_PREMIUM }}
            className="lg:hidden fixed inset-0 top-16 bg-[#050505]/98 backdrop-blur-lg z-40 overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? "text-[#F5B700] bg-[#F5B700]/10 border-l-2 border-[#F5B700]"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 space-y-3 border-t border-[#2A2A2A] mt-4">
                <a
                  href={academyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  <GraduationCap size={18} />
                  Explore Academy
                </a>
                <a
                  href={businessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <MessageCircle size={18} />
                  Discuss Your Business Growth
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

