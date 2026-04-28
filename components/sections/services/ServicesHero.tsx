"use client";

import { motion } from "framer-motion";
import { fadeInView, viewViewport } from "@/lib/motion";

export function ServicesHero() {
  return (
    <motion.header
      className="mx-auto mb-24 max-w-screen-xl px-6 md:px-12"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="max-w-3xl">
        <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-tertiary">
          Our Therapeutic Approach
        </span>
        <h1 className="font-headline text-6xl font-bold leading-[1.1] text-on-surface">
          Guided pathways to{" "}
          <span className="font-normal italic text-primary">inner restoration.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-on-surface-variant">
          We offer specialized clinical care rooted in evidence-based practices
          and profound human empathy. Each service is tailored to meet you where
          you are in your journey.
        </p>
      </div>
    </motion.header>
  );
}
