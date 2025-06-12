"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// Omit "whileInView" and "viewport" as they are replaced by useInView logic
interface BlurFadeProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "variants" | "transition" | "whileInView" | "viewport"> {
  delay?: number;
  className?: string;
  children: React.ReactNode;
  viewportAmount?: number; 
}

export function BlurFade({
  children,
  className,
  delay = 0,
  viewportAmount = 0.2, 
  ...props 
}: BlurFadeProps) {
  const ref = useRef(null);
  // Ensure 'once: true' is part of the useInView options
  const isInView = useInView(ref, { once: true, amount: viewportAmount });

  const variants = {
    hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Control animation based on isInView
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
