
"use client";

import { siteData } from "@/config/siteData";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/FlipWords";
import { OrbitingCircles } from "@/components/ui/OrbitingCircles";
import { SectionThemeUpdater } from "@/components/SectionThemeUpdater";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  const { personalInfo, orbitingTechIcons, socialMedia } = siteData;

  const heroWords = t('siteData.heroWords', true) as string[];
  const heroSubtitle = t('siteData.heroSubtitle');

  return (
    <SectionThemeUpdater theme="light" className="bg-background text-foreground" id="hero">
      <div className="container mx-auto min-h-screen max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 md:py-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline tracking-tight mb-2">
              {personalInfo.name}
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 15, -10, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.2 }}
                className="inline-block ml-2 text-3xl sm:text-4xl lg:text-5xl"
                aria-label="laptop icon"
                role="img"
              >
                💻
              </motion.span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground mb-1">
              <FlipWords words={heroWords} className="text-primary" />
            </div>
            
            <p className="text-base text-muted-foreground mt-2 mb-8 max-w-md">
              {heroSubtitle}
            </p>

            <div className="flex justify-center md:justify-start space-x-2">
              <TooltipProvider delayDuration={100}>
                {socialMedia.map((social) => (
                  <Tooltip key={social.nameKey}>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-9 w-9 rounded-full">
                        <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={t(`siteData.socialMediaTooltips.${social.nameKey}`) || social.nameKey} download={social.nameKey === "Resume" ? "curriculo.pdf" : undefined}>
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{t(`siteData.socialMediaTooltips.${social.nameKey}`) || social.nameKey}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full h-[350px] md:h-[240px] lg:h-[280px] mt-12 md:mt-0">
            <OrbitingCircles
              className="h-full w-full border-none"
              items={orbitingTechIcons}
              path={true} 
            >
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </SectionThemeUpdater>
  );
}