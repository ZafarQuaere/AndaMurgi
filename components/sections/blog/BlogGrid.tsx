"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/content/blog";
import { fadeInView, viewViewport } from "@/lib/motion";

export function BlogGrid() {
  return (
    <motion.section
      className="mx-auto max-w-screen-2xl px-6 md:px-12"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group">
            <div className="mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 group-hover:scale-[0.98]">
              <Image
                src={post.imageSrc}
                alt=""
                width={600}
                height={750}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-tertiary">
                {post.tag}
              </span>
              <span className="h-1 w-1 rounded-full bg-outline-variant" />
              <span className="text-sm text-on-surface-variant">
                {post.readTime}
              </span>
            </div>
            <h3 className="font-headline mb-4 text-2xl leading-tight text-on-surface transition-colors group-hover:text-primary">
              {post.title}
            </h3>
            <p className="mb-6 line-clamp-3 text-on-surface-variant">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm italic text-on-surface-variant">
              By {post.author}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center">
        <button
          type="button"
          className="rounded-full border-2 border-primary px-12 py-4 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary"
        >
          Load More Reflections
        </button>
        <div className="mt-8 flex gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-medium text-on-primary"
            aria-current="page"
          >
            1
          </button>
          {[2, 3].map((n) => (
            <button
              key={n}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container-high"
            >
              {n}
            </button>
          ))}
          <span className="flex w-10 items-center justify-center text-on-surface-variant">
            ...
          </span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container-high"
          >
            12
          </button>
        </div>
      </div>
    </motion.section>
  );
}
