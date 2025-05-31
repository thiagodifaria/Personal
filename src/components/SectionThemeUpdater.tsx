"use client";

import type { HTMLAttributes } from "react";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import type { HeaderTheme } from "@/context/HeaderThemeContext";
import { useHeaderTheme } from "@/context/HeaderThemeContext";
import { cn } from "@/lib/utils";

interface SectionThemeUpdaterProps extends HTMLAttributes<HTMLElement> {
  theme: HeaderTheme;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements; // Allow specifying the wrapper element type
}

export const SectionThemeUpdater: React.FC<SectionThemeUpdaterProps> = ({
  theme,
  children,
  className,
  id,
  as: Component = "section", // Default to <section>
  ...props
}) => {
  const { setHeaderTheme } = useHeaderTheme();
  const ref = useRef<HTMLElement>(null);
  // Trigger when 50% of the element is visible from top or bottom.
  // This helps ensure the theme changes when the section is predominantly in view.
  const isInView = useInView(ref, { margin: "-49% 0px -49% 0px" });

  useEffect(() => {
    if (isInView) {
      setHeaderTheme(theme);
    }
  }, [isInView, setHeaderTheme, theme]);

  // @ts-ignore Dynamic component type with ref
  return <Component ref={ref} className={cn(className)} id={id} {...props}>{children}</Component>;
};
