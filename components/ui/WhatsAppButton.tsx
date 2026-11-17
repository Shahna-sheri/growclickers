"use client";

import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
}

export default function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  variant = "primary",
  size = "md",
  className = "",
  icon = true,
}: WhatsAppButtonProps) {
  const url = createWhatsAppUrl(message);

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const variantClasses = {
    primary: "bg-[#F5B700] text-[#050505] hover:bg-[#FFD84D]",
    secondary: "border border-[#F5B700] text-[#F5B700] hover:bg-[#F5B700] hover:text-[#050505]",
    outline: "border border-[#2A2A2A] text-white hover:border-[#F5B700] hover:text-[#F5B700]",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center font-bold rounded-md transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <MessageCircle size={size === "lg" ? 20 : size === "sm" ? 14 : 17} />}
      {label}
    </a>
  );
}

