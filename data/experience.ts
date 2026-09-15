export type Experience = {
  slug: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  stack: string[];
};

// Work history, most recent first.
export const experiences: Experience[] = [
  {
    slug: "gendaga",
    role: "Full Stack Developer",
    company: "Gendaga.com",
    companyUrl: "https://gendaga.com",
    period: "2026",
    description:
      "Built and maintained a news and education portal end to end, covering the PostgreSQL schema, the API layer, the admin content workflow, and the public frontend.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Cloudflare R2",
      "Tailwind CSS",
      "Tiptap",
      "Gemini API",
    ],
  },
];
