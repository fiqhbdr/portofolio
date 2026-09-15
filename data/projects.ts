export type Project = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  role?: string;
  stack: string[];
  problem?: string;
  whatIBuilt?: string;
  features?: string[];
  screenshots?: string[];
  links?: {
    repo?: string;
    live?: string;
  };
  featured?: boolean;
  isExperiment?: boolean;
};

export type PartnerProject = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  links?: {
    repo?: string;
    live?: string;
  };
};

// Open source projects, in display order. Add new entries here — no UI changes needed.
export const projects: Project[] = [
  {
    slug: "soalin-quiz",
    number: "01",
    name: "Soalin Quiz",
    tagline: "Turns lecture PDFs into multiple-choice quizzes",
    description:
      "A web app that converts lecture material in PDF form into multiple-choice quizzes automatically.",
    role: "Solo developer",
    stack: ["TypeScript", "Next.js", "AI", "PDF"],
    problem:
      "Turning lecture notes into practice questions by hand takes hours, and most of that work is reformatting text that already exists.",
    whatIBuilt:
      "A web app that takes a lecture PDF, generates multiple-choice questions from it, and explains each answer. Difficulty is set by semester, and the material can either stay strictly within the PDF or be allowed to draw on related concepts.",
    features: [
      "Quizzes generated from an uploaded PDF",
      "Difficulty set by semester, from 1 to 8",
      "Question counts of 5, 10, 15, or 20",
      "Four-option questions with an explanation for each answer",
      "Strict mode for PDF-only topics, supplement mode for related concepts",
      "Upload validation, PDF only and capped at 10MB",
      "Results with score, percentage, and answer review",
      "Quiz progress saved in the browser so it can be resumed",
    ],
    screenshots: [],
    links: {
      repo: "https://github.com/fiqihbadrian/Soalin-Quiz",
      live: "https://soalin.fiqihbadrian.my.id",
    },
  },
  {
    slug: "azxchat",
    number: "02",
    name: "Azxchat",
    tagline: "Real-time web chat",
    description:
      "A real-time web chat application built with Next.js and Socket.IO.",
    role: "Solo developer",
    stack: ["Next.js", "Socket.IO", "JavaScript", "Tailwind CSS", "DaisyUI"],
    problem:
      "Chat that refreshes on a timer feels broken. Messages need to arrive the moment they are sent.",
    whatIBuilt:
      "A Next.js chat app that uses Socket.IO to push messages to every connected client as they are sent.",
    features: [
      "Real-time message delivery over WebSockets",
      "Interface built with Tailwind CSS and DaisyUI",
    ],
    screenshots: [],
    links: { repo: "https://github.com/fiqihbadrian/Azxchat" },
  },
  {
    slug: "python-game-loncat",
    number: "03",
    name: "Python Game Loncat",
    tagline: "Jumping game built with Pygame",
    description:
      "A simple jumping game written in Python using the Pygame package.",
    role: "Solo developer",
    stack: ["Python", "Pygame"],
    problem:
      "Pygame handles game loops and rendering, but a playable jump still needs hand-tuned gravity and collision timing to feel right.",
    whatIBuilt:
      "A small side-scrolling game with a jumping character, built to get the movement feeling responsive rather than floaty.",
    features: [
      "Jumping character with hand-tuned gravity",
      "Built with Python and Pygame",
      "Runs with a single command after installing Pygame",
    ],
    screenshots: [],
    links: { repo: "https://github.com/fiqihbadrian/Python-Game-Loncat" },
  },
  {
    slug: "markdown-viewer",
    number: "04",
    name: "Markdown Viewer",
    tagline: "Lightweight Markdown viewer for macOS",
    description:
      "A lightweight Markdown viewer for macOS that renders files with GitHub-style formatting.",
    role: "Solo developer",
    stack: ["Swift", "WebKit", "macOS"],
    problem:
      "Opening a Markdown file on macOS usually means launching a full editor just to read it. Editors are slow to start and heavier than the file itself.",
    whatIBuilt:
      "A native macOS app that opens Markdown files instantly and renders them the way GitHub does, with editing and export built in for when reading is not enough.",
    features: [
      "Around 1MB app size",
      "Native Swift rendering through WebKit",
      "GitHub-style Markdown formatting",
      "Automatic dark mode that follows the system theme",
      "Edit mode with live preview",
      "Save changes directly from the app",
      "Refresh button for live reload",
      "Keyboard shortcuts for open and save",
      "Five preview themes: system, GitHub light, GitHub dark, light, dark",
      "Export to PDF",
      "Export to PNG",
      "Can be set as the default app for .md files",
    ],
    screenshots: [],
    links: { repo: "https://github.com/fiqihbadrian/Markdown-Viewer" },
  },
  {
    slug: "live-coding-lab",
    number: "05",
    name: "Live Coding Lab",
    tagline: "Interview-style live coding practice",
    description:
      "A practice app for interview-style live coding tests, with 55 problems across 9 categories and automatic scoring.",
    role: "Solo developer",
    stack: ["JavaScript", "HTML", "CSS", "CodeMirror", "Cloudflare"],
    problem:
      "Practising for a live coding interview usually means grinding problems with no feedback on anything except whether the tests pass. Code quality, speed, and topic coverage stay invisible.",
    whatIBuilt:
      "A static practice app with a built-in editor and automatic grading. Solutions run in a sandboxed iframe against test cases, and the code is also reviewed for quality issues like var, loose equality, deep nesting, and naming. Feedback explains what is missing instead of only reporting a score. There is no build step, so it opens straight from file:// and deploys anywhere.",
    features: [
      "55 problems across 9 categories",
      "Built-in CodeMirror editor for JavaScript, HTML, CSS, and SQL",
      "Automatic scoring from test cases in a sandboxed iframe",
      "Code quality analysis covering var, loose equality, nesting, naming, and comments",
      "Feedback that explains what is missing, not just the score",
      "Exam simulation mode with question count, duration, difficulty, and a per-question timer",
      "History with per-category progress, daily streak, and exam results",
      "Interview readiness verdict across five dimensions and role fit",
      "Local identity stored only in the browser",
      "Mobile friendly layout, including landscape phone",
    ],
    screenshots: [],
    links: {
      repo: "https://github.com/fiqihbadrian/Live-Coding-Lab",
      live: "https://livecoding.fiqihbadrian.my.id",
    },
  },
  {
    slug: "ai-content-forensics",
    number: "06",
    name: "AI Content Forensics",
    tagline: "Heuristic detection of AI-written text",
    description:
      "A tool that estimates how much of a piece of text was written by AI, using heuristic analysis with no AI model and no external API.",
    role: "Solo developer",
    stack: ["JavaScript", "Node.js", "CSS", "PWA"],
    problem:
      "Most AI detectors send your text to a third party and hide how the score was reached. The result is a number you have no reason to trust.",
    whatIBuilt:
      "A detector that measures five statistical signals on the server and shows each one, so the score can be traced back to something concrete. It runs on plain Node.js with zero npm dependencies, and falls back to running the same engine in the browser if the server cannot be reached.",
    features: [
      "Probability score from 0 to 100% with a ring visual and confidence meter",
      "Breakdown of five signals: template phrases, perplexity, burstiness, vocabulary richness, and formal style",
      "Per-sentence highlighting labelled AI, mixed, or human",
      "Check history kept in localStorage, up to 30 entries",
      "Heuristic analysis only, text is never sent to a third party",
      "Zero npm dependencies",
      "Installable as a PWA with dark theme and mobile bottom navigation",
      "Falls back to in-browser analysis when the server is unreachable",
    ],
    screenshots: [],
    links: {
      repo: "https://github.com/fiqihbadrian/AI-Content-Forensics",
      live: "https://aicf.fiqihbadrian.my.id",
    },
  },
  {
    slug: "fast-bian",
    number: "07",
    name: "Fast Bian",
    tagline: "Animation preset panel for After Effects",
    description:
      "An Adobe After Effects panel that provides a collection of ready-to-use animation presets.",
    role: "Solo developer",
    stack: ["JavaScript", "ExtendScript", "CEP", "HTML", "CSS"],
    problem:
      "Common motion design work means rebuilding the same keyframes and expressions by hand every time. Text animations, camera moves, and easing curves are all variations on setups that already exist.",
    whatIBuilt:
      "A CEP panel that runs inside After Effects and applies those setups in one click. The interface is HTML, CSS, and JavaScript, while everything that touches After Effects runs through ExtendScript on the host side, connected with CSInterface.evalScript().",
    features: [
      "Text animation presets including fade, slide, pop, bounce, swing, shake, and typewriter",
      "Word-by-word, line-by-line, and karaoke-style lyrics presets",
      "Layer animations in three modes: enter, middle, and exit",
      "Shape presets for rectangle, square, circle, ellipse, triangle, pentagon, hexagon, star, and diamond",
      "Camera presets for push, truck, pedestal, orbit, and roll, creating a 50mm camera when the comp has none",
      "Five stabilization presets built on Warp Stabilizer VFX",
      "Eleven speed graph easing curves that apply to every keyframe on a layer",
      "Undo and redo buttons inside the panel",
      "Curve tab for drawing a bezier by hand and applying it to selected keyframes",
      "AI chat tab that can see the comp name, layer list, selection, and existing keyframes",
    ],
    screenshots: [],
    links: { repo: "https://github.com/fiqihbadrian/Fash-Bian" },
  },
  {
    slug: "flutter-rubik3d",
    number: "08",
    name: "Flutter Rubik3D",
    tagline: "Interactive 3D Rubik's Cube",
    description:
      "An interactive 3D Rubik's Cube built with Flutter, with smooth rotation and touch gesture controls.",
    role: "Solo developer",
    stack: ["Flutter", "Dart"],
    problem:
      "A flat 2D view of a cube makes it hard to see how the layers actually move when you turn one.",
    whatIBuilt:
      "A Flutter app that renders the cube in 3D, with rotation animations and touch gestures for turning layers, plus scramble and reset.",
    features: [
      "Interactive 3D cube",
      "Smooth rotation animations",
      "Touch gesture controls",
      "Cube scrambling",
      "Reset cube state",
      "Cross-platform support",
    ],
    screenshots: [],
    links: { repo: "https://github.com/fiqihbadrian/flutter-rubik3d" },
  },
];

// Partner work, kept separate and intentionally less prominent than open source projects.
export const partners: PartnerProject[] = [
  {
    slug: "platform-film",
    name: "Platform Film",
    description: "Built end to end, from API to interface.",
    stack: ["Laravel REST API", "Next.js", "PostgreSQL", "Cloudflare R2"],
    links: {},
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
