const merchants = [
  { name: "Le Fournil", kind: "Boulangerie", value: "34", tone: "bg-[#f0f8e6]" },
  { name: "Atelier 17", kind: "Barber", value: "21", tone: "bg-[#eef4ff]" },
  { name: "Casa Mia", kind: "Restaurant", value: "18", tone: "bg-[#fff4e8]" },
];

export function HeroVisual() {
  return (
    <div className="hero-stage relative mx-auto w-full max-w-[1160px]">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="dashboard-shell relative z-10 overflow-hidden rounded-[30px] border border-black/[0.07] bg-white shadow-[0_40px_110px_rgba(27,50,37,.15)]">
        <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-[#ff7d71]" /><span className="size-2.5 rounded-full bg-[#ffc95e]" /><span className="size-2.5 rounded-full bg-[#85d392]" /></div>
          <div className="hidden rounded-full border border-black/[0.06] bg-[#f8faf8] px-6 py-1.5 text-[11px] font-semibold text-[#7c877f] sm:block">app.wals.fr</div>
          <span className="rounded-full bg-[#edf8e6] px-3 py-1 text-[10px] font-bold text-[#45643e]">ESPACE PARTENAIRE</span>
        </div>
        <div className="grid min-h-[510px] grid-cols-1 lg:grid-cols-[190px_1fr]">
          <aside className="hidden border-r border-black/[0.06] bg-[#fbfcfb] p-5 lg:block">
            <div className="mb-8 flex items-center gap-2.5"><span className="grid size-8 place-items-center rounded-xl bg-[#111815] text-xs font-black text-white">W</span><span className="font-black tracking-[-0.03em]">WALS</span></div>
            <div className="space-y-2 text-[12px] font-semibold text-[#7a847d]">
              <div className="rounded-xl bg-[#edf7e8] px-3 py-2.5 text-[#26372d]">Vue d’ensemble</div><div className="px-3 py-2.5">Mes commerces</div><div className="px-3 py-2.5">Prospection</div><div className="px-3 py-2.5">Démonstrations</div><div className="px-3 py-2.5">Fidélité</div><div className="px-3 py-2.5">Roue digitale</div>
            </div>
          </aside>
          <div className="min-w-0 bg-[#f7f9f6] p-4 sm:p-6 lg:p-7">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div><p className="mb-1 text-[11px] font-bold uppercase tracking-[.16em] text-[#90a095]">Lundi 24 août</p><h3 className="text-[22px] font-black tracking-[-0.045em] text-[#17201a] sm:text-[26px]">Bonjour, voici votre activité.</h3></div>
              <button className="rounded-xl bg-[#17201a] px-4 py-2.5 text-[11px] font-bold text-white" type="button">+ Nouveau commerce</button>
            </div>
            <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {[["Commerces actifs", "42", "+6 ce mois"],["Prospects", "128", "18 à relancer"],["Scans ce mois", "8 420", "+18,4 %"],["Démos créées", "31", "7 cette semaine"]].map(([label,value,note]) => (
                <div key={label} className="rounded-2xl border border-black/[0.05] bg-white p-4"><p className="text-[10px] font-semibold text-[#8a958e]">{label}</p><p className="mt-2 text-[25px] font-black tracking-[-0.05em] text-[#17201a]">{value}</p><p className="mt-1 text-[9px] font-bold text-[#5f8657]">{note}</p></div>
              ))}
            </div>
            <div className="grid gap-4 xl:grid-cols-[1.25fr_.75fr]">
              <div className="rounded-2xl border border-black/[0.05] bg-white p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between"><div><p className="text-[10px] font-semibold text-[#8a958e]">Portefeuille</p><p className="mt-1 text-[15px] font-black tracking-[-0.03em] text-[#17201a]">Commerces les plus actifs</p></div><span className="text-[10px] font-bold text-[#637069]">Voir tout</span></div>
                <div className="space-y-2.5">{merchants.map((merchant) => <div key={merchant.name} className="grid grid-cols-[42px_1fr_auto] items-center gap-3 rounded-2xl border border-black/[0.045] p-2.5"><span className={`grid size-10 place-items-center rounded-xl ${merchant.tone} text-[11px] font-black text-[#36463b]`}>{merchant.name.slice(0,1)}</span><div className="min-w-0"><p className="truncate text-[12px] font-extrabold text-[#202a23]">{merchant.name}</p><p className="text-[9px] font-medium text-[#8d978f]">{merchant.kind}</p></div><div className="text-right"><p className="text-[12px] font-black text-[#202a23]">{merchant.value}</p><p className="text-[8px] text-[#8d978f]">actions/j</p></div></div>)}</div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-black/[0.05] bg-[#17201a] p-5 text-white">
                <div className="absolute -right-7 -top-8 size-28 rounded-full bg-[#dff8cf]/10" /><p className="text-[9px] font-bold uppercase tracking-[.14em] text-white/50">Démo express</p><h4 className="mt-2 max-w-[190px] text-[18px] font-black leading-[1.05] tracking-[-0.045em]">Un commerce. Une démo. Quelques secondes.</h4>
                <div className="mt-5 rounded-2xl bg-white p-3 text-[#17201a] shadow-xl"><div className="flex items-center justify-between"><div><p className="text-[9px] font-bold text-[#879189]">LE FOURNIL</p><p className="text-[12px] font-black">Programme fidélité</p></div><span className="grid size-8 place-items-center rounded-full bg-[#dff4d5] text-[11px] font-black">8/10</span></div><div className="mt-3 grid grid-cols-10 gap-1">{Array.from({length:10}).map((_,index)=><span key={index} className={`h-2 rounded-full ${index < 8 ? "bg-[#91c77f]" : "bg-[#e8ece8]"}`} />)}</div></div>
                <button type="button" className="mt-4 w-full rounded-xl bg-[#dff4d5] py-2.5 text-[10px] font-black text-[#26372d]">Créer une démo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-card floating-card-left hidden sm:block"><span className="mb-3 grid size-9 place-items-center rounded-xl bg-[#eef8e9] text-[17px]">◎</span><p className="text-[10px] font-semibold text-[#8d978f]">Nouveau prospect</p><p className="mt-1 text-[13px] font-black text-[#1c2720]">Maison Églantine</p><p className="mt-1 text-[9px] font-bold text-[#6b9361]">Démo prête à présenter</p></div>
      <div className="floating-card floating-card-right hidden sm:block"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-[#17201a] text-[14px] font-black text-white">+1</span><div><p className="text-[10px] font-semibold text-[#8d978f]">Nouveau commerce</p><p className="text-[13px] font-black text-[#1c2720]">Client activé</p></div></div></div>
    </div>
  );
}
