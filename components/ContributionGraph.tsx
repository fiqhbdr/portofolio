"use client";

import { useState } from "react";
import type { ContributionDay } from "@/lib/contributions";

const LEVELS = [
  "bg-line",
  "bg-accent/25",
  "bg-accent/50",
  "bg-accent/75",
  "bg-accent",
];

// GitHub labels every other row to keep the gutter readable.
const WEEKDAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function describe(date: string, count: number) {
  const label = DATE_FORMAT.format(new Date(`${date}T00:00:00Z`));
  if (count === 0) return `No contributions on ${label}`;
  if (count === 1) return `1 contribution on ${label}`;
  return `${count} contributions on ${label}`;
}

type Tooltip = { text: string; x: number; y: number };

// Roughly half of the widest tooltip, used to keep the popup inside the viewport.
const TOOLTIP_HALF_WIDTH = 110;

export default function ContributionGraph({
  days,
  total,
}: {
  days: ContributionDay[];
  total: number;
}) {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  const columns = Math.max(...days.map((day) => day.week)) + 1;
  const gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;

  // One label per month, pinned to the column where that month starts.
  const months: { label: string; column: number }[] = [];
  let previousMonth = -1;
  for (const day of days) {
    const month = Number(day.date.slice(5, 7));
    if (month !== previousMonth) {
      months.push({ label: MONTHS[month - 1], column: day.week + 1 });
      previousMonth = month;
    }
  }

  function showTooltip(day: ContributionDay, target: HTMLElement) {
    const rect = target.getBoundingClientRect();
    setTooltip({
      text: describe(day.date, day.count),
      x: Math.min(
        Math.max(rect.left + rect.width / 2, TOOLTIP_HALF_WIDTH),
        window.innerWidth - TOOLTIP_HALF_WIDTH,
      ),
      y: rect.top,
    });
  }

  const totalLabel = total.toLocaleString("en-US");

  return (
    <div className="mt-16">
      <p className="text-[13px] text-muted">
        <span className="font-medium text-ink">{totalLabel}</span> contributions
        in the last year
      </p>

      <div className="mt-4 flex gap-2">
        <div className="hidden w-7 shrink-0 md:block" aria-hidden />
        <div
          className="grid flex-1 gap-[1px] text-[10px] leading-none text-muted md:gap-[3px]"
          style={{ gridTemplateColumns }}
          aria-hidden
        >
          {months.map((month) => (
            <span
              key={`${month.label}-${month.column}`}
              style={{ gridColumnStart: month.column }}
            >
              {month.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-1 flex gap-2">
        <div
          className="hidden w-7 shrink-0 grid-rows-7 gap-[1px] text-[10px] leading-none text-muted md:grid md:gap-[3px]"
          aria-hidden
        >
          {WEEKDAYS.map((label, index) => (
            <span key={index} className="flex items-center justify-end">
              {label}
            </span>
          ))}
        </div>

        <div
          role="img"
          aria-label={`${totalLabel} GitHub contributions in the last year`}
          className="grid flex-1 grid-rows-7 gap-[1px] md:gap-[3px]"
          style={{ gridTemplateColumns }}
        >
          {days.map((day) => (
            <span
              key={day.date}
              onMouseEnter={(event) => showTooltip(day, event.currentTarget)}
              onMouseLeave={() => setTooltip(null)}
              style={{
                gridColumnStart: day.week + 1,
                gridRowStart: day.weekday + 1,
              }}
              className={`aspect-square w-full rounded-[1px] hover:ring-1 hover:ring-ink/40 md:rounded-[2px] ${
                LEVELS[day.level] ?? LEVELS[0]
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 text-[10px] text-muted">
        <a
          href="https://github.com/fiqihbadrian"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 transition-colors duration-250 hover:text-ink hover:underline"
        >
          github.com/fiqihbadrian
          <span aria-hidden>↗</span>
        </a>

        <div className="flex items-center gap-1.5">
          <span>Less</span>
          {LEVELS.map((level) => (
            <span
              key={level}
              className={`h-[10px] w-[10px] rounded-[2px] ${level}`}
              aria-hidden
            />
          ))}
          <span>More</span>
        </div>
      </div>

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
