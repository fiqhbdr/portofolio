"use client";

import { useRef, useState } from "react";

type Tooltip = { text: string; x: number; y: number };

// Roughly half of the widest tooltip, used to keep the popup inside the viewport.
const TOOLTIP_HALF_WIDTH = 110;

/**
 * The graph itself is server-rendered and handed in as children. This wrapper
 * only adds the hover tooltip, through one delegated listener instead of two
 * per cell, because the grid is 367 cells and per-cell handlers are what made
 * hydrating it expensive.
 */
export default function GraphTooltip({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const lastCell = useRef<Element | null>(null);

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const cell = (event.target as Element).closest("[data-tip]");
    // Moving across a gap leaves the last tooltip up rather than blinking it
    // off and on between neighbouring cells.
    if (!cell || cell === lastCell.current) return;
    lastCell.current = cell;

    const rect = cell.getBoundingClientRect();
    setTooltip({
      text: (cell as HTMLElement).dataset.tip ?? "",
      x: Math.min(
        Math.max(rect.left + rect.width / 2, TOOLTIP_HALF_WIDTH),
        window.innerWidth - TOOLTIP_HALF_WIDTH,
      ),
      y: rect.top,
    });
  }

  function onMouseLeave() {
    lastCell.current = null;
    setTooltip(null);
  }

  return (
    <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}

      {tooltip && (
        <div
          role="tooltip"
          className="pointer-events-none fixed z-40 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-surface-hover px-2 py-1 text-[11px] text-ink ring-1 ring-line"
          style={{ left: tooltip.x, top: tooltip.y - 8 }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
