import Link from "next/link";
import { siteContent } from "@/config/siteContent";

export function Footer() {
  const p = siteContent.profile;

  return (
    <footer className="site-footer" id="siteFooter">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <h2 className="footer-name">
              Thiago
              <br />
              Di Faria.
            </h2>
            <p>Clareza operacional traduzida em software.</p>
          </div>

          <div className="footer-links">
            <span className="eyebrow">Navegação</span>
            <Link href="/sobre">Sobre</Link>
            <Link href="/projetos">Projetos</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contato">Contato</Link>
          </div>

          <div className="footer-links">
            <span className="eyebrow">Conexões</span>
            <a href={p.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${p.email}`}>{p.email}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Belo Horizonte, MG · Brasil</span>
          <span>
            © {new Date().getFullYear()} Thiago Di Faria. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
