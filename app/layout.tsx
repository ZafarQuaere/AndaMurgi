import type { Viewport } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSwitcher } from "@/components/layout/FooterSwitcher";
import Script from "next/script";
import "./globals.css";

/** Ensures correct mobile viewport — required for IntersectionObserver to work properly on mobile */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen bg-background font-body text-on-surface antialiased selection:bg-primary/15 selection:text-on-surface">
        <Navbar />
        {children}
        <FooterSwitcher />
        {/*
          Material Symbols — loaded after page paint via Script to avoid
          render-blocking. afterInteractive fires post-hydration, keeping
          icons invisible for ~100ms but never blocking first paint.
        */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <Script
          id="material-symbols"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var l = document.createElement('link');
                l.rel = 'stylesheet';
                l.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap';
                document.head.appendChild(l);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
