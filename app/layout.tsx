import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSInit from "./components/AOSInit";
import type { ReactNode } from "react";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "Bian Portfolio",
  description: "Website Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AOSInit />
          <Navbar />
          <main className="px-4 md:px-16 py-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
