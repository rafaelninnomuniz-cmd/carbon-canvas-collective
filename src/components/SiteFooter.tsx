import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5543996926350?text=" +
  encodeURIComponent("Olá Rafael, vim através do website!\nGostaria de maiores informações sobre seus serviços.");

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-semibold">Rafael Ninno Muniz</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Engenheiro, Pesquisador e Educador.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Navegação</span>
          <Link to="/sobre" className="hover:text-primary">Sobre</Link>
          <Link to="/servicos" className="hover:text-primary">Serviços</Link>
          <Link to="/tecnologias" className="hover:text-primary">Tecnologias</Link>
          <Link to="/projetos" className="hover:text-primary">Projetos</Link>
          <Link to="/pesquisa" className="hover:text-primary">Pesquisa</Link>
          <Link to="/publicacoes" className="hover:text-primary">Publicações</Link>
          <Link to="/contato" className="hover:text-primary">Contato</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Conecte-se</span>
          <a href="https://www.linkedin.com/in/rafaelmuniz/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/munizrn?igsh=MWJyOWhram9hdzY0ZA==" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href="mailto:rafael@ninnomuniz.com" className="inline-flex items-center gap-2 hover:text-primary">
            <Mail className="h-4 w-4" /> rafael@ninnomuniz.com
          </a>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rafael Muniz. Todos os direitos reservados.
      </div>
    </footer>
  );
}
