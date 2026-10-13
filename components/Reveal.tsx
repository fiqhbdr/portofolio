"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Layout effect on the client so the hide happens in the same frame as
// hydration, before the browser paints. With a plain effect the hide lands a
// frame or more after paint, and a reader who has already scrolled sees the
// cards blink out and fade back in. On the server there is no layout to read,
// so the no-op effect keeps React from warning.
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

// Fires while the element is still this far below the fold, so the animation is
// already running by the time it is on screen instead of starting from a
// visible frame.
const ENTER_MARGIN = "0px 0px 160px 0px";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Whatever is on screen right now is left exactly as the server painted it.
    // Hiding it here to reveal it a frame later is what used to push the first
    // paint out until the observer had run.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setHidden(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: ENTER_MARGIN },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${hidden ? "opacity-0" : "animate-reveal-up"} ${className}`}
      style={{ animationDelay: hidden ? undefined : `${delay}ms` }}
    >
      {children}
    </div>
  );
}
