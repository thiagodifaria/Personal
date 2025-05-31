
"use client";

import Link from "next/link";
import { siteData } from "@/config/siteData";
import { NavLink } from "./NavLink";
import { SocialLinks } from "./SocialLinks";
import { MobileMenu } from "./MobileMenu";
import { useHeaderTheme } from "@/context/HeaderThemeContext";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Header() {
  const { headerTheme } = useHeaderTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Define CSS variables based on the theme for dynamic styling in children
  const headerStyle = mounted ? {
    // @ts-ignore
    "--header-background": headerTheme === 'dark' ? "hsl(var(--background))" : "hsl(var(--background))", // Use main background for header
    "--header-foreground": headerTheme === 'dark' ? "hsl(var(--foreground))" : "hsl(var(--foreground))", // Use main foreground
  } : {};
  
  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out",
    "backdrop-blur-md", 
    "border-b", // Always have a border
    mounted && headerTheme === 'dark' ? "bg-[hsl(var(--background))]/80 border-[hsl(var(--border))]/50" : "bg-[hsl(var(--background))]/80 border-[hsl(var(--border))]/50"
  );
  
  const textColorClass = mounted && headerTheme === "dark" 
    ? "text-[hsl(var(--foreground))]" 
    : "text-[hsl(var(--foreground))]";


  if (!mounted) {
    // Fallback for SSR to avoid hydration mismatch, using static values that match initial theme intent
    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out",
            "backdrop-blur-md bg-background/80 border-b border-border/50" // Matches light theme initially
        )}>
            <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                 <div className={cn("text-xl font-bold font-headline text-foreground")}> {/* Default to foreground */}
                    {siteData.personalInfo.initials}
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="h-8 w-20 rounded bg-muted/20 md:block hidden"></div>
                    <div className="h-8 w-20 rounded bg-muted/20 md:block hidden"></div>
                    <div className="h-8 w-20 rounded bg-muted/20 md:block hidden"></div>
                    <div className="h-8 w-8 rounded-full bg-muted/20 md:hidden"></div>
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
        <nav className="hidden items-center gap-6 md:flex">
          {siteData.navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <SocialLinks className="hidden md:flex" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
