"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/lib/assets";
import { fadeInView, viewViewport } from "@/lib/motion";

export function HomeMeetDoctor() {
  return (
    <motion.section
      className="bg-[#f1f4f3] py-32"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-tertiary-container/30 blur-3xl" />
            <Image
              src={assets.home.elenaPortrait}
              alt="Professional portrait of Dr. Elena Vance"
              width={800}
              height={1000}
              className="relative z-10 aspect-[4/5] w-full object-cover pebble-mask shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-headline mb-8 text-4xl text-on-surface md:text-5xl">
              Meet Dr. Masiha Raquib
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
              <p>
                With over 15 years of experience in clinical psychology, Dr.
                Masiha Raquib focuses on a holistic approach that integrates
                cognitive-behavioral techniques with mindfulness practices.
              </p>
              <p>
                Her philosophy is built on the belief that every individual
                possesses an innate capacity for healing. At SerenePath, she
                creates a non-judgmental space where patients can explore their
                inner landscapes safely.
              </p>
              <div className="border-t border-outline-variant/20 pt-8">
                <p className="font-headline text-2xl italic text-primary">
                  &ldquo;The path to wellness is not a straight line, but a
                  series of mindful steps toward self-discovery.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
