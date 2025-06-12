
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { HeaderThemeProvider } from "@/context/HeaderThemeContext";
import Header from "@/components/header/Header";
import { constructMetadata } from "@/lib/metadata";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// Simplified metadata generation, no longer locale-aware via next-international
export function generateMetadata(): Metadata {
  return constructMetadata();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The lang attribute on <html> will be managed by LanguageProvider's useEffect
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          <HeaderThemeProvider>
            <Header />
            <Toaster />
            {children}
          </HeaderThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
