
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
      url: `${baseUrl}/sobre`, 
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projetos`, 
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#connect`, 
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ] as MetadataRoute.Sitemap;

  const projectPageLinks = siteData.projectsDataStructure
    .filter(project => project.deployedLink) 
    .map((project) => ({
      url: project.deployedLink!, 
      
      changeFrequency: "never", 
      priority: 0.6,
    })) as MetadataRoute.Sitemap;

  return [...mainRoutes, ...projectPageLinks];
}
