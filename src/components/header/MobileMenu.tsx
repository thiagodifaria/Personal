
"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteData } from "@/config/siteData";
import { NavLink } from "./NavLink";
import { SocialLinks } from "./SocialLinks";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from 'next/dynamic';

const LanguageSwitcherPlaceholder = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-0.5 h-auto pointer-events-none", className)} aria-hidden="true">
    <span className="h-auto py-0 px-0 text-xs leading-none opacity-0">PT</span>
    <span className="text-[hsl(var(--header-foreground))] opacity-50 text-xs">/</span>
    <span className="h-auto py-0 px-0 text-xs leading-none opacity-0">EN</span>
  </div>
);

const DynamicLanguageSwitcher = dynamic(
  () => import('@/components/LanguageSwitcher').then(mod => mod.LanguageSwitcher),
  {
    ssr: false,
    loading: ({ className }) => <LanguageSwitcherPlaceholder className={className} />,
  }
);


export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  const iconColorClass = "text-[hsl(var(--header-foreground))] hover:text-[hsl(var(--primary))]";
  const sheetBgClass = "bg-background text-foreground";

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
            variant="ghost" 
            size="icon" 
            className={cn("md:hidden h-7 w-7", iconColorClass)} 
            aria-label={t('header.openNavigationMenu')}
        >
          <Menu className="h-5 w-5" /> 
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className={cn("w-[280px] p-6 flex flex-col", sheetBgClass)}>
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left text-lg font-headline text-foreground">
            {siteData.personalInfo.initials}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 flex-grow">
          {siteData.navLinkStructure.map((link) => (
            <NavLink
              key={link.key}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base !text-[hsl(var(--foreground))] hover:!text-[hsl(var(--primary))]"
            >
              {t(`siteData.navLinks.${link.key}`)}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto border-t border-border pt-6 space-y-4">
          <SocialLinks className="justify-start !text-[hsl(var(--foreground))] [&_button]:hover:!text-[hsl(var(--primary))]" />
          <DynamicLanguageSwitcher /> 
        </div>
      </SheetContent>
    </Sheet>
  );
}
