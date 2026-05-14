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
