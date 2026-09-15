import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export const alt = "Fiqih Badrian. I build useful software.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

const BG = "#101214";
const SURFACE = "#181B1F";
const INK = "#F5F7FA";
const MUTED = "#9BA3AE";
const LINE = "#292E35";
const ACCENT = "#A8D8FF";

const AREAS = [
  "Web applications",
  "Mobile tools",
  "Developer tools",
  "Experiments",
];

// Static instances cut from the same subset the site ships, so the card uses the
// real Sora and Inter outlines instead of whatever font the renderer has. Satori
// cannot read woff2, hence the .ttf copies in assets/og. Read from disk rather
// than fetched: import.meta.url is not a file URL once the route is bundled, and
// outputFileTracingIncludes in next.config.mjs keeps these files alongside the
// route if it ever runs at request time instead of at build time.
export default async function Image() {
  const dir = path.join(process.cwd(), "assets", "og");

  const [sora, inter] = await Promise.all([
    readFile(path.join(dir, "Sora-ExtraBold.ttf")),
    readFile(path.join(dir, "Inter-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BG,
          padding: "76px 84px",
          fontFamily: "Inter",
          fontWeight: 500,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: 9999,
              border: `1px solid ${LINE}`,
              backgroundColor: SURFACE,
            }}
          >
            <span
              style={{
                fontFamily: "Sora",
                fontWeight: 800,
                fontSize: 38,
                color: INK,
              }}
            >
              B
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "Sora",
                fontWeight: 800,
                fontSize: 30,
                letterSpacing: -0.5,
                color: INK,
              }}
            >
              Bian
            </span>
            <span style={{ fontSize: 17, color: ACCENT }}>Student</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "Sora",
              fontWeight: 800,
              fontSize: 104,
              letterSpacing: -3,
              lineHeight: 1.05,
              color: INK,
            }}
          >
            Fiqih Badrian
          </span>
          <span style={{ marginTop: 20, fontSize: 34, color: MUTED }}>
            I build useful software.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {AREAS.map((area) => (
              <div
                key={area}
                style={{
                  display: "flex",
                  border: `1px solid ${LINE}`,
                  borderRadius: 8,
                  padding: "10px 18px",
                  fontSize: 19,
                  color: MUTED,
                }}
              >
                {area}
              </div>
            ))}
          </div>

          <span style={{ fontSize: 19, color: ACCENT }}>
            fiqihbadrian.my.id
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sora", data: sora, weight: 800, style: "normal" },
        { name: "Inter", data: inter, weight: 500, style: "normal" },
      ],
    },
  );
}
