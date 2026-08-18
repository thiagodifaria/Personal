import React from "react";

export function ManifestoSection() {
  return (
    <section className="section manifesto">
      <div className="signal-line"></div>
      <div className="shell">
        <p className="manifesto-quote reveal">
          O{" "}
          <span
            className="term"
            tabIndex={0}
            data-definition="o que as pessoas já fazem para o trabalho acontecer"
          >
            processo
          </span>{" "}
          já existe. O software precisa fazê-lo respirar com{" "}
          <span
            className="term"
            tabIndex={0}
            data-definition="saber o que aconteceu, o que falta e quem decide"
          >
            clareza
          </span>{" "}
          e espaço para{" "}
          <span
            className="term"
            tabIndex={0}
            data-definition="construir sem aprisionar a operação de amanhã"
          >
            evolução
          </span>
          .
        </p>
        <p className="manifesto-note">
          Software bom não é só uma tela bonita: ele organiza decisões e reduz o
          trabalho que ninguém deveria repetir.
        </p>
      </div>
    </section>
  );
}
