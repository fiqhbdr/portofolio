import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getProjectBySlug, projects } from "@/data/projects";
import { COVER_SIZE, ProjectCoverArt } from "@/lib/projectCover";

export const dynamic = "force-static";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const project = getProjectBySlug(params.slug);
  if (!project) return new Response("Not found", { status: 404 });

  const dir = path.join(process.cwd(), "assets", "og");
  const [sora, inter] = await Promise.all([
    readFile(path.join(dir, "Sora-ExtraBold.ttf")),
    readFile(path.join(dir, "Inter-Medium.ttf")),
  ]);

  return new ImageResponse(<ProjectCoverArt project={project} />, {
    ...COVER_SIZE,
    fonts: [
      { name: "Sora", data: sora, weight: 800, style: "normal" },
      { name: "Inter", data: inter, weight: 500, style: "normal" },
    ],
  });
}
