"use client";

import { useState, useEffect } from "react";

const sections = ["home", "about", "projects", "certificates", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Listen for IntersectionObserver custom event from Interactivity
    const onSectionVisible = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.id) setActive(detail.id);
    };
    window.addEventListener("section-visible", onSectionVisible);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("section-visible", onSectionVisible);
    };
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0A0A0A]/80 nav-blur shadow-lg shadow-black/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          <button onClick={() => scrollTo("home")} className="font-display text-2xl lg:text-3xl font-bold text-[#F5F1EA] hover:text-[#1EA5FF] transition-colors duration-300" style={{ textDecoration: "none" }}>
            Fiqih<span className="text-[#FF2F4F]">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative group text-sm font-medium tracking-wider uppercase transition-colors duration-300 font-mono-custom ${
                  active === id ? "text-[#1EA5FF]" : "text-[#8D8D8D] hover:text-[#F5F1EA]"
                }`}
              >
                {id === "home" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[1px] bg-[#1EA5FF] transition-transform duration-300 origin-left ${
                    active === id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F5F1EA] p-2 relative z-50"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-20 z-40 bg-[#0A0A0A]/95 nav-blur border-t border-[rgba(255,255,255,.05)]"
          style={{ display: mobileOpen ? "block" : "none" }}
        >
          <div className="px-6 py-6 space-y-2">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`block w-full text-left py-3 px-4 text-sm font-medium tracking-wider uppercase rounded-lg transition-colors ${
                  active === id
                    ? "text-[#1EA5FF] bg-[rgba(30,165,255,.12)]"
                    : "text-[#8D8D8D] hover:text-[#F5F1EA] hover:bg-[rgba(255,255,255,.04)]"
                }`}
              >
                {id === "home" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
