import type { Metadata } from "next";
import { Inter, Manrope, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Wordmark only. Geometric letterforms hold their weight at 16px where the
// display face reads flat next to the 14px nav links.
//
// Not preloaded, deliberately. It is one 16px word in the navbar, but preloading
// it put a fourth high-priority file on the wire competing with Manrope, which
// is the font the h1 is set in. The h1 is the largest paint on the page, and it
// is repainted when Manrope lands, so every byte ahead of Manrope in the queue
// is added straight to LCP. Loaded through the stylesheet instead, it swaps in a
// few hundred milliseconds later at a size where nobody can see it happen.
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: false,
});

const DESCRIPTION =
  "I build useful software. Web applications, mobile tools, experiments, and things I find useful.";

export const metadata: Metadata = {
  // The apex domain 307 redirects to www, so the canonical host is www. Pointing
  // metadataBase here keeps generated asset URLs from costing crawlers a redirect.
  metadataBase: new URL("https://www.fiqihbadrian.my.id"),
  title: "Fiqih Badrian",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Fiqih Badrian",
    title: "Fiqih Badrian",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiqih Badrian",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${sora.variable}`}>
      <body>
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
