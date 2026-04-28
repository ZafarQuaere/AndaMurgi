import Link from "next/link";

export type FooterVariant = "home" | "services" | "about" | "blog" | "contact";

const linkMuted =
  "text-tertiary opacity-70 transition-colors hover:text-primary text-sm font-body";

type FooterProps = {
  variant: FooterVariant;
};

export function Footer({ variant }: FooterProps) {
  if (variant === "home") {
    return (
      <footer className="mt-20 w-full rounded-t-[3rem] bg-surface-container-low">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-4 md:px-16">
          <div>
            <div className="mb-6 font-headline text-xl text-primary">
              SerenePath Clinic
            </div>
            <p className="mb-8 text-sm leading-relaxed text-tertiary opacity-70">
              A holistic approach to mental health, providing therapeutic
              guidance in a restorative digital and physical environment.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-primary">
              Resources
            </h4>
            <div className="flex flex-col space-y-4">
              <Link href="/services" className={linkMuted}>
                Services
              </Link>
              <Link href="/blog" className={linkMuted}>
                Blog
              </Link>
              <Link href="/contact" className={linkMuted}>
                FAQs
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-primary">
              Legal
            </h4>
            <div className="flex flex-col space-y-4">
              <Link href="#" className={linkMuted}>
                Privacy Policy
              </Link>
              <Link href="#" className={linkMuted}>
                Terms of Service
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-primary">
              Connect
            </h4>
            <div className="flex flex-col space-y-4">
              <Link href="#" className={linkMuted}>
                Instagram
              </Link>
              <Link href="#" className={linkMuted}>
                LinkedIn
              </Link>
              <Link href="/contact" className={linkMuted}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/10 px-8 py-8 text-xs text-tertiary opacity-70 md:flex-row md:px-16">
          <span>© 2024 SerenePath Clinic. All rights reserved.</span>
          <span>Certified Mental Health Practice</span>
        </div>
      </footer>
    );
  }

  if (variant === "services") {
    return (
      <footer className="mt-20 w-full rounded-t-[3rem] bg-surface-container-low">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-4 md:px-16">
          <div>
            <div className="mb-6 font-headline text-xl text-primary">
              SerenePath Clinic
            </div>
            <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
              Professional psychological care designed for modern lives.
              Restoring balance, one path at a time.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-primary">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className={linkMuted}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkMuted}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkMuted}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-primary">Connect</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className={linkMuted}>
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className={linkMuted}>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkMuted}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-primary">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className={linkMuted}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={linkMuted}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between border-t border-primary/5 px-8 pb-12 pt-8 md:px-16">
          <p className="text-xs text-on-surface-variant opacity-60">
            © 2024 SerenePath Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }

  if (variant === "about") {
    return (
      <footer className="mt-20 w-full rounded-t-[3rem] bg-surface-container-low">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-20 text-sm leading-relaxed md:grid-cols-4 md:px-16">
          <div className="space-y-6">
            <div className="font-headline text-xl text-primary">
              SerenePath Clinic
            </div>
            <p className="text-tertiary opacity-70">
              A digital sanctuary for high-end, editorial restorative care. We
              prioritize your peace above all else.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-primary">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className={linkMuted}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className={linkMuted}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-primary opacity-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkMuted}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-primary">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className={linkMuted}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={linkMuted}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkMuted}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-primary">Social</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-sm">camera</span>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined text-sm">work</span>
              </Link>
            </div>
            <div className="border-t border-outline-variant/10 pt-4 text-xs text-tertiary opacity-50">
              © 2024 SerenePath Clinic. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "blog") {
    return (
      <footer className="mt-20 w-full rounded-t-[3rem] bg-surface-container-low">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-4 md:px-16">
          <div>
            <div className="mb-6 font-headline text-xl text-primary">
              SerenePath Clinic
            </div>
            <p className="text-sm leading-relaxed text-tertiary opacity-70">
              Healing the mind, nurturing the soul, and providing a path to
              lasting emotional wellness through professional, compassionate
              care.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-primary">Clinic</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className={linkMuted}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkMuted}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkMuted}>
                  Locations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-primary">Connect</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className={linkMuted}>
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className={linkMuted}>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkMuted}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-primary">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className={linkMuted}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={linkMuted}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 border-t border-outline-variant/10 px-8 pb-12 pt-8 md:flex-row md:px-16">
          <span className="text-sm text-tertiary opacity-70">
            © 2024 SerenePath Clinic. All rights reserved.
          </span>
          <div className="flex gap-8">
            <span
              className="material-symbols-outlined cursor-pointer text-primary/50 transition-colors hover:text-primary"
              aria-hidden
            >
              eco
            </span>
            <span
              className="material-symbols-outlined cursor-pointer text-primary/50 transition-colors hover:text-primary"
              aria-hidden
            >
              vital_signs
            </span>
            <span
              className="material-symbols-outlined cursor-pointer text-primary/50 transition-colors hover:text-primary"
              aria-hidden
            >
              psychology
            </span>
          </div>
        </div>
      </footer>
    );
  }

  /* contact */
  return (
    <footer className="mt-20 rounded-t-[3rem] bg-surface-container-low">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-4 md:px-16">
        <div>
          <div className="mb-6 font-headline text-xl text-primary">
            SerenePath Clinic
          </div>
          <p className="text-sm leading-relaxed text-tertiary opacity-70">
            A holistic approach to mental wellness, blending clinical expertise
            with mindful restoration.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Connect
          </span>
          <Link href="#" className={linkMuted}>
            Instagram
          </Link>
          <Link href="#" className={linkMuted}>
            LinkedIn
          </Link>
          <Link href="#" className={linkMuted}>
            Facebook
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Legal
          </span>
          <Link href="#" className={linkMuted}>
            Privacy Policy
          </Link>
          <Link href="#" className={linkMuted}>
            Terms of Service
          </Link>
          <Link href="#" className={linkMuted}>
            Cookie Policy
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Quick Links
          </span>
          <Link href="/contact" className={linkMuted}>
            Contact
          </Link>
          <Link href="/contact" className={linkMuted}>
            FAQs
          </Link>
          <Link href="/about" className={linkMuted}>
            Our Team
          </Link>
        </div>
      </div>
      <div className="border-t border-primary/10 px-8 py-8 text-center text-xs text-tertiary opacity-70 md:px-16">
        © 2024 SerenePath Clinic. All rights reserved.
      </div>
    </footer>
  );
}
