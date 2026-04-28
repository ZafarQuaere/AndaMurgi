import { Reveal } from "@/components/motion/Reveal";

export function ContactHero() {
  return (
    <Reveal
      as="header"
      className="mx-auto mb-20 max-w-screen-2xl px-6 md:px-12"
    >
      <div className="grid items-end gap-16 md:grid-cols-2">
        <div>
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">
            Get in Touch
          </span>
          <h1 className="font-headline text-6xl font-bold leading-tight text-on-surface md:text-7xl">
            Begin Your Journey to{" "}
            <span className="italic text-primary">Stillness.</span>
          </h1>
        </div>
        <p className="max-w-md pb-2 text-xl leading-relaxed text-on-surface-variant">
          Whether you have questions about our therapies or are ready to
          schedule your first session, we are here to provide a supportive path
          forward.
        </p>
      </div>
    </Reveal>
  );
}
