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
  as?: "section" | "main" | "div" | "article";
}

export const SectionThemeUpdater: React.FC<SectionThemeUpdaterProps> = ({
  theme,
  children,
  className,
  id,
  as: Component = "section",
  ...props
}) => {
  const { setHeaderTheme } = useHeaderTheme();
  const ref = useRef<HTMLElement | null>(null);
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };
  
  
  const isInView = useInView(ref, { margin: "-49% 0px -49% 0px" });

  useEffect(() => {
    if (isInView) {
      setHeaderTheme(theme);
    }
  }, [isInView, setHeaderTheme, theme]);

  
  const sharedProps = {
    className: cn(className),
    id,
    ...props,
  };

  if (Component === "main") {
    return <main ref={setRef} {...sharedProps}>{children}</main>;
  }
  if (Component === "div") {
    return <div ref={setRef} {...sharedProps}>{children}</div>;
  }
  if (Component === "article") {
    return <article ref={setRef} {...sharedProps}>{children}</article>;
  }
  return <section ref={setRef} {...sharedProps}>{children}</section>;
};
