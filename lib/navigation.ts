export type NavId = "home" | "services" | "about" | "blog";

export type NavItem = {
  id: NavId;
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  { id: "about", label: "About", href: "/about" },
  { id: "blog", label: "Blog", href: "/blog" },
];

export const BOOKING_HREF = "/contact";
