export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-mark" aria-label="WALS">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M4.5 7.5 8.9 20h2.6l2.75-7.2L17.1 20h2.6l3.8-12.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {!compact && <span className="brand-word">WALS</span>}
    </div>
  );
}
