
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useHeaderTheme } from "@/context/HeaderThemeContext"; 

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href + "/"));


  
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
