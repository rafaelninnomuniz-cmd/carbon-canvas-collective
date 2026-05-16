import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beaker, CircuitBoard, Layers, Microscope, Sparkles, Zap, Rocket } from "lucide-react";
import bgLab from "@/assets/bg-lab.jpg";

export const Route = createFileRoute("/pesquisa")({
  head: () => ({
    meta: [
      { title: "Pesquisa — Rafael Muniz" },
      { name: "description", content: "Linhas de pesquisa em conversão de resíduos, síntese de grafeno e desenvolvimento de carbonos precursores." },
      { property: "og:title", content: "Pesquisa — Materiais Avançados de Carbono" },
      { property: "og:description", content: "Síntese e caracterização de materiais grafênicos e carbonos avançados a partir de resíduos." },
    ],
  }),
  component: ResearchPage,
});

const lines = [
  { icon: Layers, title: "Síntese de Grafeno", text: "Rotas escaláveis de produção de óxido de grafeno e grafeno reduzido a partir de precursores carbonáceos." },
  { icon: Beaker, title: "Carbonos Precursores", text: "Desenvolvimento de carbonos ativados e funcionalizados para aplicações em adsorção, catálise e energia." },
  { icon: Sparkles, title: "Valorização de Resíduos", text: "Transformação de biomassa, resíduos agroindustriais e poliméricos em materiais de alto valor agregado." },
  { icon: Microscope, title: "Caracterização Avançada", text: "Análise estrutural, morfológica e eletroquímica de materiais carbonáceos." },
  { icon: Zap, title: "Energia & Armazenamento", text: "Aplicação em supercapacitores, eletrodos e dispositivos de conversão energética." },
  { icon: CircuitBoard, title: "Compósitos Funcionais", text: "Integração de grafeno em matrizes poliméricas e cimentícias para performance avançada." },
];

function ResearchPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img
          src={bgLab}
          alt=""
          width={1536}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>
      <div className="max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-primary">Pesquisa</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
          Linhas de investigação na fronteira do <span className="text-gradient">carbono</span>.
        </h1>
        <p className="mt-5 text-muted-foreground">
          Pesquisa orientada à aplicação: do entendimento fundamental dos materiais à
          construção de rotas tecnológicas viáveis e sustentáveis.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {lines.map((l) => (
          <article key={l.title} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-7 transition hover:border-primary/40">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
            <l.icon className="h-7 w-7 text-primary" />
            <h3 className="mt-5 font-display text-lg font-semibold">{l.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-border/60 bg-gradient-to-br from-card to-background p-10">
        <h2 className="font-display text-2xl font-semibold">Abordagem</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3 text-sm">
          {[
            { n: "01", t: "Identificar", d: "Mapear correntes de resíduos e oportunidades de conversão." },
            { n: "02", t: "Desenvolver", d: "Sintetizar e otimizar rotas em escala laboratorial e piloto." },
            { n: "03", t: "Escalar", d: "Conectar resultados à viabilidade técnica e econômica industrial." },
          ].map((s) => (
            <div key={s.n}>
              <div className="font-mono text-xs text-primary">{s.n}</div>
              <div className="mt-2 font-display text-lg font-semibold">{s.t}</div>
              <p className="mt-1 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-background p-8 sm:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary border border-primary/30">
              <Rocket className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">Pronto para escalar sua pesquisa para fora da bancada?</h3>
              <p className="mt-2 text-muted-foreground">
                Transformo resultados de laboratório em rotas industriais viáveis — da prova
                de conceito ao piloto, com modelagem técnica, EVTE e estratégia tecnológica.
              </p>
            </div>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
          >
            Vamos escalar juntos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
