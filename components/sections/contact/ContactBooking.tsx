import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { assets } from "@/lib/assets";

export function ContactBooking() {
  return (
    <Reveal
      className="mx-auto mt-32 max-w-screen-2xl px-6 md:px-12"
    >
      <div className="relative overflow-hidden rounded-[4rem] bg-primary text-on-primary">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-dim opacity-30 blur-3xl" />
        <div className="relative z-10 grid items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center p-16 md:p-24">
            <h2 className="font-headline mb-8 text-4xl font-bold leading-tight md:text-5xl">
              Reserve Your First Session
            </h2>
            <ul className="mb-12 space-y-6">
              {[
                "15-minute complimentary discovery call",
                "Insurance verification assistance",
                "Tailored therapist matching",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-on-primary/10">
                    <span className="material-symbols-outlined text-sm">
                      check
                    </span>
                  </div>
                  <span className="text-lg opacity-90">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full rounded-full bg-on-primary px-12 py-5 text-center text-xl font-bold text-primary transition-colors hover:bg-primary-container md:w-max"
            >
              Schedule Appointment
            </Link>
          </div>
          <div className="relative hidden p-12 lg:block">
            <div
              className="h-full w-full overflow-hidden"
              style={{
                borderRadius: "45% 55% 70% 30% / 30% 60% 40% 70%",
              }}
            >
              <Image
                src={assets.contact.meditation}
                alt=""
                width={600}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
