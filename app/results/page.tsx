import type { Metadata } from "next";
import ResultsPage from "@/components/pages/ResultsPage";

export const metadata: Metadata = {
  title: "Results & Case Studies | GrowClickers",
  description:
    "Real campaign data and case studies from GrowClickers. See how we have helped businesses generate leads and grow through Meta Ads, Google Ads, and strategic marketing.",
  alternates: { canonical: "https://growclickers.com/results" },
};

export default function Results() {
  return <ResultsPage />;
}

