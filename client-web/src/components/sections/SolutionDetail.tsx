import Link from "next/link";
import { Solution } from "@/config/siteContent";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";

interface SolutionDetailProps {
  slug: string;
  solution: Solution;
}

export function SolutionDetail({ slug, solution: s }: SolutionDetailProps) {
  return (
    <div className={s.className}>
      <section className="solution-hero">
        <div className="shell" style={{ position: "relative", zIndex: 2 }}>
          <span className="solution-kicker">{s.kicker}</span>
          <h1>{s.headline}</h1>
          <p>{s.promise}</p>
          <div className="hero-ctas">
            <Button variant="signal" href={`#diagnostic-form`}>
              {s.cta}
            </Button>
            <Button variant="ghost" href="#como">
              Entender o caminho
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">Isso parece familiar?</span>
              <h2>{s.alt}</h2>
            </div>
            <p>
              Os sintomas abaixo não significam que sua empresa precisa de um
              projeto grande. Eles indicam onde vale investigar primeiro.
            </p>
          </div>
          <div className="symptoms">
            {s.symptoms.map((x, i) => (
              <div key={i} className="symptom reveal">
                <span className="mono">S{String(i + 1).padStart(2, "0")}</span>
                <strong>{x}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="como">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">Antes → fluxo organizado → depois</span>
              <h2>O ganho é clareza, não uma promessa mágica.</h2>
            </div>
            <p>
              O diagrama representa uma mudança de estado: sinais dispersos passam
              por regras, validação e responsabilidade até formar um fluxo
              observável.
            </p>
          </div>
          <div className="before-after">
            <div className="state-cluster">
              {["planilha", "mensagem", "documento", "memória"].map((x, i) => (
                <span
                  key={i}
                  className="signal-card"
                  style={{
                    left: `${[8, 53, 20, 60][i]}%`,
                    top: `${[15, 25, 62, 68][i]}%`,
                    transform: `rotate(${[-5, 4, 3, -4][i]}deg)`,
                  }}
                >
                  {x}
                </span>
              ))}
            </div>
            <div className="flow-arrow">→</div>
            <div className="state-cluster">
              {[
                "entrada validada",
                "responsável",
                "estado visível",
                "próxima decisão",
              ].map((x, i) => (
                <span
                  key={i}
                  className="signal-card"
                  style={{
                    left: `${[10, 56, 10, 56][i]}%`,
                    top: `${[15, 15, 58, 58][i]}%`,
                  }}
                >
                  {x}
                </span>
              ))}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <path
                  d="M34 26 H56 M34 69 H56 M72 33 V58"
                  fill="none"
                  stroke="var(--campaign)"
                  strokeWidth="0.7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">Escopo possível</span>
              <h2>Módulos adaptáveis, não pacote fechado.</h2>
            </div>
            <p>
              O desenho depende do processo existente, da maturidade dos dados e da
              menor mudança que já cria valor operacional.
            </p>
          </div>
          <div className="module-grid">
            {s.modules.map((m, i) => (
              <article key={i} className="module reveal">
                <span className="mono">M{String(i + 1).padStart(2, "0")}</span>
                <h3>{m[0]}</h3>
                <p>{m[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {s.ethical && (
        <section className="section">
          <div className="shell">
            <div className="ethical">
              <h2>Dados com origem e critério.</h2>
              <p>
                Automações e coletas são desenhadas apenas para fontes públicas ou
                autorizadas, respeitando termos de uso, limites técnicos,
                privacidade, LGPD e fontes oficiais. Não proponho captura
                indiscriminada, burla de acesso, coleta de dados privados ou
                promessa de disponibilidade de terceiros.
              </p>
              <div className="tag-list" style={{ marginTop: "20px" }}>
                <span className="chip">fonte autorizada</span>
                <span className="chip">limites técnicos</span>
                <span className="chip">rastreabilidade</span>
                <span className="chip">privacidade</span>
                <span className="chip">revisão humana</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {slug === "inteligencia-documental-e-ia" && (
        <section className="section">
          <div className="shell">
            <div className="ethical">
              <h2>Evidência antes de confiança.</h2>
              <p>
                IA pode apoiar pesquisa, extração e classificação. Decisões
                sensíveis continuam sob revisão humana, respostas apontam fontes e
                acesso aos dados segue critérios explícitos de autorização e
                retenção.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">Como a conversa começa</span>
              <h2>Descobrir, priorizar, desenhar e construir por etapas.</h2>
            </div>
            <p>
              Sem urgência falsa e sem prometer prazo antes de compreender
              dependências.
            </p>
          </div>
          <div className="method-track" style={{ paddingLeft: "32px" }}>
            <div className="method-progress" style={{ height: "100%" }}></div>
            {[
              [
                "01",
                "Descoberta",
                "Entender pessoas, processo, dados e limites.",
              ],
              [
                "02",
                "Priorização",
                "Escolher a menor mudança útil e verificável.",
              ],
              [
                "03",
                "Desenho de caminho",
                "Definir domínio, responsabilidades, integrações e interface.",
              ],
              [
                "04",
                "Construção por etapas",
                "Entregar, validar e ampliar com documentação.",
              ],
            ].map((x, i) => (
              <article key={i} className="method-step" style={{ minHeight: "35svh" }}>
                <span className="eyebrow">{x[0]}</span>
                <h3>{x[1]}</h3>
                <p className="method-answer">{x[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="diagnostic-form">
        <div className="shell contact-layout">
          <div>
            <div className="section-head" style={{ gridTemplateColumns: "1fr" }}>
              <div>
                <span className="eyebrow">FAQ</span>
                <h2>Dúvidas que vale resolver cedo.</h2>
              </div>
            </div>
            <div className="faq">
              {s.faq.map((f, i) => (
                <details key={i}>
                  <summary>{f[0]}</summary>
                  <p>{f[1]}</p>
                </details>
              ))}
            </div>
          </div>

          <ContactForm
            kind="campaign"
            campaignSlug={slug}
            ctaText={s.cta}
          />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="contact-card">
            <div>
              <span className="eyebrow">Próximo ponto de decisão</span>
              <h2>Mais clareza para escolher o que construir primeiro.</h2>
              <p>
                A conversa começa pelo fluxo real, não por uma lista de
                funcionalidades.
              </p>
            </div>
            <div style={{ alignSelf: "end" }}>
              <Button variant="signal" href="#diagnostic-form">
                {s.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
