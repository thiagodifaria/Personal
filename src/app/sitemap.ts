
import type { MetadataRoute } from "next";
import { siteData } from "@/config/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`, // Updated from /#intro
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projetos`, // Updated from /#projects
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#connect`, // Remains pointing to homepage section
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ] as MetadataRoute.Sitemap;

  const projectPageLinks = siteData.projectsData
    .filter(project => project.deployedLink) // Only include projects with a deployed link
    .map((project) => ({
      url: project.deployedLink!, // Assert non-null as we filtered
      // lastModified: new Date(), // Or a date from project data if available
      changeFrequency: "never", // Or 'monthly' if projects are updated
      priority: 0.6,
    })) as MetadataRoute.Sitemap;

  return [...mainRoutes, ...projectPageLinks];
}
