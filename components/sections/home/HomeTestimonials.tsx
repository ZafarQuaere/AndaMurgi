"use client";

import { motion } from "framer-motion";
import { fadeInView, viewViewport } from "@/lib/motion";

export function HomeTestimonials() {
  return (
    <motion.section
      className="overflow-hidden bg-[#f1f4f3] py-32"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-headline mb-20 text-center text-4xl text-on-surface md:text-5xl">
          Patient Experiences
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="relative rounded-[2rem] bg-[#f8faf9] p-12 shadow-sm">
            <span className="material-symbols-outlined absolute right-8 top-6 text-6xl text-tertiary/20">
              format_quote
            </span>
            <p className="relative z-10 mb-8 font-headline text-xl italic leading-relaxed">
              &ldquo;Finding Dr. Elena was a turning point. Her calm presence and
              insightful approach helped me navigate a very dark period in my
              life with grace.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d1e8db] font-bold text-primary">
                S
              </div>
              <div>
                <p className="font-bold text-on-surface">Sarah J.</p>
                <p className="text-sm text-on-surface-variant">
                  Patient for 2 years
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2rem] bg-[#f8faf9] p-12 shadow-sm md:-translate-y-8">
            <span className="material-symbols-outlined absolute right-8 top-6 text-6xl text-tertiary/20">
              format_quote
            </span>
            <p className="relative z-10 mb-8 font-headline text-xl italic leading-relaxed">
              &ldquo;The atmosphere at SerenePath is unlike any other clinic.
              From the moment you walk in, you feel an immediate sense of peace
              and professional care.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d2e5f9] font-bold text-secondary">
                M
              </div>
              <div>
                <p className="font-bold text-on-surface">Mark T.</p>
                <p className="text-sm text-on-surface-variant">
                  Patient for 6 months
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2rem] bg-[#f8faf9] p-12 shadow-sm">
            <span className="material-symbols-outlined absolute right-8 top-6 text-6xl text-tertiary/20">
              format_quote
            </span>
            <p className="relative z-10 mb-8 font-headline text-xl italic leading-relaxed">
              &ldquo;I&apos;ve recommended Dr. Vance to several friends. Her
              ability to listen deeply and provide practical tools for anxiety
              has been life-changing for me.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6e2cf] font-bold text-tertiary">
                L
              </div>
              <div>
                <p className="font-bold text-on-surface">Lydia R.</p>
                <p className="text-sm text-on-surface-variant">
                  Patient for 1 year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
