"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { siteContent } from "@/config/siteContent";

interface PaletteItem {
  label: string;
  href: string;
  meta?: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const items: PaletteItem[] = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Projetos", href: "/projetos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
    ...siteContent.projects.map((p) => ({
      label: p.name,
      href: `/projetos/${p.slug}`,
      meta: p.category,
    })),
  ];

  const filtered = items.filter((x) =>
    [x.label, x.meta].join(" ").toLowerCase().includes(query.toLowerCase())
  ).slice(0, 10);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setActiveIndex(0);
    } else {
      setQuery("");
    }
  }, [open]);

  const handleSelect = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const handleKeyDownInput = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      e.preventDefault();
      handleSelect(filtered[activeIndex].href);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[4000] grid place-items-center bg-black/60 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-[680px] border border-[var(--line)] bg-[var(--paper)] p-4 shadow-[var(--shadow)]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="sr-only">Navegação rápida</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="Buscar página ou projeto…"
          autoComplete="off"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={handleKeyDownInput}
          className="w-full min-h-[56px] border border-[var(--line-strong)] bg-[var(--surface)] px-4 text-[var(--ink)]"
        />
        <div className="palette-list mt-3 max-h-[50vh] overflow-auto">
          {filtered.length > 0 ? (
            filtered.map((x, i) => (
              <a
                key={i}
                href={x.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(x.href);
                }}
                className={`flex justify-between p-3 border-b border-[var(--line)] ${
                  i === activeIndex ? "active bg-[var(--surface)]" : ""
                }`}
              >
                <span>{x.label}</span>
                <span className="mono text-xs opacity-60">{x.meta || "página"}</span>
              </a>
            ))
          ) : (
            <p className="p-4 text-center text-sm text-[var(--muted)]">
              Nenhum caminho encontrado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
