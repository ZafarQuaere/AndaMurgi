import type { Metadata } from "next";
import { PageMain } from "@/components/layout/PageMain";
import { ContactBooking } from "@/components/sections/contact/ContactBooking";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactTestimonial } from "@/components/sections/contact/ContactTestimonial";

export const metadata: Metadata = {
  title: "SerenePath Clinic | Contact & Booking",
  description:
    "Get in touch with SerenePath Clinic — schedule your journey to stillness.",
};

export default function ContactPage() {
  return (
    <PageMain>
      <ContactHero />
      <ContactFormSection />
      <ContactBooking />
      <ContactTestimonial />
    </PageMain>
  );
}
