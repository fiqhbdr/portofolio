import Reveal from "./Reveal";

// Stack per area. Every entry is backed by a repo, a README, or the Gendaga
// work history, so nothing here is guesswork.
const areas = [
  {
    number: "01",
    title: "Web Applications",
    detail: "APIs, dashboards, client applications",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    number: "02",
    title: "Mobile Tools",
    detail: "Android and Flutter applications",
    stack: ["Flutter", "Dart"],
  },
  {
    number: "03",
    title: "Developer Tools",
    detail: "Extensions and productivity tools",
    stack: ["JavaScript", "ExtendScript", "Swift"],
  },
  {
    number: "04",
    title: "Experiments",
    detail: "AI, data, APIs, and ideas",
    stack: ["Python", "Pygame", "Gemini API", "SQL"],
  },
];

export default function WhatIBuild() {
  return (
    <section className="content-wrap py-20 md:py-28">
      <Reveal>
        <h2 className="text-[13px] font-medium tracking-wide text-muted">
          What I build
        </h2>
      </Reveal>

      <div className="mt-8 divide-y divide-line border-t border-line">
        {areas.map((area) => (
          <div
            key={area.number}
            className="flex flex-wrap items-baseline gap-x-5 gap-y-2 py-5 md:gap-x-8 md:py-6"
          >
            <span className="font-display text-[13px] text-muted tabular-nums">
              {area.number}
            </span>
            <span className="font-display text-[17px] font-medium text-ink md:text-[19px] md:w-[220px] shrink-0">
              {area.title}
            </span>
            {/*
              The badges sit inside this column rather than as a fourth flex
              child, so the row keeps its baseline alignment: a flex item's
              baseline is the baseline of its own first line.

              w-full drops this column onto its own line on mobile, where
              leaving it inline would squeeze the badges into a narrow strip and
              stack them one per row. From md up there is room to sit inline.
            */}
            <div className="w-full min-w-0 md:w-auto">
              <span className="text-[14px] text-muted md:text-[15px]">
                {area.detail}
              </span>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {area.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-[6px] border border-line px-2 py-0.5 text-[11px] leading-tight text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
