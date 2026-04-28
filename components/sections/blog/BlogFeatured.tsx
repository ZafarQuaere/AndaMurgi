"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogFeatured } from "@/lib/content/blog";
import { fadeInView, viewViewport } from "@/lib/motion";

export function BlogFeatured() {
  return (
    <motion.section
      className="mx-auto mb-16 max-w-screen-2xl px-6 md:px-12"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="grid grid-cols-1 items-center gap-8 rounded-[2rem] bg-surface-container-low p-6 md:p-8 lg:grid-cols-12">
        <div className="relative h-64 overflow-hidden rounded-xl lg:col-span-7 lg:h-[300px]">
          <Image
            src={blogFeatured.imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority
          />
        </div>
        <div className="lg:col-span-5">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-primary-container px-4 py-1 text-xs font-bold uppercase tracking-wider text-on-primary-container">
              {blogFeatured.tag}
            </span>
            <span className="text-sm text-on-surface-variant">
              {blogFeatured.date}
            </span>
          </div>
          <h2 className="font-headline mb-6 text-4xl leading-snug text-on-surface">
            {blogFeatured.title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
            {blogFeatured.excerpt}
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold text-primary transition-all duration-300 hover:gap-4"
          >
            Read Featured Article{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
