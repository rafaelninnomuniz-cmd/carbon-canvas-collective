import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Rafael Muniz" },
      { name: "description", content: "Entre em contato com Rafael Muniz para consultoria, parcerias de pesquisa, palestras ou projetos de inovação." },
      { property: "og:title", content: "Contato — Rafael Muniz" },
      { property: "og:description", content: "Vamos conversar sobre seu projeto em materiais avançados de carbono." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-primary">Contato</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            Vamos <span className="text-gradient">conversar</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-md">
            Para consultorias, parcerias de P&D, palestras, mentorias ou colaborações
            acadêmicas — escolha o canal mais conveniente.
          </p>

          <div className="mt-10 space-y-5">
            <a href="mailto:contato@rafaelmuniz.com" className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/50 p-5 transition hover:border-primary/40">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="font-medium group-hover:text-primary">contato@rafaelmuniz.com</div>
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
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Localização</div>
                <div className="font-medium">Brasil — atuação internacional</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border/60 bg-card/50 p-8 space-y-5"
        >
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Nome</label>
            <input required className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input required type="email" className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Assunto</label>
            <input className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Mensagem</label>
            <textarea required rows={5} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <button type="submit" className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">
            Enviar mensagem
          </button>
          {sent && (
            <p className="text-sm text-primary text-center">Obrigado! Sua mensagem foi registrada.</p>
          )}
        </form>
      </div>
    </section>
  );
}
