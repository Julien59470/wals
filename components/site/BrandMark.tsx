import Image from "next/image";
import Link from "next/link";

export function BrandMark({ compact = false, priority = false, href }: { compact?: boolean; priority?: boolean; href?: string }) {
  const className = `brand-mark${compact ? " brand-mark-compact" : ""}`;
  const image = <Image className="brand-logo" src="/wals-logo.png" alt="WALS" width={445} height={181} priority={priority} sizes={compact ? "112px" : "124px"} />;

  if (href) return <Link className={className} href={href} aria-label="WALS, retour à l'accueil">{image}</Link>;
  return <span className={className}>{image}</span>;
}
