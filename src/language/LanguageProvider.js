import React, { useState, useContext, useEffect, createContext } from "react";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});

const STORAGE_KEY = "dashboard-lang";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (stored === "en" || stored === "es")) {
      setLanguageState(stored);
    }
  }, []);

  function setLanguage(lang) {
    if (lang === "en" || lang === "es") {
      setLanguageState(lang);
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
