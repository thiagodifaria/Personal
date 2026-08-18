"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FlowCanvas } from "@/components/canvas/FlowCanvas";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero" aria-labelledby="heroTitle">
        <span className="hero-side-marker">01 / INÍCIO</span>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div>
              <div className="hero-kicker eyebrow">{t.heroKicker}</div>
              <h1 id="heroTitle">
                <span tabIndex={0} data-note="dados">
                  {t.heroTitle[0]}
                </span>
                <span tabIndex={0} data-note="regras">
                  {t.heroTitle[1]}
                </span>
                <span tabIndex={0} data-note="ritmo">
                  {t.heroTitle[2]}
                </span>
                <span tabIndex={0} data-note="pessoas">
                  {t.heroTitle[3]}
                </span>
              </h1>
            </div>

            <div className="hero-bottom">
              <div>
                <p className="hero-intro hero-intro-primary">{t.heroIntro}</p>
                <p className="hero-intro hero-intro-secondary">
                  {t.heroTechnical}
                </p>
                <div className="hero-ctas">
                  <Link className="button primary magnetic" href="/projetos">
                    {t.projectsCTA}
                  </Link>
                  <Link className="button ghost magnetic" href="/contato">
                    {t.contactCTA}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hero-map"
            aria-label="Mapa visual conectando contexto, dados, regras, interface e operação"
          >
            <FlowCanvas />
          </div>
        </div>
      </section>

      <div className="position-strip">
        <div className="shell">
          <div>
            <i></i>Sistemas Internos e Produtos B2B
          </div>
          <div>
            <i></i>APIs, Integrações e Automação
          </div>
          <div>
            <i></i>Dados, IA Aplicada e Interfaces Claras
          </div>
        </div>
      </div>
    </>
  );
}
