"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { assets } from "@/lib/assets";
import { fadeInView, viewViewport } from "@/lib/motion";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=1221+Willow+Creek+Lane+Suite+400+Portland+OR+97204";

type ContactFormValues = {
  fullName: string;
  email: string;
  message: string;
};

export function ContactFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: { fullName: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.info("Contact inquiry:", data);
    reset();
  };

  return (
    <motion.section
      className="mx-auto max-w-screen-2xl px-6 md:px-12"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="rounded-[3rem] bg-surface-container-low p-12 lg:col-span-7">
          <h2 className="font-headline mb-8 text-3xl font-semibold text-on-surface">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-full-name"
                  className="ml-1 text-sm font-medium text-on-surface-variant"
                >
                  Full Name
                </label>
                <input
                  id="contact-full-name"
                  autoComplete="name"
                  placeholder="Evelyn Harper"
                  className="w-full rounded-xl border-none bg-surface-container-highest px-6 py-4 transition-all focus:ring-2 focus:ring-primary"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  {...register("fullName", { required: "Name is required" })}
                />
                {errors.fullName ? (
                  <p className="text-sm text-error" role="alert">
                    {errors.fullName.message}
                  </p>
                ) : null}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="ml-1 text-sm font-medium text-on-surface-variant"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="evelyn@example.com"
                  className="w-full rounded-xl border-none bg-surface-container-highest px-6 py-4 transition-all focus:ring-2 focus:ring-primary"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email ? (
                  <p className="text-sm text-error" role="alert">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="ml-1 text-sm font-medium text-on-surface-variant"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="How can we help you find your path?"
                className="w-full rounded-xl border-none bg-surface-container-highest px-6 py-4 transition-all focus:ring-2 focus:ring-primary"
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message ? (
                <p className="text-sm text-error" role="alert">
                  {errors.message.message}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-primary to-primary-dim px-12 py-4 text-lg font-semibold text-on-primary transition-transform hover:scale-[1.02] active:scale-[0.98] md:w-auto"
            >
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex-1 rounded-[3rem] bg-surface-container-highest p-10">
            <div className="mb-8 flex items-start gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-container text-primary">
                <span className="material-symbols-outlined text-3xl">
                  location_on
                </span>
              </div>
              <div>
                <h3 className="font-headline mb-1 text-xl font-bold">
                  Our Sanctuary
                </h3>
                <p className="text-on-surface-variant">
                  1221 Willow Creek Lane, Suite 400
                  <br />
                  Portland, OR 97204
                </p>
              </div>
            </div>
            <div className="mb-8 flex items-start gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tertiary-container text-tertiary">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <div>
                <h3 className="font-headline mb-1 text-xl font-bold">
                  Direct Line
                </h3>
                <p className="text-on-surface-variant">
                  (503) 555-0192
                  <br />
                  Mon – Fri, 9am – 6pm
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-outline-variant/20 pt-8">
              <h4 className="font-headline mb-4 text-lg font-bold">
                Patient Support
              </h4>
              <p className="leading-relaxed text-on-surface-variant">
                For urgent matters or cancellations within 24 hours, please call
                us directly for immediate assistance.
              </p>
            </div>
          </div>

          <div className="group relative h-64 overflow-hidden rounded-[3rem]">
            <Image
              src={assets.contact.map}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div
              className="absolute inset-0 bg-primary/10 mix-blend-multiply"
              aria-hidden
            />
            <div className="absolute bottom-6 left-6 right-6">
              <Link
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel flex items-center justify-between rounded-2xl px-6 py-4"
              >
                <span className="text-sm font-semibold">View on Google Maps</span>
                <span className="material-symbols-outlined">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
