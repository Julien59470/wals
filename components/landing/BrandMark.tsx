export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-mark${compact ? " brand-mark-compact" : ""}`} aria-label="WALS">
      <img
        className="brand-logo"
        src="/wals-logo.png"
        alt="WALS"
        width={445}
        height={181}
        draggable={false}
      />
    </span>
  );
}
