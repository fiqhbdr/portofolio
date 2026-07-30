export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 lg:py-48 min-h-screen flex items-center">
      <div className="orb orb-2" style={{ bottom: "auto", top: "-10%" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="relative mb-16 lg:mb-24 overflow-hidden">
          <div className="font-display text-[clamp(3rem,12vw,10rem)] font-bold leading-[.85] text-center lg:text-right select-none reveal">
            <span className="block text-[#F5F1EA]/5" aria-hidden="true" style={{ fontSize: ".6em", letterSpacing: "-.03em", transform: "translateY(30%)" }}>CONTACT</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal-left">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[.9] text-[#F5F1EA] mb-8">
              LET&apos;S<br />
              <span className="text-[#1EA5FF]">WORK</span><br />
              TOGETHER
            </h2>
            <p className="text-lg text-[#8D8D8D] max-w-md leading-relaxed mb-8">
              Have a project in mind? Let&apos;s create something extraordinary. I&apos;m always open to discussing new ideas.
            </p>
            <a href="mailto:fiqihbadrian@gmail.com" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1EA5FF] text-[#0A0A0A] font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#0077CC] hover:gap-5">
              Start a Conversation
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="reveal-right">
            <div className="space-y-6">
              {[
                { label: "Email", value: "fiqihbadrian@gmail.com", href: "mailto:fiqihbadrian@gmail.com" },
                { label: "GitHub", value: "@fiqihbadrian", href: "https://github.com/fiqihbadrian" },
                { label: "LinkedIn", value: "Fiqih Badrian", href: "https://www.linkedin.com/in/fiqih-badrian-27b73b286" },
                { label: "Instagram", value: "@bian_bd", href: "https://instagram.com/bian_bd" },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 border-b border-[rgba(255,255,255,.08)] transition-all duration-300 hover:border-[#1EA5FF]">
                  <span className="text-sm uppercase tracking-wider text-[#8D8D8D] group-hover:text-[#F5F1EA] transition-colors">{link.label}</span>
                  <span className="text-[#F5F1EA] group-hover:text-[#1EA5FF] transition-colors font-medium">{link.value} →</span>
                </a>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-[rgba(255,255,255,.08)]" />
              <span className="font-mono-custom text-xs tracking-[.2em] uppercase text-[#8D8D8D]">Available for work</span>
              <span className="w-2 h-2 rounded-full bg-[#1EA5FF] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
