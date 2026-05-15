import { createFileRoute, Link } from "@tanstack/react-router";
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
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Briefcase,
    title: "Consultoria Estratégica",
    text: "Diagnóstico tecnológico, roadmap de inovação e suporte a decisões em projetos de materiais avançados.",
    items: ["Mapeamento tecnológico", "Roadmap de P&D", "Análise de viabilidade técnico-econômica"],
  },
  {
    icon: FlaskConical,
    title: "Desenvolvimento de Processos",
    text: "Concepção e otimização de rotas para conversão de resíduos em carbonos avançados e grafeno.",
    items: ["Pirólise & ativação", "Síntese de materiais grafênicos", "Caracterização e validação"],
  },
  {
    icon: Workflow,
    title: "Projetos de Inovação",
    text: "Estruturação e execução de projetos de P&D com instituições de pesquisa e indústria.",
    items: ["Editais e financiamento", "Parcerias academia-indústria", "Gestão técnica de projetos"],
  },
  {
    icon: GraduationCap,
    title: "Educação & Treinamento",
    text: "Formação de equipes, cursos e mentorias em ciência de materiais, sustentabilidade e inovação.",
    items: ["Workshops corporativos", "Mentoria acadêmica", "Palestras e keynotes"],
  },
];

const steps = [
  { phase: "Fase 1 — Negócio", icon: Microscope, title: "Caracterização da Biomassa", text: "Análise físico-química da matéria-prima para definir a configuração ideal do reator e prever rendimentos." },
  { phase: "Fase 1 — Negócio", icon: FlaskRound, title: "Testes em Escala Piloto", text: "Validação prática dos rendimentos e identificação antecipada de gargalos operacionais antes da escala industrial." },
  { phase: "Fase 1 — Negócio", icon: FileCheck2, title: "Laudos Laboratoriais", text: "Certificação técnica e comercial dos produtos (biochar, bio-óleo, syngas) para garantir aceitação no mercado." },
  { phase: "Fase 1 — Negócio", icon: ClipboardCheck, title: "Parecer Técnico", text: "Interpretação especializada dos laudos para alinhar a produção às demandas reais dos compradores." },
  { phase: "Fase 2 — Estratégia", icon: Scale, title: "EVTE — Estudo de Viabilidade", text: "O coração do projeto: análise de CAPEX, OPEX e sensibilidade financeira para confirmar se o negócio é rentável." },
  { phase: "Fase 2 — Estratégia", icon: Target, title: "Plano de Negócios", text: "Estratégias detalhadas de mercado, operações e marketing baseadas no melhor cenário apontado pelo EVTE." },
  { phase: "Fase 3 — Tecnologia", icon: WorkflowIcon, title: "Projeto Básico de Engenharia", text: "Arquitetura preliminar, fluxogramas de processo e balanços de massa da planta industrial." },
  { phase: "Fase 3 — Tecnologia", icon: Cog, title: "Projeto Executivo", text: "Detalhamento final de manuais, automação e componentes para construção e comissionamento da unidade." },
];

const failures = [
  { icon: Truck, title: "Falha logística", text: "Plantas distantes da fonte de matéria-prima são fatais. O frete engole a margem e inviabiliza o OPEX antes do primeiro mês." },
  { icon: AlertTriangle, title: "Negócio sem EVTE", text: "Comprar reator antes de validar mercado e viabilidade econômica. Tecnologia não cria viabilidade — apenas executa um modelo que já faz sentido." },
  { icon: Flame, title: "Erros de engenharia básica", text: "Falta de controle de O₂, isolamento térmico deficiente, condensação ineficiente e instalações sem proteção contra explosão geram passivos diários." },
];

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-primary">Serviços</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
          Da ideia à <span className="text-gradient">implementação</span>.
        </h1>
        <p className="mt-5 text-muted-foreground">
          Atendimento personalizado para empresas, centros de pesquisa e startups que
          desenvolvem soluções com materiais de carbono e tecnologias sustentáveis.
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
          <span className="text-xs font-mono uppercase tracking-widest text-primary">Metodologia proprietária</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Do <span className="text-gradient">negócio</span> à engenharia — 8 passos para projetos que não fracassam.
          </h2>
          <p className="mt-5 text-muted-foreground">
            A maioria das plantas de pirólise, gaseificação e biodigestão fracassa antes do
            primeiro lote — não por falha tecnológica, mas por inversão de prioridades.
            Empreendedores compram reatores antes de validar mercado, logística e
            viabilidade econômica. Esta metodologia inverte a ordem:{" "}
            <strong className="text-foreground">primeiro o negócio, por último a tecnologia</strong>.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8 flex gap-4 items-start">
          <Quote className="h-8 w-8 shrink-0 text-primary" />
          <div>
            <p className="font-display text-xl sm:text-2xl leading-snug">
              “Tecnologia é meio, estratégia é direção. Quando essa ordem se inverte, o
              destino é sempre o mesmo: desperdício, frustração e uma lição cara sobre
              decisões mal fundamentadas.”
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
            <span className="text-xs font-mono uppercase tracking-widest text-destructive">Pontos críticos</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              Por que projetos <span className="text-destructive">fracassam</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              O fracasso raramente vem da tecnologia em si. Vem de erros estruturais
              evitáveis — quase sempre cometidos antes do primeiro parafuso ser apertado.
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
              <h3 className="font-display text-xl font-semibold">Por que seguir a metodologia?</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Antes de buscar orçamentos de equipamentos, o investidor deve validar se
                sua premissa de negócio é rentável e possui abastecimento logístico
                previsível.{" "}
                <strong className="text-foreground">Apenas com a aprovação de um EVTE sólido</strong>{" "}
                faz sentido mobilizar engenharia e capital. A metodologia transforma intuição
                em decisão — e protege o capital antes que ele vire ferro velho enferrujado.
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
