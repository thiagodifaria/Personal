
"use client";

import { siteData } from "@/config/siteData";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  const { t } = useLanguage();
  const iconColorClass = "text-[hsl(var(--header-foreground))] hover:text-[hsl(var(--primary))] opacity-70 hover:opacity-100";

  const displaySocials = siteData.socialMedia.filter(s => s.nameKey !== "Resume" && s.nameKey !== "Email");

  return (
    <TooltipProvider delayDuration={0}>
      <div className={cn("flex items-center gap-1", className)}>
        {displaySocials.map((social) => (
          <Tooltip key={social.nameKey}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon" // Base size, specific overrides below
                className={cn("h-7 w-7", iconColorClass)} // Smaller height and width
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={t(`siteData.socialMediaTooltips.${social.nameKey}`) || social.nameKey}>
                  <social.icon className="h-4 w-4" /> {/* Icon size itself */}
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t(`siteData.socialMediaTooltips.${social.nameKey}`) || social.nameKey}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
