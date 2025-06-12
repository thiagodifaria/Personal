
"use client";

import type { ProjectStructure } from "@/config/siteData"; // Use ProjectStructure
import { ProjectCard } from "./ProjectCard";

interface ProjectsSectionProps {
  projects: ProjectStructure[]; // Use ProjectStructure
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
