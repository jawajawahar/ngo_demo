import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Serif_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import { orgContact } from "@/data/navigation";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.voiceofneed.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${orgContact.name} — Listening to Communities`,
    template: `%s — ${orgContact.name}`,
  },
  description:
    "Voice of Need Foundation partners with communities on education, clean water, healthcare, the environment, and emergency relief. Demo NGO website — all figures are placeholder data.",
  openGraph: {
    type: "website",
    siteName: orgContact.name,
    title: `${orgContact.name} — Rooted in Community`,
    description:
      "We partner with communities on education, clean water, healthcare, the environment, and emergency relief.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${orgContact.name} — Rooted in Community`,
    description:
      "We partner with communities on education, clean water, healthcare, the environment, and emergency relief.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="flex min-h-svh flex-col bg-cream text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-cream"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
