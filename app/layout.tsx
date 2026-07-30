import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Interactivity from "./components/Interactivity";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fiqih Badrian — Digital Product Engineer",
  description: "Fiqih Badrian builds digital products — fast, elegant, human. Frontend, Flutter, backend, UI engineering.",
  keywords: ["Fiqih Badrian", "frontend developer", "Flutter", "web developer", "portfolio", "JavaScript", "TypeScript"],
  themeColor: "#0A0A0A",
  openGraph: {
    title: "Fiqih Badrian — Digital Product Engineer",
    description: "I build digital products that people love. Frontend, Flutter, backend, UI engineering.",
    type: "website",
    url: "https://www.fiqihbadrian.my.id",
    images: [{ url: "https://www.fiqihbadrian.my.id/images/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiqih Badrian — Digital Product Engineer",
    description: "I build digital products that people love.",
    images: ["https://www.fiqihbadrian.my.id/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F1EA]">
        <div className="noise"></div>
        <div className="cursor-glow hidden md:block" id="cursorGlow"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Interactivity />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Person","name":"Fiqih Badrian","url":"https://www.fiqihbadrian.my.id","image":"https://www.fiqihbadrian.my.id/images/logo.png","sameAs":["https://github.com/fiqihbadrian","https://www.linkedin.com/in/fiqih-badrian-27b73b286","https://instagram.com/bian_bd"],"jobTitle":"Frontend & Fullstack Engineer","knowsAbout":["Web Development","Flutter","Laravel","Next.js","TypeScript","Database Design"]}) }} />
      </body>
    </html>
  );
}
