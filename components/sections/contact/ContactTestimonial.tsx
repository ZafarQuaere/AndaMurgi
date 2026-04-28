"use client";

import { motion } from "framer-motion";
import { fadeInView, viewViewport } from "@/lib/motion";

export function ContactTestimonial() {
  return (
    <motion.section
      className="mx-auto mt-32 max-w-4xl px-6 text-center md:px-12"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="rounded-[3rem] bg-tertiary-container/30 p-16">
        <span className="material-symbols-outlined mb-6 text-5xl text-tertiary">
          format_quote
        </span>
        <blockquote className="font-headline mb-8 text-3xl italic leading-relaxed text-on-tertiary-container">
          &ldquo;Finding SerenePath was the first step toward reclaiming my
          sense of self. The atmosphere alone is healing.&rdquo;
        </blockquote>
        <cite className="text-sm font-bold uppercase tracking-widest text-tertiary not-italic">
          — Dr. Julian Vance, Client
        </cite>
      </div>
    </motion.section>
  );
}
