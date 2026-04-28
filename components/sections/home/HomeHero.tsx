"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, calmEase } from "@/lib/motion";
import { assets } from "@/lib/assets";

const primaryHover = {
  scale: 1.015,
  transition: { duration: 0.35, ease: calmEase },
};

const secondaryHover = {
  scale: 1.012,
  transition: { duration: 0.35, ease: calmEase },
};

export function HomeHero() {
  return (
    <section
      className="relative flex min-h-[68vh] items-center overflow-hidden pt-24 pb-16 md:min-h-[72vh] md:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.home.heroForest}
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#f8faf9] via-[#f8faf9]/80 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={staggerItem}
            className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Restoring Inner Balance
          </motion.span>

          <motion.h1
            id="hero-heading"
            variants={staggerItem}
            className="font-headline mb-6 text-4xl leading-tight text-on-surface md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Your Journey to{" "}
            <span className="italic text-primary">Serenity</span> Begins Here.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mb-8 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant md:text-xl"
          >
            SerenePath Clinic provides a compassionate, evidence-based sanctuary
            for mental health and emotional restoration.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <motion.div whileHover={primaryHover} whileTap={{ scale: 0.985 }}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-on-primary transition-opacity hover:opacity-90 md:px-9 md:text-lg"
              >
                Explore Our Approach
                <span className="material-symbols-outlined !text-[1.2rem] md:!text-[1.3rem]">
                  arrow_forward
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={secondaryHover} whileTap={{ scale: 0.985 }}>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-outline-variant/30 px-8 py-3.5 text-center text-base font-semibold text-on-surface transition-colors hover:bg-surface-container-low sm:w-auto md:px-9 md:text-lg"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
