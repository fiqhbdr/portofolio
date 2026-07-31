"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "../Modal";
import projects from "@/data/projects.json";

type Tab = "featured" | "web" | "app" | "design";

type Project = {
  name: string;
  desc: string;
  url: string;
  lang: string;
  langColor: string;
  stars: number;
  slides?: string[];
  img?: string;
};

function Slideshow({ slides }: { slides: string[] }) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => setSlide((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <div className="aspect-[16/10] overflow-hidden relative">
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0"}`}
          loading={i === 0 ? undefined : "lazy"}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ))}
      {slides.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1.5 z-10">
          {slides.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === slide ? "w-5 bg-white" : "w-1.5 bg-white/60"}`} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, onSelect }: { p: Project; onSelect: (p: Project) => void }) {
  return (
    <button type="button" onClick={() => onSelect(p)} className="group block w-full text-left cursor-pointer" style={{ animation: `fadeIn .5s ease-out both` }}>
      <div className="relative overflow-hidden border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.02)] transition-all duration-500 hover:bg-[rgba(255,255,255,.04)] hover:border-[rgba(255,255,255,.15)] hover:-translate-y-1">
        {p.slides ? (
          <Slideshow slides={p.slides} />
        ) : (
          <div className="aspect-[16/10] overflow-hidden bg-[rgba(255,255,255,.03)] flex items-center justify-center">
            <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display text-xl font-bold text-[#F5F1EA] group-hover:text-[#1EA5FF] transition-colors">{p.name}</h3>
            <svg className="w-4 h-4 text-[#8D8D8D] group-hover:text-[#1EA5FF] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </div>
          <p className="text-sm text-[#8D8D8D] mb-4 line-clamp-2">{p.desc}</p>
          <div className="flex items-center gap-4 text-xs text-[#8D8D8D]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.langColor }} />
              <span>{p.lang}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <span>{p.stars}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

const tabs: { key: Tab; label: string; accent: string }[] = [
  { key: "featured", label: "Unggulan", accent: "#FF2F4F" },
  { key: "web", label: "Web Programming", accent: "#1EA5FF" },
  { key: "app", label: "App Program", accent: "#1EA5FF" },
  { key: "design", label: "Design", accent: "#1EA5FF" },
];

export default function ProjectsSection() {
  const [tab, setTab] = useState<Tab>("featured");
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 lg:mb-16 reveal">
          <span className="font-mono-custom text-xs tracking-[.2em] uppercase text-[#8D8D8D]">02</span>
          <h2 className="font-display text-6xl lg:text-8xl font-bold text-[#F5F1EA] mt-2" style={{ fontStyle: "italic" }}>Projects</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 reveal border-b border-[rgba(255,255,255,.06)] pb-4">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 font-mono-custom"
              style={{
                color: tab === t.key ? t.accent : "#8D8D8D",
                borderBottom: tab === t.key ? `2px solid ${t.accent}` : "2px solid transparent",
              }}
              onMouseEnter={(e) => { if (tab !== t.key) e.currentTarget.style.color = "#F5F1EA"; }}
              onMouseLeave={(e) => { if (tab !== t.key) e.currentTarget.style.color = "#8D8D8D"; }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content: featured */}
        {tab === "featured" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.featured.map((p, i) => <ProjectCard key={p.name} p={p} onSelect={setSelected} />)}
          </div>
        )}

        {/* Tab content: web */}
        {tab === "web" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.web.map((p, i) => <ProjectCard key={p.name + i} p={p} onSelect={setSelected} />)}
          </div>
        )}

        {/* Tab content: app */}
        {tab === "app" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.app.map((p, i) => <ProjectCard key={p.name + i} p={p} onSelect={setSelected} />)}
          </div>
        )}

        {/* Tab content: design */}
        {tab === "design" && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-[#8D8D8D]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              <p className="text-[#8D8D8D] font-mono-custom text-sm">Design projects coming soon</p>
            </div>
          </div>
        )}

        {/* See More */}
        <div className="mt-10 text-center reveal">
          <a href="https://github.com/fiqihbadrian" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 border border-[rgba(255,255,255,.15)] text-sm text-[#F5F1EA] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-[rgba(255,255,255,.04)] hover:border-[rgba(255,255,255,.3)] hover:gap-4">
            See More Projects
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            {selected.slides ? (
              <Slideshow slides={selected.slides} />
            ) : (
              <div className="aspect-[16/10] relative bg-[rgba(255,255,255,.03)] overflow-hidden">
                <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8">
              <h3 className="font-display text-3xl font-bold text-[#F5F1EA] mb-3">{selected.name}</h3>
              <div className="flex items-center gap-4 text-xs text-[#8D8D8D] font-mono-custom mb-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selected.langColor }} />
                  {selected.lang}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  {selected.stars}
                </span>
              </div>
              <p className="text-[#8D8D8D] leading-relaxed mb-8">{selected.desc}</p>
              <a href={selected.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1EA5FF] text-[#0A0A0A] font-semibold text-sm uppercase tracking-wider transition-colors hover:bg-[#0077CC]">
                Buka Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
