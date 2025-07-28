import * as React from "react";
import { siteData } from "@/config/siteData";

interface SenderEmailProps {
  name: string;
}

export const SenderEmailTemplate: React.FC<Readonly<SenderEmailProps>> = ({
  name,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
    <h1 style={{ color: "#333" }}>Obrigado pelo seu Contato, {name}!</h1>
    <p>
      Recebi sua mensagem e agradeço por entrar em contato.
    </p>
    <p>
      Farei o possível para responder o mais breve possível.
    </p>
    <hr style={{ border: "none", borderTop: "1px solid #eee" }} />
    <p>Atenciosamente,</p>
    <p>
      <strong>{siteData.personalInfo.name}</strong>
    </p>
    {}
    {}
  </div>
);
