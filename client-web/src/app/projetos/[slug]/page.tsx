import { notFound } from "next/navigation";
import { siteContent } from "@/config/siteContent";
import { ProjectDetail } from "@/components/sections/ProjectDetail";

export function generateStaticParams() {
  return siteContent.projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = siteContent.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
