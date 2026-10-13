"use client";

import Image from "next/image";
import { useState } from "react";

// The redirect form is deliberate: GitHub resolves it to whatever the current
// avatar is, so a new profile photo shows up here with no redeploy.
const GITHUB_PHOTO = "https://github.com/fiqihbadrian.png?size=400";

export default function HeroAvatar() {
  const [photoRequested, setPhotoRequested] = useState(false);
  const [photoReady, setPhotoReady] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  // github.com is a third party, so nothing is fetched from it until the pointer
  // or the keyboard shows intent. Previously the photo downloaded on every visit
  // to sit behind an opacity-0 layer.
  const requestPhoto = () => setPhotoRequested(true);

  // The logo stays up until the photo has actually decoded, so a tap on a cold
  // cache never leaves an empty circle behind.
  const logoVisible = !showPhoto || !photoReady;

  return (
    // The wrapper carries the glow and the label so neither is clipped by the
    // button's overflow-hidden. self-start keeps it at the avatar's own width
    // on mobile, where the column layout would otherwise stretch it full width
    // and float the label away from the photo.
    <div className="relative shrink-0 self-start">
      <button
        type="button"
        onClick={() => {
          requestPhoto();
          setShowPhoto((on) => !on);
        }}
        onPointerEnter={requestPhoto}
        onFocus={requestPhoto}
        aria-pressed={showPhoto}
        aria-label="Show my GitHub photo"
        className="peer relative block h-32 w-32 overflow-hidden rounded-full border border-line bg-surface shadow-avatar transition duration-250 hover:border-accent/40 hover:shadow-avatar-hover focus-visible:rounded-full lg:h-44 lg:w-44"
      >
        {/*
          The logo is the hero image on phones, so it is preloaded rather than
          discovered late, and it ships as WebP instead of a 256KB PNG.
        */}
        <Image
          src="/logo.webp"
          alt=""
          fill
          priority
          sizes="176px"
          className={`object-cover transition-opacity duration-250 ${
            logoVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {photoRequested && (
          <img
            src={GITHUB_PHOTO}
            alt=""
            width={400}
            height={400}
            onLoad={() => setPhotoReady(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-250 ${
              showPhoto && photoReady ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
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
