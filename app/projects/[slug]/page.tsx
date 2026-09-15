import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.name} | Fiqih Badrian`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: `${project.name} | Fiqih Badrian`,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Fiqih Badrian`,
      description: project.description,
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="content-wrap py-16 md:py-24">
      <Link
        href="/#work"
        className="text-[14px] text-muted transition-colors duration-250 hover:text-ink"
      >
        ← All work
      </Link>

      <header className="mt-8 max-w-[52ch]">
        <p className="font-display text-[13px] text-muted tabular-nums">
          {project.number}
        </p>
        <h1 className="mt-2 font-display text-[36px] font-semibold text-ink md:text-[48px]">
          {project.name}
        </h1>
        <p className="mt-3 text-[17px] text-muted md:text-[18px]">
          {project.description}
        </p>

        {project.isExperiment && (
          <p className="mt-4 inline-block rounded-sm border border-line px-3 py-1.5 text-[13px] text-muted">
            Personal experiment. Exploratory, not a production tool.
          </p>
        )}
      </header>

      <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-line pt-8 md:grid-cols-[160px_1fr]">
        {project.role && (
          <>
            <h2 className="text-[13px] font-medium text-muted">Role</h2>
            <p className="text-[15px] text-ink">{project.role}</p>
          </>
        )}

        <h2 className="text-[13px] font-medium text-muted">Tech stack</h2>
        <p className="text-[15px] text-ink">{project.stack.join(" · ")}</p>

        {project.problem && (
          <>
            <h2 className="text-[13px] font-medium text-muted">Problem</h2>
            <p className="max-w-[60ch] text-[15px] leading-relaxed text-ink">
              {project.problem}
            </p>
          </>
        )}

        {project.whatIBuilt && (
          <>
            <h2 className="text-[13px] font-medium text-muted">
              What I built
            </h2>
            <p className="max-w-[60ch] text-[15px] leading-relaxed text-ink">
              {project.whatIBuilt}
            </p>
          </>
        )}

        {project.features && project.features.length > 0 && (
          <>
            <h2 className="text-[13px] font-medium text-muted">Features</h2>
            <ul className="max-w-[60ch] space-y-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="text-[15px] leading-relaxed text-ink"
                >
                  {f}
                </li>
              ))}
            </ul>
          </>
        )}

        {(project.links?.repo || project.links?.live) && (
          <>
            <h2 className="text-[13px] font-medium text-muted">Links</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-accent hover:text-accent-hover"
                >
                  Live →
                </a>
              )}
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-accent hover:text-accent-hover"
                >
                  Repository →
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
