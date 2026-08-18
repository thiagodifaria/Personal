"use client";

import { useEffect, useState } from "react";

export function useScrollProgress(selector?: string) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (selector) {
        const el = document.querySelector(selector);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const total = el.clientHeight - window.innerHeight;
        const read = Math.max(0, Math.min(1, -r.top / Math.max(1, total)));
        setProgress(read * 100);
      } else {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const read = Math.max(0, Math.min(1, window.scrollY / Math.max(1, total)));
        setProgress(read * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selector]);

  return progress;
}
