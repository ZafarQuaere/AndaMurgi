"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInView, viewViewport } from "@/lib/motion";

type NewsletterForm = {
  email: string;
};

export function BlogNewsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterForm>({
    defaultValues: { email: "" },
  });

  const onSubmit = (data: NewsletterForm) => {
    console.info("Newsletter subscribe:", data.email);
    reset();
  };

  return (
    <motion.section
      className="mx-auto mt-20 max-w-3xl px-6 md:px-12"
      initial="hidden"
      whileInView="show"
      viewport={viewViewport}
      variants={fadeInView}
    >
      <div className="rounded-[2rem] bg-tertiary-container p-10 text-center md:p-12">
        <span className="material-symbols-outlined mb-6 text-5xl text-tertiary">
          mail_outline
        </span>
        <h2 className="font-headline mb-6 text-3xl italic leading-relaxed text-on-tertiary-container">
          &ldquo;The journey of a thousand miles begins with a single, mindful
          breath.&rdquo;
        </h2>
        <p className="mx-auto mb-10 max-w-lg leading-relaxed text-on-tertiary-container/80">
          Subscribe to receive monthly reflections, clinical insights, and
          workshop announcements directly in your inbox.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex max-w-md flex-col gap-4 md:flex-row"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Your email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="Your email address"
            className="flex-1 rounded-full border-none bg-surface-container-lowest px-8 py-4 text-on-surface focus:ring-2 focus:ring-tertiary"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          <button
            type="submit"
            className="rounded-full bg-tertiary px-8 py-4 font-bold text-on-tertiary transition-transform hover:scale-[1.05]"
          >
            Subscribe
          </button>
        </form>
        {errors.email ? (
          <p className="mt-3 text-sm text-error" role="alert">
            {errors.email.message}
          </p>
        ) : null}
      </div>
    </motion.section>
  );
}
