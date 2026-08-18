"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const isDone = sessionStorage.getItem("tf-intro");
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isDone || isReduced) {
      setDone(true);
    } else {
      sessionStorage.setItem("tf-intro", "1");
      const timer = setTimeout(() => {
        setDone(true);
      }, 650);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={`loader ${done ? "done" : ""}`} aria-hidden="true">
      <div className="loader-inner">
        <div className="tf-mark">
          <span className="t1"></span>
          <span className="t2"></span>
          <span className="f1"></span>
          <span className="f2"></span>
          <span className="f3"></span>
        </div>
        <div className="mono">organizando sinais em sistemas</div>
      </div>
    </div>
  );
}
