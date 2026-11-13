import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { pageMetadata } from "@/lib/page-metadata";

export type Lang = "pt" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "pt", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "pt") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    const metadata = pageMetadata[pathname]?.[lang];
    if (!metadata) return;
    const [title, description, socialTitle, socialDescription] = metadata;
    document.title = title;
    const tags = [
      ["name", "description", description],
      ["property", "og:title", socialTitle],
      ["property", "og:description", socialDescription],
      ["name", "twitter:title", socialTitle],
      ["name", "twitter:description", socialDescription],
      ["property", "og:locale", lang === "en" ? "en_US" : "pt_BR"],
    ];
    for (const [attribute, key, content] of tags) {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.content = content;
    }
  }, [lang, pathname]);
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
