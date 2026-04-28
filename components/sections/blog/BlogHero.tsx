import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { assets } from "@/lib/assets";

export function BlogHero() {
  return (
    <Reveal
      className="mx-auto mb-14 max-w-screen-2xl px-6 md:px-12"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            Our Journal
          </span>
          <h1 className="font-headline mb-8 text-6xl leading-tight text-on-surface md:text-7xl">
            Reflections
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-on-surface-variant">
            A curated space for mindful insights, professional psychological
            perspectives, and gentle guidance on your journey toward inner peace
            and emotional resilience.
          </p>
        </div>
        <div className="relative h-[260px] sm:h-[300px] lg:h-[340px]">
          <div className="organic-mask absolute inset-0 overflow-hidden shadow-2xl">
            <Image
              src={assets.blog.heroInterior}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
