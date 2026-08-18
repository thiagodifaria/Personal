import React from "react";

export function TerritoriesSection() {
  return (
    <section className="section" id="territorios">
      <span className="section-marker">02 / TERRITÓRIOS</span>
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">Onde essa clareza ganha forma</span>
            <h2>Quatro territórios. Um mesmo compromisso.</h2>
          </div>
          <p>
            Não começo pela tecnologia. Começo pelo que precisa ficar mais
            confiável, visível ou simples para a operação avançar.
          </p>
        </div>

        <div className="territory-grid">
          <article className="territory reveal" tabIndex={0}>
            <span className="territory-index">01 / CAMPO DE ATUAÇÃO</span>
            <h3>Sistemas de operação</h3>
            <p>
              CRM, ERP e painéis sob medida que centralizam vendas, finanças e o dia a dia da sua equipe em um único lugar seguro.
            </p>
            <ul>
              <li>Modelo de Dados</li>
              <li>Fluxo Comercial</li>
              <li>Permissões</li>
              <li>Auditoria</li>
            </ul>
            <div className="mini-flow" aria-hidden="true">
              <span className="node" style={{ left: "4%", top: "20%" }}></span>
              <span className="node" style={{ left: "42%", top: "42%" }}></span>
              <span className="node" style={{ left: "78%", top: "17%" }}></span>
              <span
                className="bar"
                style={{
                  left: "9%",
                  top: "25%",
                  width: "40%",
                  transform: "rotate(22deg)",
                }}
              ></span>
              <span
                className="bar"
                style={{
                  left: "49%",
                  top: "45%",
                  width: "39%",
                  transform: "rotate(-24deg)",
                }}
              ></span>
            </div>
          </article>

          <article className="territory reveal" tabIndex={0}>
            <span className="territory-index">02 / CAMPO DE ATUAÇÃO</span>
            <h3>Automação e integrações</h3>
            <p>
              Conexões automáticas entre ferramentas para eliminar digitação manual repetitiva e fazer a informação fluir sem erros.
            </p>
            <ul>
              <li>Fontes</li>
              <li>Validação</li>
              <li>Fila</li>
              <li>Destino</li>
            </ul>
            <div className="mini-flow" aria-hidden="true">
              <span className="node" style={{ left: "3%", top: "48%" }}></span>
              <span className="node" style={{ left: "37%", top: "48%" }}></span>
              <span className="node" style={{ left: "70%", top: "48%" }}></span>
              <span
                className="bar"
                style={{ left: "9%", top: "54%", width: "33%" }}
              ></span>
              <span
                className="bar"
                style={{ left: "43%", top: "54%", width: "33%" }}
              ></span>
            </div>
          </article>

          <article className="territory reveal" tabIndex={0}>
            <span className="territory-index">03 / CAMPO DE ATUAÇÃO</span>
            <h3>Dados e inteligência</h3>
            <p>
              Organização de relatórios, documentos e planilhas em respostas rápidas e pesquisas inteligentes para apoiar decisões.
            </p>
            <ul>
              <li>Evidência</li>
              <li>Busca</li>
              <li>Contexto</li>
              <li>Revisão</li>
            </ul>
            <div className="mini-flow" aria-hidden="true">
              <span className="node" style={{ left: "7%", top: "15%" }}></span>
              <span className="node" style={{ left: "31%", top: "64%" }}></span>
              <span className="node" style={{ left: "63%", top: "28%" }}></span>
              <span className="node" style={{ left: "84%", top: "68%" }}></span>
              <span
                className="bar"
                style={{
                  left: "13%",
                  top: "22%",
                  width: "52%",
                  transform: "rotate(18deg)",
                }}
              ></span>
            </div>
          </article>

          <article className="territory reveal" tabIndex={0}>
            <span className="territory-index">04 / CAMPO DE ATUAÇÃO</span>
            <h3>Produtos web bem acabados</h3>
            <p>
              Sites, portais e áreas de membros modernas com navegação fluida, visual profissional e foco na experiência do usuário.
            </p>
            <ul>
              <li>Contexto</li>
              <li>Ação</li>
              <li>Retorno</li>
              <li>Acompanhamento</li>
            </ul>
            <div className="mini-flow" aria-hidden="true">
              <span className="node" style={{ left: "5%", top: "48%" }}></span>
              <span className="node" style={{ left: "28%", top: "48%" }}></span>
              <span className="node" style={{ left: "52%", top: "48%" }}></span>
              <span className="node" style={{ left: "78%", top: "48%" }}></span>
              <span
                className="bar"
                style={{ left: "10%", top: "54%", width: "74%" }}
              ></span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
