"use client";

import { useState } from "react";

// The redirect form is deliberate: GitHub resolves it to whatever the current
// avatar is, so a new profile photo shows up here with no redeploy.
const GITHUB_PHOTO = "https://github.com/fiqihbadrian.png?size=400";

export default function HeroAvatar() {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    // The wrapper carries the glow and the label so neither is clipped by the
    // button's overflow-hidden. self-start keeps it at the avatar's own width
    // on mobile, where the column layout would otherwise stretch it full width
    // and float the label away from the photo.
    <div className="relative shrink-0 self-start">
      <button
        type="button"
        onClick={() => setShowPhoto((on) => !on)}
        aria-pressed={showPhoto}
        aria-label="Show my GitHub photo"
        className="peer relative block h-32 w-32 overflow-hidden rounded-full border border-line bg-surface shadow-avatar transition duration-250 hover:border-accent/40 hover:shadow-avatar-hover focus-visible:rounded-full lg:h-44 lg:w-44"
      >
        {/*
          Both images stay mounted so the swap is instant. Swapping a single src
          would blank the circle while the GitHub photo downloads.
        */}
        <img
          src="/logo.png"
          alt=""
          width={500}
          height={500}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-250 ${
            showPhoto ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={GITHUB_PHOTO}
          alt=""
          width={400}
          height={400}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-250 ${
            showPhoto ? "opacity-100" : "opacity-0"
          }`}
        />
      </button>

      {/*
        Hover and keyboard only, driven by the button through peer so the label
        tracks the pointer exactly: it leaves the moment the pointer does.
        focus-visible rather than focus, because a mouse click would otherwise
        leave the button focused and pin this label open for good.
      */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-[11px] font-medium text-bg opacity-0 transition-opacity duration-250 peer-hover:opacity-100 peer-focus-visible:opacity-100"
      >
        Click to view
      </span>
    </div>
  );
}
