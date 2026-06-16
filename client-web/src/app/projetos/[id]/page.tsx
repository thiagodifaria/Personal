"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/config/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { SectionThemeUpdater } from "@/components/SectionThemeUpdater";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/BlurFade";
import { ArrowLeft, Github, Globe, Download, ExternalLink } from "lucide-react";

export default function ProjectDetailPage() {
    const params = useParams();
    const { t } = useLanguage();
    const projectId = params.id as string;

    const project = siteData.projectsDataStructure.find((p) => p.id === projectId);

    if (!project) {
        notFound();
    }

    const projectTitle = t(`siteData.projects.${project.id}.title`);
    const projectDescription = t(`siteData.projects.${project.id}.description`);
    const IconComponent = project.icon;

    return (
        <SectionThemeUpdater
            theme="dark"
            as="main"
            className="flex flex-col min-h-screen bg-background text-foreground"
        >
            <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex-grow">
                {/* Back Button */}
                <BlurFade delay={0.05} viewportAmount={0.1}>
                    <Button
                        variant="ghost"
                        asChild
                        className="mb-8 text-muted-foreground hover:text-foreground"
                    >
                        <Link href="/projetos">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            {t("projectDetail.backButton")}
                        </Link>
                    </Button>
                </BlurFade>

                {/* Header */}
                <BlurFade delay={0.1} viewportAmount={0.1}>
                    <div className="flex items-start gap-6 mb-8">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                            <IconComponent className="h-10 w-10 text-primary" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
                                    {projectTitle}
                                </h1>
                                {project.inDevelopment && (
                                    <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30">
                                        {t("projectCard.inDevelopment")}
                                    </Badge>
                                )}
                            </div>
                            <Badge variant="secondary" className="text-sm bg-primary/10 text-primary border-0">
                                {project.primaryTech}
                            </Badge>
                        </div>
                    </div>
                </BlurFade>

                {/* Action Buttons */}
                <BlurFade delay={0.15} viewportAmount={0.1}>
                    <div className="flex flex-wrap gap-3 mb-10">
                        {project.github && (
                            <Button variant="outline" size="lg" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5 mr-2" />
                                    {t("projectDetail.viewCode")}
                                    <ExternalLink className="h-4 w-4 ml-2 opacity-50" />
                                </a>
                            </Button>
                        )}
                        {project.deployedLink && (
                            <Button size="lg" asChild>
                                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                                    <Globe className="h-5 w-5 mr-2" />
                                    {t("projectDetail.viewSite")}
                                    <ExternalLink className="h-4 w-4 ml-2 opacity-50" />
                                </a>
                            </Button>
                        )}
                        {project.executableUrl && (
                            <Button size="lg" asChild>
                                <a href={project.executableUrl} target="_blank" rel="noopener noreferrer">
                                    <Download className="h-5 w-5 mr-2" />
                                    {t("projectDetail.download")}
                                </a>
                            </Button>
                        )}
                    </div>
                </BlurFade>

                {/* Image */}
                {project.img && (
                    <BlurFade delay={0.2} viewportAmount={0.1}>
                        <div className="mb-10 rounded-xl overflow-hidden border border-border/50 bg-muted/20">
                            <Image
                                src={project.img}
                                alt={projectTitle}
                                width={1200}
                                height={675}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </BlurFade>
                )}

                {/* Description */}
                <BlurFade delay={0.25} viewportAmount={0.1}>
                    <div className="mb-10">
                        <h2 className="text-2xl font-headline font-semibold mb-4 text-foreground">
                            {t("projectDetail.aboutTitle")}
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {projectDescription}
                        </p>
                    </div>
                </BlurFade>

                {/* Technologies */}
                <BlurFade delay={0.3} viewportAmount={0.1}>
                    <div>
                        <h2 className="text-2xl font-headline font-semibold mb-4 text-foreground">
                            {t("projectDetail.technologiesTitle")}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="text-sm px-4 py-2"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </BlurFade>
            </div>
        </SectionThemeUpdater>
    );
}
