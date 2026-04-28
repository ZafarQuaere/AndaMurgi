import type { Transition } from "framer-motion";

/** Calm, slow easing — no snappy UI motion */
export const calmEase: Transition["ease"] = [0.22, 1, 0.36, 1];

export const calmTransition: Transition = {
  duration: 0.65,
  ease: calmEase,
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: calmTransition,
  },
};

export const fadeInView = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ...calmTransition, duration: 0.7 },
  },
};

/** Use with whileInView on section wrappers */
export const viewViewport = {
  once: true,
  margin: "-72px" as const,
  amount: 0.2,
};
