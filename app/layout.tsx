import { Manrope, Noto_Serif } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSwitcher } from "@/components/layout/FooterSwitcher";
import "./globals.css";

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
        {/* Material Symbols — not available via next/font; loads once for icon glyphs */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="min-h-screen bg-background font-body text-on-surface antialiased selection:bg-primary/15 selection:text-on-surface">
        <Navbar />
        {children}
        <FooterSwitcher />
      </body>
    </html>
  );
}
