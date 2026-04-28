import { Reveal } from "@/components/motion/Reveal";

export function AboutPhilosophy() {
  return (
    <Reveal
      className="rounded-[4rem] bg-[#f1f4f3] py-32"
    >
      <div className="mx-auto max-w-4xl space-y-12 px-6 text-center md:px-12">
        <div className="mb-4 inline-block rounded-full bg-[#f6e2cf] p-4 text-[#5e5143]">
          <span className="material-symbols-outlined text-3xl">format_quote</span>
        </div>
        <h2 className="font-headline text-4xl italic leading-tight text-[#2d3433]">
          &ldquo;Healing is not a linear journey, but a process of coming home
          to oneself. My approach integrates evidence-based practice with a deep
          respect for each individual&apos;s unique story and pace.&rdquo;
        </h2>
        <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-3">
          <div className="space-y-4">
            <h4 className="font-headline text-xl font-bold text-[#4f6359]">
              Holistic
            </h4>
            <p className="text-sm text-[#596060]">
              Treating the mind, body, and spirit as one interconnected system.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-xl font-bold text-[#4f6359]">
              Integrative
            </h4>
            <p className="text-sm text-[#596060]">
              Blending CBT, Mindfulness, and Psychodynamic theories.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-xl font-bold text-[#4f6359]">
              Empathetic
            </h4>
            <p className="text-sm text-[#596060]">
              A non-judgmental space built on trust and genuine connection.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
