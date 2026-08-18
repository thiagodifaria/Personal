import { notFound } from "next/navigation";
import { siteContent } from "@/config/siteContent";
import { ArticleDetail } from "@/components/sections/ArticleDetail";

export function generateStaticParams() {
  return siteContent.articles.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = siteContent.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
