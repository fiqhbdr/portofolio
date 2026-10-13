import Link from "next/link";
import { buildAreas } from "@/data/buildAreas";
import { getProjectBySlug, type Project } from "@/data/projects";
import Reveal from "./Reveal";

export default function WhatIBuild() {
  return (
    <section className="content-wrap py-20 md:py-28">
      <Reveal>
        <h2 className="text-[13px] font-medium tracking-wide text-muted">
          What I build
        </h2>
      </Reveal>

      <div className="mt-8 border-t border-line">
        {buildAreas.map((area, i) => {
          // The names come from the project list rather than being repeated
          // here, so a renamed project renames in one place.
          const areaProjects = area.projects
            .map(getProjectBySlug)
            .filter((p): p is Project => p !== undefined);

          return (
            <Reveal key={area.title} delay={i * 60}>
              <div className="grid gap-3 border-b border-line px-2 py-7 md:grid-cols-[240px_1fr] md:gap-8 md:px-4 md:py-9">
                <h3 className="font-display text-[19px] font-semibold text-ink md:text-[21px]">
                  {area.title}
                </h3>

                <div className="min-w-0">
                  <p className="max-w-[54ch] text-[15px] leading-relaxed text-muted">
                    {area.summary}
                  </p>

                  {/* py-1 on each link keeps the tap target above the 24px
                      minimum without opening a visible gap in the row. */}
                  <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                    {areaProjects.map((project) => (
                      <li key={project.slug}>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-block py-1 text-[14px] text-accent transition-colors duration-250 hover:text-accent-hover hover:underline md:text-[15px]"
                        >
                          {project.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
