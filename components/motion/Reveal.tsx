"use client";

import { motion } from "framer-motion";
import { fadeInView } from "@/lib/motion";

type RevealProps = {
  as?: "div" | "header" | "section";
  children: React.ReactNode;
  className?: string;
};

export function Reveal({
  as = "section",
  children,
  className,
}: RevealProps) {
  const MotionTag =
    as === "header" ? motion.header : as === "div" ? motion.div : motion.section;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        // No negative margin — it was shrinking the intersection root on mobile.
        // "some" = trigger as soon as any part of the element enters the viewport.
        amount: "some",
      }}
      variants={fadeInView}
    >
      {children}
    </MotionTag>
  );
}
