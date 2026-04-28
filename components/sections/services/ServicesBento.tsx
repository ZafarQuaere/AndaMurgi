"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { assets } from "@/lib/assets";
import { fadeInView, viewViewport } from "@/lib/motion";

export function ServicesBento() {
  return (
    <motion.section
      className="mx-auto max-w-screen-2xl px-6 md:px-12"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="group relative min-h-[320px] overflow-hidden rounded-[2.5rem] bg-[#f1f4f3] p-12 md:col-span-8 lg:min-h-[420px]">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-primary">
                  person
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Personal Journey
                </span>
              </div>
              <h2 className="font-headline mb-6 text-4xl font-bold text-on-surface">
                Individual Therapy
              </h2>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-on-surface-variant">
                A private sanctuary for self-discovery and healing. We address
                personal challenges, trauma, and growth through deep, one-on-one
                clinical support.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold text-primary transition-all duration-300 hover:gap-4"
              >
                Learn More{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-0 hidden h-full w-1/3 lg:block">
            <Image
              src={assets.services.individualRoom}
              alt=""
              fill
              className="rounded-l-[3rem] object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              sizes="33vw"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[2.5rem] bg-[#f6e2cf] p-10 transition-colors duration-300 hover:bg-[#e7d4c2] md:col-span-4">
          <div>
            <span className="material-symbols-outlined mb-6 text-3xl text-tertiary">
              psychology
            </span>
            <h2 className="font-headline mb-4 text-2xl font-bold text-on-tertiary-fixed">
              CBT &amp; Evidence-Based
            </h2>
            <p className="mb-6 leading-relaxed text-on-tertiary-fixed-variant">
              Structured, goal-oriented strategies to reframe thought patterns
              and develop practical coping mechanisms for daily life.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-fit border-b border-on-tertiary-fixed pb-1 font-bold text-on-tertiary-fixed"
          >
            Learn More
          </Link>
        </div>

        <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#dde4e3] p-12 md:col-span-6">
          <div className="relative z-10">
            <span className="material-symbols-outlined mb-6 text-3xl text-primary">
              waves
            </span>
            <h2 className="font-headline mb-4 text-3xl font-bold text-on-surface">
              Anxiety Management
            </h2>
            <p className="mb-8 leading-relaxed text-on-surface-variant">
              Specialized protocols for navigating chronic stress, panic, and
              social anxiety. Find your calm center through clinical mindfulness
              and regulation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold text-primary transition-all hover:gap-3"
            >
              Learn More{" "}
              <span className="material-symbols-outlined">north_east</span>
            </Link>
          </div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#4f6359]/10 blur-3xl transition-colors group-hover:bg-[#4f6359]/20" />
        </div>

        <div className="group rounded-[2.5rem] border-2 border-[#4f6359]/5 bg-[#f1f4f3] p-12 md:col-span-6">
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="flex-1">
              <span className="material-symbols-outlined mb-6 text-3xl text-primary">
                favorite
              </span>
              <h2 className="font-headline mb-4 text-3xl font-bold text-on-surface">
                Couples Counseling
              </h2>
              <p className="mb-8 leading-relaxed text-on-surface-variant">
                Rebuilding connection, improving communication, and navigating
                relational transitions with a focus on empathy and shared
                understanding.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold text-primary"
              >
                Learn More{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="h-48 w-full overflow-hidden rounded-[2rem] grayscale transition-all duration-500 hover:grayscale-0 md:w-48 md:shrink-0">
              <Image
                src={assets.services.couplesHands}
                alt=""
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 flex flex-col items-center gap-12 overflow-hidden rounded-[3rem] bg-[#4f6359] p-16 text-[#e8fef1] md:col-span-12 md:flex-row">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <Image
              src={assets.services.ctaHills}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 flex-1">
            <h2 className="font-headline mb-6 text-4xl font-bold md:text-5xl">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-[#e8fef1]/80">
              Our clinicians are trained in various modalities including EMDR,
              DBT, and somatic experiencing. We can curate a specialized plan for
              complex needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="rounded-full bg-[#e8fef1]/10 px-4 py-2 text-sm font-medium">
                EMDR Trauma Therapy
              </span>
              <span className="rounded-full bg-[#e8fef1]/10 px-4 py-2 text-sm font-medium">
                Group Workshops
              </span>
              <span className="rounded-full bg-[#e8fef1]/10 px-4 py-2 text-sm font-medium">
                Somatic Therapy
              </span>
            </div>
          </div>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#e8fef1] px-10 py-5 text-lg font-bold text-[#4f6359] shadow-[0_40px_60px_-20px_rgba(45,52,51,0.05)] transition-transform hover:scale-105"
            >
              Consult with our Specialists
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
