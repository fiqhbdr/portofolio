"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !tiltRef.current) return;

    const el = tiltRef.current;
    const container = el.closest(".tilt-container") as HTMLElement | null;
    if (!container) return;

    const animate = () => {
      const damping = 0.14;
      current.current.x += (target.current.x - current.current.x) * damping;
      current.current.y += (target.current.y - current.current.y) * damping;
      el.style.transform = `rotateX(${current.current.x}deg) rotateY(${current.current.y}deg)`;
      if (Math.abs(target.current.x - current.current.x) > 0.01 || Math.abs(target.current.y - current.current.y) > 0.01) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.current.x = ((y - rect.height / 2) / rect.height / 2) * 8;
      target.current.y = ((x - rect.width / 2) / rect.width / 2) * -8;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="about" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="orb orb-3"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 lg:mb-24">
          <span className="font-mono-custom text-xs tracking-[.2em] uppercase text-[#8D8D8D]">01</span>
          <h2 className="font-display text-6xl lg:text-8xl font-bold text-[#F5F1EA] mt-2" style={{ fontStyle: "italic" }}>About</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="tilt-container lg:max-w-sm xl:max-w-md mx-auto lg:mx-0">
            <div ref={tiltRef} className="tilt-inner relative group img-zoom" style={{ transformStyle: "preserve-3d" }}>
              <div className="aspect-[3/4] overflow-hidden">
                <Image src="/images/pikiw.jpg" alt="Fiqih Badrian" width={400} height={533} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute inset-0 border border-[rgba(255,255,255,.08)] pointer-events-none"></div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#1EA5FF]"></div>
              <span className="text-sm text-[#8D8D8D] font-mono-custom">Digital craftsman since 2020</span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-display text-2xl lg:text-3xl leading-tight text-[#F5F1EA] mb-8">
              I believe great digital products are built at the intersection of <span className="text-[#1EA5FF]">design</span>, <span className="text-[#1EA5FF]">engineering</span>, and <span className="text-[#1EA5FF]">empathy</span>.
            </p>
            <div className="space-y-5 text-[#8D8D8D] leading-relaxed">
              <p>Hi! I&apos;m Fiqih Badrian, a passionate frontend engineer with a love for creating beautiful and functional web experiences. I specialize in building modern, responsive applications using the latest technologies.</p>
              <p>My journey in web development started with a curiosity about how websites work, and it has grown into a passion for crafting digital solutions that make a difference. I believe in writing clean, maintainable code and creating interfaces that users love.</p>
              <p>When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects, or learning about the latest trends in web development and design.</p>
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-[rgba(255,255,255,.08)]"></div>
            <span className="font-mono-custom text-xs tracking-[.2em] uppercase text-[#8D8D8D]">Craft &amp; Tools</span>
            <div className="h-[1px] flex-1 bg-[rgba(255,255,255,.08)]"></div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Frontend", "Flutter", "Laravel", "Next.js", "PHP", "JavaScript", "TypeScript", "MySQL", "Supabase", "Docker", "Git", "Tailwind", "Figma"].map((skill) => (
              <span key={skill} className="skill-tag px-5 py-2.5 border border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.03)] text-sm text-[#F5F1EA] font-medium">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
