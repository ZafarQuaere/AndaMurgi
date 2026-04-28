import type { Metadata } from "next";
import { PageMain } from "@/components/layout/PageMain";
import { ServicesBento } from "@/components/sections/services/ServicesBento";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesQuote } from "@/components/sections/services/ServicesQuote";

export const metadata: Metadata = {
  title: "Services | SerenePath Clinic",
  description:
    "Guided pathways to inner restoration — specialized clinical care at SerenePath Clinic.",
};

export default function ServicesPage() {
  return (
    <PageMain className="bg-[#f8faf9]">
      <div className="mx-auto max-w-screen-2xl">
        <ServicesHero />
        <ServicesBento />
        <ServicesQuote />
      </div>
    </PageMain>
  );
}
