// The range behind the project list, grouped by where the software runs.
// Slugs point at entries in data/projects.ts, and every project appears in
// exactly one area, so this section can never drift from the list above it.
export type BuildArea = {
  title: string;
  summary: string;
  projects: string[];
};

export const buildAreas: BuildArea[] = [
  {
    title: "Web applications",
    summary:
      "Browser apps with their own logic: quizzes generated from a lecture PDF, real-time chat, and graded coding practice.",
    projects: ["soalin-quiz", "azxchat", "live-coding-lab"],
  },
  {
    title: "Mobile apps",
    summary:
      "Flutter apps for Android and iOS, starting with an interactive 3D Rubik's cube.",
    projects: ["flutter-rubik3d"],
  },
  {
    title: "Desktop and plugin tools",
    summary:
      "Software that runs on the machine: a native macOS Markdown viewer and an After Effects panel.",
    projects: ["markdown-viewer", "fast-bian"],
  },
  {
    title: "Experiments",
    summary:
      "Smaller builds to test one idea: heuristic AI-text detection and a Pygame game.",
    projects: ["ai-content-forensics", "python-game-loncat"],
  },
];
