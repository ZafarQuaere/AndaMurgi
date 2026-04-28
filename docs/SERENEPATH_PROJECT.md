# SerenePath Clinic — project implementation summary

This document describes the production static marketing site implemented in this repository: structure, design system, routes, and how content and assets are organized. Admin panel and backend are intentionally out of scope for this phase.

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS v4** (`@import "tailwindcss"` in `app/globals.css`, `@theme inline` tokens)
- **Framer Motion** for subtle scroll reveals and light hover interactions
- **React Hook Form** on the contact page and blog newsletter block
- **`next/image`** for optimized remote images (Google `aida-public` URLs)

## Design system

- **Typography**: **Noto Serif** (headlines, `font-headline`) and **Manrope** (body, `font-body`) via `next/font/google` in `app/layout.tsx`, matching the reference HTML.
- **Icons**: **Material Symbols Outlined** loaded once from Google Fonts in the root layout.
- **Colors**: Full palette from the reference HTML (primary `#4f6359`, tertiary, secondary, surface steps, containers, etc.) is declared under `@theme inline` in `app/globals.css`.
- **Utilities** (global CSS classes):
  - `.pebble-mask` — home meet section portrait
  - `.pebble-mask-about` — about hero portrait
  - `.organic-mask` — blog hero image blob
  - `.glass-panel` — contact map caption bar (blur + translucent background)

## Image assets

All remote image URLs are centralized in `lib/assets.ts` for easy replacement with local `/public` files later. `next.config.ts` allows `lh3.googleusercontent.com` with path `/aida-public/**`.

## Routing and pages

| Route       | File                 | Sections |
|------------|----------------------|----------|
| `/`        | `app/page.tsx`       | Hero, Meet Dr. Masiha Raquib, therapeutic bento, testimonials, final CTA |
| `/services`| `app/services/page.tsx` | Approach hero, services bento (incl. full-width CTA row), quote |
| `/about`   | `app/about/page.tsx` | Hero, philosophy, credentials bento, slate CTA |
| `/blog`    | `app/blog/page.tsx`  | Hero, featured post, six-card grid, pagination UI, newsletter form |
| `/contact` | `app/contact/page.tsx` | Hero, contact form + info + map, booking strip, testimonial |

Each marketing page (except home) wraps content in `components/layout/PageMain.tsx` (`pt-32 pb-20`) to clear the fixed navbar, consistent with the reference HTML.

## Layout components

- **`Navbar`** (`components/layout/Navbar.tsx`): Fixed glass header, active link styling, mobile drawer, Book Now → `/contact`.
- **`FooterSwitcher`** (`components/layout/FooterSwitcher.tsx`): Client component mapping `usePathname()` to a footer variant.
- **`Footer`** (`components/layout/Footer.tsx`): Five variants (`home`, `services`, `about`, `blog`, `contact`) mirroring the different footers in the reference HTML files (columns, copy, and bottom bars differ per page).

## Section components

Sections live under `components/sections/{home,services,about,blog,contact}/` as small, focused modules. Home uses client components with `whileInView` + shared presets from `lib/motion.ts` (`fadeInView`, `viewViewport`, `calmTransition`, etc.).

## Content data

- **Blog**: Static post list and featured post metadata in `lib/content/blog.ts`, wired to `assets.blog`.

## Forms (no backend yet)

- **Contact** (`ContactFormSection.tsx`): `fullName`, `email`, `message` with validation; submit logs to `console.info` and resets the form.
- **Blog newsletter** (`BlogNewsletter.tsx`): Email validation; submit logs and resets.

## SEO

Per-route `metadata` exports exist on `app/page.tsx`, `app/services/page.tsx`, `app/about/page.tsx`, `app/blog/page.tsx`, and `app/contact/page.tsx`. Root `app/layout.tsx` does not set a default title template so each page title is explicit.

## How to run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production check: `npm run build` and `npm run lint`.

## Next steps (not implemented here)

- CMS or admin for blog and imagery
- API routes and persistence for contact and newsletter
- Authentication and protected admin UI
- Replacing remote image URLs with self-hosted assets in `public/`
