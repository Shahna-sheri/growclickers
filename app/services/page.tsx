import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services | GrowClickers",
  description:
    "Explore GrowClickers services — Business Growth Strategy, Branding, Personal Branding, Meta Ads, Google Ads, Social Media Management, Website Development, and Lead Generation.",
  alternates: { canonical: "https://growclickers.com/services" },
};

export default function Services() {
  return <ServicesPage />;
}

