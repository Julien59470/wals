import type { ReactNode } from "react";

import { BrandMark } from "@/components/site/BrandMark";
import { SiteFooter } from "@/components/site/SiteFooter";

export function LegalPageShell({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <main className={`legal-page ${className}`.trim()}>
        <div className="legal-shell">
          <BrandMark />
          <span className="eyebrow dark">{eyebrow}</span>
          <h1>{title}</h1>
          <div className="legal-intro">{intro}</div>
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
