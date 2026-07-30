"use client";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="hero-kinetic" id="heroKinetic" aria-hidden="true">FIQIH BADRIAN</div>

      <div className="relative z-10 w-full px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="reveal visible mb-4">
            <span className="inline-block text-xs font-mono-custom tracking-[.2em] uppercase text-[#1EA5FF] mb-6">Portfolio</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[.95] text-[#F5F1EA] mb-6 reveal visible" style={{ transitionDelay: ".15s" }}>
            FIQIH<br />
            <span className="text-[#FF2F4F]">BADRIAN</span><br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#8D8D8D] font-normal" style={{ fontStyle: "italic" }}>Frontend &amp; Fullstack Engineer</span>
          </h1>
          <p className="text-base lg:text-lg text-[#8D8D8D] max-w-xl leading-relaxed mb-10 reveal visible" style={{ transitionDelay: ".3s" }}>
            Building fast, responsive, and human-centered digital experiences — from web apps to cross-platform solutions.
          </p>
          <div className="flex flex-wrap gap-4 reveal visible" style={{ transitionDelay: ".45s" }}>
            <a href="#projects" className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1EA5FF] text-[#0A0A0A] font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#0077CC] hover:gap-4">
              View Projects
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 border border-[rgba(255,255,255,.15)] text-[#F5F1EA] font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[rgba(255,255,255,.04)] hover:border-[rgba(255,255,255,.3)]">
              Contact
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator z-10">
        <span className="text-xs font-mono-custom tracking-[.15em] uppercase text-[#8D8D8D]">Scroll</span>
        <svg className="w-4 h-4 text-[#8D8D8D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}
