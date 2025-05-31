"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
  letterClassName?: string;
}

export function FlipWords({
  words,
  duration = 3000,
  className,
  letterClassName,
}: FlipWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentWord = words[currentWordIndex];

  const startAnimation = useCallback(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10, filter: "blur(8px)", scale: 0.8, position: "absolute" }}
        transition={{
          opacity: { duration: 0.2, delay: 0.1 },
          y: { duration: 0.2, delay: 0.1 },
        }}
        className={cn("relative z-10 inline-block", className)}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className={cn("inline-block", letterClassName)}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
