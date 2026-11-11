import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "pt", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "pt") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
  };
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

/** Returns lang plus t(pt, en) picking the active language. */
export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = <T,>(pt: T, en: T): T => (lang === "en" ? en : pt);
  return { lang, setLang, t };
}
