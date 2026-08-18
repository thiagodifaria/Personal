"use client";

import Link from "next/link";
import { Project, siteContent } from "@/config/siteContent";
import { Chips } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { useReveals } from "@/hooks/useReveals";

export function ProjectDetail({ project }: { project: Project }) {
  useReveals();

  const projects = siteContent.projects;
  const idx = projects.findIndex((x) => x.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const hasRealImage = Boolean(project.image && project.image.trim() !== "");

  return (
    <>
      <section className="project-detail-hero">
        <div className="shell">
          <Link
            className="text-link"
            href="/projetos"
            style={{ marginTop: "22px", display: "inline-block" }}
          >
            ← Voltar aos projetos
          </Link>
          <div className="detail-title">{project.name}</div>
          <div className="detail-meta">
            <div>
              <Chips items={project.tech} />
            </div>
            <p>{project.summary}</p>
          </div>

          {hasRealImage && (
            <div
              className="project-preview-container"
              style={{
                margin: "32px 0 20px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={project.image!}
                alt={project.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "560px",
                  height: "auto",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          )}
        </div>
      </section>

      <section style={{ paddingTop: "20px" }}>
        <div className="shell">
          <article className="case-section reveal">
            <div>
              <span className="eyebrow">01 / O CONTEXTO</span>
              <h2>O problema</h2>
            </div>
            <div className="case-body">
              <p>{project.problem}</p>
              <p>
                O projeto parte de uma pergunta suficientemente real para exigir
                mais do que uma demonstração de tecnologia. Escopo, linguagem e
                arquitetura são tratados como partes do mesmo produto.
              </p>
            </div>
          </article>

          <article className="case-section reveal">
            <div>
              <span className="eyebrow">02 / A RESPOSTA</span>
              <h2>Como foi pensado</h2>
            </div>
            <div className="case-body">
              {project.response.split("\n\n").map((paragraph, i) => (
                <p key={i} style={{ marginBottom: "16px" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <article className="case-section reveal">
            <div>
              <span className="eyebrow">03 / POR DENTRO</span>
              <h2>Decisões técnicas</h2>
            </div>
            <div className="case-body">
              <p>
                A stack é usada para sustentar responsabilidades específicas, não
                como catálogo. Os módulos abaixo resumem o papel das escolhas
                centrais.
              </p>
              <div className="tech-grid">
                {project.tech.slice(0, 6).map((x, i) => (
                  <div key={i} className="tech-card">
                    <strong>{x}</strong>
                    <span>
                      {
                        [
                          "Núcleo de implementação e regras.",
                          "Interface, contratos ou integração.",
                          "Persistência e consistência de dados.",
                          "Processamento, infraestrutura ou execução.",
                          "Observabilidade, segurança ou desempenho.",
                          "Experiência de uso e manutenção.",
                        ][i]
                      }
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="case-section reveal">
            <div>
              <span className="eyebrow">04 / O QUE DEMONSTRA</span>
              <h2>Competências e aprendizado</h2>
            </div>
            <div className="case-body">
              <p style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
                {project.demonstrates}
              </p>
              <blockquote
                style={{
                  margin: "24px 0 0",
                  padding: "16px 20px",
                  borderLeft: "3px solid var(--signal)",
                  fontSize: "1.08rem",
                  background: "var(--surface)",
                  borderRadius: "0 8px 8px 0",
                  color: "var(--ink)",
                }}
              >
                Projetos pessoais funcionam como laboratórios onde decisões
                podem ser examinadas, não apenas executadas.
              </blockquote>
            </div>
          </article>

          <article className="case-section reveal">
            <div>
              <span className="eyebrow">05 / EXPLORAR</span>
              <h2>Código e continuidade</h2>
            </div>
            <div className="case-body">
              <p style={{ margin: "0 0 20px", color: "var(--muted)" }}>
                O repositório no GitHub contém o código-fonte, a documentação técnica (README) e o histórico de evolução do projeto.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <Button variant="primary" href={project.github} external>
                  Abrir no GitHub ↗
                </Button>
                {project.demo && (
                  <Button variant="ghost" href={project.demo} external>
                    Ver demonstração real ↗
                  </Button>
                )}
              </div>
            </div>
          </article>

          <nav className="next-case" aria-label="Projetos anterior e próximo">
            <Link href={`/projetos/${next.slug}`}>
              <span>Próximo projeto</span>
              <strong>{next.name}</strong>
            </Link>
            <div style={{ marginTop: "30px" }}>
              <Link className="text-link" href={`/projetos/${prev.slug}`}>
                Caso anterior: {prev.name}
              </Link>
            </div>
          </nav>

          <div className="contact-card" style={{ marginBottom: "100px" }}>
            <div>
              <span className="eyebrow">Aplicar o mesmo cuidado</span>
              <h2>Existe um processo real por trás da sua ideia?</h2>
              <p>
                Podemos começar pelo contexto e descobrir qual é a menor estrutura
                útil para avançar.
              </p>
            </div>
            <div style={{ alignSelf: "end" }}>
              <Button variant="signal" href="/contato">
                Conversar sobre um desafio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
