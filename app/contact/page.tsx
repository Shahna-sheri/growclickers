import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact GrowClickers | Discuss Your Business Goals",
  description:
    "Get in touch with GrowClickers to discuss your business growth, branding, and marketing requirements. Based in Palakkad and Kozhikode, Kerala.",
  alternates: { canonical: "https://growclickers.com/contact" },
};

export default function Contact() {
  return <ContactPage />;
}

