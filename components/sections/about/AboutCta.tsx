import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function AboutCta() {
  return (
    <Reveal
      className="mx-auto mb-32 max-w-screen-xl px-6 md:px-12"
    >
      <div className="relative space-y-8 overflow-hidden rounded-[4rem] bg-[#435565] p-20 text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />
        <h2 className="relative z-10 font-headline text-5xl font-bold text-white">
          Start Your Journey Today
        </h2>
        <p className="relative z-10 mx-auto max-w-xl text-xl text-white/80">
          Dr. Elena is currently accepting a limited number of new private
          clients for intensive restorative therapy.
        </p>
        <div className="relative z-10 flex flex-col justify-center gap-6 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-[#4f6359] px-10 py-4 font-label font-bold text-white transition-all duration-300 hover:bg-[#44574e]"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/20 bg-white/10 px-10 py-4 font-label font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
          >
            View Services
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
