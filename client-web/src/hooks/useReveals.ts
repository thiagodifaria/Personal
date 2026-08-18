"use client";

import { useEffect } from "react";

export function useReveals(dependencyKey?: any) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".reveal");

    if (isReduced) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Also trigger initial check for elements already in viewport
    setTimeout(() => {
      elements.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("in");
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, [dependencyKey]);
}
