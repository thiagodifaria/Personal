"use client";

import { useEffect, useRef } from "react";

export function FlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const host = canvas.parentElement;
    if (!host) return;

    let raf = 0;
    let active = true;
    let visible = true;
    let pointer = { x: -1000, y: -1000 };

    const labels = ["Contexto", "Dados", "Regras", "Interface", "Operação"];
    const positions = [
      [0.18, 0.22],
      [0.68, 0.16],
      [0.43, 0.46],
      [0.75, 0.68],
      [0.24, 0.78],
    ];

    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      const r = host.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (ts: number) => {
      if (!active || !visible) return;
      ctx.clearRect(0, 0, w, h);

      const dark = document.documentElement.dataset.theme === "dark";
      const ink = dark ? "245,244,240" : "11,16,32";
      const signal = "61,90,254";

      const pts = positions.map((p, i) => ({
        x: p[0] * w + Math.sin(ts / 1700 + i) * 3,
        y: p[1] * h + Math.cos(ts / 2100 + i) * 3,
      }));

      [
        [0, 1],
        [0, 2],
        [1, 2],
        [2, 3],
        [2, 4],
        [3, 4],
      ].forEach(([a, b], i) => {
        const A = pts[a];
        const B = pts[b];
        const near = Math.min(
          Math.hypot(pointer.x - A.x, pointer.y - A.y),
          Math.hypot(pointer.x - B.x, pointer.y - B.y)
        );

        ctx.strokeStyle = `rgba(${near < 120 ? signal : ink}, ${
          near < 120 ? 0.72 : 0.23
        })`;
        ctx.lineWidth = near < 120 ? 1.6 : 1;
        ctx.setLineDash(i % 2 ? [5, 8] : []);
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        const mx = (A.x + B.x) / 2;
        ctx.bezierCurveTo(mx, A.y, mx, B.y, B.x, B.y);
        ctx.stroke();
      });

      ctx.setLineDash([]);

      pts.forEach((p, i) => {
        const near = Math.hypot(pointer.x - p.x, pointer.y - p.y) < 110;
        ctx.fillStyle = dark ? "#0b1020" : "#f5f4f0";
        ctx.strokeStyle = near ? "rgb(61,90,254)" : `rgba(${ink}, .55)`;
        ctx.lineWidth = near ? 2 : 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, near ? 8 : 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font =
          "600 11px " +
          getComputedStyle(document.documentElement).getPropertyValue("--mono");
        ctx.fillStyle = near ? "rgb(61,90,254)" : `rgba(${ink}, .72)`;
        ctx.fillText(
          String(i + 1).padStart(2, "0") + " / " + labels[i].toUpperCase(),
          p.x + 15,
          p.y + 4
        );
      });

      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!isReduced) {
        raf = requestAnimationFrame(draw);
      }
    };

    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible && !raf) {
        raf = requestAnimationFrame(draw);
      } else if (!visible) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });

    io.observe(host);

    const handlePointerMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };

    const handlePointerLeave = () => {
      pointer = { x: -1000, y: -1000 };
    };

    const handleVisibility = () => {
      active = !document.hidden;
      if (active && visible && !raf) {
        raf = requestAnimationFrame(draw);
      } else if (!active) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    host.addEventListener("pointermove", handlePointerMove);
    host.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("resize", resize);

    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      active = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="flowCanvas" />;
}
