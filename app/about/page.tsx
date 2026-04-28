import type { Metadata } from "next";
import { PageMain } from "@/components/layout/PageMain";
import { AboutCredentials } from "@/components/sections/about/AboutCredentials";
import { AboutCta } from "@/components/sections/about/AboutCta";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";

export const metadata: Metadata = {
  title: "About Dr. Masiha | SerenePath Clinic",
  description:
    "Meet Dr. Masiha Raquib — compassionate, integrative psychological care at SerenePath Clinic.",
};

export default function AboutPage() {
  return (
    <PageMain className="bg-[#f8faf9]">
      <AboutHero />
      <AboutPhilosophy />
      <AboutCredentials />
      <AboutCta />
    </PageMain>
  );
}
