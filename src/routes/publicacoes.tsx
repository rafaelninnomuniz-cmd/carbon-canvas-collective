import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, FileText, BookOpen, Sparkles, GraduationCap, Handshake, ArrowRight } from "lucide-react";
import bgLibrary from "@/assets/bg-library.jpg";

export const Route = createFileRoute("/publicacoes")({
  head: () => ({
    meta: [
      { title: "Publicações — Rafael Ninno Muniz" },
      { name: "description", content: "Publicações científicas de Rafael Ninno Muniz em energia sustentável, tratamento térmico de resíduos, pirólise, biomassa e sistemas inteligentes." },
      { property: "og:title", content: "Publicações — Rafael Ninno Muniz" },
      { property: "og:description", content: "Artigos, teses e capítulos integrados ao perfil ResearchGate (70+ publicações, 13.7k+ leituras)." },
    ],
  }),
  component: PublicationsPage,
});

type Pub = {
  title: string;
  venue?: string;
  year: string;
  type: "Artigo" | "Tese" | "Dissertação" | "Capítulo" | "Nacional";
  url: string;
  abstract?: string;
};

const publications: Pub[] = [
  {
    title: "Optimized hybrid neural hierarchical interpolation time series with STL for flow forecasting in hydroelectric power plants",
    venue: "Nature — Scientific Reports",
    year: "2026",
    type: "Artigo",
    url: "https://www.researchgate.net/publication/399655721",
    abstract: "Framework híbrido integrando STL com NHITS para previsão de níveis de reservatório em usinas hidrelétricas, com foco em segurança operacional e gestão sustentável da água.",
  },
  {
    title: "Time series forecasting based on multi-criteria optimization for model and filter selection applied to hydroelectric power plants",
    venue: "Energy",
    year: "2025",
    type: "Artigo",
    url: "https://www.researchgate.net/publication/395890751",
    abstract: "Otimização multicritério para seleção de modelos e filtros em previsão de séries temporais aplicadas a sistemas hidrelétricos.",
  },
  {
    title: "Hybrid CF-CNN-BiLSTM hypertuned by Bayesian optimization for thermal power generation and decarbonization forecasting",
    venue: "International Journal of Electrical Power & Energy Systems",
    year: "2025",
    type: "Artigo",
    url: "https://www.researchgate.net/publication/396561066",
  },
  {
    title: "State-of-the-Art Decarbonization in Sludge Thermal Treatments for Electrical Power Generation Considering Sensors and the Application of Artificial Intelligence",
    venue: "Water",
    year: "2025",
    type: "Artigo",
    url: "https://www.researchgate.net/publication/393204337",
    abstract: "Estratégias de descarbonização em tratamentos térmicos de lodo, integrando sensores e inteligência artificial para recuperação energética sustentável.",
  },
  {
    title: "Hybrid group method of data handling for time-series forecasting of thermal generation dispatch in electrical power systems",
    venue: "Electrical Engineering",
    year: "2025",
    type: "Artigo",
    url: "https://www.researchgate.net/publication/393125726",
  },
  {
    title: "Time Series Forecasting of Natural Inflow in Hydroelectric Power Plants Using Hyper-Tuned Temporal Fusion Transformer With Hodrick–Prescott Filter",
    venue: "IET Generation, Transmission & Distribution",
    year: "2025",
    type: "Artigo",
    url: "https://www.researchgate.net/publication/391450276",
  },
  {
    title: "Time Series Forecasting of Thermal Systems Dispatch in Legal Amazon Using Machine Learning",
    venue: "Applied Sciences",
    year: "2024",
    type: "Artigo",
    url: "https://www.researchgate.net/publication/385308347",
    abstract: "Métodos de ensemble (bagging, boosting, stacking) aplicados ao consumo de diesel e despacho térmico na Amazônia Legal.",
  },
  {
    title: "Wavelet CNN-LSTM time series forecasting of electricity power generation considering biomass thermal systems",
    venue: "IET Generation, Transmission & Distribution",
    year: "2024",
    type: "Artigo",
    url: "https://www.researchgate.net/publication/384928332",
    abstract: "Modelo wavelet CNN-LSTM para previsão de geração elétrica baseada em sistemas térmicos de biomassa.",
  },
  {
    title: "Tese de Doutorado — Indicadores de sustentabilidade energética e sistemas inteligentes aplicados ao planejamento energético",
    venue: "UFPA — Programa de Pós-Graduação em Engenharia Elétrica",
    year: "2021",
    type: "Tese",
    url: "https://www.researchgate.net/profile/Rafael-Muniz",
    abstract: "Tese de Doutorado defendida na Universidade Federal do Pará, propondo indicadores de sustentabilidade energética e o uso de sistemas inteligentes para apoio à decisão no planejamento da matriz elétrica brasileira.",
  },
  {
    title: "Dissertação de Mestrado — Soluções sustentáveis em fontes renováveis para sistemas isolados da Amazônia",
    venue: "UFPA — Engenharia Elétrica · Fontes Renováveis",
    year: "2016",
    type: "Dissertação",
    url: "https://www.researchgate.net/profile/Rafael-Muniz",
    abstract: "Dissertação defendida na Universidade Federal do Pará abordando alternativas energéticas renováveis para comunidades isoladas da Amazônia, com foco em gaseificação de biomassa residual.",
  },
];

