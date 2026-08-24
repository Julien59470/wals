"use client";

import { useEffect, useState } from "react";

import { BrandMark } from "@/components/landing/BrandMark";

export function HeaderClient() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="site-header" data-site-header>
      <div className="header-inner">
        <a className="header-brand" href="#top" aria-label="Revenir en haut de WALS" onClick={() => setOpen(false)}>
          <BrandMark />
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#solutions">Solutions</a>
          <a href="#business">Votre business</a>
          <a href="#terrain">Vente terrain</a>
          <a href="#cockpit">Cockpit</a>
        </nav>
        <div className="header-status"><span className="status-dot" /> Accès partenaires prochainement</div>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </div>
      <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navigation mobile">
        <a href="#solutions" onClick={() => setOpen(false)}>Solutions</a>
        <a href="#business" onClick={() => setOpen(false)}>Votre business</a>
        <a href="#terrain" onClick={() => setOpen(false)}>Vente terrain</a>
        <a href="#cockpit" onClick={() => setOpen(false)}>Cockpit</a>
        <span>WALS est en développement</span>
      </nav>
    </header>
  );
}
