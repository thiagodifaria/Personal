"use client";

import { useState } from "react";
import Link from "next/link";
import { siteContent, Project } from "@/config/siteContent";

export function ArchiveSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const showPreview = (project: Project) => {
    setActiveProject(project.image?.trim() ? project : null);
  };

  const featuredSlugs = ["erp", "schema-api", "tesori-di-bacco"];
  const featured = featuredSlugs
    .map((s) => siteContent.projects.find((p) => p.slug === s))
    .filter(Boolean) as Project[];

  return (
    <section className="section archive">
      <span className="section-marker" style={{ color: "#8e99ac" }}>
        04 / ACERVO
      </span>
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              Projetos que colocam o pensamento à prova
            </span>
            <h2>Um acervo vivo de engenharia e produto.</h2>
          </div>
          <p>
            Projetos pessoais aprofundam perguntas técnicas. Cada título abre um
            case com contexto, decisões e limites.
          </p>
        </div>

        <div
          className="archive-list"
          tabIndex={0}
          aria-label="Projetos em destaque"
        >
          {featured.map((p) => (
            <article
              key={p.slug}
              className={`archive-item ${
                activeProject?.slug === p.slug ? "active" : ""
              }`}
              data-project={p.slug}
              onMouseEnter={() => showPreview(p)}
              onFocus={() => showPreview(p)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <span className="mono">{p.n}</span>
              <h3>
                <Link href={`/projetos/${p.slug}`}>{p.name}</Link>
              </h3>
              <p>
                {p.category}
                <br />
                <span className="mono">{p.tech.slice(0, 3).join(" · ")}</span>
              </p>
              <Link
                className="open-mark"
                href={`/projetos/${p.slug}`}
                aria-label={`Abrir ${p.name}`}
              >
                ＋
              </Link>
            </article>
          ))}
        </div>

        <div
          className={`archive-preview ${activeProject ? "visible" : ""}`}
          id="archivePreview"
          aria-hidden="true"
        >
          {activeProject?.image && (
            <div
              className="preview-image-wrapper"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(245, 244, 240, 0.2)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                background: "#09101f",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={activeProject.image}
                alt={activeProject.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: "6px",
                }}
              />
            </div>
          )}
        </div>

        <div className="archive-note">
          <p>Projetos pessoais são onde eu aprofundo perguntas técnicas.</p>
          <p>
            Projetos profissionais são onde aprendo a respeitar contexto,
            pessoas e consequência.
          </p>
        </div>

        <div style={{ marginTop: "42px" }}>
          <Link
            className="button ghost"
            style={{ borderColor: "rgba(245,244,240,.35)" }}
            href="/projetos"
          >
            Explorar todos os projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
