import type { Metadata } from "next";
import AcademyPage from "@/components/pages/AcademyPage";

export const metadata: Metadata = {
  title: "GrowClickers Academy | Performance Marketing Courses",
  description:
    "Learn Meta Ads and Google Ads through personal 1:1 mentorship and group training at GrowClickers Academy. Practical performance marketing education in Kerala.",
  alternates: { canonical: "https://growclickers.com/academy" },
};

export default function Academy() {
  return <AcademyPage />;
}

