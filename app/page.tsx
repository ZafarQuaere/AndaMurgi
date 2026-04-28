import type { Metadata } from "next";
import { HomeFinalCta } from "@/components/sections/home/HomeFinalCta";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeMeetDoctor } from "@/components/sections/home/HomeMeetDoctor";
import { HomeServicesBento } from "@/components/sections/home/HomeServicesBento";
import { HomeTestimonials } from "@/components/sections/home/HomeTestimonials";

export const metadata: Metadata = {
  title: "SerenePath Clinic | Modern Psychology & Mental Well-being",
  description:
    "Compassionate, evidence-based mental health care and emotional restoration at SerenePath Clinic.",
};

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <HomeMeetDoctor />
      <HomeServicesBento />
      <HomeTestimonials />
      <HomeFinalCta />
    </main>
  );
}
