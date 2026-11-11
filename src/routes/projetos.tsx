import { useLang } from "@/lib/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Atom, Cog, Recycle, Zap, Handshake, Youtube } from "lucide-react";
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



function ProjectsPage() {
  const { t } = useLang();
  const projects = [
    {
      n: "01",
      icon: Atom,
      tag: t("Materiais Avançados", "Advanced Materials"),
      title: t("Projeto Grafeno", "Graphene Project"),
      subtitle: t("Conversão de resíduos têxteis em carbonos precursores e grafeno.", "Converting textile waste into carbon precursors and graphene."),
      text: t("Desenvolvimento de rota tecnológica para escala de planta piloto a industrial de óxido de grafeno e derivados de carbono a partir de subprodutos têxteis. Inclui validação de funcionalidade e caracterização estrutural dos materiais obtidos.", "Developing a technological pathway from pilot plant to industrial-scale production of graphene oxide and carbon derivatives from textile by-products. Includes functional validation and structural characterization of the resulting materials."),
      bullets: [
        t("Escalonamento de planta piloto para escala industrial", "Scaling from pilot plant to industrial production"),
        t("Valorização de resíduos têxteis industriais", "Valorization of industrial textile waste"),
        t("Validação de funcionalidade e caracterização", "Functional validation and characterization"),
      ],
      org: t("Projeto da TexGenera, da qual sou CTO, em parceria com o ISI Eletroquímica (Instituto Senai de Inovação em Eletroquímica).", "A TexGenera project, where I serve as CTO, in partnership with ISI Eletroquímica (Instituto Senai de Inovação em Eletroquímica)."),
    },
    {
      n: "02",
      icon: Cog,
      tag: t("Catálise Automotiva", "Automotive Catalysis"),
      title: t("Projeto Smart Materials", "Smart Materials Project"),
      subtitle: t("Aplicação de carbono precursor em catalisadores automotivos.", "Applying carbon precursors in automotive catalysts."),
      text: t("Aproveitamento de subprodutos têxteis para produção de suportes carbonáceos de alto desempenho aplicados a catalisadores automotivos, substituindo materiais convencionais por insumos de origem circular.", "Using textile by-products to produce high-performance carbon supports for automotive catalysts, replacing conventional materials with circular inputs."),
      bullets: [
        t("Suportes carbonáceos para catalisadores", "Carbon supports for catalysts"),
        t("Substituição de insumos convencionais", "Replacing conventional inputs"),
        t("Cadeia circular têxtil → automotivo", "Circular textile-to-automotive value chain"),
      ],
      org: t("Projeto da TexGenera em parceria com o SENAI ISI Eletroquímica.", "A TexGenera project in partnership with SENAI ISI Eletroquímica."),
    },
    {
      n: "03",
      icon: Recycle,
      tag: t("Saneamento + Solo", "Sanitation + Soil"),
      title: t("Projeto Retransformar", "Retransformar Project"),
      subtitle: t("Pirólise de lodo de ETE para conversão em biochar agregado de nutrientes.", "Pyrolysis of wastewater treatment sludge to produce nutrient-enriched biochar."),
      text: t("Usina de pirólise em escala industrial para tratamento de lodo sanitário em Niterói (RJ), produzindo biochar enriquecido com nutrientes para recuperação de solos degradados. Projeto executado pela UFF (Universidade Federal Fluminense) através do LEI (Laboratório de Empreendimentos Inovadores).", "An industrial-scale pyrolysis plant for treating sewage sludge in Niterói (RJ), producing nutrient-enriched biochar to restore degraded soils. Implemented by UFF (Universidade Federal Fluminense) through LEI (Laboratório de Empreendimentos Inovadores)."),
      bullets: [
        t("Pirólise de lodo de ETE em escala industrial", "Industrial-scale pyrolysis of wastewater treatment sludge"),
        t("Biochar agregado de nutrientes", "Nutrient-enriched biochar"),
        t("Execução: UFF através do LEI", "Implementation: UFF through LEI"),
      ],
    },
    {
      n: "04",
      icon: Zap,
      tag: t("Energia + Data Centers", "Energy + Data Centers"),
      title: t("Projeto UPC + BESS", "UPC + BESS Project"),
      subtitle: t("Gerador híbrido multicombustível para aplicação conjunta com BESS em Data Centers Urbanos.", "A multi-fuel hybrid generator for use with BESS in urban data centers."),
      text: t("Unidade de Potência Compacta (UPC) multicombustível integrada a sistemas de armazenamento por baterias (BESS), projetada para garantir confiabilidade, descarbonização e flexibilidade energética em Data Centers urbanos.", "A multi-fuel Compact Power Unit (UPC) integrated with battery energy storage systems (BESS), designed to ensure reliability, decarbonization, and energy flexibility in urban data centers."),
      bullets: [
        t("Geração híbrida modular", "Modular hybrid generation"),
        t("Integração com armazenamento BESS", "Integration with BESS storage"),
        t("Aplicação dedicada a Data Centers urbanos", "Dedicated application for urban data centers"),
      ],
      org: t("Projeto conjunto da empresa Insight Energy com a startup LightFy Energia.", "A joint project by Insight Energy and the startup LightFy Energia."),
    },
  ];
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
          <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Projetos", "Projects")}</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            {t("Principais projetos", "Key projects")} <span className="text-gradient">{t("em execução", "underway")}</span>.
          </h1>
          <p className="mt-5 text-muted-foreground">
            {t("Uma seleção dos projetos atualmente em andamento no portfólio — há diversos outros em curso, em diferentes estágios de maturidade tecnológica, da bancada à escala industrial.", "A selection of projects currently underway in the portfolio — many others are in progress at different stages of technological maturity, from the laboratory to industrial scale.")}
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

        <div className="mt-20">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Em vídeo", "On video")}</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              {t("Os projetos", "Projects")} <span className="text-gradient">{t("em movimento", "in action")}</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("Conteúdos do canal mostrando bastidores, aplicações e os avanços tecnológicos por trás dos projetos em execução.", "Videos from the channel showcasing behind-the-scenes work, applications, and technological advances behind ongoing projects.")}
            </p>
            <a
              href="https://www.youtube.com/@ninnomuniz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition"
            >
              <Youtube className="h-4 w-4" />
              {t("Visitar canal @ninnomuniz", "Visit the @ninnomuniz channel")}
            </a>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              {
                id: "DlPOobvVL-0",
                title: t("Saneamento energético e biochar", "Energy recovery from wastewater and biochar"),
                desc: t("Como o lodo de ETE deixa de ser passivo ambiental e vira insumo agronômico via pirólise — base do Projeto Retransformar.", "How wastewater treatment sludge becomes an agricultural input rather than an environmental liability through pyrolysis — the foundation of the Retransformar Project."),
                short: false,
              },
              {
                id: "wl2DjdbPV5A",
                title: t("Tecnologias termoquímicas em ação", "Thermochemical technologies in action"),
                desc: t("Visão prática sobre rotas termoquímicas aplicadas ao tratamento de resíduos e geração de materiais carbonáceos de valor agregado.", "A practical look at thermochemical pathways for waste treatment and the production of value-added carbon materials."),
                short: false,
              },
              {
                id: "dDKnNfrhw_Q",
                title: t("Gás de Síntese de Pirólise", "Pyrolysis Syngas"),
                desc: t("Veja o gás gerado pela pirólise da madeira em ação.", "See the gas produced by wood pyrolysis in action."),
                short: true,
              },
              {
                id: "hHA5WNyTAOo",
                title: t("Energia, IA e descarbonização", "Energy, AI, and decarbonization"),
                desc: t("Recorte direto sobre a integração entre tecnologias energéticas, inteligência artificial e a transição de baixo carbono.", "A focused look at the integration of energy technologies, artificial intelligence, and the low-carbon transition."),
                short: true,
              },
            ].map((v) => (
              <article
                key={v.id}
                className="rounded-2xl border border-border/60 bg-card/50 overflow-hidden"
              >
                <div className={v.short ? "relative w-full mx-auto" : "relative w-full"} style={v.short ? { aspectRatio: "9 / 16", maxWidth: "320px" } : { aspectRatio: "16 / 9" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  <a
                    href={`https://youtu.be/${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    {t("Assistir no YouTube", "Watch on YouTube")} <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-background p-8 sm:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                <Handshake className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  {t("Quer conhecer os demais projetos — ou desenhar um novo em parceria?", "Want to explore the other projects — or develop a new one together?")}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {t("Há um portfólio completo de iniciativas em diferentes estágios e novas oportunidades de cooperação em P&D, escalonamento industrial e desenvolvimento conjunto de tecnologias.", "There is a full portfolio of initiatives at different stages, with new opportunities for cooperation in R&D, industrial scale-up, and joint technology development.")}
                </p>
              </div>
            </div>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
            >
              {t("Vamos conversar", "Let’s talk")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
