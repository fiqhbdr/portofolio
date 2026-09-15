# Bian — Personal Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
data/projects.ts        All project + client-work content, separate from UI
components/              One component per section (Navbar, Hero, ProjectList, ...)
app/page.tsx             Home page, composes the sections
app/projects/[slug]/     Dedicated project detail page, generated from data/projects.ts
app/globals.css          Design tokens live in tailwind.config.ts
```

## Adding or editing a project

Edit `data/projects.ts` — add a new object to the `projects` array. The
homepage list and the `/projects/[slug]` detail page are both generated
from this file, so no component changes are needed.

## Things to swap in before shipping

- **Avatar**: `components/Navbar.tsx` currently renders a "B" placeholder
  in the navbar. Replace it with an `<Image>` once a real avatar/photo is
  available.
- **Email**: `components/Contact.tsx` uses `hello@fiqihbadrian.my.id` as
  a placeholder — update to the real address.
- **GitHub links**: `Navbar.tsx`, `GithubCTA.tsx`, and `Contact.tsx` all
  link to `https://github.com/` — replace with the real profile URL.
- **Screenshots**: each project in `data/projects.ts` has an empty
  `screenshots` array. Add image paths (in `public/`) once real
  screenshots exist, and render them on the project detail page.
- **Domain**: `app/layout.tsx` sets `metadataBase` to
  `https://fiqihbadrian.my.id` — update if that changes.

## Design tokens

Colors, border radii, and fonts (Manrope for display type, Inter for
body) are all defined in `tailwind.config.ts`. Nothing in the palette
uses gradients — every color is solid, per the design brief.
