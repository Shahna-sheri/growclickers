"use client";

import { useRef, ElementType } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  highlightText?: string;
  highlightClass?: string;
}

export default function AnimatedText({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
  highlightText,
  highlightClass = "text-[#F5B700]",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: EASE_PREMIUM,
      },
    },
  };

  const MotionComponent = motion(Component);

  return (
    <div ref={ref} className="inline-block overflow-hidden">
      <MotionComponent
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`flex flex-wrap gap-x-[0.28em] gap-y-1 ${className}`}
      >
        {words.map((word, index) => {
          const isHighlight =
            highlightText &&
            word.toLowerCase().includes(highlightText.toLowerCase());

          return (
            <span
              key={`${word}-${index}`}
              className="inline-block overflow-hidden py-1 -my-1"
            >
              <motion.span
                variants={child}
                className={`inline-block ${
                  isHighlight ? highlightClass : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </MotionComponent>
    </div>
  );
}
