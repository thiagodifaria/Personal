"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { i18n, Translations } from "@/config/i18n";

type Language = "pt" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("pt");

  useEffect(() => {
    try {
      const storedLang = localStorage.getItem("tf-lang") as Language | null;
      if (storedLang && (storedLang === "pt" || storedLang === "en")) {
        setLangState(storedLang);
        return;
      }

      // Auto-detect based on browser language & location timezone
      const browserLang = (navigator.language || (navigator as any).userLanguage || "").toLowerCase();
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

      if (
        browserLang.startsWith("pt") ||
        timeZone.includes("Sao_Paulo") ||
        timeZone.includes("Bahia") ||
        timeZone.includes("Fortaleza") ||
        timeZone.includes("Recife") ||
        timeZone.includes("Manaus") ||
        timeZone.includes("Lisbon")
      ) {
        setLangState("pt");
      } else {
        setLangState("en");
      }
    } catch {
      setLangState("pt");
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("tf-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: i18n[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
