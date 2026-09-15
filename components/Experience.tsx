import { experiences } from "@/data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="content-wrap py-20 md:py-28">
      <Reveal>
        <h2 className="text-[13px] font-medium tracking-wide text-muted">
          Experience
        </h2>
      </Reveal>

      <div className="mt-8 border-t border-line">
        {experiences.map((item, i) => (
          <Reveal key={item.slug} delay={i * 60}>
            <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-line px-2 py-7 md:grid-cols-[64px_1fr] md:gap-8 md:px-4 md:py-9">
              <span className="font-display text-[13px] text-muted tabular-nums">
                {item.period}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-[20px] font-semibold text-ink md:text-[24px]">
                  {item.role}
                </h3>
                <p className="mt-1.5 text-[14px] text-accent md:text-[15px]">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-hover"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </p>
                <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-muted">
                  {item.description}
                </p>
                <p className="mt-3 text-[13px] text-muted/80">
                  {item.stack.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
