import type { Metadata } from "next";
import { PageMain } from "@/components/layout/PageMain";
import { BlogFeatured } from "@/components/sections/blog/BlogFeatured";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { BlogNewsletter } from "@/components/sections/blog/BlogNewsletter";

export const metadata: Metadata = {
  title: "Reflections | SerenePath Clinic",
  description:
    "Our journal — mindful insights and professional perspectives from SerenePath Clinic.",
};

export default function BlogPage() {
  return (
    <PageMain>
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </PageMain>
  );
}
