import Link from "next/link";

export function ConversionSection() {
  const chips = [
    { label: "Clientes e Comercial", href: "/contato?assunto=Clientes%20e%20Comercial" },
    { label: "Documentos e Informação", href: "/contato?assunto=Documentos%20e%20Informa%C3%A7%C3%A3o" },
    { label: "Tarefas Repetitivas", href: "/contato?assunto=Tarefas%20Repetitivas" },
    { label: "Dados e Relatórios", href: "/contato?assunto=Dados%20e%20Relat%C3%B3rios" },
    { label: "Produto ou Portal", href: "/contato?assunto=Produto%20ou%20Portal" },
  ];

  const contextItems = [
    "Objetivo e resultado esperado",
    "Pessoas envolvidas",
    "Como funciona hoje",
    "Onde existe retrabalho",
    "Ferramentas atuais",
    "Qual decisão está difícil",
  ];

  return (
    <section className="section">
      <span className="section-marker">06 / CONVERSA</span>
      <div className="shell">
        <span className="eyebrow">Começar pelo que hoje trava</span>
        <h2 className="conversion-question">
          Qual processo a sua equipe já cansou de contornar?
        </h2>

        <div className="problem-chips">
          {chips.map((chip, i) => (
            <Link key={i} href={chip.href}>
              {chip.label}
            </Link>
          ))}
        </div>

        <div className="context-band">
          <h3>Uma conversa útil começa com o contexto.</h3>
          <div className="context-list">
            {contextItems.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </div>

        <div className="contact-card">
          <div>
            <span className="eyebrow">Clareza antes de escopo</span>
            <h2>Seu processo está funcionando do jeito mais difícil?</h2>
            <p>
              Conte o contexto. A conversa pode começar por um gargalo, uma
              ideia ou um fluxo que precisa ser compreendido antes de virar
              software.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "flex-end" }}>
            <Link className="button signal" href="/contato">
              Mapear um processo ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
