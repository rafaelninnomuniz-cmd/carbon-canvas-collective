import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Rafael Muniz" },
      { name: "description", content: "Trajetória de Rafael Muniz: engenheiro, pesquisador, consultor e educador em materiais avançados de carbono." },
      { property: "og:title", content: "Sobre — Rafael Muniz" },
      { property: "og:description", content: "Engenheiro e pesquisador atuando na fronteira entre sustentabilidade, ciência de materiais e inovação industrial." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-primary/15 blur-2xl" />
          <img src={portrait} alt="Retrato de Rafael Muniz" width={1024} height={1280} loading="lazy"
            className="relative rounded-2xl border border-border/60" />
        </div>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-primary">Sobre</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            Ciência aplicada a <span className="text-gradient">problemas reais</span>.
          </h1>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Sou engenheiro, consultor, pesquisador e educador. Minha trajetória se constrói no
              encontro entre engenharia, ciência de materiais e sustentabilidade — com foco em
              tecnologias disruptivas para a conversão de resíduos em materiais avançados.
            </p>
            <p>
              Trabalho com o desenvolvimento de processos para obtenção de carbonos precursores
              e materiais grafênicos a partir de fontes renováveis e correntes residuais,
              conectando ciência de bancada à viabilidade industrial.
            </p>
            <p>
              Atuo também como educador, contribuindo na formação de pesquisadores e engenheiros
              que constroem o próximo ciclo da economia de baixo carbono.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "10+", v: "anos em P&D" },
              { k: "Multi", v: "projetos industriais" },
              { k: "BR / Intl", v: "atuação acadêmica" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border/60 bg-card/50 p-5">
                <div className="font-display text-2xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold">Competências</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Síntese de Grafeno", "Carbonos Ativados", "Pirólise", "Caracterização de Materiais",
                "Economia Circular", "P&D Industrial", "Inovação", "Gestão de Projetos",
                "Docência", "Transferência de Tecnologia",
              ].map((t) => (
                <span key={t} className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
