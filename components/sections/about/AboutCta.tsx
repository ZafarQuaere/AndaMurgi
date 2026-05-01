import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function AboutCtaCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative space-y-5 overflow-hidden rounded-[3rem] bg-[#435565] px-8 py-12 text-center text-white sm:space-y-6 sm:py-14 md:p-14 md:py-16 lg:p-16 lg:py-[4.25rem]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <h2 className="relative z-10 font-headline text-2xl font-bold text-white md:text-3xl lg:text-[2rem] lg:leading-tight">
        Start Your Journey Today
      </h2>
      <p className="relative z-10 mx-auto max-w-2xl text-sm text-white/85 md:text-base">
        Dr. Masiha is currently accepting a limited number of new private
        clients for intensive restorative therapy.
      </p>
      <div className="relative z-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <Link
          href="/contact"
          className="rounded-full bg-[#4f6359] px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#44574e] md:px-7 md:py-3"
        >
          Schedule Consultation
        </Link>
        <Link
          href="/services"
          className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 md:px-7 md:py-3"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}

export function AboutCta() {
  return (
    <Reveal className="mx-auto mb-20 max-w-screen-2xl px-6 md:px-12">
      <AboutCtaCard />
    </Reveal>
  );
}
