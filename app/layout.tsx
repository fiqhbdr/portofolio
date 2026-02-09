import "./globals.css";
import NavbarWrapper from "./components/NavbarWrapper";
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
          <NavbarWrapper />
          <main className="w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
