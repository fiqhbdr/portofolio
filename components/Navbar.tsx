"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Small scroll deltas are ignored so trackpad jitter does not flap the bar.
const MIN_DELTA = 4;

// Hover underline that grows from the left, carried over from the v2 navbar.
// Only the hover is taken from v2. The rest of the bar keeps its current look.
const NAV_LINK =
  "relative transition-colors duration-250 hover:text-ink " +
  "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 " +
  "after:rounded-full after:bg-accent after:transition-all after:duration-250 " +
  "hover:after:w-full";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const frame = useRef(0);
  // The bar only hides once the hero has scrolled past, so the first screen
  // never loses its header.
  const heroBottom = useRef(0);

  useEffect(() => {
    const hero = document.getElementById("hero");

    // Measured rather than hardcoded: the hero is taller on mobile and grows
    // again once the webfonts swap in.
    const measure = () => {
      if (!hero) return;
      heroBottom.current = hero.getBoundingClientRect().bottom + window.scrollY;
    };

    measure();
    lastY.current = window.scrollY;

    const decide = () => {
      frame.current = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;
      const stillInHero = y <= heroBottom.current;

      if (stillInHero || delta < -MIN_DELTA) {
        setHidden(false);
      } else if (delta > MIN_DELTA) {
        setHidden(true);
      }

      lastY.current = y;
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(decide);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    // Catches the webfont swap and any late layout shift that changes how far
    // down the hero ends.
    const observer = hero ? new ResizeObserver(measure) : null;
    if (hero && observer) observer.observe(hero);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      observer?.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <header
      onFocus={() => setHidden(false)}
      className={`sticky top-0 z-50 mt-4 bg-bg/80 backdrop-blur transition-[transform,opacity,filter] duration-300 ease-out motion-reduce:transition-none ${
        hidden
          ? "pointer-events-none -translate-y-2 opacity-0 blur-[8px]"
          : "translate-y-0 opacity-100 blur-0"
      }`}
    >
      <div className="content-wrap flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Sora's own "B" outline, weight 800 to match the wordmark, baked into a path
              and centred in a 24 unit box. As a path it no longer waits on the webfont
              and the optical centre is exact, instead of riding the font's baseline metrics. */}
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors duration-250 group-hover:border-accent/40">
            <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" aria-hidden>
              <path d="M9.95 17.76V15.56H12.45Q13.09 15.56 13.4 15.23Q13.71 14.9 13.71 14.28Q13.71 13.66 13.4 13.34Q13.09 13.02 12.45 13.02H9.95V11.32H12.36Q13.55 11.32 14.5 11.6Q15.45 11.89 15.99 12.54Q16.53 13.2 16.53 14.28V14.5Q16.53 15.52 16.05 16.25Q15.57 16.98 14.64 17.37Q13.71 17.76 12.36 17.76ZM7.47 17.76V6.24H10.26V17.76ZM9.95 12.59V10.88H12.03Q12.67 10.88 12.95 10.56Q13.24 10.25 13.24 9.67Q13.24 9.08 12.95 8.76Q12.67 8.44 12.03 8.44H9.95V6.24H11.91Q13.89 6.24 14.98 7.07Q16.07 7.9 16.07 9.44V9.67Q16.07 10.74 15.52 11.39Q14.97 12.03 14.03 12.31Q13.09 12.59 11.91 12.59Z" />
            </svg>
          </span>
          <span className="flex flex-col justify-center">
            <span className="text-[16px] font-wordmark font-extrabold leading-tight tracking-[-0.015em] text-ink">
              Bian
            </span>
            <span className="text-[11px] font-medium leading-tight text-accent">
              Student
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6 text-[13px] text-muted">
          <Link href="#work" className={NAV_LINK}>
            Work
          </Link>
          <Link href="#about" className={NAV_LINK}>
            About
          </Link>
          <a
            href="https://github.com/fiqihbadrian"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 ${NAV_LINK}`}
          >
            GitHub <span aria-hidden>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
