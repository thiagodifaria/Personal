
"use client";

import Image from "next/image";
import type { Project } from "@/config/siteData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/BlurFade";
import { Github, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <BlurFade delay={index * 0.15} inView={true}>
      <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg border-border/70">
        <CardHeader className="p-0">
          <div className="aspect-[16/10] overflow-hidden">
            <Image
              src={project.img}
              alt={project.title}
              width={600}
              height={375} // Adjusted for 16/10 aspect ratio if image size is 600px wide
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
          <CardTitle className="font-headline text-lg mb-1.5">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground mb-3 text-xs leading-relaxed">
            {project.description}
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
                  <Github className="mr-1.5 h-3.5 w-3.5" /> Código
                </a>
              </Button>
            )}
            {project.deployedLink && (
              <Button variant="default" size="sm" asChild className="text-xs">
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-1.5 h-3.5 w-3.5" /> Ver Site
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </BlurFade>
  );
}
