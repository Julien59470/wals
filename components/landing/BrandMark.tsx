export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5" aria-label="WALS">
      <span className="grid size-9 place-items-center rounded-[12px] bg-[#111815] text-white shadow-[0_8px_25px_rgba(17,24,21,.14)]">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
          <path d="M4 7.5 7.6 17h2.2l2.25-5.8L14.3 17h2.2L20 7.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {!compact && <span className="text-[1.05rem] font-black tracking-[-0.04em] text-[#111815]">WALS</span>}
    </div>
  );
}
