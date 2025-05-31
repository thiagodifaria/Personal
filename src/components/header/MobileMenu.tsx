
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
// import { useHeaderTheme } from "@/context/HeaderThemeContext"; // May not be needed
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // const { headerTheme } = useHeaderTheme(); // May not be needed

  // Using CSS variables for colors
  const iconColorClass = "text-[hsl(var(--header-foreground))] hover:text-[hsl(var(--primary))]";
  
  // Sheet content should follow the main page theme, not necessarily the header's dynamic theme
  const sheetBgClass = "bg-background text-foreground";

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={cn("md:hidden h-8 w-8", iconColorClass)} aria-label="Open navigation menu">
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
          {siteData.navLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              // Override NavLink colors for sheet; these should use main page --foreground and --primary
              className="text-base !text-[hsl(var(--foreground))] hover:!text-[hsl(var(--primary))]"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto border-t border-border pt-6"> {/* Changed mt-8 to mt-auto */}
          {/* Social links in sheet should use main page foreground/primary */}
          <SocialLinks className="justify-start !text-[hsl(var(--foreground))] [&_button]:hover:!text-[hsl(var(--primary))]" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
