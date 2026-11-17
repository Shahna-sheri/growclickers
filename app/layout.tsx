import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://growclickers.com"),
  title: {
    default: "GrowClickers | Business Growth, Branding & Performance Marketing",
    template: "%s | GrowClickers",
  },
  description:
    "GrowClickers helps businesses build stronger brands, generate quality leads, and grow through branding, performance marketing, Meta Ads, Google Ads, and strategic marketing systems.",
  keywords: [
    "business growth",
    "digital marketing",
    "branding",
    "Meta Ads",
    "Google Ads",
    "performance marketing",
    "lead generation",
    "GrowClickers",
    "marketing agency Kerala",
    "Palakkad marketing",
  ],
  authors: [{ name: "GrowClickers" }],
  creator: "GrowClickers",
  publisher: "GrowClickers",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://growclickers.com",
    siteName: "GrowClickers",
    title: "GrowClickers | Business Growth, Branding & Performance Marketing",
    description:
      "GrowClickers helps businesses build stronger brands, generate quality leads, and grow through branding, performance marketing, Meta Ads, Google Ads, and strategic marketing systems.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "GrowClickers - Business Growth & Performance Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowClickers | Business Growth, Branding & Performance Marketing",
    description:
      "GrowClickers helps businesses build stronger brands, generate quality leads, and grow through branding, performance marketing, Meta Ads, Google Ads, and strategic marketing systems.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growclickers.com/#organization",
        name: "GrowClickers",
        url: "https://growclickers.com",
        logo: "https://growclickers.com/logo.png",
        description:
          "GrowClickers is a business growth partner specializing in brand strategy, Meta Ads, Google Ads, and performance marketing systems.",
        sameAs: [
          "https://www.instagram.com/growclickers/",
          "https://www.facebook.com/growclickers/",
          "https://www.youtube.com/@Growclickers",
          "https://www.linkedin.com/company/growclickers/",
          "https://x.com/growclickers",
        ],
        founder: {
          "@type": "Person",
          name: "Shafi Pulakkad",
          sameAs: [
            "https://www.linkedin.com/in/muhammed-shafi-v/",
            "https://www.instagram.com/shafi_pulakkad/",
          ],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Palakkad",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-85905-50785",
          contactType: "customer service",
          email: "growclickers@gmail.com",
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://growclickers.com/academy/#academy",
        name: "GrowClickers Academy",
        url: "https://growclickers.com/academy",
        description:
          "Practical performance marketing education, 1:1 mentorship, and group cohorts for Meta Ads and Google Ads mastery.",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#050505] text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
