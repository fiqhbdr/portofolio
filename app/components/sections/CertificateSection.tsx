"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";

import certs from "@/data/certificates.json";

export default function CertificateSection() {
  const [selected, setSelected] = useState<(typeof certs)[number] | null>(null);

  return (
    <section id="certificates" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="orb orb-1" style={{ top: "auto", bottom: "-10%", right: "-5%" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 lg:mb-24 reveal">
          <span className="font-mono-custom text-xs tracking-[.2em] uppercase text-[#8D8D8D]">03</span>
          <h2 className="font-display text-6xl lg:text-8xl font-bold text-[#F5F1EA] mt-2" style={{ fontStyle: "italic" }}>Certificates</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,.08)] hidden md:block" />

          <div className="space-y-16">
            {certs.map((c, i) => (
              <div key={i} className={`relative pl-0 md:pl-20 cert-item ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
                <div className="hidden md:block timeline-line" />
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-40 flex-shrink-0">
                    <button type="button" onClick={() => setSelected(c)} aria-label={`Lihat sertifikat ${c.title}`} className="group/cert block w-full text-left cursor-pointer relative">
                      <Image src={c.img} alt={c.title} width={240} height={160} className="w-full aspect-[3/2] object-cover border border-[rgba(255,255,255,.08)] transition-colors group-hover/cert:border-[#1EA5FF]" loading="lazy" />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/cert:bg-black/50 transition-all duration-300 opacity-0 group-hover/cert:opacity-100">
                        <span className="text-xs font-mono-custom uppercase tracking-wider text-[#F5F1EA] border border-white/40 px-3 py-1.5">Lihat</span>
                      </span>
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#1EA5FF] font-mono-custom text-xs tracking-wider uppercase">{c.org}</span>
                      <span className="text-[#8D8D8D] text-xs font-mono-custom">· {c.year}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#F5F1EA] mb-2">{c.title}</h3>
                    <p className="text-[#8D8D8D] text-sm mb-3">{c.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-mono-custom border border-[rgba(255,255,255,.1)] text-[#8D8D8D]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="bg-[rgba(255,255,255,.03)] p-4">
              <Image src={selected.img} alt={selected.title} width={1200} height={800} className="w-full h-auto object-contain" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#1EA5FF] font-mono-custom text-xs tracking-wider uppercase">{selected.org}</span>
                <span className="text-[#8D8D8D] text-xs font-mono-custom">· {selected.year}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F5F1EA] mb-2">{selected.title}</h3>
              <p className="text-[#8D8D8D] text-sm mb-4">{selected.date}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono-custom border border-[rgba(255,255,255,.1)] text-[#8D8D8D]">{tag}</span>
                ))}
              </div>
              <a href={selected.url || selected.img} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1EA5FF] text-[#0A0A0A] font-semibold text-sm uppercase tracking-wider transition-colors hover:bg-[#0077CC]">
                Buka Sertifikat
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
