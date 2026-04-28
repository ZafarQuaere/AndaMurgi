import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function HomeFinalCta() {
  return (
    <Reveal
      className="py-16 md:py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-[#4f6359] px-8 py-10 text-center md:px-12 md:py-12">
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary-dim blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary-dim opacity-50 blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-xl">
            <h2 className="font-headline mb-5 text-3xl leading-tight text-on-primary md:text-4xl lg:text-[2.75rem]">
              Ready to start your path?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-on-primary/80 md:text-lg">
              Take the first step toward a more peaceful and balanced life. Book
              a confidential introductory consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#f8faf9] px-8 py-3.5 text-base font-bold text-[#4f6359] shadow-lg transition-all hover:bg-[#e8fef1] md:px-9 md:text-lg"
            >
              Request Your Appointment
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
