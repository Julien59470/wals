import Image from "next/image";
import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <Link className={`brand-mark${compact ? " brand-mark-compact" : ""}`} href="/" aria-label="WALS, retour à l'accueil"><Image className="brand-logo" src="/wals-logo.png" alt="WALS" width={445} height={181} sizes={compact ? "112px" : "124px"}/></Link>;
}
