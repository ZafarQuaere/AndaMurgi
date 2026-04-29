import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function HomeFinalCta() {
  return (
    <Reveal className="py-10 md:py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative mx-auto max-w-xs overflow-hidden rounded-xl bg-[#4f6359] px-4 py-5 text-center sm:max-w-sm md:px-5 md:py-6">
          <div className="absolute -right-20 -top-20 h-36 w-36 rounded-full bg-primary-dim blur-[56px]" />
          <div className="absolute -bottom-20 -left-20 h-36 w-36 rounded-full bg-primary-dim opacity-50 blur-[56px]" />
          <div className="relative z-10">
            <h2 className="font-headline mb-2 text-lg leading-snug text-on-primary md:text-xl">
              Ready to start your path?
            </h2>
            <p className="mb-4 text-xs leading-relaxed text-on-primary/85 md:text-[0.8125rem]">
              Take the first step toward a more peaceful and balanced life. Book
              a confidential introductory consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#f8faf9] px-4 py-2 text-xs font-bold leading-snug text-[#4f6359] shadow-sm transition-all hover:bg-[#e8fef1] sm:px-5 sm:py-2.5 sm:text-[0.8125rem]"
            >
              Request Your Appointment
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
