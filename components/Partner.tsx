import { partners } from "@/data/projects";
import Reveal from "./Reveal";

export default function Partner() {
  return (
    <section className="content-wrap pb-20 md:pb-28">
      <Reveal>
        <h2 className="text-[13px] font-medium tracking-wide text-muted">
          Partner
        </h2>
      </Reveal>

      <div className="mt-6 space-y-3">
        {partners.map((partner) => (
          <Reveal key={partner.slug}>
            <div className="rounded-md border border-line px-5 py-5 md:px-6 md:py-6">
              <h3 className="font-display text-[17px] font-semibold text-ink">
                {partner.name}
              </h3>
              <p className="mt-1.5 text-[14px] text-muted">
                {partner.description}
              </p>
              <p className="mt-3 text-[13px] text-muted/80">
                {partner.stack.join(" · ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
