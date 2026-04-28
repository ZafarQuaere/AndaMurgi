"use client";

import { usePathname } from "next/navigation";
import { Footer, type FooterVariant } from "@/components/layout/Footer";

function pathToVariant(path: string): FooterVariant {
  if (path === "/" || path === "") return "home";
  if (path.startsWith("/services")) return "services";
  if (path.startsWith("/about")) return "about";
  if (path.startsWith("/blog")) return "blog";
  if (path.startsWith("/contact")) return "contact";
  return "home";
}

export function FooterSwitcher() {
  const pathname = usePathname();
  return <Footer variant={pathToVariant(pathname ?? "/")} />;
}
