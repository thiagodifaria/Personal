"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { projectCategories, type ProjectCategory } from "@/config/siteData";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectFiltersProps {
    activeFilter: ProjectCategory | "all";
    onFilterChange: (filter: ProjectCategory | "all") => void;
    className?: string;
}

export function ProjectFilters({
    activeFilter,
    onFilterChange,
    className,
}: ProjectFiltersProps) {
    const { t } = useLanguage();

    return (
        <div className={cn("flex flex-wrap gap-2 justify-center", className)}>
            {projectCategories.map((category) => (
                <button
                    key={category.key}
                    onClick={() => onFilterChange(category.key)}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        "border border-border/50",
                        activeFilter === category.key
                            ? "bg-primary text-primary-foreground border-primary shadow-md"
                            : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground hover:border-border"
                    )}
                >
                    {t(category.labelKey)}
                </button>
            ))}
        </div>
    );
}
