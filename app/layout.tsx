import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Space_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SITE_CONFIG } from "@/content/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "Learn with SH – O, AS & A Level Accounting with Sir Hammad",
    template: "%s | Learn with SH",
  },
  description: SITE_CONFIG.metaDescription,
  keywords: [
    "Accounting teacher Karachi",
    "O Level Accounting 7707",
    "AS Level Accounting 9706",
    "A Level Accounting",
    "Sir Sahibzada Hammad",
    "Learn with SH",
    "Accounting past papers",
    "Accounting lecture recordings",
  ],
  authors: [{ name: "Sir Sahibzada Hammad" }, { name: "Rayan" }],
  creator: "Rayan",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_CONFIG.siteUrl,
    title: "Learn with SH – O, AS & A Level Accounting with Sir Hammad",
    description: SITE_CONFIG.metaDescription,
    siteName: "Learn with SH",
    images: [
      {
        url: "/images/hero_background_neon_arch.png",
        width: 1200,
        height: 630,
        alt: "Learn with SH – Sir Sahibzada Hammad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn with SH – O, AS & A Level Accounting",
    description: SITE_CONFIG.metaDescription,
    images: ["/images/hero_background_neon_arch.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} ${spaceMono.variable} ${caveat.variable}`}
    >
      <body className="bg-background text-text selection:bg-crimson selection:text-white">
        {/* Top 3px Scroll Progress Bar */}
        <ProgressBar />

        {/* Global Floating Glass Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main id="app" className="min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
