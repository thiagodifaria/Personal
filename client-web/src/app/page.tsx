
"use client";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { SectionThemeUpdater } from "@/components/SectionThemeUpdater";
import { siteData } from "@/config/siteData";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();
  const projectsForHomePage = siteData.projectsDataStructure.slice(0, 3);

  return (
    <main className="flex flex-col">
      <HeroSection />
      
      <SectionThemeUpdater
        theme="dark" 
        id="intro" 
        className="min-h-screen flex flex-col justify-center items-center bg-secondary py-12 md:py-20" 
      >
        <IntroSection />
      </SectionThemeUpdater>

      <SectionThemeUpdater
        theme="light" 
        id="projects" 
        className="min-h-screen flex flex-col justify-center items-center bg-background py-12 md:py-20"
      >
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-3">
              {t('homePage.projectsSectionTitle')}
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              {t('homePage.projectsSectionDescription')}
            </p>
          </div>
          <ProjectsSection projects={projectsForHomePage} />
        </div>
      </SectionThemeUpdater>

      <ConnectSection />
    </main>
  );
}
