"use client";

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow">Blog</span>
            <h1>Notas sobre software, operação e decisões técnicas.</h1>
          </div>
          <p>
            Uma publicação editorial sobre o que existe antes da tela, dentro da
            arquitetura e depois da entrega.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div
            style={{
              padding: "90px 24px",
              textAlign: "center",
              background: "var(--surface)",
              borderRadius: "18px",
              border: "1px solid var(--line)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <span className="eyebrow">EM BREVE</span>
            <h2 style={{ marginTop: "12px", marginBottom: "16px" }}>
              Publicações em fase de preparação
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "560px", margin: "0 auto" }}>
              Espaço reservado para ensaios técnicos, estudos de caso e reflexões sobre engenharia de backend, arquitetura e produto.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
