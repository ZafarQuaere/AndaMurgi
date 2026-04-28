"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/lib/assets";
import { fadeInView, viewViewport } from "@/lib/motion";

export function AboutHero() {
  return (
    <motion.section
      className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-16 px-6 pb-24 md:px-12 lg:grid-cols-12 lg:pb-32"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="space-y-8 lg:col-span-7">
        <div className="space-y-4">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-[#4f6359]">
            Compassionate Care
          </span>
          <h1 className="font-headline text-6xl font-bold leading-[1.1] text-[#2d3433] lg:text-7xl">
            Meet Dr. Elena <br />
            <span className="font-normal italic text-[#4f6172]">Valeska</span>
          </h1>
        </div>
        <p className="max-w-2xl text-xl font-light leading-relaxed text-[#596060]">
          &ldquo;My mission is to provide a sanctuary where healing isn&apos;t
          just about managing symptoms, but about rediscovering the inherent
          peace within ourselves.&rdquo;
        </p>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex -space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f8faf9] bg-[#e4e9e8]">
              <span className="material-symbols-outlined text-sm text-[#4f6359]">
                verified
              </span>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f8faf9] bg-[#e4e9e8]">
              <span className="material-symbols-outlined text-sm text-[#4f6359]">
                psychology
              </span>
            </div>
          </div>
          <span className="font-label text-sm font-medium text-[#6b5d4e]">
            Licensed Clinical Psychologist • 15+ Years Experience
          </span>
        </div>
      </div>
      <div className="relative lg:col-span-5">
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-[#f6e2cf] opacity-20 mix-blend-multiply blur-3xl filter" />
        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[#d1e8db] opacity-20 mix-blend-multiply blur-3xl filter" />
        <Image
          src={assets.about.portrait}
          alt="Dr. Masiha Raquib"
          width={700}
          height={900}
          className="relative z-10 w-full pebble-mask shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </motion.section>
  );
}
