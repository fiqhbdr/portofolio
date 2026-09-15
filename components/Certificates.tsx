import { certificates } from "@/data/certificates";
import Reveal from "./Reveal";

export default function Certificates() {
  return (
    <section className="content-wrap py-20 md:py-28">
      <Reveal>
        <h2 className="text-[13px] font-medium tracking-wide text-muted">
          Certificates
        </h2>
      </Reveal>

      <div className="mt-8 border-t border-line">
        {certificates.map((cert, i) => (
          <Reveal key={cert.slug} delay={i * 60}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line px-2 py-6 transition-colors duration-250 hover:bg-surface md:grid-cols-[64px_1fr_auto] md:gap-8 md:px-4 md:py-7"
            >
              <span className="font-display text-[13px] text-muted tabular-nums">
                {cert.year}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-[17px] font-semibold text-ink md:text-[19px]">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-[14px] text-muted">{cert.org}</p>
                <p className="mt-2 text-[13px] text-muted/80">
                  {cert.tags.join(" · ")}
                </p>
              </div>

              <span
                aria-hidden
                className="text-[18px] text-muted transition-all duration-250 group-hover:translate-x-1 group-hover:text-accent"
              >
                ↗
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
