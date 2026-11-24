"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "COCS", logo: "/images/cocs-logo.jpg" },
  { name: "Gifted", logo: "/images/gifted-logo.jpg" },
  { name: "Kokkadans", logo: "/images/kokkadans-logo.png" },
  { name: "Radgiver", logo: "/images/radgiver-logo.png" },
  { name: "Rayyan", logo: "/images/rayyan-logo.jpg" },
  { name: "Noushi's Naturals", logo: "/images/noushis-naturals-logo.jpg" },
  { name: "Pecific", logo: "/images/pecific-appliances-logo.jpg" },
  { name: "Z1fitto", logo: "/images/z-dance-fitness-logo.jpg" },
  { name: "Prep D", logo: "/images/prep-d-logo.jpg" },
  { name: "Savari Cycles", logo: "/images/savari-cycles-logo.jpg" },
  { name: "Sizore", logo: "/images/sizore-logo.jpg" },
  { name: "VIPIN KK & CO", logo: "/images/vipin-kk-ca-logo.jpg" },
  { name: "Saife Valappra", logo: "/images/saife-valappra-logo.jpg" },
  { name: "Ajmal Isudheen", logo: "/images/ajmal-isudheen-logo.png" },
];

export default function BrandMarquee() {
  // Duplicate for seamless infinite loop
  const marqueeList = [...brands, ...brands];

  return (
    <section className="relative py-12 bg-[#050505] border-y border-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono tracking-[0.25em] uppercase text-gray-500"
        >
          Trusted by High-Growth Brands & Businesses
        </motion.p>
      </div>

      {/* Gradient edge masks for seamless fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Infinite track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 py-2">
          {marqueeList.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#111] border border-[#262626] group-hover:border-[#F5B700]/50 p-1 flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={34}
                  height={34}
                  className="object-contain max-h-8 max-w-8"
                />
              </div>
              <span className="text-gray-400 group-hover:text-white font-medium text-xs tracking-wide transition-colors whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
