"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/landing/BrandMark";

type Audience = "merchant" | "partner" | undefined;

export function AudienceHeader({ audience }: { audience?: Audience }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => buttonRef.current?.focus());
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!open || headerRef.current?.contains(event.target as Node)) return;
      closeMenu(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const contactHref = audience === "partner" ? "/partenaires#ouverture" : audience === "merchant" ? "/commercants#contact" : "#choix";
  const contactLabel = audience === "partner" ? "Accès partenaire" : audience === "merchant" ? "Demander une présentation" : "Choisir mon parcours";

  return (
    <header ref={headerRef} className="site-header" data-site-header>
      <div className="header-inner">
        <Link className="header-brand" href="/" aria-label="Accueil WALS" onClick={() => closeMenu(false)}><BrandMark /></Link>
        <nav className="audience-header-nav" aria-label="Choisir son parcours WALS">
          <Link className={audience === "merchant" ? "is-active" : ""} href="/commercants">Pour les commerçants</Link>
          <Link className={audience === "partner" ? "is-active" : ""} href="/partenaires">Pour les partenaires</Link>
        </nav>
        <a className="header-status" href={contactHref}><span className="status-dot" /> {contactLabel}</a>
        <button ref={buttonRef} className={`menu-toggle ${open ? "is-open" : ""}`} type="button" aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}><span /><span /></button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navigation mobile" aria-hidden={!open}>
        <Link href="/commercants" onClick={() => closeMenu(false)}>Pour les commerçants</Link>
        <Link href="/partenaires" onClick={() => closeMenu(false)}>Pour les partenaires</Link>
        <a className="mobile-open-link" href={contactHref} onClick={() => closeMenu(false)}>{contactLabel}</a>
      </nav>
    </header>
  );
}
