import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import BrandIntro from "@/components/home/BrandIntro";
import GrowthSystem from "@/components/home/GrowthSystem";
import ServicesOverview from "@/components/home/ServicesOverview";
import ResultsPreview from "@/components/home/ResultsPreview";
import AcademyPreview from "@/components/home/AcademyPreview";
import FounderPreview from "@/components/home/FounderPreview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "GrowClickers | Business Growth, Branding & Performance Marketing",
  description:
    "GrowClickers helps businesses build stronger brands, generate quality leads, and grow through branding, performance marketing, Meta Ads, Google Ads, and strategic marketing systems.",
  alternates: { canonical: "https://growclickers.com" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntro />
      <GrowthSystem />
      <ServicesOverview />
      <ResultsPreview />
      <AcademyPreview />
      <FounderPreview />
      <FinalCTA />
    </>
  );
}

