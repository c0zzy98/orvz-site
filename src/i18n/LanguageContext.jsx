import { createContext, useContext, useState } from "react";
import pl from "../locales/pl.json";
import en from "../locales/en.json";
import de from "../locales/de.json";
import cz from "../locales/cz.json";

const translations = { pl, en, de, cz };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pl");

  const locale = translations[lang];

  const t = (key) => {
    const keys = key.split(".");
    let val = locale;
    for (const k of keys) {
      val = val?.[k];
    }
    return val ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, locale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
