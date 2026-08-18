import { notFound } from "next/navigation";
import { siteContent } from "@/config/siteContent";
import { SolutionDetail } from "@/components/sections/SolutionDetail";

export function generateStaticParams() {
  return siteContent.solutions.map((s) => ({
    slug: s.className,
  }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = siteContent.solutions.find((s) => s.className === slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetail slug={slug} solution={solution} />;
}
