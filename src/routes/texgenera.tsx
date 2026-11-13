import { pageHead } from "@/lib/page-metadata";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Atom, Award, Battery, FlaskConical, Flame, Layers, Recycle, ShieldCheck } from "lucide-react";
import bgProjetos from "@/assets/bg-projetos.jpg";
import { useLang } from "@/lib/i18n";

const SITE = "https://texgenera.com";

export const Route = createFileRoute("/texgenera")({
  staticData: { sitemap: true },
  head: () => pageHead("/texgenera"),
  component: TexGeneraPage,
});

function TexGeneraPage() {
  const { t } = useLang();
  const pillars = [
    { icon: FlaskConical, href: `${SITE}/pesquisa`, title: t("Pesquisa validada", "Validated research"), text: t("Parceria com o ISI Eletroquímica (SENAI) levou a tecnologia ao TRL 5 — risco científico zero.", "Partnership with ISI Electrochemistry (SENAI) took the technology to TRL 5 — zero scientific risk.") },
    { icon: Flame, href: `${SITE}/tecnologia`, title: t("Pirólise proprietária", "Proprietary pyrolysis"), text: t("Tratamento térmico de alta precisão que dispensa a separação prévia das fibras.", "High-precision thermal treatment that requires no prior fiber segregation.") },
    { icon: Layers, href: `${SITE}/processo`, title: t("Arquitetura em 5 etapas", "Five-stage architecture"), text: t("Do resíduo multicolorido bruto ao grafeno em pó e carbono técnico de alta qualidade.", "From raw multicolor waste to graphene powder and high-quality technical carbon.") },
    { icon: Battery, href: `${SITE}/aplicacoes`, title: t("Aplicações de alto valor", "High-value applications"), text: t("Baterias, BESS, compósitos, pneus, aeroespacial, tratamento de água, saúde e têxteis técnicos.", "Batteries, BESS, composites, tires, aerospace, water treatment, health and technical textiles.") },
  ];
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgProjetos} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-20 blur-sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        <div className="absolute inset-0 bg-hex opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {t("Sustentabilidade · ESG · Grafeno", "Sustainability · ESG · Graphene")}
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
            TexGenera: <span className="text-gradient">{t("a Alquimia do Carbono", "the Alchemy of Carbon")}</span>.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("Do fio ao fim: transformando o maior passivo da indústria têxtil em ativos de nanotecnologia de alto valor.", "From thread to end: turning the textile industry's biggest liability into high-value nanotechnology assets.")}
          </p>
          <p className="mt-3 text-sm font-mono text-primary">{t("Rafael Muniz — CTO da TexGenera", "Rafael Muniz — CTO of TexGenera")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={SITE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">
              {t("Visitar texgenera.com", "Visit texgenera.com")} <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-5 py-3 text-sm font-medium hover:border-primary/50 hover:text-primary">
              {t("Ver projetos", "See projects")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("O problema", "The problem")}</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            {t("O resíduo têxtil é o ", "Textile waste is the ")}<span className="text-gradient">{t("passivo invisível", "invisible liability")}</span>{t(" da moda global.", " of global fashion.")}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t("Todos os anos, milhões de toneladas de fibras multicomponentes — o chamado resíduo mil cores — são descartadas porque a reciclagem convencional exige separação rigorosa das fibras, técnica e economicamente inviável.", "Every year, millions of tons of multicomponent fibers — the so-called thousand-color waste — are discarded because conventional recycling demands strict fiber segregation, which is technically and economically unfeasible.")}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t("A TexGenera desenvolveu uma pirólise avançada proprietária que converte esse resíduo diretamente em carbonos precursores de altíssimo valor — sem separação prévia.", "TexGenera developed a proprietary advanced pyrolysis that converts this waste directly into extremely high-value precursor carbons — with no prior separation required.")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: ShieldCheck, v: "TRL 5", l: t("Validado e certificado", "Validated and certified") },
            { icon: Layers, v: t("5 etapas", "5 stages"), l: t("Tecnologia proprietária", "Proprietary technology") },
            { icon: Recycle, v: "0", l: t("Separação de fibras", "Fiber segregation") },
            { icon: Atom, v: t("Grafeno", "Graphene"), l: t("Produto de alto valor", "High-value product") },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border/60 bg-card/50 p-5">
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 font-display text-2xl font-semibold">{s.v}</div>
              <div className="text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Plataforma", "Platform")}</span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold max-w-3xl">
          {t("Uma plataforma única para o ", "A unique platform for the ")}<span className="text-gradient">{t("carbono do futuro", "carbon of the future")}</span>.
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          {t("Dos carbonos precursores surgem grafeno, carbono técnico, carbono condutivo, biochar e nanomateriais para baterias, BESS, compósitos, aeroespacial, tratamento de água, automotivo e saúde.", "From our precursor carbons come graphene, technical carbon, conductive carbon, biochar and nanomaterials for batteries, BESS, composites, aerospace, water treatment, automotive and healthcare.")}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {pillars.map((p) => (
            <a key={p.href} href={p.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition hover:border-primary/40">
              <p.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold inline-flex items-center gap-2">{p.title}<ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" /></h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 rounded-2xl border border-border/60 bg-card/50 p-8 md:flex-row md:items-center">
          <Award className="h-10 w-10 shrink-0 text-primary" />
          <div>
            <h3 className="font-display text-xl font-semibold">{t("Startup Selecionada — Founders Club Growth Challenge", "Selected Startup — Founders Club Growth Challenge")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("O Founders Club, em parceria com o Notion, acelera startups brasileiras de alto potencial. O selo reforça a relevância de mercado da tese deeptech da TexGenera.", "The Founders Club, in partnership with Notion, accelerates high-potential Brazilian startups. The seal reinforces the market relevance of TexGenera's deeptech thesis.")}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-background p-10 sm:p-16">
          <div className="absolute inset-0 bg-hex opacity-50" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("Não existe “jogar fora”.", "There is no “throwing away”.")}</h2>
              <p className="mt-3 text-muted-foreground">{t("O fim de um fio é o começo do futuro. Parcerias industriais, investimento ou desenvolvimento conjunto de aplicações.", "The end of a thread is the beginning of the future. Industrial partnerships, investment or joint application development.")}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={`${SITE}/contato`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">
                {t("Falar com a TexGenera", "Contact TexGenera")} <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold hover:border-primary/50 hover:text-primary">
                {t("Falar comigo", "Talk to me")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
