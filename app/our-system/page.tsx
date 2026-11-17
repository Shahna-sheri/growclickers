import type { Metadata } from "next";
import OurSystemPage from "@/components/pages/OurSystemPage";

export const metadata: Metadata = {
  title: "Our Growth System | GrowClickers",
  description:
    "Discover the GrowClickers five-step business growth methodology — Build, Brand, Launch, Optimise, Scale — a structured approach to sustainable business growth.",
  alternates: { canonical: "https://growclickers.com/our-system" },
};

export default function OurSystem() {
  return <OurSystemPage />;
}

