"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Wheel feel. Lenis defaults are lerp 0.1 and wheelMultiplier 1: lerp is how fast
// the page catches up to the input, wheelMultiplier is how far one notch travels.
// Lowering both is what makes a flick cover less ground and settle softer.
const WHEEL_LERP = 0.06;
const WHEEL_MULTIPLIER = 0.75;

export default function SmoothScroll() {
  useEffect(() => {
    // Touch and prefers-reduced-motion stay at their defaults. Finger scrolling
    // keeps the platform's own momentum, and reduced motion drops the smoothing
    // by itself instead of needing a second check here.
    const lenis = new Lenis({
      lerp: WHEEL_LERP,
      wheelMultiplier: WHEEL_MULTIPLIER,
      autoRaf: true,
    });

    // An anchor scroll animates on its own, but while Lenis is still settling it
    // writes its own position every frame and would cancel that animation. Drop
    // the inertia first so the anchor is left to finish normally.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a[href^="#"]');
      if (link) lenis.scrollTo(lenis.scroll, { immediate: true });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
