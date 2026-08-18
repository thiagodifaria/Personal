"use client";

import Link from "next/link";
import { Article } from "@/config/siteContent";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "@/components/ui/Button";

export function ArticleDetail({ article }: { article: Article }) {
  const readProgress = useScrollProgress(".article-body");

  if (!article.sections) {
    return (
      <>
        <section className="page-hero">
          <div className="shell page-hero-grid">
            <div>
              <span className="eyebrow">{article.category}</span>
              <h1>{article.title}</h1>
            </div>
            <p>{article.summary}</p>
          </div>
        </section>
        <section className="section">
          <div className="shell">
            <div className="contact-card">
              <div>
                <span className="eyebrow">Em preparação</span>
                <h2>Este texto ainda está sendo construído.</h2>
                <p>
                  O tema já faz parte do índice editorial, mas não há uma data
                  inventada para publicação.
                </p>
              </div>
              <div>
                <Button variant="primary" href="/blog">
                  Voltar ao blog
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div
        className="read-progress"
        style={{ width: `${readProgress}%` }}
      ></div>

      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow">
              {article.category} · {article.status}
            </span>
            <h1 style={{ fontSize: "clamp(3.5rem, 8vw, 8.5rem)", maxWidth: "13ch" }}>
              {article.title}
            </h1>
          </div>
          <p>{article.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell article-layout">
          <aside className="article-toc">
            <span className="eyebrow">Neste artigo</span>
            {article.sections.map((s, i) => (
              <a key={i} href={`#article-${i}`}>
                {String(i + 1).padStart(2, "0")} · {s.title}
              </a>
            ))}
            <Link href="/blog" style={{ marginTop: "20px" }}>
              ← Voltar ao blog
            </Link>
          </aside>

          <article className="article-body">
            {article.sections.map((s, i) => (
              <section key={i} id={`article-${i}`}>
                <h2>{s.title}</h2>
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </section>
            ))}

            <blockquote>
              Clareza não é reduzir tudo. É preservar a complexidade que importa
              e tornar a decisão possível.
            </blockquote>

            <div
              className="contact-card"
              style={{ gridTemplateColumns: "1fr", marginTop: "80px" }}
            >
              <div>
                <span className="eyebrow">Continuar a conversa</span>
                <h2>Existe um processo parecido no seu contexto?</h2>
                <p>
                  Conte o que hoje depende de planilhas, mensagens ou memória de
                  equipe.
                </p>
                <Button variant="signal" href="/contato">
                  Mapear o contexto
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
