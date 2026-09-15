import Reveal from "./Reveal";

export default function GithubCTA() {
  return (
    <section className="content-wrap py-16 md:py-20">
      <Reveal>
        <a
          href="https://github.com/fiqihbadrian"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-4 rounded-lg border border-line px-6 py-8 transition-colors duration-250 hover:bg-surface md:flex-row md:items-center md:justify-between md:px-10 md:py-10"
        >
          <p className="max-w-[30ch] text-[19px] leading-snug text-ink md:text-[22px]">
            More experiments, code, and projects.
          </p>
          <span className="flex items-center gap-2 text-[15px] font-medium text-accent">
            View GitHub
            <span
              aria-hidden
              className="transition-transform duration-250 group-hover:translate-x-1"
            >
              ↗
            </span>
          </span>
        </a>
      </Reveal>
    </section>
  );
}
