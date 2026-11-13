import { pageHead } from "@/lib/page-metadata";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Wind, Droplets, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import bgPlant from "@/assets/bg-plant.jpg";

export const Route = createFileRoute("/tecnologias")({
  staticData: { sitemap: true },
  head: () => pageHead("/tecnologias"),
  component: TechPage,
});

function getTechs(t: <T>(pt: T, en: T) => T) {
return [
  {
    id: "pirolise",
    icon: Flame,
    tag: t("Termoquímica", "Thermochemical"),
    title: t("Pirólise", "Pyrolysis"),
    summary:
      t("Decomposição térmica de materiais carbonáceos em ambiente livre de oxigênio, gerando biochar, bio-óleo e gás de síntese.", "Thermal decomposition of carbonaceous materials in an oxygen-free environment, producing biochar, bio-oil, and syngas."),
    bullets: [
      t("Tratamento de lodo de ETE, biomassa e resíduos têxteis", "Treatment of wastewater sludge, biomass, and textile waste"),
      t("Produção de biochar para uso agrícola e mercados de carbono", "Biochar production for agricultural use and carbon markets"),
      t("Carbonos precursores para grafeno e materiais avançados", "Carbon precursors for graphene and advanced materials"),
      t("Otimização operacional via lógica fuzzy e IA", "Operational optimization using fuzzy logic and AI"),
    ],
    products: ["Biochar", t("Bio-óleo", "Bio-oil"), t("Gás de síntese", "Syngas"), t("Carbonos precursores", "Carbon precursors")],
  },
  {
    id: "gaseificacao",
    icon: Wind,
    tag: t("Termoquímica", "Thermochemical"),
    title: t("Gaseificação", "Gasification"),
    summary:
      t("Conversão parcialmente oxidativa de biomassa e resíduos sólidos em gás de síntese (syngas) rico em H₂ e CO, base para energia e hidrogênio verde.", "Partial oxidation of biomass and solid waste into synthesis gas (syngas) rich in H₂ and CO, a feedstock for energy and green hydrogen."),
    bullets: [
      t("Geração descentralizada para comunidades isoladas", "Decentralized power generation for isolated communities"),
      t("Rota para hidrogênio verde a partir de biomassa residual", "A pathway to green hydrogen from residual biomass"),
      t("Aproveitamento energético de RSU e resíduos agroindustriais", "Energy recovery from municipal solid waste and agro-industrial waste"),
      t("Integração com células a combustível e ciclos térmicos", "Integration with fuel cells and thermal cycles"),
    ],
    products: ["Syngas", t("Hidrogênio verde", "Green hydrogen"), t("Eletricidade", "Electricity"), t("Calor de processo", "Process heat")],
  },
  {
    id: "biodigestao",
    icon: Droplets,
    tag: t("Bioquímica", "Biochemical"),
    title: t("Biodigestão", "Anaerobic Digestion"),
    summary:
      t("Degradação anaeróbia de matéria orgânica por consórcios microbianos, produzindo biogás (CH₄ + CO₂) e biofertilizante.", "Anaerobic breakdown of organic matter by microbial communities, producing biogas (CH₄ + CO₂) and biofertilizer."),
    bullets: [
      t("Resíduos da agroindústria, dejetos animais e lodo de ETE", "Agro-industrial waste, animal manure, and wastewater sludge"),
      t("Biogás para geração elétrica, térmica ou biometano", "Biogas for electricity, heat, or biomethane production"),
      t("Captura de metano e geração de créditos de carbono", "Methane capture and carbon credit generation"),
      t("Digestato como biofertilizante para economia circular", "Digestate as a biofertilizer for the circular economy"),
    ],
    products: [t("Biogás", "Biogas"), t("Biometano", "Biomethane"), t("Biofertilizante", "Biofertilizer"), t("Créditos de carbono", "Carbon credits")],
  },
] as const;
}

export default function TechPage() {
  const { t } = useLang();
  const techs = getTechs(t);
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl"
        >
          <img
            src={bgPlant}
            alt=""
            width={1536}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Tecnologias", "Technologies")}</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            <span className="text-gradient">{t("Rotas tecnológicas", "Technological pathways")}</span>{t(" para converter resíduos em energia e materiais avançados.", " for converting waste into energy and advanced materials.")}
          </h1>
          <p className="mt-5 text-muted-foreground">
            {t("Atuo no desenvolvimento, modelagem e otimização de três pilares centrais do saneamento energético: pirólise, gaseificação e biodigestão — combinando termoquímica, bioquímica e inteligência computacional.", "I develop, model, and optimize three core pillars of waste-to-energy solutions: pyrolysis, gasification, and anaerobic digestion — combining thermochemistry, biochemistry, and computational intelligence.")}
          </p>
        </div>

        <nav className="mt-10 flex flex-wrap gap-2">
          {techs.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-mono uppercase tracking-wider hover:border-primary/40 hover:text-primary transition"
            >
              {t.title}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-20">
          {techs.map((tech, idx) => (
            <article
              key={tech.id}
              id={tech.id}
              className="grid gap-10 lg:grid-cols-[auto_1fr] scroll-mt-24"
            >
              <div className="lg:w-72">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 text-primary border border-primary/30">
                  <tech.icon className="h-8 w-8" />
                </div>
                <div className="mt-5 font-mono text-xs text-primary uppercase tracking-widest">
                  0{idx + 1} · {tech.tag}
                </div>
                <h2 className="mt-2 font-display text-3xl font-semibold">{tech.title}</h2>
              </div>

              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-background p-8">
                <p className="text-muted-foreground leading-relaxed">{tech.summary}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {tech.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-border/60 pt-5">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {t("Produtos & Saídas", "Products & Outputs")}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tech.products.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-background p-10 sm:p-14">
          <div className="absolute inset-0 bg-hex opacity-50" />
          <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {t("Quer aplicar uma dessas rotas?", "Want to apply one of these pathways?")}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {t("Atuo desde estudos de viabilidade técnica e econômica até a modelagem, certificação de biochar e otimização operacional de plantas industriais.", "My work spans technical and economic feasibility studies, modeling, biochar certification, and operational optimization of industrial plants.")}
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90"
              >
                {t("Falar sobre o projeto", "Discuss your project")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
