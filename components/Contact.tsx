import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="content-wrap py-20 md:py-28">
      <Reveal>
        <h2 className="max-w-[20ch] text-[28px] leading-snug font-semibold text-ink md:text-[36px]">
          Have an idea? Let&apos;s build something useful.
        </h2>

        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 text-[15px]">
          <a
            href="mailto:fiqihbadrian@gmail.com"
            className="flex items-center gap-1.5 text-ink transition-colors duration-250 hover:text-accent"
          >
            Email me <span aria-hidden>→</span>
          </a>
          {/*
            Arrow points up-right on the two links that leave the site, and
            straight right on the mailto, which stays in the mail client.
          */}
          <a
            href="https://github.com/fiqihbadrian"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ink transition-colors duration-250 hover:text-accent"
          >
            GitHub <span aria-hidden>↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/fiqih-badrian-27b73b286"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ink transition-colors duration-250 hover:text-accent"
          >
            LinkedIn <span aria-hidden>↗</span>
          </a>
          <a
            href="https://instagram.com/bian_bd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ink transition-colors duration-250 hover:text-accent"
          >
            Instagram <span aria-hidden>↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
