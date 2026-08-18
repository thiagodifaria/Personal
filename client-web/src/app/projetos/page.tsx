"use client";

import { useState } from "react";
import Link from "next/link";
import { siteContent } from "@/config/siteContent";
import { useReveals } from "@/hooks/useReveals";
import { Icon } from "@/components/ui/Icons";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");

  useReveals([search, filter]);

  const filters = [
    "Todos",
    "Sistemas empresariais",
    "Backend e APIs",
    "Dados e IA",
    "Front end",
    "Ferramentas de terminal",
  ];

  const q = search.toLowerCase().trim();
  const list = siteContent.projects.filter(
    (p) =>
      (filter === "Todos" || p.filters.includes(filter)) &&
      (!q ||
        [p.name, p.category, p.problem, p.summary, ...p.tech]
          .join(" ")
          .toLowerCase()
          .includes(q))
  );

  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow">Acervo de projetos</span>
            <h1>Projetos que colocam o pensamento à prova.</h1>
          </div>
          <p>
            Meus projetos pessoais são onde testo ideias a fundo. Não são
            exercícios isolados: cada um nasce de um problema claro e é tratado
            com arquitetura, documentação e uma experiência de uso coerente.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <label className="sr-only" htmlFor="projectSearch">
            Buscar projetos
          </label>
          <input
            className="search-input"
            id="projectSearch"
            type="search"
            placeholder="Buscar por nome, problema ou tecnologia"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="filterbar" id="projectFilters">
            {filters.map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="projects-index" id="projectsIndex">
            {list.length === 0 ? (
              <div style={{ padding: "70px 0", textAlign: "center" }}>
                <h2>Nenhum projeto encontrou esse caminho.</h2>
                <p style={{ color: "var(--muted)" }}>
                  Tente outro termo ou volte para “Todos”.
                </p>
              </div>
            ) : (
              list.map((p) => (
                <article key={p.slug} className="project-row reveal">
                  <span className="mono">{p.n}</span>
                  <h2>
                    <Link href={`/projetos/${p.slug}`}>{p.name}</Link>
                  </h2>
                  <p>
                    {p.problem}
                    <br />
                    <span className="mono">
                      {p.category} · {p.tech.slice(0, 3).join(" · ")}
                    </span>
                  </p>
                  <Link
                    className="arrow"
                    href={`/projetos/${p.slug}`}
                    aria-label={`Ver detalhes de ${p.name}`}
                  >
                    <Icon name="arrow" />
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
