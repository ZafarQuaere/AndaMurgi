"use client";

import { motion } from "framer-motion";
import { fadeInView, viewViewport } from "@/lib/motion";

export function HomeTestimonials() {
  return (
    <motion.section
      className="overflow-hidden bg-[#f1f4f3] py-16 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-headline mb-10 text-center text-3xl text-on-surface md:text-4xl">
          Patient Experiences
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <div className="relative rounded-2xl bg-[#f8faf9] p-6 shadow-sm md:p-7">
            <span className="material-symbols-outlined absolute right-4 top-4 text-4xl text-tertiary/20">
              format_quote
            </span>
            <p className="relative z-10 mb-5 font-headline text-base italic leading-relaxed md:text-[1.0625rem]">
              &ldquo;Finding Dr. Elena was a turning point. Her calm presence and
              insightful approach helped me navigate a very dark period in my
              life with grace.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d1e8db] text-sm font-bold text-primary">
                S
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface md:text-base">
                  Sarah J.
                </p>
                <p className="text-xs text-on-surface-variant">
                  Patient for 2 years
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl bg-[#f8faf9] p-6 shadow-sm md:-translate-y-4 md:p-7">
            <span className="material-symbols-outlined absolute right-4 top-4 text-4xl text-tertiary/20">
              format_quote
            </span>
            <p className="relative z-10 mb-5 font-headline text-base italic leading-relaxed md:text-[1.0625rem]">
              &ldquo;The atmosphere at SerenePath is unlike any other clinic.
              From the moment you walk in, you feel an immediate sense of peace
              and professional care.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d2e5f9] text-sm font-bold text-secondary">
                M
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface md:text-base">
                  Mark T.
                </p>
                <p className="text-xs text-on-surface-variant">
                  Patient for 6 months
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl bg-[#f8faf9] p-6 shadow-sm md:p-7">
            <span className="material-symbols-outlined absolute right-4 top-4 text-4xl text-tertiary/20">
              format_quote
            </span>
            <p className="relative z-10 mb-5 font-headline text-base italic leading-relaxed md:text-[1.0625rem]">
              &ldquo;I&apos;ve recommended Dr. Vance to several friends. Her
              ability to listen deeply and provide practical tools for anxiety
              has been life-changing for me.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f6e2cf] text-sm font-bold text-tertiary">
                L
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface md:text-base">
                  Lydia R.
                </p>
                <p className="text-xs text-on-surface-variant">
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
