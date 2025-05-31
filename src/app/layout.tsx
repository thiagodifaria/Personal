
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
// Removed ReactLenis imports
import { HeaderThemeProvider } from "@/context/HeaderThemeContext";
import Header from "@/components/header/Header";
import { constructMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      {/* Removed ReactLenis wrapper */}
      <body className="font-body antialiased">
        <HeaderThemeProvider>
          <Header />
          <Toaster />
          {children}
        </HeaderThemeProvider>
      </body>
    </html>
  );
}
