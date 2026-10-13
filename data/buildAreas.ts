// The range behind the project list, grouped by where the software runs.
// Slugs point at entries in data/projects.ts, and every project appears in
// exactly one area, so this section can never drift from the list above it.
//
// The project list reuses these groups as its filters, so the two sections
// cannot end up describing the same work in two different ways. `slug` is the
// filter value, `label` the short form that fits on a chip, and `title` the
// heading this section prints.
export type BuildArea = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  projects: string[];
};

export const buildAreas: BuildArea[] = [
  {
    slug: "web",
    title: "Web applications",
    label: "Web",
    summary:
      "Browser apps with their own logic: quizzes generated from a lecture PDF, real-time chat, and graded coding practice.",
    projects: ["soalin-quiz", "azxchat", "live-coding-lab"],
  },
  {
    slug: "apps",
    title: "Mobile apps",
    label: "Apps",
    summary:
      "Flutter apps for Android and iOS, starting with an interactive 3D Rubik's cube.",
    projects: ["flutter-rubik3d"],
  },
  {
    slug: "tools",
    title: "Desktop and plugin tools",
    label: "Tools",
    summary:
      "Software that runs on the machine: a native macOS Markdown viewer and an After Effects panel.",
    projects: ["markdown-viewer", "fast-bian"],
  },
  {
    slug: "experiments",
    title: "Experiments",
    label: "Experiments",
    summary:
      "Smaller builds to test one idea: heuristic AI-text detection and a Pygame game.",
    projects: ["ai-content-forensics", "python-game-loncat"],
  },
];
