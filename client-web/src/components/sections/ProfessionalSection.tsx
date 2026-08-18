import Link from "next/link";
import { siteContent } from "@/config/siteContent";
import { Chips } from "@/components/ui/Chip";

export function ProfessionalSection() {
  const experiences = siteContent.experiences.filter((x) => x.slug === "primme");

  return (
    <section className="section professional">
      <span className="section-marker">05 / OPERAÇÃO REAL</span>
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">Quando o software encontra operação</span>
            <h2>Responsabilidade além do repositório.</h2>
          </div>
          <p>
            Detalhes preservados. Princípios e desafios apresentados com
            transparência.
          </p>
        </div>

        <div className="case-docs professional-case-docs">
          {experiences.map((x) => (
            <article key={x.slug} className="case-doc reveal">
              <span className="stamp">PROJETO PROFISSIONAL</span>
              <h3>{x.name}</h3>
              <p>
                <strong>{x.title}</strong>
              </p>
              <p>{x.summary}</p>

              <details>
                <summary>Ver contexto e princípios</summary>
                <p style={{ marginTop: "12px" }}>{x.context}</p>
                <p style={{ marginTop: "12px" }}>
                  <strong>O que fica visível:</strong>{" "}
                  {x.decisions.slice(0, 2).join(" ")}
                </p>
              </details>

              <div className="meta">
                <div>
                  <Chips items={x.stack.slice(0, 4)} />
                </div>
                <a
                  className="text-link"
                  href="https://primmecastelo.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar site ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
