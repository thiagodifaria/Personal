"use client";

import Link from "next/link";
import type { ProjectStructure } from "@/config/siteData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/BlurFade";
import { Github, Globe, Download, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardMinimalProps {
    project: ProjectStructure;
    index: number;
}

export function ProjectCardMinimal({
    project,
    index,
}: ProjectCardMinimalProps) {
    const { t } = useLanguage();
    const projectTitle = t(`siteData.projects.${project.id}.title`);
    const projectShortDesc = t(`siteData.projects.${project.id}.shortDescription`);

    const IconComponent = project.icon;
    const maxVisibleTechs = 3;
    const visibleTechs = project.technologies.slice(0, maxVisibleTechs);
    const remainingTechs = project.technologies.length - maxVisibleTechs;

    return (
        <BlurFade delay={index * 0.1} viewportAmount={0.1}>
            <Card
                className={cn(
                    "group relative overflow-hidden transition-all duration-300 h-full flex flex-col",
                    "bg-card/80 backdrop-blur-sm border-border/50",
                    "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                )}
            >
                <CardContent className="p-5 flex flex-col h-full">
                    {/* Header: Icon + Primary Tech Badge */}
                    <div className="flex items-start justify-between mb-4">
                        <div
                            className={cn(
                                "p-3 rounded-xl",
                                "bg-gradient-to-br from-primary/10 to-primary/5",
                                "border border-primary/20"
                            )}
                        >
                            <IconComponent className="h-6 w-6 text-primary" />
                        </div>

                        <div className="flex items-center gap-2">
                            {project.inDevelopment && (
                                <Badge
                                    variant="outline"
                                    className="text-xs bg-yellow-500/10 text-yellow-600 border-yellow-500/30"
                                >
                                    {t("projectCard.inDevelopment")}
                                </Badge>
                            )}
                            <Badge
                                variant="secondary"
                                className="text-xs font-medium bg-primary/10 text-primary border-0"
                            >
                                {project.primaryTech}
                            </Badge>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-headline text-foreground mb-2 group-hover:text-primary transition-colors">
                        {projectTitle}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                        {projectShortDesc}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {visibleTechs.map((tech) => (
                            <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs px-2 py-0.5 bg-muted/50"
                            >
                                {tech}
                            </Badge>
                        ))}
                        {remainingTechs > 0 && (
                            <Badge
                                variant="outline"
                                className="text-xs px-2 py-0.5 bg-muted/50 text-muted-foreground"
                            >
                                +{remainingTechs}
                            </Badge>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border/50 mt-auto">
                        <div className="flex flex-wrap items-center gap-1">
                            {project.github && (
                                <Button variant="ghost" size="sm" asChild className="h-8 px-2">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="h-4 w-4 mr-1" />
                                        {t("projectCard.codeButton")}
                                    </a>
                                </Button>
                            )}
                            {project.deployedLink && (
                                <Button variant="ghost" size="sm" asChild className="h-8 px-2">
                                    <a
                                        href={project.deployedLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Globe className="h-4 w-4 mr-1" />
                                        {t("projectCard.siteButton")}
                                    </a>
                                </Button>
                            )}
                            {project.executableUrl && (
                                <Button variant="ghost" size="sm" asChild className="h-8 px-2">
                                    <a
                                        href={project.executableUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download className="h-4 w-4" />
                                    </a>
                                </Button>
                            )}
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="h-8 px-2 text-primary hover:text-primary shrink-0"
                        >
                            <Link href={`/projetos/${project.id}`}>
                                {t("projectCard.exploreButton")}
                                <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </BlurFade>
    );
}
