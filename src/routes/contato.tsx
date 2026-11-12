import { useLang } from "@/lib/i18n";
import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Contato — Rafael Muniz" },
      { name: "description", content: "Entre em contato com Rafael Muniz para consultoria, parcerias de pesquisa, palestras ou projetos de inovação." },
      { property: "og:title", content: "Contato — Rafael Muniz" },
      { property: "og:description", content: "Vamos conversar sobre seu projeto em materiais avançados de carbono." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const WHATSAPP_URL =
    "https://wa.me/5543996926350?text=" +
    encodeURIComponent(t(
      "Olá Rafael, vim através do website!\nGostaria de maiores informações sobre seus serviços.",
      "Hello Rafael, I found you through your website!\nI would like more information about your services.",
    ));
  const SUBJECT_OPTIONS = [
    { value: "Consultoria", label: t("Consultoria", "Consulting") },
    { value: "Palestras", label: t("Palestras", "Speaking engagements") },
    { value: "Tecnologias", label: t("Tecnologias", "Technologies") },
    { value: "P&D", label: t("P&D", "R&D") },
    { value: "Publicações", label: t("Publicações", "Publications") },
    { value: "Outros", label: t("Outros", "Other") },
  ];
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", assunto: "Consultoria", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${t("Nome", "Name")}: ${form.nome}\n${t("Email", "Email")}: ${form.email}\n\n${form.mensagem}`;
    window.location.href = `mailto:rafael@ninnomuniz.com?subject=${encodeURIComponent(
      `[${SUBJECT_OPTIONS.find((opt) => opt.value === form.assunto)?.label ?? form.assunto}] ${t("Contato via website", "Website inquiry")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-primary">{t("Contato", "Contact")}</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            {t("Vamos", "Let’s")} <span className="text-gradient">{t("conversar", "talk")}</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-md">
            {t("Para consultorias, parcerias de P&D, palestras, mentorias ou colaborações acadêmicas — escolha o canal mais conveniente.", "For consulting, R&D partnerships, speaking engagements, mentoring, or academic collaborations — choose the channel that works best for you.")}
          </p>

          <div className="mt-10 space-y-5">
            <a href="mailto:rafael@ninnomuniz.com" className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/50 p-5 transition hover:border-primary/40">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="font-medium group-hover:text-primary">rafael@ninnomuniz.com</div>
              </div>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/50 p-5 transition hover:border-primary/40">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="font-medium group-hover:text-primary">+55 (43) 99692-6350</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/rafaelmuniz/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/50 p-5 transition hover:border-primary/40">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</div>
                <div className="font-medium group-hover:text-primary">/in/rafaelmuniz</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-card/50 p-5">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("Localização", "Location")}</div>
                <div className="font-medium">{t("Brasil — atuação internacional", "Brazil — working internationally")}</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border/60 bg-card/50 p-8 space-y-5"
        >
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("Nome", "Name")}</label>
            <input
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("Assunto", "Subject")}</label>
            <select
              value={form.assunto}
              onChange={(e) => setForm({ ...form, assunto: e.target.value })}
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
            >
              {SUBJECT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("Mensagem", "Message")}</label>
            <textarea
              required
              rows={5}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">
            {t("Enviar mensagem", "Send message")}
          </button>
          {sent && (
            <p className="text-sm text-primary text-center">{t("Abrindo seu cliente de email para envio a rafael@ninnomuniz.com…", "Opening your email client to send a message to rafael@ninnomuniz.com…")}</p>
          )}
        </form>
      </div>
    </section>
  );
}
