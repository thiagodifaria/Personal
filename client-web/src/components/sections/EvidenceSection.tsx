"use client";

import { useState } from "react";
import Link from "next/link";

export function EvidenceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      n: "E01",
      title: "Sistemas empresariais e portais de operação",
      desc: "Do fluxo comercial à rotina interna, com estado, responsabilidade e próxima ação visíveis.",
      href: "/projetos/erp",
    },
    {
      n: "E02",
      title: "APIs, integrações, permissões e auditoria",
      desc: "Serviços que conectam dados sem apagar rastreabilidade, acesso ou limites.",
      href: "/projetos/api-gateway",
    },
    {
      n: "E03",
      title: "Dados, inteligência documental e IA aplicada",
      desc: "Busca, classificação e respostas assistidas com evidências e revisão humana.",
      href: "/projetos/schema-api",
    },
    {
      n: "E04",
      title: "Documentação e infraestrutura reproduzível",
      desc: "Containers, observabilidade, decisões registradas e evolução incremental.",
      href: "/sobre",
    },
  ];

  return (
    <section className="evidence-band">
      <div className="shell">
        <div className="section-head" style={{ marginBottom: "36px" }}>
          <div>
            <span className="eyebrow">Evidências de construção</span>
            <h2 style={{ fontSize: "clamp(2.5rem,5vw,5.6rem)" }}>
              Profundidade que pode ser examinada.
            </h2>
          </div>
          <p>
            Sem números inflados ou prova social inventada. O trabalho aparece em
            decisões, escopo e responsabilidade técnica.
          </p>
        </div>

        <div className="evidence-grid">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={index} className="evidence-item reveal">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="eyebrow">{item.n}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </button>
                <div className="evidence-detail" hidden={!isOpen}>
                  <Link className="text-link" href={item.href}>
                    Ver evidência relacionada
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
