"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  initialSubject?: string;
  kind?: "contact" | "campaign";
  campaignSlug?: string;
  ctaText?: string;
}

export function ContactForm({
  initialSubject = "",
  kind = "contact",
  campaignSlug,
  ctaText,
}: ContactFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    need: initialSubject ? initialSubject : "",
    message: initialSubject ? `Quero conversar sobre ${initialSubject}. ` : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<string>(
    kind === "contact"
      ? "Seus dados estão protegidos com total privacidade."
      : "Formulário de contato direto. Resposta em breve."
  );
  const [isValidated, setIsValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Preencha este campo.";
    if (!formData.email.trim()) {
      newErrors.email = "Preencha este campo.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Informe um e-mail válido.";
    }
    if (kind === "contact" && !formData.need) {
      newErrors.need = "Selecione uma opção.";
    }
    if (!formData.message.trim()) newErrors.message = "Preencha este campo.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsValidated(true);
      setStatusMessage("Mensagem preparada com sucesso! Encaminhando para o e-mail...");

      const subject = encodeURIComponent(
        `[Contato Portfolio] ${formData.need || "Nova Mensagem"}`
      );
      const body = encodeURIComponent(
        `Nome: ${formData.name}\n` +
          `E-mail: ${formData.email}\n` +
          `Empresa / Projeto: ${formData.company || "Não informado"}\n` +
          `Tipo de Necessidade: ${formData.need || "N/A"}\n\n` +
          `Mensagem:\n${formData.message}`
      );

      setTimeout(() => {
        window.location.href = `mailto:thiagodifaria@gmail.com?subject=${subject}&body=${body}`;
      }, 400);
    } else {
      setIsValidated(false);
      setStatusMessage("Revise os campos indicados antes de continuar.");
    }
  };

  return (
    <form
      className="form prototype-form"
      noValidate
      onSubmit={handleSubmit}
      data-kind={kind}
      data-campaign={campaignSlug}
    >
      {kind === "campaign" && <span className="eyebrow">DIAGNÓSTICO INICIAL</span>}

      <div className="field">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="company">Empresa ou projeto</label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        {errors.company && <span className="error">{errors.company}</span>}
      </div>

      {kind === "contact" && (
        <div className="field">
          <label htmlFor="need">Tipo de necessidade</label>
          <select
            id="need"
            name="need"
            required
            value={formData.need}
            onChange={(e) => setFormData({ ...formData, need: e.target.value })}
          >
            <option value="">Selecione</option>
            {[
              "CRM/ERP",
              "Automação",
              "Machine Learning e IA",
              "Site Pessoal e Site Comercial",
              "Outro",
            ].map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
          {errors.need && <span className="error">{errors.need}</span>}
        </div>
      )}

      <div className="field">
        <label htmlFor="message">
          {kind === "contact"
            ? "O que você está tentando organizar?"
            : "Onde o processo trava hoje?"}
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder={
            kind === "contact"
              ? "Conte quem usa, como funciona hoje, onde há retrabalho e qual decisão está difícil."
              : "Descreva um exemplo real, as pessoas envolvidas e as ferramentas atuais."
          }
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>

      <Button
        type="submit"
        variant={kind === "campaign" ? "signal" : "primary"}
      >
        {ctaText || (kind === "contact" ? "Enviar mensagem" : "Enviar solicitação")}
      </Button>

      <div
        className="form-status"
        role="status"
        aria-live="polite"
        style={{
          borderColor: isValidated
            ? "var(--signal)"
            : Object.keys(errors).length > 0
            ? "#b42318"
            : "var(--line)",
        }}
      >
        {statusMessage}
      </div>
    </form>
  );
}
