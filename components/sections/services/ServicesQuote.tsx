"use client";

import { motion } from "framer-motion";
import { fadeInView, viewViewport } from "@/lib/motion";

export function ServicesQuote() {
  return (
    <motion.section
      className="mx-auto mt-32 max-w-screen-xl px-6 md:px-12"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="relative overflow-hidden rounded-[4rem] bg-[#f6e2cf] p-20 text-center">
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="material-symbols-outlined mb-8 text-5xl text-tertiary">
            format_quote
          </span>
          <blockquote className="font-headline text-4xl font-bold italic leading-tight text-on-tertiary-fixed md:text-5xl">
            The journey of a thousand miles begins with a single, mindful step
            toward yourself.
          </blockquote>
        </div>
      </div>
    </motion.section>
  );
}
