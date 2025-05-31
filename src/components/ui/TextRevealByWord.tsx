"use client";

import type { HTMLMotionProps} from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  wordClassName?: string;
  // Base text color (revealed state)
  textColor?: string;
  // Color of the text as it's being revealed (can be same as textColor or different for effect)
  revealColor?: string; 
}

const Word: React.FC<{
  children: React.ReactNode;
  range: [number, number];
  progress: any; // MotionValue
  className?: string;
  textColor?: string;
  revealColor?: string;
}> = ({ children, range, progress, className, textColor = "hsl(var(--foreground))", revealColor = "hsl(var(--primary))" }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, [textColor, revealColor]);

  return (
    <span className={cn("relative inline-block", className)}>
      <span className={"absolute opacity-20"}>{children}</span>
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
};


export function TextRevealByWord({
  text,
  className,
  wordClassName,
  textColor,
  revealColor,
}: TextRevealByWordProps) {
  const targetRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Animate when section is scrolling through viewport
  });

  const words = text.split(" ");

  return (
    <p ref={targetRef} className={cn("relative text-2xl md:text-3xl lg:text-4xl font-headline leading-relaxed", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            className={wordClassName}
            textColor={textColor}
            revealColor={revealColor}
          >
            {word}{i < words.length -1 ? "\u00A0" : ""} 
          </Word>
        );
      })}
    </p>
  );
}
