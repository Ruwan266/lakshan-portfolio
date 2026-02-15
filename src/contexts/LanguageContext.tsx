import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, Language } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("en");

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    const dir = newLang === "ar" ? "rtl" : "ltr";
    document.body.setAttribute("dir", dir);
    document.documentElement.setAttribute("dir", dir);
    document.body.className = "";
    if (newLang === "ja") document.body.classList.add("lang-ja");
    if (newLang === "zh") document.body.classList.add("lang-zh");
  }, []);

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      let result: any = translations[lang];
      for (const k of keys) {
        result = result?.[k];
      }
      return result ?? key;
    },
    [lang]
  );

  const isRTL = lang === "ar";

  useEffect(() => {
    setLang("en");
  }, [setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
