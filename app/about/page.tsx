import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About GrowClickers | Founder Shafi Pulakkad",
  description:
    "Learn about GrowClickers, our philosophy, mission, and founder Shafi Pulakkad — a performance marketer and business growth strategist based in Kerala, India.",
  alternates: { canonical: "https://growclickers.com/about" },
};

export default function About() {
  return <AboutPage />;
}

