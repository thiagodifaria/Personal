"use client";

import { useState } from "react";
import type { ProjectStructure, ProjectCategory } from "@/config/siteData";
import { ProjectCardMinimal } from "./ProjectCardMinimal";
import { ProjectFilters } from "./ProjectFilters";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectsSectionProps {
  projects: ProjectStructure[];
  showFilters?: boolean;
}

export function ProjectsSection({
  projects,
  showFilters = false,
}: ProjectsSectionProps) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <div className="space-y-8">
      {showFilters && (
        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          className="mb-8"
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project, index) => (
          <ProjectCardMinimal
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          {t("projectsPage.noProjectsFound")}
        </p>
      )}
    </div>
  );
}
