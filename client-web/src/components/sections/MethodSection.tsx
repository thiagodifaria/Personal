"use client";

import { useEffect, useRef, useState } from "react";

export function MethodSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);

  const steps = [
    {
      n: "01",
      title: "Entender",
      q: "O que acontece antes de alguém abrir esta tela?",
      a: "Mapeio pessoas, eventos, exceções, ferramentas atuais e o motivo real para mudar.",
    },
    {
      n: "02",
      title: "Modelar",
      q: "Qual dado precisa ser confiável para esta decisão?",
      a: "Organizo entidades, estados, regras e relações para o sistema refletir o negócio sem copiá-lo cegamente.",
    },
    {
      n: "03",
      title: "Construir",
      q: "Quem pode ver, alterar ou aprovar?",
      a: "Implemento o núcleo com validação, permissões, APIs, integrações e uma interface que não esconde responsabilidade.",
    },
    {
      n: "04",
      title: "Validar",
      q: "Como a pessoa entende que o trabalho avançou?",
      a: "Testo o fluxo com estados reais, retorno de ações, erros compreensíveis e observabilidade suficiente para investigar.",
    },
    {
      n: "05",
      title: "Evoluir",
      q: "O que precisa continuar simples quando o negócio mudar?",
      a: "Documento decisões, entrego por etapas e preservo espaço para alterar regras sem desmontar toda a operação.",
    },
  ];

  useEffect(() => {
    let ticking = false;

    const run = () => {
      const track = trackRef.current;
      if (!track) return;

      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const ratio = Math.max(
        0,
        Math.min(1, (vh * 0.55 - r.top) / (r.height - vh * 0.35))
      );
      setProgress(ratio * 100);

      const stepEls = track.querySelectorAll(".method-step");
      const newVisible = [...visibleSteps];
      let currentActive = -1;

      stepEls.forEach((s, idx) => {
        const x = s.getBoundingClientRect();
        if (x.top < vh * 0.62 && x.bottom > vh * 0.38) {
          currentActive = idx;
        }
        if (x.top < vh * 0.88 && x.bottom > vh * 0.12) {
          newVisible[idx] = true;
          s.classList.add("in");
        }
      });

      if (currentActive !== -1) {
        setActiveIndex(currentActive);
      }
      setVisibleSteps((prev) =>
        prev.some((v, i) => v !== newVisible[i]) ? newVisible : prev
      );
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(run);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    run();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section">
      <span className="section-marker">03 / MÉTODO</span>
      <div className="shell method-wrap">
        <div className="method-sticky">
          <span className="eyebrow">Como uma ideia vira operação</span>
          <h2>Construir é uma sequência de decisões.</h2>
          <p>
            O método reduz risco sem transformar descoberta em cerimônia. Cada
            etapa produz clareza para a próxima.
          </p>
        </div>

        <div ref={trackRef} className="method-track" id="methodTrack">
          <div
            className="method-progress"
            style={{ height: `${progress}%` }}
          ></div>

          {steps.map((item, idx) => {
            const isVisible = visibleSteps[idx];
            const isActive = activeIndex === idx;
            return (
              <article
                key={idx}
                className={`method-step reveal ${isVisible ? "in" : ""} ${
                  isActive ? "active" : ""
                }`}
              >
                <span className="eyebrow">
                  {item.n} / {item.title.toUpperCase()}
                </span>
                <h3>{item.title}</h3>
                <p className="method-question">“{item.q}”</p>
                <p className="method-answer">{item.a}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
