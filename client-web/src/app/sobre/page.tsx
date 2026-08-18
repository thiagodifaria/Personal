"use client";

import { useReveals } from "@/hooks/useReveals";

export default function AboutPage() {
  useReveals();

  const skills = [
    {
      title: "Trabalho Frequente",
      items: [
        "Modelagem de Dados",
        "APIs e Regras de Negócio",
        "UX e Interfaces",
        "Infraestrutura e Observabilidade",
      ],
    },
    {
      title: "Tecnologias que Uso",
      items: [
        "Python · PostgreSQL · Redis",
        "Go (Golang) · TypeScript",
        "React · Next.js · TailwindCSS",
        "Docker · Docker Compose",
      ],
    },
    {
      title: "Complemento para Aprofundamento",
      items: [
        "Rust · C++ · SQL Avançado",
        "Erlang · Elixir · Microserviços",
        "Design Systems · Componentização",
        "Prometheus · Loki · Grafana",
      ],
    },
  ];

  const journeyCards = [
    {
      n: "01",
      eyebrow: "A DECISÃO CONSCIENTE",
      title: "Encontrando a criatividade no código",
      body: "Prazer, sou o Thiago Di Faria. Desenvolvedor de software de Belo Horizonte, focado em backend. Minha trajetória na tecnologia começou com uma escolha pragmática: unindo interesse por arquitetura e combinação de arte com o enorme potencial do mercado para construir soluções sólidas.",
    },
    {
      n: "02",
      eyebrow: "FORMAÇÃO & FOCO",
      title: "CS50 Harvard e PUC Minas",
      body: "Tudo iniciou em 2023 com o CS50 Python da Harvard, descobrindo o poder da criação sem limites. Em agosto de 2024, ingressei em Análise e Desenvolvimento de Sistemas na PUC Minas. No início de 2025, ao liderar o desenvolvimento de um CRM desktop em Python, confirmei minha vocação definitiva pelo backend e estruturação de dados.",
    },
    {
      n: "03",
      eyebrow: "ENGENHARIA APLICADA",
      title: "Laboratórios de Engenharia",
      body: "Essa afinidade se traduz em projetos completos de portfólio: uma API de análise de sentimentos (MoodAPI), um terminal financeiro (LexiconCLI), uma API Gateway em C++17, um motor de documentos semânticos (SchemaAPI), um ERP multi-tenant e a plataforma Tesori di Bacco.",
    },
    {
      n: "04",
      eyebrow: "RAÍZES & IDENTIDADE",
      title: "Minas Gerais e Herança Italiana",
      body: "Tenho orgulho de Minas Gerais: sua culinária, história de luta e cultura marcante. A ascendência italiana conecta meu trabalho ao cuidado estético, aos costumes e à atenção aos detalhes, refletindo tanto na gastronomia quanto nos projetos digitais que crio.",
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow">Sobre</span>
            <h1>
              Não construo software para encher tela. Construo para tornar o
              trabalho compreensível.
            </h1>
          </div>
          <p>
            Gosto de construir a parte invisível que faz uma operação funcionar — e
            a parte visível que torna esse funcionamento compreensível.
          </p>
        </div>
      </section>

      {/* Jornada Pessoal em Grid 2x2 Editorial Perfeitamente Simétrico */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">Trajetória e Propósito</span>
              <h2>Minha Jornada</h2>
            </div>
            <p>
              Da arquitetura ao backend: escolha pragmática traduzida em genuíno fascínio por resolver problemas complexos.
            </p>
          </div>

          <div className="about-journey-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "40px 48px", marginBottom: "60px" }}>
            {journeyCards.map((card) => (
              <article key={card.n} className="reveal" style={{ borderTop: "1px solid var(--line-strong)", paddingTop: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span className="eyebrow" style={{ margin: 0 }}>{card.eyebrow}</span>
                  <span className="mono" style={{ color: "var(--signal)", fontWeight: 700, fontSize: "0.9rem" }}>{card.n}</span>
                </div>
                <h3 style={{ fontSize: "1.45rem", lineHeight: 1.25, margin: "0 0 14px" }}>{card.title}</h3>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.65, fontSize: "1rem" }}>{card.body}</p>
              </article>
            ))}
          </div>

          <div className="about-blocks">
            <article className="about-block reveal">
              <span className="eyebrow">01 / DE ONDE VEM O FOCO</span>
              <h3>Problemas concretos, responsabilidade concreta.</h3>
              <p>
                O interesse por backend nasceu menos de abstração e mais da
                necessidade de fazer informação, regras e ações se comportarem de
                forma confiável.
              </p>
            </article>

            <article className="about-block reveal">
              <span className="eyebrow">02 / COMO DESENHO O PROJETO</span>
              <h3>Arquitetura, clareza e modelo de dados antes do código.</h3>
              <p>
                Defino entidades, permissões, regras e fluxos antes da interface.
                O desenho do sistema precisa respeitar a realidade da operação
                sem aprisioná-la.
              </p>
            </article>

            <article className="about-block reveal">
              <span className="eyebrow">03 / COMO EXECUTO A IDEIA</span>
              <h3>Construção por etapas, validação real e entrega confiável.</h3>
              <p>
                Transito por Python, TypeScript, Go e C++ para transformar
                desenho técnico em software funcional, auditável e pronto para o
                uso diário.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Formação Acadêmica & Idiomas */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">Formação & Aprendizado Contínuo</span>
              <h2>Acadêmico, idiomas e especializações.</h2>
            </div>
            <p>
              Compromisso com o estudo constante e aprofundamento técnico.
            </p>
          </div>

          <div className="academic-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", marginBottom: "48px" }}>
            <div className="academic-card reveal" style={{ background: "var(--paper)", padding: "28px", borderRadius: "14px", border: "1px solid var(--line)" }}>
              <span className="eyebrow">GRADUAÇÃO</span>
              <h3 style={{ margin: "12px 0 8px", fontSize: "1.25rem" }}>Análise e Desenvolvimento de Sistemas</h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>Pontifícia Universidade Católica de Minas Gerais (PUC Minas)</p>
              <span className="mono" style={{ display: "block", marginTop: "16px", fontSize: "0.85rem" }}>Início: Agosto de 2024</span>
            </div>

            <div className="academic-card reveal" style={{ background: "var(--paper)", padding: "28px", borderRadius: "14px", border: "1px solid var(--line)" }}>
              <span className="eyebrow">IDIOMAS</span>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.95rem" }}>
                <li><strong>Português:</strong> Nativo</li>
                <li><strong>Inglês:</strong> Proficiente (estudo contínuo em cursos particulares)</li>
                <li><strong>Italiano:</strong> Intermediário (1 ano cursado na UFMG)</li>
                <li><strong>Alemão:</strong> Básico (iniciado durante a graduação)</li>
              </ul>
            </div>
          </div>

          <div className="courses-block reveal" style={{ background: "var(--paper)", padding: "32px", borderRadius: "16px", border: "1px solid var(--line)" }}>
            <span className="eyebrow">EDUCAÇÃO CONTINUADA & CURSOS DE DESTAQUE</span>
            <h3 style={{ margin: "12px 0 24px" }}>Aprofundamento Técnico em Cursos de Instituições Renomadas</h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              <div>
                <h4 style={{ color: "var(--signal)", marginBottom: "12px" }}>Algoritmos & Estruturas de Dados</h4>
                <ul style={{ paddingLeft: "18px", margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem" }}>
                  <li>The Last Algorithms Course You&apos;ll Need (Frontend Masters)</li>
                  <li>CS50&apos;s Introduction to Computer Science (Harvard)</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: "var(--signal)", marginBottom: "12px" }}>Python, Data Science & IA</h4>
                <ul style={{ paddingLeft: "18px", margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem" }}>
                  <li>CS50&apos;s Introduction to Programming with Python (Harvard)</li>
                  <li>Using Python for Research (Harvard)</li>
                  <li>Data Science: Machine Learning & R Basics (Harvard)</li>
                  <li>Machine Learning and AI with Python (Harvard)</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: "var(--signal)", marginBottom: "12px" }}>Tecnologias, Segurança & Negócios</h4>
                <ul style={{ paddingLeft: "18px", margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem" }}>
                  <li>CS50&apos;s Introduction to Cybersecurity (Harvard)</li>
                  <li>Business Analytics (Harvard)</li>
                  <li>Formação Tonnie Java and AI Europe (Digital Innovation One)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matriz de Competências */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">O que sustenta meu trabalho</span>
              <h2>Competências como matriz, não barra de porcentagem.</h2>
            </div>
            <p>
              Áreas recorrentes, tecnologias usadas e assuntos que continuo
              aprofundando.
            </p>
          </div>

          <div className="skills-matrix">
            {skills.map((col, idx) => (
              <div key={idx} className="skill-column">
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fora do Código */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="shell">
          <div className="contact-card reveal">
            <div>
              <span className="eyebrow">FORA DO CÓDIGO</span>
              <h2>Minas, herança italiana e curiosidade por sistemas.</h2>
              <p style={{ marginTop: "16px", marginBottom: "28px" }}>
                A herança italiana cultiva o cuidado estético, o olho para os
                detalhes e a paixão por vinho — inspiração direta para a criação
                do <strong>Tesori di Bacco</strong>.
              </p>
              <a
                className="button primary magnetic"
                href="https://tesoridibacco.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conhecer o Tesori di Bacco ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
