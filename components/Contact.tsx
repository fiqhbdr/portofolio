import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

/*
  These three lines are the facts a stranger wants before writing: whether you
  are taking work, how long a reply takes, and what time zone they are dealing
  with. Edit them here; nothing else has to change.
*/
const AVAILABILITY = [
  { label: "Status", value: "Open to internships and freelance work" },
  { label: "Reply time", value: "Usually within a day" },
  { label: "Location", value: "Indonesia (GMT+7)" },
];

export default function Contact() {
  return (
    <section className="content-wrap py-20 md:py-28">
      {/* Two columns from lg up so the form sits beside the heading rather than
          under it. Below that the heading would be squeezed into half the
          width, so they stack instead. */}
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
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

        {/* Fills the space the form's height leaves under this column, and
            puts the useful facts where someone deciding to write will see
            them. */}
        <div className="mt-10">
          <h3 className="text-[13px] font-medium tracking-wide text-muted">
            Availability
          </h3>
          <dl className="mt-4 space-y-4">
            {AVAILABILITY.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-[13px] text-muted">{label}</dt>
                <dd className="mt-1 text-[15px] text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        </Reveal>

        <Reveal delay={60}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
