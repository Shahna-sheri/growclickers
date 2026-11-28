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
  { name: "Z1 FIT | Women's Fitness", logo: "/images/z-dance-fitness-logo.jpg" },
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
    <section className="relative py-14 sm:py-16 bg-[#050505] border-y border-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] sm:text-xs font-mono tracking-[0.28em] uppercase text-gray-500"
        >
          Trusted by High-Growth Brands & Businesses
        </motion.p>
      </div>

      {/* Gradient edge masks for seamless fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Infinite track */}
      <div className="flex overflow-hidden py-4">
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 py-3">
          {marqueeList.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-4 shrink-0 px-4 py-2.5 rounded-2xl bg-transparent hover:bg-[#121212]/90 border border-transparent hover:border-[#F5B700]/30 transition-all duration-300 group cursor-pointer"
            >
              {/* Increased Logo Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-2xl bg-[#111111] border border-[#282828] group-hover:border-[#F5B700]/70 p-2 sm:p-2.5 flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-[0_0_24px_rgba(245,183,0,0.3)] shrink-0 overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={64}
                  height={64}
                  className="object-contain max-h-10 max-w-10 sm:max-h-12 sm:max-w-12 md:max-h-14 md:max-w-14 rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Smooth pop-up animated text on hover */}
              <motion.span
                whileHover={{
                  y: -6,
                  scale: 1.16,
                  color: "#F5B700",
                  filter: "drop-shadow(0 6px 14px rgba(245, 183, 0, 0.6))",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 18,
                  mass: 0.75,
                }}
                className="inline-block text-sm sm:text-base md:text-[17px] font-semibold tracking-wide text-gray-300 group-hover:text-white transition-colors duration-200 whitespace-nowrap cursor-pointer origin-left select-none py-1 px-1.5"
              >
                {brand.name}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
