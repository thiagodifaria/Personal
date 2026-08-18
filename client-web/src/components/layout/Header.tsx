"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

interface HeaderProps {
  onOpenMenu: () => void;
}

export function Header({ onOpenMenu }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "Thiago Di Faria";
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isLinkActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Thiago Di Faria — início">
          <span>Thiago Di Faria</span>
        </Link>

        <nav className="main-nav" aria-label="Navegação principal">
          <Link href="/sobre" className={isLinkActive("/sobre") ? "active" : ""}>
            {t.navAbout}
          </Link>
          <Link href="/projetos" className={isLinkActive("/projetos") ? "active" : ""}>
            {t.navProjects}
          </Link>
          <Link href="/blog" className={isLinkActive("/blog") ? "active" : ""}>
            {t.navBlog}
          </Link>
          <Link href="/contato" className={isLinkActive("/contato") ? "active" : ""}>
            {t.navContact}
          </Link>
        </nav>

        <div className="header-actions">
          <a
            className="icon-btn social-link"
            href="https://github.com/thiagodifaria"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icon name="github" />
          </a>
          <a
            className="icon-btn social-link"
            href="https://www.linkedin.com/in/thiago-di-faria-34304a34b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" />
          </a>

          <Button variant="primary" href="/contato" className="header-cta">
            {t.talk}
          </Button>

          <button
            className="icon-btn menu-btn"
            onClick={onOpenMenu}
            aria-label="Abrir menu"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
