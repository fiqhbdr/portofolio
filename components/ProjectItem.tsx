import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectItem({ project }: { project: Project }) {
  const { live, repo } = project.links ?? {};

  return (
    <div className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line px-2 py-7 transition-colors duration-250 hover:bg-surface has-[a:focus-visible]:bg-surface md:grid-cols-[64px_1fr_auto] md:gap-8 md:px-4 md:py-9">
      <span className="font-display text-[13px] text-muted tabular-nums">
        {project.number}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-[20px] font-semibold text-ink md:text-[26px]">
            {/*
              Stretched link. The pseudo-element covers the whole row so the row
              stays one big target, which means the live and repo links below
              have to be lifted above it to stay clickable.
            */}
            <Link
              href={`/projects/${project.slug}`}
              className="after:absolute after:inset-0"
            >
              {project.name}
            </Link>
          </h3>
          {project.featured && (
            <span className="text-[12px] text-accent">Featured</span>
          )}
        </div>

        <p className="mt-1.5 text-[14px] text-muted md:text-[15px]">
          {project.tagline}
        </p>
        <p className="mt-2 text-[13px] text-muted/80">
          {project.stack.join(" · ")}
        </p>

        {(live || repo) && (
          <div className="relative z-10 mt-3 flex flex-wrap items-center gap-x-5 gap-y-1">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] text-accent transition-colors duration-250 hover:text-accent-hover"
              >
                Live demo
                <span aria-hidden>↗</span>
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] text-accent transition-colors duration-250 hover:text-accent-hover"
              >
                Repository
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        )}
      </div>

      <span
        aria-hidden
        className="text-[20px] text-muted transition-all duration-250 group-hover:translate-x-1 group-hover:text-accent"
      >
        →
      </span>
    </div>
  );
}
