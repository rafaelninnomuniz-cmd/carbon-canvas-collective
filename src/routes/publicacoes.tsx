import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, FileText, BookOpen, Sparkles } from "lucide-react";

export const Route = createFileRoute("/publicacoes")({
  head: () => ({
    meta: [
      { title: "Publicações — Rafael Ninno Muniz" },
      { name: "description", content: "Publicações científicas de Rafael Ninno Muniz em energia sustentável, tratamento térmico de resíduos, pirólise, biomassa e sistemas inteligentes." },
      { property: "og:title", content: "Publicações — Rafael Ninno Muniz" },
      { property: "og:description", content: "Artigos, preprints e capítulos integrados do perfil ResearchGate (53 publicações, 13.7k+ leituras)." },
    ],
  }),
  component: PublicationsPage,
});

type Pub = {
  title: string;
  venue?: string;
  year: string;
  type: "Artigo" | "Preprint" | "Capítulo";
  url: string;
  abstract?: string;
};

const publications: Pub[] = [
  {
    title: "Optimized hybrid neural hierarchical interpolation time series with STL for flow forecasting in hydroelectric power plants",
    venue: "Scientific Reports",
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
    title: "Hybrid Neural Hierarchical Interpolation Time Series with STL Optimized by Multi-Agent HPO for Flow Forecasting in Hydroelectric Power Plants",
    year: "2025",
    type: "Preprint",
    url: "https://www.researchgate.net/publication/397002498",
  },
  {
    title: "Decarbonization in Sludge Thermal Treatments for Electrical Power Generation Considering Artificial Intelligence",
    year: "2025",
    type: "Preprint",
    url: "https://www.researchgate.net/publication/390641424",
    abstract: "Visão abrangente de estratégias de descarbonização para tratamento térmico de lodo, conectando gestão de resíduos e mitigação climática.",
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
    title: "Hybrid GMDH for time series forecasting of thermal generation dispatch in electrical power systems",
    year: "2025",
    type: "Preprint",
    url: "https://www.researchgate.net/publication/389461279",
  },
  {
    title: "Natural Inflow Forecasting in Hydroelectric Power Plants using Hypertuned TFT with Hodrick-Prescott Filter",
    year: "2025",
    type: "Preprint",
    url: "https://www.researchgate.net/publication/389454998",
  },
];

const stats = [
  { k: "53", v: "Publicações" },
  { k: "13.7k+", v: "Leituras" },
  { k: "305", v: "Citações" },
];

export default function PublicationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-primary">Publicações</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
          Pesquisa publicada na fronteira de <span className="text-gradient">energia, resíduos e IA</span>.
        </h1>
        <p className="mt-5 text-muted-foreground">
          Seleção de publicações em periódicos internacionais e preprints, com foco em
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
          <li key={p.url}>
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
                        : p.type === "Preprint"
                        ? "bg-secondary/40 text-foreground border border-border"
                        : "bg-accent/30 text-foreground border border-border"
                    }`}>
                      {p.type === "Artigo" ? <FileText className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
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
    </section>
  );
}
