import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Youtube, Linkedin, Instagram, BookOpen, ExternalLink } from "lucide-react";
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
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="relative lg:sticky lg:top-24">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl" />
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-border to-transparent" />
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background">
            <img
              src={portrait}
              alt=t("Retrato de Rafael Muniz em planta industrial de pirólise", "Portrait of Rafael Muniz at an industrial pyrolysis plant")
              width={1024}
              height={1280}
              loading="lazy"
              className="relative w-full h-auto contrast-105 saturate-50 brightness-95"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-background/10 mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/80">
              <span>Rafael N. Muniz</span>
              <span className="text-primary">{t("PhD · Eng.", "PhD · Engineer")}</span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Sobre", "About")}</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            {t("Engenharia disruptiva a serviço da", "Disruptive engineering in the service of")} <span className="text-gradient">{t("descarbonização", "decarbonization")}</span>.
          </h1>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              {t("Sou", "I am")} <strong className="text-foreground">Rafael Ninno Muniz</strong> {t("— Engenheiro com Pós-doutorado em Termoquímica, Doutor em Sustentabilidade Energética, Mestre em Fontes Renováveis de Energia e Bacharel em Engenharia Elétrica.", "— an engineer with postdoctoral research in Thermochemistry, a PhD in Energy Sustainability, a master's degree in Renewable Energy Sources, and a bachelor's degree in Electrical Engineering.")}
            </p>
            <p>
              {t("Atuo na fronteira entre", "I work at the intersection of")} <strong className="text-foreground">{t("saneamento energético", "waste-to-energy solutions")}</strong>{t(", tecnologias termoquímicas (pirólise e gaseificação) e bioquímica (biodigestão) para o tratamento de resíduos — transformando lodo de ETE, biomassas e resíduos industriais em biochar, syngas, biogás e carbonos precursores de alto valor agregado, incluindo grafeno.", ", thermochemical technologies (pyrolysis and gasification), and biochemical treatment (anaerobic digestion) for waste processing — transforming wastewater sludge, biomass, and industrial waste into biochar, syngas, biogas, and high-value carbon precursors, including graphene.")}
            </p>
            <p>
              {t("Lidero iniciativas de PD&I para descarbonização da matriz energética como", "I lead R&D&I initiatives to decarbonize the energy mix as")}
              <strong className="text-foreground"> {t("CTO da TexGenera", "CTO of TexGenera")}</strong> {t("(regeneração de têxteis em grafeno),", "(regenerating textiles into graphene),")}
              <strong className="text-foreground"> {t("Diretor de Tecnologias na LightFy Energia", "Director of Technology at LightFy Energia")}</strong>,
              <strong className="text-foreground"> {t("CEO da E-Fuzzy", "CEO of E-Fuzzy")}</strong> {t("(sistemas inteligentes para descarbonização industrial), integrando ciência de bancada, modelagem de negócios, IA e viabilidade industrial.", "(intelligent systems for industrial decarbonization), integrating laboratory science, business modeling, AI, and industrial feasibility.")}
            </p>
            <p>
              {t("Como educador, contribuo na formação de engenheiros e pesquisadores que constroem o próximo ciclo da economia de baixo carbono.", "As an educator, I help train the engineers and researchers building the next chapter of the low-carbon economy.")}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "70+", v: t("consultorias executadas", "consulting engagements completed") },
              { k: "100+", v: t("publicações científicas", "scientific publications") },
              { k: "13.7k+", v: t("leituras e citações no ResearchGate", "reads and citations on ResearchGate") },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border/60 bg-card/50 p-5">
                <div className="font-display text-2xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold">{t("Formação Acadêmica", "Academic Background")}</h2>
            <ul className="mt-4 space-y-4 text-sm">
              {[
                { t: t("Pós-Doutorado em Eng. de Produção e Sistemas Computacionais", "Postdoctoral Research in Production Engineering and Computational Systems"), i: "Universidade Federal Fluminense (UFF)", d: t("Otimização de usinas de pirólise via lógica fuzzy", "Optimization of pyrolysis plants using fuzzy logic") },
                { t: t("Doutorado em Engenharia Elétrica", "PhD in Electrical Engineering"), i: "Universidade Federal do Pará (UFPA)", d: t("Indicadores de sustentabilidade energética e sistemas inteligentes", "Energy sustainability indicators and intelligent systems") },
                { t: t("Mestrado em Engenharia Elétrica — Fontes Renováveis", "Master's in Electrical Engineering — Renewable Energy Sources"), i: "UFPA", d: t("Soluções sustentáveis para sistemas isolados da Amazônia", "Sustainable solutions for isolated energy systems in the Amazon") },
                { t: t("Bacharel em Engenharia Elétrica — Sistemas de Energia", "Bachelor's in Electrical Engineering — Power Systems"), i: "UFPA", d: t("Gaseificação de biomassa residual em comunidades isoladas", "Gasification of residual biomass in isolated communities") },
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
            <h2 className="font-display text-xl font-semibold">{t("Competências", "Expertise")}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                t("Pirólise", "Pyrolysis"), t("Gaseificação", "Gasification"), t("Biodigestão", "Anaerobic Digestion"), t("Saneamento Energético", "Waste-to-Energy"),
                t("Biochar & Carbonos Precursores", "Biochar & Carbon Precursors"), t("Síntese de Grafeno", "Graphene Synthesis"), t("Mercados de Carbono", "Carbon Markets"),
                t("Lógica Fuzzy", "Fuzzy Logic"), "Machine Learning", t("Modelagem de Sistemas Energéticos", "Energy Systems Modeling"),
                t("P&D Industrial", "Industrial R&D"), t("Gestão de Projetos", "Project Management"), t("Docência", "Teaching"), t("Transferência de Tecnologia", "Technology Transfer"),
              ].map((t) => (
                <span key={t} className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold">{t("Redes Sociais", "Social Media")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("Acompanhe meus conteúdos, projetos e pesquisas — com destaque para o canal no YouTube, onde compartilho bastidores de tecnologia, ciência aplicada e descarbonização industrial.", "Follow my content, projects, and research — especially on my YouTube channel, where I share behind-the-scenes insights into technology, applied science, and industrial decarbonization.")}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href="https://www.youtube.com/@ninnomuniz"
                target="_blank"
                rel="noopener noreferrer"
                className="group sm:col-span-2 flex items-center gap-4 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-background p-5 transition hover:border-primary/60"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                  <Youtube className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-primary">{t("Canal em destaque", "Featured Channel")}</div>
                  <div className="font-display text-lg font-semibold">YouTube · @ninnomuniz</div>
                  <div className="text-xs text-muted-foreground truncate">youtube.com/@ninnomuniz</div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafaelmuniz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 p-4 transition hover:border-primary/40"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm font-semibold">LinkedIn</div>
                  <div className="text-xs text-muted-foreground truncate">in/rafaelmuniz</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://www.instagram.com/munizrn/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 p-4 transition hover:border-primary/40"
              >
                <Instagram className="h-5 w-5 text-primary" />
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm font-semibold">Instagram</div>
                  <div className="text-xs text-muted-foreground truncate">@munizrn</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Rafael-Muniz"
                target="_blank"
                rel="noopener noreferrer"
                className="group sm:col-span-2 flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 p-4 transition hover:border-primary/40"
              >
                <BookOpen className="h-5 w-5 text-primary" />
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm font-semibold">ResearchGate</div>
                  <div className="text-xs text-muted-foreground truncate">researchgate.net/profile/Rafael-Muniz</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
