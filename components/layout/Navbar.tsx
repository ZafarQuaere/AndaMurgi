"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKING_HREF, NAV_ITEMS, type NavItem } from "@/lib/navigation";
import { calmTransition } from "@/lib/motion";

function isActiveNav(item: NavItem, pathname: string | null): boolean {
  if (pathname === item.href) return true;
  if (item.href !== "/" && pathname?.startsWith(item.href)) return true;
  return false;
}

function desktopNavClass(item: NavItem, pathname: string | null): string {
  const active = isActiveNav(item, pathname);
  const base =
    "font-headline text-lg tracking-wide transition-all duration-300 hover:opacity-80";

  if (active) {
    return `${base} border-b-2 border-primary pb-1 font-bold text-primary`;
  }

  return `${base} text-tertiary hover:text-primary`;
}

function mobileNavClass(item: NavItem, pathname: string | null): string {
  const active = isActiveNav(item, pathname);
  const base =
    "rounded-2xl px-4 py-3 font-headline text-base tracking-wide transition-colors";

  if (active) {
    return `${base} bg-primary/10 font-bold text-primary`;
  }

  return `${base} text-tertiary hover:bg-white/55`;
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => onScroll());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const shellClass = scrolled
    ? "border-b border-white/45 bg-[#f8faf9]/93 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl"
    : "border-b border-transparent bg-[#f8faf9]/78 backdrop-blur-xl";

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        aria-label="Primary"
        className={`${shellClass} transition-[background-color,box-shadow,border-color] duration-500 ease-out`}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-6 md:px-12">
          <Link
            href="/"
            className="font-headline text-2xl font-semibold tracking-tight text-primary"
          >
            SerenePath Clinic
          </Link>

          <div className="hidden items-center gap-10 md:flex md:gap-12">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={desktopNavClass(item, pathname)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={BOOKING_HREF}
              className="hidden rounded-full bg-primary px-8 py-3 text-sm font-medium text-on-primary shadow-lg shadow-primary/10 transition-transform duration-300 hover:opacity-90 active:scale-[0.98] sm:inline-flex sm:items-center sm:justify-center"
            >
              Book Now
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/35 bg-white/40 text-on-surface backdrop-blur-md md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="material-symbols-outlined !text-2xl" aria-hidden>
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={calmTransition}
              className="overflow-hidden border-t border-white/30 bg-[#f8faf9]/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={mobileNavClass(item, pathname)}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
                <Link
                  href={BOOKING_HREF}
                  className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-on-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
