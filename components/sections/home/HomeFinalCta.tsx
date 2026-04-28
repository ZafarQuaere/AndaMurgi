"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInView, viewViewport } from "@/lib/motion";

export function HomeFinalCta() {
  return (
    <motion.section
      className="py-32"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#4f6359] p-16 text-center md:p-24">
          <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-primary-dim blur-[120px]" />
          <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-primary-dim opacity-50 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-headline mb-8 text-5xl text-on-primary md:text-7xl">
              Ready to start your path?
            </h2>
            <p className="mb-12 text-xl text-on-primary/80 md:text-2xl">
              Take the first step toward a more peaceful and balanced life. Book
              a confidential introductory consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#f8faf9] px-12 py-6 text-xl font-bold text-[#4f6359] shadow-xl transition-all hover:bg-[#e8fef1]"
            >
              Request Your Appointment
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
