import { projects } from "@/data/projects";
import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";

export default function ProjectList() {
  return (
    <section id="work" className="content-wrap py-20 md:py-28">
      <Reveal>
        <h2 className="text-[13px] font-medium tracking-wide text-muted">
          My open source projects
        </h2>
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
