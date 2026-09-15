import { projects } from "@/data/projects";
import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";

export default function ProjectList() {
  return (
    <section id="work" className="content-wrap py-20 md:py-28">
      <Reveal>
        {/* flex-wrap because at 320px this heading plus the link is wider than
            the content column, so the link drops to its own line. */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <h2 className="text-[13px] font-medium tracking-wide text-muted">
            My open source projects
          </h2>

          {/* The repositories tab rather than the profile, since the profile
              only shows pinned repos while this list is a selection. */}
          <a
            href="https://github.com/fiqihbadrian?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1 text-[13px] text-muted transition-colors duration-250 hover:text-ink hover:underline"
          >
            See all on GitHub
            <span aria-hidden>↗</span>
          </a>
        </div>
      </Reveal>

      <div className="mt-8 border-t border-line">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60}>
            <ProjectItem project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
