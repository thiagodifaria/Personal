"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteContent } from "@/config/siteContent";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icons";

function ContactContent() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("assunto") || "";
  const p = siteContent.profile;

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(p.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${p.email}`;
    }
  };

  const checklist = [
    "Objetivo e pessoas envolvidas",
    "Processo atual",
    "Ferramentas existentes",
    "Principal gargalo",
    "Decisão que precisa avançar",
  ];

  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow">Contato</span>
            <h1>Uma conversa útil começa com o contexto.</h1>
          </div>
          <p>
            Se você tem um processo confuso, uma operação crescendo ou uma ideia
            que precisa sair do papel com responsabilidade, me conte o contexto.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-layout">
          <ContactForm initialSubject={subject} kind="contact" />

          <aside className="contact-aside">
            <span className="eyebrow">CONTATO DIRETO</span>
            <h3>{p.email}</h3>
            <button
              className="button ghost copy-email"
              onClick={handleCopyEmail}
            >
              <Icon name="copy" /> {copied ? "E-mail copiado" : "Copiar e-mail"}
            </button>

            <ul>
              <li>
                <a
                  className="text-link"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="text-link"
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>{p.location}</li>
            </ul>

            <h3 style={{ marginTop: "32px" }}>Bom ponto de partida</h3>
            <ul>
              {checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ContactContent />
    </Suspense>
  );
}
