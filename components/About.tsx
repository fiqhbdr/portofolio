import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="content-wrap py-20 md:py-28">
      <Reveal>
        <h2 className="text-[13px] font-medium tracking-wide text-muted">
          About
        </h2>
        <p className="mt-6 max-w-[42ch] text-[24px] leading-snug text-ink md:text-[32px]">
          I like turning ideas into useful software.
        </p>
        <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
          I work across web applications, mobile tools, developer utilities,
          and experiments with AI and data. I care about making things
          useful, practical, and actually working.
        </p>
        <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
          I currently work as a full stack developer at Gendaga.com, building
          a news and education portal from the database up.
        </p>
      </Reveal>
    </section>
  );
}
