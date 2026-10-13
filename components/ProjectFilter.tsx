"use client";

import { useState } from "react";
import { buildAreas } from "@/data/buildAreas";
import type { Project } from "@/data/projects";
import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";

const ALL = "all";

/*
  Which group each project belongs to, flipped from data/buildAreas.ts. Built
  once at module scope rather than per render, and from static data, so the
  server and the client build the same map and hydration matches.
*/
const areaOfProject = new Map<string, string>();
for (const area of buildAreas) {
  for (const slug of area.projects) areaOfProject.set(slug, area.slug);
}

const FILTERS = [
  { slug: ALL, label: "All" },
  ...buildAreas.map((area) => ({ slug: area.slug, label: area.label })),
];

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(ALL);

  const shown =
    active === ALL
      ? projects
      : projects.filter((project) => areaOfProject.get(project.slug) === active);

  return (
    <>
      {/*
        Toggle buttons rather than tabs: each one is a real switch on what the
        list below contains, and aria-pressed reports that state without
        claiming a tabpanel that does not exist.
      */}
      <div
        role="group"
        aria-label="Filter projects"
        className="mt-8 flex flex-wrap gap-2"
      >
        {FILTERS.map((filter) => {
          const selected = filter.slug === active;

          return (
            <button
              key={filter.slug}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter.slug)}
              /* Selected reads as the lifted surface, the same language rows
                 use on hover, so the active chip needs no new color. */
              /* 44px tall on touch, the minimum comfortable target; back to the
                 compact 34px from md up, where a pointer is doing the aiming. */
              className={`inline-flex min-h-11 items-center rounded-[6px] border px-3.5 text-[13px] transition-colors duration-250 md:min-h-0 md:px-3 md:py-1.5 ${
                selected
                  ? "border-accent/40 bg-surface text-ink"
                  : "border-line text-muted hover:bg-surface hover:text-ink"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Announces the result of a filter change, which is otherwise only
          visible to someone watching the list redraw. */}
      <p role="status" aria-live="polite" className="sr-only">
        {shown.length} of {projects.length} projects shown
      </p>

      <div className="mt-6 border-t border-line">
        {shown.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60}>
            <ProjectItem project={project} />
          </Reveal>
        ))}

        {/* Every group has entries today, but a filter that can come back empty
            should say so rather than render a bare rule. */}
        {shown.length === 0 && (
          <p className="border-b border-line px-2 py-7 text-[15px] text-muted md:px-4">
            Nothing in this group yet.
          </p>
        )}
      </div>
    </>
  );
}
