import { pageHead } from "@/lib/page-metadata";
import { useLang } from "@/lib/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beaker, CircuitBoard, Layers, Microscope, Sparkles, Zap, Rocket, BookOpen, ExternalLink, FileText, GraduationCap, Handshake } from "lucide-react";
import bgLab from "@/assets/bg-lab.jpg";
import bgLibrary from "@/assets/bg-library.jpg";

type Pub = {
  title: string;
  venue?: string;
  year: string;
  type: "Artigo" | "Tese" | "Dissertação" | "Capítulo" | "Nacional";
  url: string;
  abstract?: string;
};





export const Route = createFileRoute("/pesquisa")({
  staticData: { sitemap: true },
  head: () => pageHead("/pesquisa"),
  component: ResearchPage,
});



function ResearchPage() {
  const { t } = useLang();
  const publications: Pub[] = [
    { title: "Optimized hybrid neural hierarchical interpolation time series with STL for flow forecasting in hydroelectric power plants", venue: "Nature — Scientific Reports", year: "2026", type: "Artigo", url: "https://www.researchgate.net/publication/399655721", abstract: t("Framework híbrido integrando STL com NHITS para previsão de níveis de reservatório em usinas hidrelétricas, com foco em segurança operacional e gestão sustentável da água.", "A hybrid framework integrating STL with NHITS to forecast reservoir levels at hydroelectric power plants, focusing on operational safety and sustainable water management.") },
    { title: "Time series forecasting based on multi-criteria optimization for model and filter selection applied to hydroelectric power plants", venue: "Energy", year: "2025", type: "Artigo", url: "https://www.researchgate.net/publication/395890751", abstract: t("Otimização multicritério para seleção de modelos e filtros em previsão de séries temporais aplicadas a sistemas hidrelétricos.", "Multi-criteria optimization for selecting models and filters in time-series forecasting for hydropower systems.") },
    { title: "Hybrid CF-CNN-BiLSTM hypertuned by Bayesian optimization for thermal power generation and decarbonization forecasting", venue: "International Journal of Electrical Power & Energy Systems", year: "2025", type: "Artigo", url: "https://www.researchgate.net/publication/396561066" },
    { title: "State-of-the-Art Decarbonization in Sludge Thermal Treatments for Electrical Power Generation Considering Sensors and the Application of Artificial Intelligence", venue: "Water", year: "2025", type: "Artigo", url: "https://www.researchgate.net/publication/393204337", abstract: t("Estratégias de descarbonização em tratamentos térmicos de lodo, integrando sensores e inteligência artificial para recuperação energética sustentável.", "Decarbonization strategies for thermal sludge treatment, integrating sensors and artificial intelligence for sustainable energy recovery.") },
    { title: "Hybrid group method of data handling for time-series forecasting of thermal generation dispatch in electrical power systems", venue: "Electrical Engineering", year: "2025", type: "Artigo", url: "https://www.researchgate.net/publication/393125726" },
    { title: "Time Series Forecasting of Natural Inflow in Hydroelectric Power Plants Using Hyper-Tuned Temporal Fusion Transformer With Hodrick–Prescott Filter", venue: "IET Generation, Transmission & Distribution", year: "2025", type: "Artigo", url: "https://www.researchgate.net/publication/391450276" },
    { title: "Time Series Forecasting of Thermal Systems Dispatch in Legal Amazon Using Machine Learning", venue: "Applied Sciences", year: "2024", type: "Artigo", url: "https://www.researchgate.net/publication/385308347", abstract: t("Métodos de ensemble (bagging, boosting, stacking) aplicados ao consumo de diesel e despacho térmico na Amazônia Legal.", "Ensemble methods (bagging, boosting, stacking) applied to diesel consumption and thermal generation dispatch in Brazil’s Legal Amazon.") },
    { title: "Wavelet CNN-LSTM time series forecasting of electricity power generation considering biomass thermal systems", venue: "IET Generation, Transmission & Distribution", year: "2024", type: "Artigo", url: "https://www.researchgate.net/publication/384928332", abstract: t("Modelo wavelet CNN-LSTM para previsão de geração elétrica baseada em sistemas térmicos de biomassa.", "A wavelet CNN-LSTM model for forecasting electricity generation from biomass thermal systems.") },
    { title: t("Tese de Doutorado — Indicadores de sustentabilidade energética e sistemas inteligentes aplicados ao planejamento energético", "Doctoral Thesis — Energy sustainability indicators and intelligent systems applied to energy planning"), venue: t("UFPA — Programa de Pós-Graduação em Engenharia Elétrica", "UFPA — Graduate Program in Electrical Engineering"), year: "2021", type: "Tese", url: "https://www.researchgate.net/profile/Rafael-Muniz", abstract: t("Tese de Doutorado defendida na Universidade Federal do Pará, propondo indicadores de sustentabilidade energética e o uso de sistemas inteligentes para apoio à decisão no planejamento da matriz elétrica brasileira.", "A doctoral thesis defended at the Federal University of Pará, proposing energy sustainability indicators and intelligent systems to support decision-making in planning Brazil’s electricity mix.") },
    { title: t("Dissertação de Mestrado — Soluções sustentáveis em fontes renováveis para sistemas isolados da Amazônia", "Master’s Dissertation — Sustainable renewable energy solutions for isolated systems in the Amazon"), venue: t("UFPA — Engenharia Elétrica · Fontes Renováveis", "UFPA — Electrical Engineering · Renewable Energy"), year: "2016", type: "Dissertação", url: "https://www.researchgate.net/profile/Rafael-Muniz", abstract: t("Dissertação defendida na Universidade Federal do Pará abordando alternativas energéticas renováveis para comunidades isoladas da Amazônia, com foco em gaseificação de biomassa residual.", "A master’s dissertation defended at the Federal University of Pará exploring renewable energy alternatives for isolated Amazonian communities, focusing on residual biomass gasification.") },
  ];

  const pubStats = [
    { k: "70+", v: t("Publicações", "Publications") },
    { k: "13.7k+", v: t("Leituras", "Reads") },
    { k: "305", v: t("Citações", "Citations") },
  ];

  const lines = [
    { icon: Layers, title: t("Síntese de Grafeno", "Graphene Synthesis"), text: t("Rotas escaláveis de produção de óxido de grafeno e grafeno reduzido a partir de precursores carbonáceos.", "Scalable pathways for producing graphene oxide and reduced graphene from carbon precursors.") },
    { icon: Beaker, title: t("Carbonos Precursores", "Carbon Precursors"), text: t("Desenvolvimento de carbonos ativados e funcionalizados para aplicações em adsorção, catálise e energia.", "Developing activated and functionalized carbons for adsorption, catalysis, and energy applications.") },
    { icon: Sparkles, title: t("Valorização de Resíduos", "Waste Valorization"), text: t("Transformação de biomassa, resíduos agroindustriais e poliméricos em materiais de alto valor agregado.", "Converting biomass, agro-industrial waste, and polymer waste into high-value materials.") },
    { icon: Microscope, title: t("Caracterização Avançada", "Advanced Characterization"), text: t("Análise estrutural, morfológica e eletroquímica de materiais carbonáceos.", "Structural, morphological, and electrochemical analysis of carbon materials.") },
    { icon: Zap, title: t("Energia & Armazenamento", "Energy & Storage"), text: t("Aplicação em supercapacitores, eletrodos e dispositivos de conversão energética.", "Applications in supercapacitors, electrodes, and energy conversion devices.") },
    { icon: CircuitBoard, title: t("Compósitos Funcionais", "Functional Composites"), text: t("Integração de grafeno em matrizes poliméricas e cimentícias para performance avançada.", "Integrating graphene into polymer and cementitious matrices for enhanced performance.") },
  ];
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
        <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Pesquisa", "Research")}</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
          {t("Linhas de investigação na fronteira do", "Research at the frontier of")} <span className="text-gradient">{t("carbono", "carbon")}</span>.
        </h1>
        <p className="mt-5 text-muted-foreground">
          {t("Pesquisa orientada à aplicação: do entendimento fundamental dos materiais à construção de rotas tecnológicas viáveis e sustentáveis.", "Application-driven research: from a fundamental understanding of materials to developing viable, sustainable technological pathways.")}
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
        <h2 className="font-display text-2xl font-semibold">{t("Abordagem", "Approach")}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3 text-sm">
          {[
            { n: "01", t: t("Identificar", "Identify"), d: t("Mapear correntes de resíduos e oportunidades de conversão.", "Map waste streams and conversion opportunities.") },
            { n: "02", t: t("Desenvolver", "Develop"), d: t("Sintetizar e otimizar rotas em escala laboratorial e piloto.", "Develop and optimize pathways at laboratory and pilot scales.") },
            { n: "03", t: t("Escalar", "Scale"), d: t("Conectar resultados à viabilidade técnica e econômica industrial.", "Translate results into industrial technical and economic feasibility.") },
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
              <h3 className="font-display text-2xl font-semibold">{t("Pronto para escalar sua pesquisa para fora da bancada?", "Ready to take your research beyond the lab?")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("Transformo resultados de laboratório em rotas industriais viáveis — da prova de conceito ao piloto, com modelagem técnica, EVTE e estratégia tecnológica.", "I turn laboratory results into viable industrial pathways — from proof of concept to pilot scale, with technical modeling, technical and economic feasibility studies, and technology strategy.")}
              </p>
            </div>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
          >
            {t("Vamos escalar juntos", "Let’s scale up together")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* PUBLICAÇÕES — integrada à Pesquisa */}
      <div className="relative mt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <img src={bgLibrary} alt="" width={1536} height={1024} loading="lazy" className="h-full w-full object-cover opacity-[0.10]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Publicações", "Publications")}</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            {t("Pesquisa publicada na fronteira de", "Published research at the frontier of")} <span className="text-gradient">{t("energia, resíduos e IA", "energy, waste, and AI")}</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            {t("Seleção de publicações em periódicos internacionais e nacional, com foco em tratamento térmico de resíduos, sistemas energéticos, modelagem fuzzy e aprendizado de máquina aplicado a sistemas elétricos.", "Selected publications in international and national journals, focusing on thermal waste treatment, energy systems, fuzzy modeling, and machine learning applied to power systems.")}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {pubStats.map((s) => (
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
            {t("Ver perfil completo no ResearchGate", "View full profile on ResearchGate")}
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
                        {t(p.type, ({ Artigo: "Article", Tese: "Doctoral thesis", Dissertação: "Master’s dissertation", Capítulo: "Chapter", Nacional: "National publication" })[p.type])}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">{p.year}</span>
                      {p.venue && <span className="text-xs text-muted-foreground">· {p.venue}</span>}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-primary transition">
                      {p.title}
                    </h3>
                    {p.abstract && (
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.abstract}</p>
                    )}
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary/80 group-hover:text-primary">
                      {t("Ler no ResearchGate", "Read on ResearchGate")} <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-muted-foreground">
          {t("Lista parcial. Acesse o", "Partial list. Visit the")}{" "}
          <a className="text-primary hover:underline" href="https://www.researchgate.net/profile/Rafael-Muniz" target="_blank" rel="noopener noreferrer">
            {t("perfil no ResearchGate", "ResearchGate profile")}
          </a>{" "}
          {t("para a bibliografia completa.", "for the complete bibliography.")}
        </p>

        <div className="mt-16 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-background p-8 sm:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                <Handshake className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">{t("É pesquisador? Vamos publicar juntos.", "Are you a researcher? Let’s publish together.")}</h3>
                <p className="mt-2 text-muted-foreground">
                  {t("Estou aberto a colaborações em pesquisa e coautoria de publicações nas áreas de saneamento energético, tecnologias termoquímicas, materiais de carbono, IA aplicada e sistemas energéticos sustentáveis. Vamos transformar boas hipóteses em ciência publicada.", "I welcome research collaborations and co-authored publications in energy recovery from wastewater, thermochemical technologies, carbon materials, applied AI, and sustainable energy systems. Let’s turn promising hypotheses into published science.")}
                </p>
              </div>
            </div>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
            >
              {t("Propor colaboração", "Propose a collaboration")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
