
"use client";

import Image from "next/image";
import type { ProjectStructure } from "@/config/siteData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/BlurFade";
import { Github, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: ProjectStructure;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();
  const projectTitle = t(`siteData.projects.${project.id}.title`);
  const projectDescription = t(`siteData.projects.${project.id}.description`);

  return (
    <BlurFade delay={index * 0.15} viewportAmount={0.1}>
      <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg border-border/70">
        <CardHeader className="p-0">
          <div className="aspect-[16/10] overflow-hidden">
            <Image
              src={project.img}
              alt={projectTitle}
              width={600}
              height={375}
              className={cn(
                "object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105",
                typeof project.img === 'string' && project.img.startsWith('https://placehold.co') ? 'grayscale hover:grayscale-0' : ''
              )}
              placeholder={typeof project.img === 'string' ? undefined : "blur"}
              blurDataURL={typeof project.img === 'string' ? undefined : (project.img as any).blurDataURL}
              data-ai-hint={project.dataAiHint || "project showcase"}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="font-headline text-lg mb-1.5">{projectTitle}</CardTitle>
          <CardDescription className="text-muted-foreground mb-3 text-xs leading-relaxed">
            {projectDescription}
          </CardDescription>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 border-t border-border/70">
          <div className="flex w-full justify-end gap-2.5">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="text-xs">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-3.5 w-3.5" /> {t('projectCard.codeButton')}
                </a>
              </Button>
            )}
            {project.deployedLink && (
              <Button variant="default" size="sm" asChild className="text-xs">
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-1.5 h-3.5 w-3.5" /> {t('projectCard.siteButton')}
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </BlurFade>
  );
}
