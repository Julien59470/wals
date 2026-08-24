"use client";

import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/landing/BrandMark";

export function HeaderClient() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => buttonRef.current?.focus());
  };

  useEffect(() => {
    const onHashChange = () => closeMenu(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
      if (event.key === "Tab") {
        const focusable = headerRef.current?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!open || headerRef.current?.contains(event.target as Node)) return;
      closeMenu(false);
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.body.classList.toggle("menu-open", open);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header ref={headerRef} className="site-header" data-site-header>
      <div className="header-inner">
        <a className="header-brand" href="#top" aria-label="Revenir en haut de WALS" onClick={() => closeMenu(false)}>
          <BrandMark />
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#business">Votre business</a>
          <a href="#solutions">Solutions</a>
          <a href="#terrain">Vente terrain</a>
          <a href="#cockpit">Cockpit</a>
        </nav>
        <a className="header-status" href="#ouverture"><span className="status-dot" /> Accès partenaires bientôt</a>
        <button
          ref={buttonRef}
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navigation mobile" aria-hidden={!open}>
        <a href="#business" onClick={() => closeMenu(false)}>Votre business</a>
        <a href="#solutions" onClick={() => closeMenu(false)}>Solutions</a>
        <a href="#terrain" onClick={() => closeMenu(false)}>Vente terrain</a>
        <a href="#cockpit" onClick={() => closeMenu(false)}>Cockpit</a>
        <a className="mobile-open-link" href="#ouverture" onClick={() => closeMenu(false)}>Être informé de l'ouverture</a>
      </nav>
    </header>
  );
}
