"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurFadeProps extends HTMLMotionProps<"div"> {
  delay?: number;
  className?: string;
  inView?: boolean;
  children: React.ReactNode;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  inView = true, // Default to true, can be controlled by parent using useInView
  ...props
}: BlurFadeProps) {
  const variants = {
    hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
