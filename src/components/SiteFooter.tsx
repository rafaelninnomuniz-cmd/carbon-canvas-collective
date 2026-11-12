import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Instagram, Linkedin, Mail, MessageCircle, Youtube } from "lucide-react";

const WHATSAPP_URL_PT =
  "https://wa.me/5543996926350?text=" +
  encodeURIComponent("Olá Rafael, vim através do website!\nGostaria de maiores informações sobre seus serviços.");

const WHATSAPP_URL_EN = "https://wa.me/5543996926350?text=" + encodeURIComponent("Hello Rafael, I found you through your website!\nI would like more information about your services.");

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-semibold">Rafael Ninno Muniz</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            {t("Engenheiro, Pesquisador e Educador.", "Engineer, Researcher and Educator.")}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("Navegação", "Navigation")}</span>
          <Link to="/sobre" className="hover:text-primary">{t("Sobre", "About")}</Link>
          <Link to="/servicos" className="hover:text-primary">{t("Serviços", "Services")}</Link>
          <Link to="/texgenera" className="hover:text-primary">TexGenera</Link>
          <Link to="/tecnologias" className="hover:text-primary">{t("Tecnologias", "Technologies")}</Link>
          <Link to="/projetos" className="hover:text-primary">{t("Projetos", "Projects")}</Link>
          <Link to="/pesquisa" className="hover:text-primary">{t("Pesquisa", "Research")}</Link>
          
          <Link to="/contato" className="hover:text-primary">{t("Contato", "Contact")}</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("Conecte-se", "Connect")}</span>
          <a href="https://www.youtube.com/@ninnomuniz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <Youtube className="h-4 w-4" /> YouTube
          </a>
          <a href="https://www.linkedin.com/in/rafaelmuniz/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/munizrn?igsh=MWJyOWhram9hdzY0ZA==" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a href={t(WHATSAPP_URL_PT, WHATSAPP_URL_EN)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href="mailto:rafael@ninnomuniz.com" className="inline-flex items-center gap-2 hover:text-primary">
            <Mail className="h-4 w-4" /> rafael@ninnomuniz.com
          </a>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rafael Muniz. {t("Todos os direitos reservados.", "All rights reserved.")}
      </div>
    </footer>
  );
}
