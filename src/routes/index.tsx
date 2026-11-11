import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Atom, FlaskConical, GraduationCap, Leaf, Lightbulb, Recycle, Rocket } from "lucide-react";
import heroImg from "@/assets/hero-graphene.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafael Muniz — Engenheiro, Pesquisador e Consultor" },
      { name: "description", content: "Atuação em tecnologias disruptivas e projetos inovadores para conversão de resíduos em materiais avançados como carbonos precursores e grafeno." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        {/* Background graphene image with blur */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover scale-110 blur-2xl opacity-40"
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-hex opacity-30" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-radial)" }} />

        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-28 text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {t("Consultoria · Pesquisa · Inovação", "Consulting · Research · Innovation")}
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              {t("Engenharia Disruptiva,", "Disruptive Engineering,")} <span className="text-gradient">{t("Tecnologias Sustentáveis", "Sustainable Technologies")}</span>.
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("Engenheiro Doutor em Termoquímica, especialista em saneamento energético. Transformo despesas (resíduos) em receitas (materiais avançados com alto valor agregado).", "Engineer with a PhD in Thermochemistry, specializing in waste-to-energy solutions. I turn costs (waste) into revenue (high-value advanced materials).")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/sobre" className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
                {t("Conheça Mais", "Learn More")}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 backdrop-blur px-5 py-3 text-sm font-medium hover:border-primary/50 hover:text-primary transition">
                {t("Vamos conversar", "Let's Talk")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Atom, title: t("Engenheiro", "Engineer"), text: t("Soluções de engenharia para processos de conversão de carbono.", "Engineering solutions for carbon conversion processes.") },
            { icon: Lightbulb, title: t("Consultor", "Consultant"), text: t("Apoio estratégico a projetos de inovação e P&D industrial.", "Strategic support for innovation and industrial R&D projects.") },
            { icon: FlaskConical, title: t("Pesquisador", "Researcher"), text: t("Investigação científica em síntese e caracterização de materiais.", "Scientific research into materials synthesis and characterization.") },
            { icon: GraduationCap, title: t("Educador", "Educator"), text: t("Formação de novos talentos em ciência de materiais e sustentabilidade.", "Developing new talent in materials science and sustainability.") },
          ].map((p) => (
            <div key={p.title} className="group relative rounded-xl border border-border/60 bg-card/50 p-6 transition hover:border-primary/40 hover:bg-card">
              <p.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="relative overflow-hidden">
        {/* Background graphene image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Áreas de atuação", "Areas of Expertise")}</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              {t("Da economia circular ao", "From the circular economy to")} <span className="text-gradient">{t("grafeno de alto valor", "high-value graphene")}</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("Conecto resíduos industriais e biomassa a rotas tecnológicas que entregam materiais carbonáceos com performance avançada.", "I connect industrial waste and biomass with technological pathways that deliver high-performance carbon materials.")}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Recycle, title: t("Conversão de Resíduos", "Waste Conversion"), text: t("Rotas de pirólise, ativação e funcionalização para transformar resíduos em insumos nobres.", "Pyrolysis, activation, and functionalization pathways that turn waste into high-value feedstocks.") },
              { icon: Atom, title: t("Grafeno & Derivados", "Graphene & Derivatives"), text: t("Síntese, caracterização e aplicação de materiais grafênicos em compósitos e energia.", "Synthesis, characterization, and application of graphene-based materials in composites and energy.") },
              { icon: Leaf, title: t("Sustentabilidade Industrial", "Industrial Sustainability"), text: t("Inovação aplicada com foco em ESG, descarbonização e cadeia de valor circular.", "Applied innovation focused on ESG, decarbonization, and circular value chains.") },
            ].map((f) => (
              <article key={f.title} className="rounded-2xl border border-border/60 bg-gradient-to-b from-card/90 to-background/90 backdrop-blur-sm p-8">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS EM DESTAQUE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Projetos em execução", "Ongoing Projects")}</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              {t("Tecnologia aplicada em", "Technology applied at")} <span className="text-gradient">{t("escala real", "real-world scale")}</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("Do grafeno a partir de resíduos têxteis ao tratamento térmico de lodo de ETE, passando por catalisadores automotivos e geração híbrida para Data Centers urbanos — um portfólio de projetos vivos, conectando ciência, indústria e descarbonização.", "From graphene made from textile waste to the thermal treatment of wastewater sludge, automotive catalysts, and hybrid power generation for urban data centers — a portfolio of active projects connecting science, industry, and decarbonization.")}
            </p>
            <Link
              to="/projetos"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90"
            >
              <Rocket className="h-4 w-4" /> {t("Conheça os projetos", "Explore the Projects")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              { t: "Projeto Grafeno", d: t("Resíduos têxteis → carbono precursor → grafeno.", "Textile waste → carbon precursor → graphene.") },
              { t: "Smart Materials", d: t("Carbonos para catalisadores automotivos.", "Carbon materials for automotive catalysts.") },
              { t: "Retransformar", d: t("Pirólise de lodo de ETE em biochar nutricional.", "Pyrolysis of wastewater sludge into nutrient-rich biochar.") },
              { t: "UPC + BESS", d: t("Geração híbrida multicombustível para Data Centers.", "Hybrid multi-fuel power generation for data centers.") },
            ].map((p) => (
              <li key={p.t} className="rounded-xl border border-border/60 bg-card/50 p-5 transition hover:border-primary/40">
                <div className="text-[11px] font-mono uppercase tracking-widest text-primary">{t("Em execução", "In Progress")}</div>
                <div className="mt-1 font-display text-lg font-semibold">{p.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-background p-10 sm:p-16">
          <div className="absolute inset-0 bg-hex opacity-50" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {t("Tem um desafio para resolver?", "Have a Challenge to Solve?")}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {t("Do conceito para a escala industrial — vamos desenhar a rota tecnológica certa para sua aplicação.", "From concept to industrial scale — let's design the right technological pathway for your application.")}
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">
                {t("Iniciar conversa", "Start a Conversation")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
