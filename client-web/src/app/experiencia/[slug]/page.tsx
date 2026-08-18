import Link from "next/link";
import { notFound } from "next/navigation";
import { siteContent } from "@/config/siteContent";
import { Chips } from "@/components/ui/Chip";
import { VisualArt } from "@/components/ui/VisualArt";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return siteContent.experiences.map((x) => ({
    slug: x.slug,
  }));
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const x = siteContent.experiences.find((item) => item.slug === slug);

  if (!x) {
    notFound();
  }

  return (
    <>
      <section className="project-detail-hero professional">
        <div className="shell">
          <Link className="text-link" href="/">
            Voltar à home
          </Link>
          <div style={{ marginTop: "40px" }}>
            <span className="stamp">
              PROJETO PROFISSIONAL · DETALHES INTERNOS PRESERVADOS
            </span>
          </div>
          <div className="detail-title">{x.name}</div>
          <div className="detail-meta">
            <div>
              <Chips items={x.stack} />
            </div>
            <p>
              <strong>{x.title}</strong>
              <br />
              {x.summary}
            </p>
          </div>
          <div className="project-art">
            <VisualArt
              type={x.visual}
              label={`${x.name} · linguagem documental do case`}
            />
          </div>
        </div>
      </section>

      <section className="professional">
        <div className="shell">
          <article className="case-section reveal">
            <div>
              <span className="eyebrow">01 / CONTEXTO</span>
              <h2>Operação real</h2>
            </div>
            <div className="case-body">
              <p>{x.context}</p>
              <p>
                Detalhes apresentados sem expor dados de clientes, credenciais,
                fluxos internos sensíveis ou números comerciais.
              </p>
            </div>
          </article>

          <article className="case-section reveal">
            <div>
              <span className="eyebrow">02 / DESAFIO</span>
              <h2>Natureza do trabalho</h2>
            </div>
            <div className="case-body">
              <p>{x.summary}</p>
              <p>
                O software precisa conectar etapas sem reduzir uma operação humana a
                um diagrama perfeito. Exceções, responsabilidade e limites fazem
                parte do desenho.
              </p>
            </div>
          </article>

          <article className="case-section reveal">
            <div>
              <span className="eyebrow">03 / DECISÕES</span>
              <h2>Princípios aplicados</h2>
            </div>
            <div className="case-body">
              <ul style={{ paddingLeft: "20px" }}>
                {x.decisions.map((d, i) => (
                  <li key={i} style={{ margin: "14px 0" }}>
                    {d}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "30px" }}>
                <Chips
                  items={[
                    "Confidencialidade",
                    "Papéis e permissões",
                    "Qualidade de dados",
                    "Linguagem simples",
                    "Evolução incremental",
                    "Infraestrutura reproduzível",
                  ]}
                />
              </div>
            </div>
          </article>

          <article className="case-section reveal">
            <div>
              <span className="eyebrow">04 / APRENDIZADO</span>
              <h2>Software usado por outras pessoas</h2>
            </div>
            <div className="case-body">
              <p>{x.learn}</p>
              <p>
                Responsabilidade técnica também é saber o que não afirmar, o que
                precisa de revisão e onde uma integração termina.
              </p>
            </div>
          </article>

          <div className="contact-card" style={{ margin: "90px 0" }}>
            <div>
              <span className="eyebrow">Contexto parecido</span>
              <h2>Uma operação real pede uma conversa real.</h2>
              <p>
                Conte o fluxo, as pessoas e o ponto onde a decisão está travando.
              </p>
            </div>
            <div style={{ alignSelf: "end" }}>
              <Button variant="signal" href="/contato">
                Conversar sobre um desafio parecido
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
