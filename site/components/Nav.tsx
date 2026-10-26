"use client";

import { useEffect, useState } from "react";
import { waLink } from "../lib/site";

const LINKS = [
  { href: "#estrutura", label: "Estrutura" },
  { href: "#planos", label: "Planos" },
  { href: "#localizacao", label: "Localização" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <a className="brand" href="#top" aria-label="Start Life Academia — início">
        <svg className="bolt" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M27 5 L11 27 H23 L20 43 L37 20 H25 Z" />
        </svg>
        <span className="wordmark">
          <b>STARTLIFE</b>
          <span>ACADEMIA</span>
        </span>
      </a>

      <nav className="links" aria-label="Seções">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <a
        className="nav-cta"
        href={waLink("Olá! Vim pelo site da Start Life Vera Cruz e quero saber mais.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        Falar no WhatsApp
      </a>

      <button
        className="burger"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span style={open ? { transform: "translateY(5px) rotate(45deg)" } : undefined} />
        <span style={open ? { opacity: 0 } : undefined} />
        <span style={open ? { transform: "translateY(-5px) rotate(-45deg)" } : undefined} />
      </button>

      {open && (
        <div className="sheet" role="dialog" aria-modal="true" aria-label="Menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href={waLink("Olá! Vim pelo site da Start Life Vera Cruz e quero saber mais.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
