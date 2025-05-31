
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useHeaderTheme } from "@/context/HeaderThemeContext"; // Keep for theme logic if any part still needs it

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  // const { headerTheme } = useHeaderTheme(); // headerTheme might not be needed if colors are from CSS vars
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href + "/"));


  // Using CSS variables for colors, driven by Header.tsx's style prop
  const linkColorClass = cn(
    "text-sm font-medium transition-colors text-[hsl(var(--header-foreground))] hover:text-[hsl(var(--primary))] opacity-80 hover:opacity-100",
    isActive && "!text-[hsl(var(--primary))] !opacity-100 font-semibold"
  );
  

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        linkColorClass,
        className
      )}
    >
      {children}
    </Link>
  );
}
