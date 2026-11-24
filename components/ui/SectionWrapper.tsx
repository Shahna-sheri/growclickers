"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/animations";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function SectionWrapper({ children, className = "", id, delay = 0 }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: EASE_PREMIUM }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
