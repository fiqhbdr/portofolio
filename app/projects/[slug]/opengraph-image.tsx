import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getProjectBySlug, projects } from "@/data/projects";

export const runtime = "nodejs";

export const alt = "Fiqih Badrian, open source project";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

const BG = "#101214";
const SURFACE = "#181B1F";
const INK = "#F5F7FA";
const MUTED = "#9BA3AE";
const LINE = "#292E35";
const ACCENT = "#A8D8FF";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Project pages set their own openGraph in generateMetadata, which replaces the
// root object outright instead of merging with it. Without this file they would
// share no image at all.
export default async function Image({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  const dir = path.join(process.cwd(), "assets", "og");
  const [sora, inter] = await Promise.all([
    readFile(path.join(dir, "Sora-ExtraBold.ttf")),
    readFile(path.join(dir, "Inter-Medium.ttf")),
  ]);

  const number = project?.number ?? "";
  const name = project?.name ?? "Fiqih Badrian";
  const description = project?.description ?? "I build useful software.";
  const stack = (project?.stack ?? []).slice(0, 4);

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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {number ? (
            <span
              style={{
                fontFamily: "Sora",
                fontWeight: 800,
                fontSize: 22,
                letterSpacing: 3,
                color: ACCENT,
                marginBottom: 16,
              }}
            >
              {number}
            </span>
          ) : null}

          <span
            style={{
              fontFamily: "Sora",
              fontWeight: 800,
              fontSize: 80,
              letterSpacing: -2,
              lineHeight: 1.05,
              color: INK,
            }}
          >
            {name}
          </span>

          <span
            style={{
              marginTop: 22,
              fontSize: 30,
              lineHeight: 1.35,
              color: MUTED,
              maxWidth: 940,
            }}
          >
            {description}
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
            {stack.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  border: `1px solid ${LINE}`,
                  borderRadius: 8,
                  padding: "10px 18px",
                  fontSize: 19,
                  color: MUTED,
                }}
              >
                {item}
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
