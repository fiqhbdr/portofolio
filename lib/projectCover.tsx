import type { Project } from "@/data/projects";

export const COVER_SIZE = { width: 1200, height: 630 };

const BG = "#101214";
const SURFACE = "#181B1F";
const INK = "#F5F7FA";
const MUTED = "#9BA3AE";
const LINE = "#292E35";
const ACCENT = "#A8D8FF";

/**
 * One cover design for every project, so the list reads as a set instead of a
 * mix of screenshots. A project can still opt out with its own `cover` path.
 */
export function ProjectCoverArt({ project }: { project: Project }) {
  const stack = project.stack.slice(0, 4);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: BG,
        padding: "70px 80px",
        fontFamily: "Inter",
        fontWeight: 500,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 86,
            height: 56,
            borderRadius: 9999,
            border: `1px solid ${LINE}`,
            backgroundColor: SURFACE,
            padding: "0 26px",
            fontFamily: "Sora",
            fontWeight: 800,
            fontSize: 28,
            letterSpacing: 2,
            color: ACCENT,
          }}
        >
          {project.number}
        </div>

        {project.featured ? (
          <span style={{ fontSize: 22, color: ACCENT }}>Featured</span>
        ) : null}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "Sora",
            fontWeight: 800,
            fontSize: 86,
            letterSpacing: -2.5,
            lineHeight: 1.05,
            color: INK,
          }}
        >
          {project.name}
        </span>

        <span
          style={{
            marginTop: 22,
            fontSize: 32,
            lineHeight: 1.35,
            color: MUTED,
            maxWidth: 980,
          }}
        >
          {project.tagline}
        </span>
      </div>

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
    </div>
  );
}
