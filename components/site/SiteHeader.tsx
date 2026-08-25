import Link from "next/link";

import { BrandMark } from "@/components/site/BrandMark";

export function SiteHeader({ audience }: { audience?: "merchant" | "partner" }) {
  return (
    <header className="site-header">
      <div className="site-container header-grid">
        <BrandMark compact />
        <nav className="header-nav" aria-label="Navigation principale">
          <Link className={audience === "merchant" ? "is-active" : ""} href="/commercants">
            Pour les commerces
          </Link>
          <Link className={audience === "partner" ? "is-active" : ""} href="/partenaires">
            Pour les partenaires
          </Link>
        </nav>
        <Link className="header-contact" href={audience === "partner" ? "/partenaires#contact" : "/commercants#contact"}>
          {audience === "partner" ? "Accès partenaire" : "Demander une démo"}
        </Link>
      </div>
    </header>
  );
}
