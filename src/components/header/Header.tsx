
"use client";

import Link from "next/link";
import { siteData } from "@/config/siteData";
import { useHeaderTheme } from "@/context/HeaderThemeContext";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { Navigation } from "./Navigation";


const LanguageSwitcherPlaceholder = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-0.5 h-auto pointer-events-none", className)} aria-hidden="true">
    <span className="h-auto py-0 px-0 text-xs leading-none opacity-0">PT</span>
    <span className="text-[hsl(var(--header-foreground))] opacity-50 text-xs">/</span>
    <span className="h-auto py-0 px-0 text-xs leading-none opacity-0">EN</span>
  </div>
);

const SocialLinksPlaceholder = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-1 h-7 pointer-events-none", className)} aria-hidden="true">
    <div className="h-7 w-7 rounded-full bg-transparent"></div>
    <div className="h-7 w-7 rounded-full bg-transparent"></div>
    <div className="h-7 w-7 rounded-full bg-transparent"></div>
  </div>
);

const MobileMenuPlaceholder = () => (
  <div className={cn("md:hidden h-7 w-7 bg-transparent pointer-events-none")} aria-hidden="true">
    <div className="h-5 w-5"></div>
  </div>
);

const DynamicLanguageSwitcher = dynamic(
  () => import('@/components/LanguageSwitcher').then(mod => mod.LanguageSwitcher),
  {
    ssr: false,
    loading: ({ className }) => <LanguageSwitcherPlaceholder className={className} />,
  }
);

const DynamicSocialLinks = dynamic(
  () => import('./SocialLinks').then(mod => mod.SocialLinks),
  {
    ssr: false,
    loading: ({ className }) => <SocialLinksPlaceholder className={className} />,
  }
);

const DynamicMobileMenu = dynamic(
  () => import('./MobileMenu').then(mod => mod.MobileMenu),
  {
    ssr: false,
    loading: () => <MobileMenuPlaceholder />,
  }
);


export default function Header() {
  const { headerTheme } = useHeaderTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headerStyle = mounted ? {
    
    "--header-background": headerTheme === 'dark' ? "hsl(var(--background))" : "hsl(var(--background))",
    "--header-foreground": headerTheme === 'dark' ? "hsl(var(--foreground))" : "hsl(var(--foreground))",
  } : {};
  
  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out",
    "backdrop-blur-md", 
    "border-b",
    mounted && headerTheme === 'dark' ? "bg-[hsl(var(--background))]/80 border-[hsl(var(--border))]/50" : "bg-[hsl(var(--background))]/80 border-[hsl(var(--border))]/50"
  );
  
  const textColorClass = mounted && headerTheme === "dark" 
    ? "text-[hsl(var(--foreground))]" 
    : "text-[hsl(var(--foreground))]";

  if (!mounted) {
    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out",
            "backdrop-blur-md bg-background/80 border-b border-border/50" 
        )}>
            <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                 <div className={cn("text-xl font-bold font-headline text-foreground")}> 
                    {siteData.personalInfo.initials}
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="h-8 w-20 rounded bg-muted/20 md:block hidden"></div> 
                    <div className="h-8 w-20 rounded bg-muted/20 md:block hidden"></div>
                    <div className="h-8 w-20 rounded bg-muted/20 md:block hidden"></div>
                    <SocialLinksPlaceholder className="hidden md:flex"/>
                    <LanguageSwitcherPlaceholder className="hidden md:flex md:ml-3" />
                    <MobileMenuPlaceholder />
                 </div>
            </div>
        </header>
    );
  }

  return (
    <header className={headerClasses} style={headerStyle}>
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className={cn("text-xl font-bold font-headline", textColorClass)}>
          {siteData.personalInfo.initials}
        </Link>
        <Navigation /> 
        <div className="flex items-center gap-1 md:gap-2">
          <DynamicSocialLinks className="hidden md:flex" />
          <DynamicLanguageSwitcher className="hidden md:flex md:ml-3" /> 
          <DynamicMobileMenu />
        </div>
      </div>
    </header>
  );
}
