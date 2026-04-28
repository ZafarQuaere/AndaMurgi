"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInView, viewViewport } from "@/lib/motion";

export function HomeServicesBento() {
  return (
    <motion.section
      className="bg-[#f8faf9] py-32"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="font-headline mb-4 text-4xl text-on-surface md:text-5xl">
            Therapeutic Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
            Specialized care tailored to your unique psychological needs.
          </p>
        </div>
        <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
          <Link
            href="/services"
            className="group flex cursor-pointer flex-col justify-between rounded-3xl bg-[#d1e8db] p-10 transition-all hover:scale-[1.01] md:col-span-8"
          >
            <div>
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                diversity_1
              </span>
              <h3 className="mb-4 text-3xl text-on-primary-container">
                Individual Counseling
              </h3>
              <p className="max-w-md text-lg text-on-primary-container/80">
                One-on-one sessions focused on anxiety, depression, and personal
                growth in a safe environment.
              </p>
            </div>
            <div className="flex items-center gap-2 font-bold text-primary">
              Learn More{" "}
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>
          <Link
            href="/services"
            className="group flex cursor-pointer flex-col justify-between rounded-3xl bg-[#f6e2cf] p-10 transition-all hover:scale-[1.01] md:col-span-4"
          >
            <div>
              <span className="material-symbols-outlined mb-4 text-4xl text-tertiary">
                favorite
              </span>
              <h3 className="mb-4 text-3xl text-on-tertiary-container">
                Couples Therapy
              </h3>
              <p className="text-on-tertiary-container/80">
                Strengthening connections and resolving conflict through
                empathetic communication.
              </p>
            </div>
            <div className="flex items-center gap-2 font-bold text-tertiary">
              Learn More{" "}
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>
          <Link
            href="/services"
            className="group flex cursor-pointer flex-col justify-between rounded-3xl bg-[#dde4e3] p-10 transition-all hover:scale-[1.01] md:col-span-4"
          >
            <div>
              <span className="material-symbols-outlined mb-4 text-4xl text-secondary">
                self_improvement
              </span>
              <h3 className="mb-4 text-3xl text-on-surface">Mindfulness</h3>
              <p className="text-on-surface-variant">
                Integrating meditation and presence into daily life to manage
                stress and overwhelm.
              </p>
            </div>
            <div className="flex items-center gap-2 font-bold text-secondary">
              Learn More{" "}
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>
          <Link
            href="/services"
            className="group flex cursor-pointer flex-col justify-between rounded-3xl bg-[#d2e5f9] p-10 transition-all hover:scale-[1.01] md:col-span-8"
          >
            <div>
              <span className="material-symbols-outlined mb-4 text-4xl text-secondary">
                psychology
              </span>
              <h3 className="mb-4 text-3xl text-on-secondary-container">
                CBT &amp; Specialized Care
              </h3>
              <p className="max-w-md text-lg text-on-secondary-container/80">
                Targeted behavioral strategies to reshape thought patterns and
                improve mental resilience.
              </p>
            </div>
            <div className="flex items-center gap-2 font-bold text-secondary">
              Learn More{" "}
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
