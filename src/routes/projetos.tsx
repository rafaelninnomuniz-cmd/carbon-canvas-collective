import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Atom, Cog, Recycle, Zap, Handshake } from "lucide-react";
import bgProjetos from "@/assets/bg-projetos.jpg";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Rafael Muniz" },
      { name: "description", content: "Principais projetos em execução: grafeno a partir de resíduos têxteis, smart materials, pirólise de lodo de ETE e geradores híbridos UPC + BESS." },
      { property: "og:title", content: "Projetos — Portfólio em Execução" },
      { property: "og:description", content: "Grafeno, smart materials, Retransformar e UPC + BESS: projetos aplicados em escala industrial." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    n: "01",
    icon: Atom,
    tag: "Materiais Avançados",
    title: "Projeto Grafeno",
    subtitle: "Conversão de resíduos têxteis em carbonos precursores e grafeno.",
    text: "Desenvolvimento de rota tecnológica para escala de planta piloto a industrial de óxido de grafeno e derivados de carbono a partir de subprodutos têxteis. Inclui validação de funcionalidade e caracterização estrutural dos materiais obtidos.",
    bullets: [
      "Escalonamento de planta piloto para escala industrial",
      "Valorização de resíduos têxteis industriais",
      "Validação de funcionalidade e caracterização",
    ],
    org: "Projeto da TexGenera, da qual sou CTO, em parceria com o ISI Eletroquímica (Instituto Senai de Inovação em Eletroquímica).",
  },
  {
    n: "02",
    icon: Cog,
    tag: "Catálise Automotiva",
    title: "Projeto Smart Materials",
    subtitle: "Aplicação de carbono precursor em catalisadores automotivos.",
    text: "Aproveitamento de subprodutos têxteis para produção de suportes carbonáceos de alto desempenho aplicados a catalisadores automotivos, substituindo materiais convencionais por insumos de origem circular.",
    bullets: [
      "Suportes carbonáceos para catalisadores",
      "Substituição de insumos convencionais",
      "Cadeia circular têxtil → automotivo",
    ],
    org: "Projeto da TexGenera em parceria com o SENAI ISI Eletroquímica.",
  },
  {
    n: "03",
    icon: Recycle,
    tag: "Saneamento + Solo",
    title: "Projeto Retransformar",
    subtitle: "Pirólise de lodo de ETE para conversão em biochar agregado de nutrientes.",
    text: "Usina de pirólise em escala industrial para tratamento de lodo sanitário em Niterói (RJ), produzindo biochar enriquecido com nutrientes para recuperação de solos degradados. Projeto executado pela UFF (Universidade Federal Fluminense) através do LEI (Laboratório de Empreendimentos Inovadores).",
    bullets: [
      "Pirólise de lodo de ETE em escala industrial",
      "Biochar agregado de nutrientes",
      "Execução: UFF através do LEI",
    ],
  },
  {
    n: "04",
    icon: Zap,
    tag: "Energia + Data Centers",
    title: "Projeto UPC + BESS",
    subtitle: "Gerador híbrido multicombustível para aplicação conjunta com BESS em Data Centers Urbanos.",
    text: "Unidade de Potência Compacta (UPC) multicombustível integrada a sistemas de armazenamento por baterias (BESS), projetada para garantir confiabilidade, descarbonização e flexibilidade energética em Data Centers urbanos.",
    bullets: [
      "Geração híbrida modular",
      "Integração com armazenamento BESS",
      "Aplicação dedicada a Data Centers urbanos",
    ],
    org: "Projeto conjunto da empresa Insight Energy com a startup LightFy Energia.",
  },
];

function ProjectsPage() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${bgProjetos})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">Projetos</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            Principais projetos <span className="text-gradient">em execução</span>.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Uma seleção dos projetos atualmente em andamento no portfólio — há
            diversos outros em curso, em diferentes estágios de maturidade
            tecnológica, da bancada à escala industrial.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.n}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-7 transition hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                  <p.icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
              </div>
              <div className="mt-5 text-[11px] font-mono uppercase tracking-widest text-primary/80">
                {p.tag}
              </div>
              <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm font-medium text-foreground/90">{p.subtitle}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              {p.org && (
                <p className="mt-4 text-xs italic text-muted-foreground border-t border-border/40 pt-3">
                  {p.org}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-background p-8 sm:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                <Handshake className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  Quer conhecer os demais projetos — ou desenhar um novo em parceria?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Há um portfólio completo de iniciativas em diferentes estágios e
                  novas oportunidades de cooperação em P&D, escalonamento industrial
                  e desenvolvimento conjunto de tecnologias.
                </p>
              </div>
            </div>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
            >
              Vamos conversar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
