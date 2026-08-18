import React from "react";

interface VisualArtProps {
  type: string;
  label?: string;
}

export function VisualArt({ type, label = "Linguagem visual do case" }: VisualArtProps) {
  const containerClass = `visual visual-${type}`;

  if (type === "erp") {
    return (
      <div className={containerClass} data-label={label}>
        <span className="vblock" style={{ left: "8%", top: "16%", width: "28%", height: "22%" }}></span>
        <span className="vblock" style={{ left: "58%", top: "12%", width: "31%", height: "28%" }}></span>
        <span className="vblock" style={{ left: "21%", top: "58%", width: "31%", height: "25%" }}></span>
        <span className="vblock" style={{ left: "67%", top: "64%", width: "22%", height: "18%" }}></span>
        <span className="vline" style={{ left: "35%", top: "27%", width: "30%", transform: "rotate(12deg)" }}></span>
        <span className="vline" style={{ left: "46%", top: "58%", width: "24%", transform: "rotate(-22deg)" }}></span>
        <span className="pulse" style={{ left: "47%", top: "42%" }}></span>
      </div>
    );
  }

  if (type === "schema") {
    return (
      <div className={containerClass} data-label={label}>
        <span className="paper" style={{ left: "10%", top: "16%", "--r": "-7deg" } as React.CSSProperties}></span>
        <span className="paper" style={{ left: "33%", top: "24%", "--r": "4deg" } as React.CSSProperties}></span>
        <span className="paper" style={{ left: "58%", top: "11%", "--r": "-2deg" } as React.CSSProperties}></span>
        <span className="evidence" style={{ left: "25%", top: "68%" }}></span>
        <span className="evidence" style={{ left: "53%", top: "62%" }}></span>
        <span className="evidence" style={{ left: "78%", top: "69%" }}></span>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <path
            d="M25 69 C40 82 42 58 53 63 S69 76 78 70"
            fill="none"
            stroke="#16866e"
            strokeWidth="0.35"
            strokeDasharray="2 2"
          />
        </svg>
      </div>
    );
  }

  if (type === "tesori") {
    return (
      <div className={containerClass} data-label={label}>
        <span className="arch" style={{ left: "7%", bottom: 0, width: "34%", height: "72%" }}></span>
        <span className="arch" style={{ right: "8%", top: "8%", width: "28%", height: "55%" }}></span>
        <span className="label" style={{ left: "35%", top: "40%" }}>
          Tesori<br />di Bacco
        </span>
        <span className="label" style={{ right: "8%", bottom: "9%", fontSize: "0.65rem" }}>
          Tradizione / Scoperta
        </span>
      </div>
    );
  }

  if (type === "gateway") {
    return (
      <div className={containerClass} data-label={label}>
        <span className="route" style={{ left: "5%", top: "22%", width: "43%", transform: "rotate(10deg)" }}></span>
        <span className="route" style={{ left: "37%", top: "48%", width: "51%", transform: "rotate(-13deg)" }}></span>
        <span className="route" style={{ left: "8%", top: "76%", width: "62%", transform: "rotate(-3deg)" }}></span>
        <span className="gate" style={{ left: "19%", top: "25%" }}></span>
        <span className="gate" style={{ left: "48%", top: "42%" }}></span>
        <span className="gate" style={{ left: "75%", top: "27%" }}></span>
        <span className="gate" style={{ left: "76%", top: "67%" }}></span>
      </div>
    );
  }

  if (type === "lexicon") {
    return (
      <div className={containerClass} data-label={label}>
        <span className="axis" style={{ left: "9%", right: "7%", top: "74%", height: "1px" }}></span>
        <span className="axis" style={{ left: "12%", top: "12%", bottom: "14%", width: "1px" }}></span>
        <span className="wave" style={{ left: "6%", top: "32%", "--r": "7deg" } as React.CSSProperties}></span>
        <span className="wave" style={{ left: "2%", top: "54%", "--r": "-5deg" } as React.CSSProperties}></span>
        {[18, 29, 43, 58, 69, 83].map((x, i) => (
          <span
            key={i}
            className="tick"
            style={{ left: `${x}%`, top: `${[54, 41, 47, 31, 37, 23][i]}%` }}
          ></span>
        ))}
      </div>
    );
  }

  if (type === "mood") {
    return (
      <div className={containerClass} data-label={label}>
        <span className="token" style={{ left: "8%", top: "18%" }}>contexto</span>
        <span className="token" style={{ left: "31%", top: "33%" }}>linguagem</span>
        <span className="token" style={{ left: "55%", top: "15%" }}>sinal</span>
        <span className="token" style={{ left: "62%", top: "58%" }}>histórico</span>
        <span className="token" style={{ left: "18%", top: "68%" }}>similaridade</span>
        <span className="sentiment" style={{ left: "47%", top: "51%" }}></span>
      </div>
    );
  }

  if (type === "primme") {
    return (
      <div className={containerClass} data-label={label}>
        <span className="record" style={{ left: "7%", top: "12%", width: "31%", height: "23%" }}>CONTATO / ORIGEM</span>
        <span className="record" style={{ right: "8%", top: "18%", width: "31%", height: "26%" }}>OPORTUNIDADE / DONO</span>
        <span className="record" style={{ left: "31%", bottom: "13%", width: "35%", height: "27%" }}>HISTÓRICO / PRÓXIMA AÇÃO</span>
        <span className="docline" style={{ left: "35%", top: "29%", width: "34%", transform: "rotate(8deg)" }}></span>
        <span className="docline" style={{ left: "50%", top: "57%", width: "24%", transform: "rotate(-40deg)" }}></span>
      </div>
    );
  }

  if (type === "segtrab") {
    return (
      <div className={containerClass} data-label={label}>
        <span className="panel" style={{ left: "7%", top: "12%", width: "36%", height: "72%" }}></span>
        <span className="panel" style={{ right: "7%", top: "12%", width: "40%", height: "31%" }}></span>
        <span className="panel" style={{ right: "7%", bottom: "16%", width: "40%", height: "29%" }}></span>
        <span className="step" style={{ left: "40%", top: "27%" }}></span>
        <span className="step" style={{ left: "57%", top: "55%" }}></span>
      </div>
    );
  }

  return <div className={containerClass} data-label={label}></div>;
}
