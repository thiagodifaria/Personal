import * as React from "react";

interface NotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const NotificationEmailTemplate: React.FC<Readonly<NotificationEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
    <h1 style={{ color: "#333" }}>Nova Mensagem de Contato Recebida</h1>
    <p>Você recebeu uma nova mensagem através do formulário de contato do seu portfólio.</p>
    <hr style={{ border: "none", borderTop: "1px solid #eee" }} />
    <h2>Detalhes:</h2>
    <ul>
      <li>
        <strong>Nome:</strong> {name}
      </li>
      <li>
        <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
      </li>
    </ul>
    <h3>Mensagem:</h3>
    <p style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "4px", whiteSpace: "pre-wrap" }}>
      {message}
    </p>
    <hr style={{ border: "none", borderTop: "1px solid #eee" }} />
    <p style={{ fontSize: "0.9em", color: "#555" }}>
      Esta é uma notificação automática.
    </p>
  </div>
);
