import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Wind, Droplets, ArrowRight, CheckCircle2 } from "lucide-react";
import bgPlant from "@/assets/bg-plant.jpg";

export const Route = createFileRoute("/tecnologias")({
  head: () => ({
    meta: [
      { title: "Tecnologias — Pirólise, Gaseificação e Biodigestão" },
      { name: "description", content: "Tecnologias termoquímicas e bioquímicas para conversão de resíduos em energia: pirólise, gaseificação e biodigestão." },
      { property: "og:title", content: "Tecnologias — Conversão de Resíduos em Energia" },
      { property: "og:description", content: "Pirólise, gaseificação e biodigestão: rotas tecnológicas para descarbonização e economia circular." },
    ],
  }),
  component: TechPage,
});

const techs = [
  {
    id: "pirolise",
    icon: Flame,
    tag: "Termoquímica",
    title: "Pirólise",
    summary:
      "Decomposição térmica de materiais carbonáceos em ambiente livre de oxigênio, gerando biochar, bio-óleo e gás de síntese.",
    bullets: [
      "Tratamento de lodo de ETE, biomassa e resíduos têxteis",
      "Produção de biochar para uso agrícola e mercados de carbono",
      "Carbonos precursores para grafeno e materiais avançados",
      "Otimização operacional via lógica fuzzy e IA",
    ],
    products: ["Biochar", "Bio-óleo", "Gás de síntese", "Carbonos precursores"],
  },
  {
    id: "gaseificacao",
    icon: Wind,
    tag: "Termoquímica",
    title: "Gaseificação",
    summary:
      "Conversão parcialmente oxidativa de biomassa e resíduos sólidos em gás de síntese (syngas) rico em H₂ e CO, base para energia e hidrogênio verde.",
    bullets: [
      "Geração descentralizada para comunidades isoladas",
      "Rota para hidrogênio verde a partir de biomassa residual",
      "Aproveitamento energético de RSU e resíduos agroindustriais",
      "Integração com células a combustível e ciclos térmicos",
    ],
    products: ["Syngas", "Hidrogênio verde", "Eletricidade", "Calor de processo"],
  },
  {
    id: "biodigestao",
    icon: Droplets,
    tag: "Bioquímica",
    title: "Biodigestão",
    summary:
      "Degradação anaeróbia de matéria orgânica por consórcios microbianos, produzindo biogás (CH₄ + CO₂) e biofertilizante.",
    bullets: [
      "Resíduos da agroindústria, dejetos animais e lodo de ETE",
      "Biogás para geração elétrica, térmica ou biometano",
      "Captura de metano e geração de créditos de carbono",
      "Digestato como biofertilizante para economia circular",
    ],
    products: ["Biogás", "Biometano", "Biofertilizante", "Créditos de carbono"],
  },
] as const;

export default function TechPage() {
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
          <span className="text-xs font-mono uppercase tracking-widest text-primary">Tecnologias</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            <span className="text-gradient">Rotas tecnológicas</span> para converter resíduos em energia e materiais avançados.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Atuo no desenvolvimento, modelagem e otimização de três pilares centrais do
            saneamento energético: pirólise, gaseificação e biodigestão — combinando
            termoquímica, bioquímica e inteligência computacional.
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
          {techs.map((t, idx) => (
            <article
              key={t.id}
              id={t.id}
              className="grid gap-10 lg:grid-cols-[auto_1fr] scroll-mt-24"
            >
              <div className="lg:w-72">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 text-primary border border-primary/30">
                  <t.icon className="h-8 w-8" />
                </div>
                <div className="mt-5 font-mono text-xs text-primary uppercase tracking-widest">
                  0{idx + 1} · {t.tag}
                </div>
                <h2 className="mt-2 font-display text-3xl font-semibold">{t.title}</h2>
              </div>

              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-background p-8">
                <p className="text-muted-foreground leading-relaxed">{t.summary}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {t.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-border/60 pt-5">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Produtos & Saídas
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.products.map((p) => (
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
                Quer aplicar uma dessas rotas?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Atuo desde estudos de viabilidade técnica e econômica até a modelagem,
                certificação de biochar e otimização operacional de plantas industriais.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90"
              >
                Falar sobre o projeto <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
