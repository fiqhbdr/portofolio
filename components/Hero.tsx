import Link from "next/link";
import Contributions from "./Contributions";
import HeroAvatar from "./HeroAvatar";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section id="hero" className="content-wrap pt-20 pb-24 md:pt-28 md:pb-32">
      {/*
        Column-reverse so the avatar leads on narrow screens, where a photo
        above the headline reads better than a photo squeezed to the side.
        The two-column split only starts at lg, where there is room for the
        headline at its full size next to the avatar.
      */}
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="min-w-0">
          <h1 className="max-w-[24ch] text-[32px] leading-[1.12] font-semibold text-ink md:text-[48px] lg:text-[56px]">
            Hi, I&apos;m Fiqih&nbsp;Badrian.
            <br />
            I build <span className="text-accent">useful software</span>.
          </h1>

          <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-muted md:text-[18px]">
            Building fast, responsive, and human-centered digital experiences,
            from web apps to cross-platform solutions.
          </p>

          {/*
            The social list is a single flex item, so when the row runs out of
            width it wraps as one block instead of dropping icons one by one.
          */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-surface px-5 py-3 text-[14px] font-medium text-ink transition-colors duration-250 hover:bg-surface-hover hover:border-accent/40"
            >
              View my work
              <span aria-hidden className="text-accent">
                →
              </span>
            </Link>

            <SocialIcons />
          </div>
        </div>

        <HeroAvatar />
      </div>

      <Contributions />
    </section>
  );
}
