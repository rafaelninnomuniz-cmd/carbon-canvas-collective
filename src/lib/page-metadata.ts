// Keep browser metadata aligned with the selected language without changing public URLs.
export const pageMetadata: Record<string, { pt: readonly string[]; en: readonly string[] }> = {
  "/": {
    "pt": [
      "Rafael Muniz — Engenheiro, Pesquisador e Consultor",
      "Atuação em tecnologias disruptivas e projetos inovadores para conversão de resíduos em materiais avançados como carbonos precursores e grafeno.",
      "Rafael Muniz — Engenheiro, Pesquisador e Consultor",
      "Atuação em tecnologias disruptivas e projetos inovadores para conversão de resíduos em materiais avançados como carbonos precursores e grafeno."
    ],
    "en": [
      "Rafael Muniz — Engineer, Researcher and Consultant",
      "Disruptive technologies and innovative projects converting waste into advanced materials such as carbon precursors and graphene.",
      "Rafael Muniz — Engineer, Researcher and Consultant",
      "Disruptive technologies and innovative projects converting waste into advanced materials such as carbon precursors and graphene."
    ]
  },
  "/sobre": {
    "pt": [
      "Sobre — Rafael Muniz",
      "Trajetória de Rafael Muniz: engenheiro, pesquisador, consultor e educador em materiais avançados de carbono.",
      "Sobre — Rafael Muniz",
      "Engenheiro e pesquisador atuando na fronteira entre sustentabilidade, ciência de materiais e inovação industrial."
    ],
    "en": [
      "About — Rafael Muniz",
      "Rafael Muniz’s career as an engineer, researcher, consultant, and educator in advanced carbon materials.",
      "About — Rafael Muniz",
      "An engineer and researcher working at the intersection of sustainability, materials science, and industrial innovation."
    ]
  },
  "/servicos": {
    "pt": [
      "Serviços — Rafael Muniz",
      "Consultoria em P&D, desenvolvimento de processos, análise de viabilidade e formação em materiais avançados de carbono.",
      "Serviços — Consultoria & P&D",
      "Apoio estratégico e técnico em projetos de inovação com materiais carbonáceos e grafeno."
    ],
    "en": [
      "Services — Rafael Muniz",
      "R&D consulting, process development, feasibility analysis, and training in advanced carbon materials.",
      "Services — Consulting & R&D",
      "Strategic and technical support for innovation projects involving carbon materials and graphene."
    ]
  },
  "/texgenera": {
    "pt": [
      "TexGenera — Grafeno a partir de resíduos têxteis | Rafael Muniz",
      "TexGenera: deeptech brasileira que converte resíduos têxteis multicomponentes em carbonos precursores e grafeno por pirólise avançada proprietária. Rafael Muniz é CTO.",
      "TexGenera — A Alquimia do Carbono",
      "Pirólise proprietária que transforma resíduos têxteis em grafeno e carbonos de alto valor. TRL 5 validado com o SENAI ISI Eletroquímica."
    ],
    "en": [
      "TexGenera — Graphene from textile waste | Rafael Muniz",
      "TexGenera is a Brazilian deeptech company converting multicomponent textile waste into carbon precursors and graphene using proprietary advanced pyrolysis. Rafael Muniz is CTO.",
      "TexGenera — The Alchemy of Carbon",
      "Proprietary pyrolysis transforms textile waste into graphene and high-value carbon materials. TRL 5 validated with the SENAI Innovation Institute for Electrochemistry."
    ]
  },
  "/tecnologias": {
    "pt": [
      "Tecnologias — Pirólise, Gaseificação e Biodigestão | Rafael Muniz",
      "Tecnologias termoquímicas e bioquímicas para conversão de resíduos em energia: pirólise, gaseificação e biodigestão.",
      "Tecnologias — Conversão de Resíduos em Energia | Rafael Muniz",
      "Pirólise, gaseificação e biodigestão: rotas tecnológicas para descarbonização e economia circular."
    ],
    "en": [
      "Technologies — Pyrolysis, Gasification and Anaerobic Digestion | Rafael Muniz",
      "Thermochemical and biochemical technologies for converting waste into energy: pyrolysis, gasification, and anaerobic digestion.",
      "Technologies — Waste-to-Energy Conversion | Rafael Muniz",
      "Pyrolysis, gasification, and anaerobic digestion: technological pathways for decarbonization and the circular economy."
    ]
  },
  "/projetos": {
    "pt": [
      "Projetos — Rafael Muniz",
      "Principais projetos em execução: grafeno a partir de resíduos têxteis, smart materials, pirólise de lodo de ETE e geradores híbridos UPC + BESS.",
      "Projetos — Portfólio em Execução",
      "Grafeno, smart materials, Retransformar e UPC + BESS: projetos aplicados em escala industrial."
    ],
    "en": [
      "Projects — Rafael Muniz",
      "Key ongoing projects: graphene from textile waste, smart materials, wastewater sludge pyrolysis, and UPC + BESS hybrid generators.",
      "Projects — Ongoing Portfolio | Rafael Muniz",
      "Graphene, smart materials, Retransformar, and UPC + BESS: applied projects at industrial scale."
    ]
  },
  "/pesquisa": {
    "pt": [
      "Pesquisa — Rafael Muniz",
      "Linhas de pesquisa em conversão de resíduos, síntese de grafeno e desenvolvimento de carbonos precursores.",
      "Pesquisa — Materiais Avançados de Carbono",
      "Síntese e caracterização de materiais grafênicos e carbonos avançados a partir de resíduos."
    ],
    "en": [
      "Research — Rafael Muniz",
      "Research into waste conversion, graphene synthesis, and carbon precursor development.",
      "Research — Advanced Carbon Materials | Rafael Muniz",
      "Synthesis and characterization of graphene-based and advanced carbon materials from waste."
    ]
  },
  "/publicacoes": {
    "pt": [
      "Publicações — Rafael Ninno Muniz",
      "Publicações científicas de Rafael Ninno Muniz em energia sustentável, tratamento térmico de resíduos, pirólise, biomassa e sistemas inteligentes.",
      "Publicações — Rafael Ninno Muniz",
      "Artigos, teses e capítulos integrados ao perfil ResearchGate (70+ publicações, 13.7k+ leituras)."
    ],
    "en": [
      "Publications — Rafael Ninno Muniz",
      "Scientific publications by Rafael Ninno Muniz on sustainable energy, thermal waste treatment, pyrolysis, biomass, and intelligent systems.",
      "Publications — Rafael Ninno Muniz",
      "Articles, theses, and chapters linked to the ResearchGate profile (70+ publications, 13.7k+ reads)."
    ]
  },
  "/contato": {
    "pt": [
      "Contato — Rafael Muniz",
      "Entre em contato com Rafael Muniz para consultoria, parcerias de pesquisa, palestras ou projetos de inovação.",
      "Contato — Rafael Muniz",
      "Vamos conversar sobre seu projeto em materiais avançados de carbono."
    ],
    "en": [
      "Contact — Rafael Muniz",
      "Contact Rafael Muniz for consulting, research partnerships, speaking engagements, or innovation projects.",
      "Contact — Rafael Muniz",
      "Let’s discuss your advanced carbon materials project."
    ]
  }
};

export function pageHead(path: string) {
  const metadata = pageMetadata[path]?.pt;
  if (!metadata) throw new Error(`Missing page metadata for ${path}`);
  const [title, description, socialTitle, socialDescription] = metadata;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: socialTitle },
      { property: "og:description", content: socialDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://ninnomuniz.com${path === "/" ? "" : path}` },
      { property: "og:image", content: "https://ninnomuniz.com/social-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Rafael Ninno Muniz — Engenharia Disruptiva, Tecnologias Sustentáveis" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: socialTitle },
      { name: "twitter:description", content: socialDescription },
      { name: "twitter:image", content: "https://ninnomuniz.com/social-cover.jpg" },
    ],
  };
}
