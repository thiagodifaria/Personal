"use client";

import { siteData } from "@/config/siteData";
import { ProjectCard } from "./ProjectCard";
import { SectionThemeUpdater } from "@/components/SectionThemeUpdater";

export function ProjectsSection() {
  return (
    <SectionThemeUpdater 
      theme="light" 
      className="bg-background text-foreground py-12 md:py-20 min-h-screen flex flex-col justify-center" 
      id="projects"
    >
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-3">
            Meus Projetos Recentes
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Aqui estão alguns dos projetos em que trabalhei. Cada um representa um desafio único e uma oportunidade de aprendizado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionThemeUpdater>
  );
}
