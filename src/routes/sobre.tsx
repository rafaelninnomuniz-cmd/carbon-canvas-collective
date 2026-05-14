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
            Engenharia disruptiva a serviço da <span className="text-gradient">descarbonização</span>.
          </h1>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Sou <strong className="text-foreground">Rafael Ninno Muniz</strong> — engenheiro,
              pesquisador, consultor e educador. Pós-doutor em Engenharia de Produção e Sistemas
              Computacionais (UFF), Doutor em Engenharia Elétrica com ênfase em planejamento
              energético e sistemas inteligentes (UFPA), Mestre em Fontes Renováveis de Energia
              e Bacharel em Engenharia Elétrica.
            </p>
            <p>
              Atuo na fronteira entre <strong className="text-foreground">saneamento energético</strong>,
              tecnologias termoquímicas (pirólise e gaseificação) e bioquímicas (biodigestão) para
              o tratamento de resíduos com aproveitamento energético — transformando lodo de ETE,
              biomassa e resíduos têxteis em biochar, syngas, biogás e carbonos precursores de
              alto valor agregado, incluindo grafeno.
            </p>
            <p>
              Lidero iniciativas de PD&I para descarbonização da matriz energética como
              <strong className="text-foreground"> CTO da TexGenera</strong> (regeneração de têxteis em grafeno),
              <strong className="text-foreground"> Diretor de Tecnologias na LightFy Energia</strong>,
              <strong className="text-foreground"> CEO da E-Fuzzy</strong> (sistemas inteligentes para
              descarbonização industrial) e pesquisador colaborador do
              <strong className="text-foreground"> LEI/UFF</strong>, integrando ciência de bancada,
              modelagem fuzzy, IA e viabilidade industrial.
            </p>
            <p>
              Como educador, contribuo na formação de engenheiros e pesquisadores que constroem
              o próximo ciclo da economia de baixo carbono.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Pós-Dr", v: "UFF · UFPA" },
              { k: "53", v: "publicações científicas" },
              { k: "13.7k+", v: "leituras no ResearchGate" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border/60 bg-card/50 p-5">
                <div className="font-display text-2xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold">Formação Acadêmica</h2>
            <ul className="mt-4 space-y-4 text-sm">
              {[
                { t: "Pós-Doutorado em Eng. de Produção e Sistemas Computacionais", i: "Universidade Federal Fluminense (UFF)", d: "Otimização de usinas de pirólise via lógica fuzzy" },
                { t: "Doutorado em Engenharia Elétrica", i: "Universidade Federal do Pará (UFPA)", d: "Indicadores de sustentabilidade energética e sistemas inteligentes" },
                { t: "Mestrado em Engenharia Elétrica — Fontes Renováveis", i: "UFPA", d: "Soluções sustentáveis para sistemas isolados da Amazônia" },
                { t: "Bacharel em Engenharia Elétrica — Sistemas de Energia", i: "UFPA", d: "Gaseificação de biomassa residual em comunidades isoladas" },
              ].map((f) => (
                <li key={f.t} className="rounded-lg border border-border/60 bg-card/40 p-4">
                  <div className="font-display font-semibold text-foreground">{f.t}</div>
                  <div className="mt-1 text-xs font-mono text-primary">{f.i}</div>
                  <div className="mt-1 text-muted-foreground">{f.d}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold">Competências</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Pirólise", "Gaseificação", "Biodigestão", "Saneamento Energético",
                "Biochar & Carbonos Precursores", "Síntese de Grafeno", "Mercados de Carbono",
                "Lógica Fuzzy", "Machine Learning", "Modelagem de Sistemas Energéticos",
                "P&D Industrial", "Gestão de Projetos", "Docência", "Transferência de Tecnologia",
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
