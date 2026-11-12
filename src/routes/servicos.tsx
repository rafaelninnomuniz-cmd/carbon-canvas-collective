import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import {
  ArrowRight,
  Briefcase,
  FlaskConical,
  GraduationCap,
  Workflow,
  Microscope,
  FlaskRound,
  FileCheck2,
  ClipboardCheck,
  Scale,
  Target,
  Workflow as WorkflowIcon,
  Cog,
  AlertTriangle,
  Truck,
  Flame,
  ShieldAlert,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Rafael Muniz" },
      { name: "description", content: "Consultoria em P&D, desenvolvimento de processos, análise de viabilidade e formação em materiais avançados de carbono." },
      { property: "og:title", content: "Serviços — Consultoria & P&D" },
      { property: "og:description", content: "Apoio estratégico e técnico em projetos de inovação com materiais carbonáceos e grafeno." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});




function ServicesPage() {
  const { t } = useLang();
  const services = [
    {
      icon: Briefcase,
      title: t("Consultoria Estratégica", "Strategic Consulting"),
      text: t("Diagnóstico tecnológico, roadmap de inovação e suporte a decisões em projetos de materiais avançados.", "Technology assessment, innovation roadmaps, and decision support for advanced materials projects."),
      items: [t("Mapeamento tecnológico", "Technology mapping"), t("Roadmap de P&D", "R&D roadmap"), t("Análise de viabilidade técnico-econômica", "Techno-economic feasibility analysis")],
    },
    {
      icon: FlaskConical,
      title: t("Desenvolvimento de Processos", "Process Development"),
      text: t("Concepção e otimização de rotas para conversão de resíduos em carbonos avançados e grafeno.", "Design and optimization of pathways for converting waste into advanced carbon materials and graphene."),
      items: [t("Pirólise & ativação", "Pyrolysis & activation"), t("Síntese de materiais grafênicos", "Graphene-based materials synthesis"), t("Caracterização e validação", "Characterization and validation")],
    },
    {
      icon: Workflow,
      title: t("Projetos de Inovação", "Innovation Projects"),
      text: t("Estruturação e execução de projetos de P&D com instituições de pesquisa e indústria.", "Planning and delivery of R&D projects with research institutions and industry."),
      items: [t("Editais e financiamento", "Funding calls and financing"), t("Parcerias academia-indústria", "Academia–industry partnerships"), t("Gestão técnica de projetos", "Technical project management")],
    },
    {
      icon: GraduationCap,
      title: t("Educação & Treinamento", "Education & Training"),
      text: t("Formação de equipes, cursos e mentorias em ciência de materiais, sustentabilidade e inovação.", "Team training, courses, and mentoring in materials science, sustainability, and innovation."),
      items: [t("Workshops corporativos", "Corporate workshops"), t("Mentoria acadêmica", "Academic mentoring"), t("Palestras e keynotes", "Talks and keynotes")],
    },
  ];
  const steps = [
    { phase: t("Fase 1 — Negócio", "Phase 1 — Business"), icon: Microscope, title: t("Caracterização da Biomassa", "Biomass Characterization"), text: t("Análise físico-química da matéria-prima para definir a configuração ideal do reator e prever rendimentos.", "Physicochemical analysis of the feedstock to determine the optimal reactor configuration and predict yields.") },
    { phase: t("Fase 1 — Negócio", "Phase 1 — Business"), icon: FlaskRound, title: t("Testes em Escala Piloto", "Pilot-Scale Testing"), text: t("Validação prática dos rendimentos e identificação antecipada de gargalos operacionais antes da escala industrial.", "Practical validation of yields and early identification of operational bottlenecks before industrial scale-up.") },
    { phase: t("Fase 1 — Negócio", "Phase 1 — Business"), icon: FileCheck2, title: t("Laudos Laboratoriais", "Laboratory Reports"), text: t("Certificação técnica e comercial dos produtos (biochar, bio-óleo, syngas) para garantir aceitação no mercado.", "Technical and commercial certification of products (biochar, bio-oil, syngas) to ensure market acceptance.") },
    { phase: t("Fase 1 — Negócio", "Phase 1 — Business"), icon: ClipboardCheck, title: t("Parecer Técnico", "Technical Assessment"), text: t("Interpretação especializada dos laudos para alinhar a produção às demandas reais dos compradores.", "Expert interpretation of laboratory reports to align production with buyers' actual requirements.") },
    { phase: t("Fase 2 — Estratégia", "Phase 2 — Strategy"), icon: Scale, title: t("EVTE — Estudo de Viabilidade", "TEFS — Feasibility Study"), text: t("O coração do projeto: análise de CAPEX, OPEX e sensibilidade financeira para confirmar se o negócio é rentável.", "The heart of the project: CAPEX, OPEX, and financial sensitivity analysis to confirm whether the business is profitable.") },
    { phase: t("Fase 2 — Estratégia", "Phase 2 — Strategy"), icon: Target, title: t("Plano de Negócios", "Business Plan"), text: t("Estratégias detalhadas de mercado, operações e marketing baseadas no melhor cenário apontado pelo EVTE.", "Detailed market, operations, and marketing strategies based on the best scenario identified by the feasibility study.") },
    { phase: t("Fase 3 — Tecnologia", "Phase 3 — Technology"), icon: WorkflowIcon, title: t("Projeto Básico de Engenharia", "Basic Engineering Design"), text: t("Arquitetura preliminar, fluxogramas de processo e balanços de massa da planta industrial.", "Preliminary architecture, process flow diagrams, and mass balances for the industrial plant.") },
    { phase: t("Fase 3 — Tecnologia", "Phase 3 — Technology"), icon: Cog, title: t("Projeto Executivo", "Detailed Engineering Design"), text: t("Detalhamento final de manuais, automação e componentes para construção e comissionamento da unidade.", "Final detailing of manuals, automation, and components for construction and commissioning of the plant.") },
  ];
  const failures = [
    { icon: Truck, title: t("Falha logística", "Logistics failure"), text: t("Plantas distantes da fonte de matéria-prima são fatais. O frete engole a margem e inviabiliza o OPEX antes do primeiro mês.", "Plants far from the feedstock source are fatal. Freight eats the margin and makes OPEX unviable before the first month.") },
    { icon: AlertTriangle, title: t("Negócio sem EVTE", "Business without a feasibility study"), text: t("Comprar reator antes de validar mercado e viabilidade econômica. Tecnologia não cria viabilidade — apenas executa um modelo que já faz sentido.", "Buying a reactor before validating the market and economic feasibility. Technology does not create viability — it only executes a model that already makes sense.") },
    { icon: Flame, title: t("Erros de engenharia básica", "Basic engineering errors"), text: t("Falta de controle de O₂, isolamento térmico deficiente, condensação ineficiente e instalações sem proteção contra explosão geram passivos diários.", "Lack of O₂ control, poor thermal insulation, inefficient condensation, and facilities without explosion protection create daily liabilities.") },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Serviços", "Services")}</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
          {t("Da ideia à", "From idea to")} <span className="text-gradient">{t("implementação", "implementation")}</span>.
        </h1>
        <p className="mt-5 text-muted-foreground">
          {t("Desenvolvemos soluções sob medida para empresas, indústrias, centros de pesquisa e startups que desejam integrar gestão sustentável de resíduos, geração de energia e inovação tecnológica em um modelo eficiente e responsável.", "We develop tailored solutions for companies, industries, research centers, and startups seeking to integrate sustainable waste management, energy generation, and technological innovation into an efficient, responsible model.")}
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border/60 bg-card/50 p-8 transition hover:border-primary/40">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Metodologia 8 Passos ===== */}
      <div className="mt-24">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Metodologia proprietária", "Proprietary methodology")}</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            {t("Do", "From")} <span className="text-gradient">{t("negócio", "business")}</span> {t("à engenharia — 8 passos para projetos que não fracassam.", "to engineering — 8 steps for projects that don't fail.")}
          </h2>
          <p className="mt-5 text-muted-foreground">
            {t("A maioria das plantas de pirólise, gaseificação e biodigestão fracassa antes do primeiro lote — não por falha tecnológica, mas por inversão de prioridades. Empreendedores compram reatores antes de validar mercado, logística e viabilidade econômica. Esta metodologia inverte a ordem:", "Most pyrolysis, gasification, and anaerobic digestion plants fail before the first batch — not because of technology, but because priorities are reversed. Entrepreneurs buy reactors before validating the market, logistics, and economic feasibility. This methodology reverses the order:")}{" "}
            <strong className="text-foreground">{t("primeiro o negócio, por último a tecnologia", "business first, technology last")}</strong>.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8 flex gap-4 items-start">
          <Quote className="h-8 w-8 shrink-0 text-primary" />
          <div>
            <p className="font-display text-xl sm:text-2xl leading-snug">
              {t("“Tecnologia é meio, estratégia é direção. Quando essa ordem se inverte, o destino é sempre o mesmo: desperdício, frustração e uma lição cara sobre decisões mal fundamentadas.”", "“Technology is the means; strategy is the direction. When that order is reversed, the outcome is always the same: waste, frustration, and an expensive lesson in poorly grounded decisions.”")}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">— Rafael Ninno Muniz, PhD</p>
          </div>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="group relative rounded-2xl border border-border/60 bg-card/50 p-7 transition hover:border-primary/40">
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <span className="font-display text-3xl font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-2 grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-primary/80">{s.phase}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-destructive">{t("Pontos críticos", "Critical issues")}</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              {t("Por que projetos", "Why projects")} <span className="text-destructive">{t("fracassam", "fail")}</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              {t("O fracasso raramente vem da tecnologia em si. Vem de erros estruturais evitáveis — quase sempre cometidos antes do primeiro parafuso ser apertado.", "Failure rarely comes from the technology itself. It comes from avoidable structural mistakes — almost always made before the first bolt is tightened.")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {failures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-destructive/30 bg-destructive/5 p-7">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-destructive/15 text-destructive">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border/60 bg-card/40 p-8 flex items-start gap-4">
            <ShieldAlert className="h-7 w-7 shrink-0 text-primary" />
            <div>
              <h3 className="font-display text-xl font-semibold">{t("Por que seguir a metodologia?", "Why follow the methodology?")}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {t("Antes de buscar orçamentos de equipamentos, o investidor deve validar se sua premissa de negócio é rentável e possui abastecimento logístico previsível.", "Before seeking equipment quotes, investors must validate that their business premise is profitable and has a predictable feedstock supply.")}{" "}
                <strong className="text-foreground">{t("Apenas com a aprovação de um EVTE sólido", "Only after a solid feasibility study is approved")}</strong>{" "}
                {t("faz sentido mobilizar engenharia e capital. A metodologia transforma intuição em decisão — e protege o capital antes que ele vire ferro velho enferrujado.", "does it make sense to commit engineering and capital. The methodology turns intuition into decisions — and protects capital before it becomes rusty scrap metal.")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-card/40 p-8">
        <div>
          <h3 className="font-display text-xl font-semibold">Vamos construir algo juntos?</h3>
          <p className="mt-1 text-sm text-muted-foreground">Conte sobre o seu desafio — respondo em até 48h úteis.</p>
        </div>
        <Link to="/contato" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
          Falar com Rafael <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
