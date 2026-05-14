import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Atom, FlaskConical, GraduationCap, Leaf, Lightbulb, Recycle } from "lucide-react";
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
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hex opacity-60" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-radial)" }} />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Materiais Avançados de Carbono
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Transformando <span className="text-gradient">resíduos</span> em <span className="text-gradient">grafeno</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Engenheiro, consultor, pesquisador e educador. Atuo no desenvolvimento de tecnologias disruptivas para converter resíduos em carbonos precursores e materiais grafênicos de alto valor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/pesquisa" className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
                Conheça a pesquisa
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:border-primary/50 hover:text-primary transition">
                Vamos conversar
              </Link>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
            <img
              src={heroImg}
              alt="Estrutura hexagonal de grafeno em rede molecular"
              width={1600}
              height={1200}
              className="relative rounded-2xl border border-border/60 shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Atom, title: "Engenheiro", text: "Soluções de engenharia para processos de conversão de carbono." },
            { icon: Lightbulb, title: "Consultor", text: "Apoio estratégico a projetos de inovação e P&D industrial." },
            { icon: FlaskConical, title: "Pesquisador", text: "Investigação científica em síntese e caracterização de materiais." },
            { icon: GraduationCap, title: "Educador", text: "Formação de novos talentos em ciência de materiais e sustentabilidade." },
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
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Áreas de atuação</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              Da economia circular ao <span className="text-gradient">grafeno de alto valor</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Conecto resíduos industriais e biomassa a rotas tecnológicas que entregam materiais carbonáceos com performance avançada.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Recycle, title: "Conversão de Resíduos", text: "Rotas de pirólise, ativação e funcionalização para transformar resíduos em insumos nobres." },
              { icon: Atom, title: "Grafeno & Derivados", text: "Síntese, caracterização e aplicação de materiais grafênicos em compósitos e energia." },
              { icon: Leaf, title: "Sustentabilidade Industrial", text: "Inovação aplicada com foco em ESG, descarbonização e cadeia de valor circular." },
            ].map((f) => (
              <article key={f.title} className="rounded-2xl border border-border/60 bg-gradient-to-b from-card to-background p-8">
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

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-background p-10 sm:p-16">
          <div className="absolute inset-0 bg-hex opacity-50" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Tem um desafio em materiais de carbono?
              </h2>
              <p className="mt-3 text-muted-foreground">
                De PoC a escala industrial — vamos desenhar a rota tecnológica certa para sua aplicação.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">
                Iniciar conversa <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
