import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

const nav = [
  { to: "/", pt: "Início", en: "Home" },
  { to: "/sobre", pt: "Sobre", en: "About" },
  { to: "/servicos", pt: "Serviços", en: "Services" },
  { to: "/texgenera", pt: "TexGenera", en: "TexGenera" },
  { to: "/tecnologias", pt: "Tecnologias", en: "Technologies" },
  { to: "/projetos", pt: "Projetos", en: "Projects" },
  { to: "/pesquisa", pt: "Pesquisa", en: "Research" },
  { to: "/contato", pt: "Contato", en: "Contact" },
] as const;

function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="flex items-center rounded-md border border-border/60 text-xs font-mono" role="group" aria-label={t("Idioma", "Language")}>
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2 py-1 uppercase transition ${lang === l ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2 L22 7.5 V16.5 L12 22 L2 16.5 V7.5 Z" />
            </svg>
          </span>
          Rafael Muniz
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-2.5 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "rounded-md px-2.5 py-2 text-sm text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t(n.pt, n.en)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <button className="lg:hidden text-foreground" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border/40 px-6 py-3 flex flex-col gap-1 bg-background">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t(n.pt, n.en)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
