"use client";

import { useEffect } from "react";

export default function Interactivity() {
  useEffect(() => {
    // === CURSOR GLOW ===
    const glow = document.getElementById("cursorGlow");
    if (glow) {
      const onMouse = (e: MouseEvent) => {
        glow!.style.left = e.clientX + "px";
        glow!.style.top = e.clientY + "px";
      };
      window.addEventListener("mousemove", onMouse);
    }

    // === SCROLL REVEAL ===
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => revealObserver.observe(el));

    // === PROJECT CARD TILT ===
    document.querySelectorAll(".tilt-container").forEach((el) => {
      const container = el as HTMLElement;
      const inner = container.querySelector(".tilt-inner") as HTMLElement;
      if (!inner) return;
      let raf: number | null = null;
      const current = { x: 0, y: 0 };
      const target = { x: 0, y: 0 };

      const animate = () => {
        const damping = 0.14;
        current.x += (target.x - current.x) * damping;
        current.y += (target.y - current.y) * damping;
        inner.style.transform = `rotateX(${current.x}deg) rotateY(${current.y}deg)`;
        if (Math.abs(target.x - current.x) > 0.01 || Math.abs(target.y - current.y) > 0.01) {
          raf = requestAnimationFrame(animate);
        } else {
          raf = null;
        }
      };

      const onMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.x = ((y - rect.height / 2) / rect.height / 2) * 8;
        target.y = ((x - rect.width / 2) / rect.width / 2) * -8;
        if (!raf) raf = requestAnimationFrame(animate);
      };

      const onLeave = () => {
        target.x = 0;
        target.y = 0;
        if (!raf) raf = requestAnimationFrame(animate);
      };

      container.addEventListener("mousemove", onMove as EventListener);
      container.addEventListener("mouseleave", onLeave as EventListener);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
