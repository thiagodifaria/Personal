
'use client';
import type { Dispatch, SetStateAction, ReactNode } from 'react';
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import ptTranslations from '@/locales/pt';
import enTranslations from '@/locales/en';

export type Language = 'pt' | 'en';
export type Translations = typeof ptTranslations; 

interface LanguageContextType {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  translations: Translations;
  t: (path: string, G_RAW_RETURN_TYPE_NEVER_USE_IN_PRODUCTION?: boolean) => string | any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNestedValue = (obj: any, path: string, G_RAW_RETURN_TYPE_NEVER_USE_IN_PRODUCTION: boolean = false): string | any => {
  const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
  
  if (G_RAW_RETURN_TYPE_NEVER_USE_IN_PRODUCTION && Array.isArray(value)) {
    return value;
  }
  return typeof value === 'string' ? value : path; 
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt'); 

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('appLanguage') as Language | null;
      if (storedLang && (storedLang === 'pt' || storedLang === 'en')) {
        setLanguage(storedLang);
        document.documentElement.lang = storedLang;
      } else {
        document.documentElement.lang = 'pt'; 
      }
    }
  }, []);

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', language);
      document.documentElement.lang = language; 
    }
  }, [language]);

  const currentTranslations = useMemo(() => {
    return language === 'en' ? enTranslations : ptTranslations;
  }, [language]);

  const t = useCallback((path: string, G_RAW_RETURN_TYPE_NEVER_USE_IN_PRODUCTION: boolean = false): string | any => {
    return getNestedValue(currentTranslations, path, G_RAW_RETURN_TYPE_NEVER_USE_IN_PRODUCTION);
  }, [currentTranslations]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    translations: currentTranslations,
    t
  }), [language, setLanguage, currentTranslations, t]);

  return (<LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>);
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
