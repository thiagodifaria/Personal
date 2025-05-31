
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
// import { useHeaderTheme } from "@/context/HeaderThemeContext"; // May not be needed

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  // const { headerTheme } = useHeaderTheme(); // May not be needed
  // Using CSS variables for colors
  const iconColorClass = "text-[hsl(var(--header-foreground))] hover:text-[hsl(var(--primary))] opacity-70 hover:opacity-100";

  return (
    <TooltipProvider delayDuration={0}>
      <div className={cn("flex items-center gap-1", className)}>
        {siteData.socialMedia.filter(s => s.name !== "Resume" && s.name !== "Email").map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("h-8 w-8", iconColorClass)}
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.tooltip || social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