const stats = [
  { k: "70+", v: "Publicações" },
  { k: "13.7k+", v: "Leituras" },
  { k: "305", v: "Citações" },
];

export default function PublicationsPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img
          src={bgLibrary}
          alt=""
          width={1536}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>
      <div className="max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-primary">Publicações</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
          Pesquisa publicada na fronteira de <span className="text-gradient">energia, resíduos e IA</span>.
        </h1>
        <p className="mt-5 text-muted-foreground">
          Seleção de publicações em periódicos internacionais e nacional, com foco em
          tratamento térmico de resíduos, sistemas energéticos, modelagem fuzzy e
          aprendizado de máquina aplicado a sistemas elétricos.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.v} className="rounded-xl border border-border/60 bg-card/50 p-5">
            <div className="font-display text-3xl font-semibold text-gradient">{s.k}</div>
            <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="https://www.researchgate.net/profile/Rafael-Muniz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition"
        >
          <BookOpen className="h-4 w-4" />
          Ver perfil completo no ResearchGate
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <ol className="mt-12 space-y-5">
        {publications.map((p, i) => (
          <li key={p.url + p.title}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/40 hover:bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:block font-mono text-xs text-muted-foreground pt-1 w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${
                      p.type === "Artigo"
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : p.type === "Tese" || p.type === "Dissertação"
                        ? "bg-accent/30 text-foreground border border-primary/20"
                        : "bg-secondary/40 text-foreground border border-border"
                    }`}>
                      {p.type === "Artigo"
                        ? <FileText className="h-3 w-3" />
                        : p.type === "Tese" || p.type === "Dissertação"
                        ? <GraduationCap className="h-3 w-3" />
                        : <Sparkles className="h-3 w-3" />}
                      {p.type}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{p.year}</span>
                    {p.venue && (
                      <span className="text-xs text-muted-foreground">· {p.venue}</span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-primary transition">
                    {p.title}
                  </h3>
                  {p.abstract && (
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.abstract}</p>
                  )}
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary/80 group-hover:text-primary">
                    Ler no ResearchGate <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-sm text-muted-foreground">
        Lista parcial. Acesse o{" "}
        <a className="text-primary hover:underline" href="https://www.researchgate.net/profile/Rafael-Muniz" target="_blank" rel="noopener noreferrer">
          perfil no ResearchGate
        </a>{" "}
        para a bibliografia completa.
      </p>

      <div className="mt-16 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-background p-8 sm:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary border border-primary/30">
              <Handshake className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">É pesquisador? Vamos publicar juntos.</h3>
              <p className="mt-2 text-muted-foreground">
                Estou aberto a colaborações em pesquisa e coautoria de publicações nas áreas
                de saneamento energético, tecnologias termoquímicas, materiais de carbono,
                IA aplicada e sistemas energéticos sustentáveis. Vamos transformar boas
                hipóteses em ciência publicada.
              </p>
            </div>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
          >
            Propor colaboração <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
