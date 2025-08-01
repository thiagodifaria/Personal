
"use client"; 

import { usePathname } from 'next/navigation'; 
import { useEffect } from 'react';
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SectionThemeUpdater } from "@/components/SectionThemeUpdater";
import { siteData } from "@/config/siteData";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjetosPage() {
  const pathname = usePathname(); 
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SectionThemeUpdater
      key={pathname} 
      theme="light" 
      as="main"
      className="flex flex-col min-h-screen bg-background" 
    >
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            {t('projectsPage.title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projectsPage.description')}
          </p>
        </div>
        <ProjectsSection projects={siteData.projectsDataStructure} />
      </div>
    </SectionThemeUpdater>
  );
}
