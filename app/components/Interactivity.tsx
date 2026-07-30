"use client";

import { useEffect } from "react";

export default function Interactivity() {
  useEffect(() => {
    // === HERO KINETIC PARALLAX ===
    const heroKinetic = document.getElementById("heroKinetic");
    if (heroKinetic) {
      const onScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = window.innerHeight;
        const progress = Math.min(scrollY / maxScroll, 1);
        heroKinetic.style.transform = `translate(-50%, calc(-50% + ${progress * 60}px)) scale(${1 - progress * 0.08})`;
        heroKinetic.style.opacity = String(1 - progress * 0.6);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // === CURSOR GLOW ===
    const cursorGlow = document.getElementById("cursorGlow");
    if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
      let mouseX = -300, mouseY = -300;
      let currentX = -300, currentY = -300;

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      const animateGlow = () => {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        cursorGlow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%,-50%)`;
        requestAnimationFrame(animateGlow);
      };
      animateGlow();
    }

    // === SCROLL REVEAL ===
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    // === IMAGE TILT ===
    if (window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll(".tilt-container").forEach((el) => {
        const container = el as HTMLElement;
        const inner = container.querySelector(".tilt-inner") as HTMLElement;
        if (!inner) return;

        const onMove = (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = ((x - centerX) / centerX) * 6;
          const rotateX = ((centerY - y) / centerY) * 6;
          inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const onLeave = () => {
          inner.style.transform = "rotateX(0deg) rotateY(0deg)";
        };

        container.addEventListener("mousemove", onMove as EventListener);
        container.addEventListener("mouseleave", onLeave as EventListener);
      });
    }

    // === NAV SCROLL SPY ===
    const sectionEls = document.querySelectorAll("section[id]");
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Dispatch custom event for Navbar to pick up
            window.dispatchEvent(new CustomEvent("section-visible", { detail: { id: entry.target.id } }));
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionEls.forEach((s) => spyObserver.observe(s));

    // === SMOOTH SCROLL FOR ALL ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      const anchor = el as HTMLAnchorElement;
      anchor.addEventListener("click", (e: MouseEvent) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          const offset = 80;
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
        }
      });
    });

    return () => {
      revealObserver.disconnect();
      spyObserver.disconnect();
    };
  }, []);

  return null;
}
