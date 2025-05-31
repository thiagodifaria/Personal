"use client";

import type { Dispatch, SetStateAction } from "react";
import React, { createContext, useContext, useState, useMemo } from "react";

export type HeaderTheme = "light" | "dark";

interface HeaderThemeContextType {
  headerTheme: HeaderTheme;
  setHeaderTheme: Dispatch<SetStateAction<HeaderTheme>>;
}

const HeaderThemeContext = createContext<HeaderThemeContextType | undefined>(
  undefined
);

export function HeaderThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerTheme, setHeaderTheme] = useState<HeaderTheme>("dark"); // Default to dark for hero section

  const contextValue = useMemo(() => ({
    headerTheme,
    setHeaderTheme,
  }), [headerTheme]);

  return (
    <HeaderThemeContext.Provider value={contextValue}>
      {children}
    </HeaderThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  const context = useContext(HeaderThemeContext);
  if (context === undefined) {
    throw new Error("useHeaderTheme must be used within a HeaderThemeProvider");
  }
  return context;
}
