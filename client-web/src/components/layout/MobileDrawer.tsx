"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icons";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      ref={drawerRef}
      className={`drawer ${isOpen ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu móvel"
      aria-hidden={!isOpen}
    >
      <div className="drawer-head">
        <Link href="/" className="brand" onClick={onClose}>
          <span>Thiago Di Faria</span>
        </Link>
        <button
          className="icon-btn"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          <Icon name="close" />
        </button>
      </div>

      <nav className="drawer-nav">
        <Link href="/sobre" onClick={onClose}>
          Sobre
        </Link>
        <Link href="/projetos" onClick={onClose}>
          Projetos
        </Link>
        <Link href="/blog" onClick={onClose}>
          Blog
        </Link>
        <Link href="/contato" onClick={onClose}>
          Contato
        </Link>
      </nav>

      <div className="drawer-foot">
        <span>Belo Horizonte, MG</span>
        <span>Backend first.</span>
      </div>
    </div>
  );
}
