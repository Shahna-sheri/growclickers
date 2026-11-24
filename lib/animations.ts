import { Variants, Transition } from "framer-motion";

/**
 * Premium cubic-bezier easings inspired by high-end creative agency websites (DesGro Media style).
 * Fast, fluid start with luxurious, smooth deceleration.
 */
export const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const SPRING_SNAPPY = {
  type: "spring",
  stiffness: 380,
  damping: 26,
};

export const SPRING_GENTLE = {
  type: "spring",
  stiffness: 220,
  damping: 24,
};

export const SPRING_BOUNCY = {
  type: "spring",
  stiffness: 400,
  damping: 18,
};

/**
 * Staggered container variants for parent wrappers
 */
export const staggerContainer = (
  staggerDelay = 0.08,
  delayChildren = 0.05
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/**
 * Standard card / item fade-up with premium easing
 */
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Fade in with subtle scale
 */
export const scaleUpVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Masked text reveal variants (words or lines slide up from behind an overflow mask)
 */
export const textMaskContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const textMaskChild: Variants = {
  hidden: {
    y: "115%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Button hover & active interaction props
 */
export const buttonHover = {
  whileHover: {
    scale: 1.025,
    y: -2,
    transition: { duration: 0.2, ease: EASE_PREMIUM },
  },
  whileTap: {
    scale: 0.97,
    y: 0,
    transition: { duration: 0.1 },
  },
};

/**
 * Interactive card hover elevation props
 */
export const cardHover = {
  whileHover: {
    y: -6,
    transition: { duration: 0.28, ease: EASE_PREMIUM },
  },
};

/**
 * Continuous floating animation for ambient badges or decorative elements
 */
export const floatAnimation = (duration = 6, yOffset = 8) => ({
  animate: {
    y: [-yOffset, yOffset, -yOffset],
  },
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
});
