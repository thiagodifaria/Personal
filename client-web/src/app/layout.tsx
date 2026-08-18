"use client";

import { useState } from "react";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Preloader } from "@/components/layout/Preloader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { CommandPalette } from "@/components/layout/CommandPalette";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta
          name="description"
          content="Portfólio de Thiago Di Faria — backend, dados, automação e sistemas de operação."
        />
        <meta name="theme-color" content="#f5f4f0" />
        <title>Thiago Di Faria</title>
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <a className="skip-link" href="#main-content">
              Pular para o conteúdo
            </a>

            <Preloader />

            <Header onOpenMenu={() => setMenuOpen(true)} />

            <main id="main-content" tabIndex={-1}>
              {children}
            </main>

            <Footer />

            <MobileDrawer
              isOpen={menuOpen}
              onClose={() => setMenuOpen(false)}
            />

            <CommandPalette />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
