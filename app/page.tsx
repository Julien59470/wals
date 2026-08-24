import { BrandMark } from "@/components/landing/BrandMark";
import { HeroVisual } from "@/components/landing/HeroVisual";
import { PartnerLeadForm } from "@/components/landing/PartnerLeadForm";

const platformFeatures = [
  { number: "01", title: "Préparez votre démonstration", text: "Créez en quelques instants une expérience personnalisée au nom du commerce avant même d’entrer chez le prospect." },
  { number: "02", title: "Présentez-la sur le terrain", text: "Un QR code suffit pour montrer concrètement la fidélité ou la roue digitale depuis le téléphone du commerçant." },
  { number: "03", title: "Activez le commerce", text: "Personnalisez les règles, les récompenses et le branding puis centralisez tous vos clients dans le même espace." },
  { number: "04", title: "Pilotez votre portefeuille", text: "Suivez l’activité de chaque commerce, repérez les comptes à relancer et gardez une vision claire de votre activité." },
];

const cockpitFeatures = [
  ["Multi-commerces", "Gérez tous vos clients depuis un seul tableau de bord."],
  ["Démos personnalisées", "Présentez quelque chose de concret, immédiatement aux couleurs du prospect."],
  ["QR codes", "Générez les accès nécessaires pour chaque expérience et chaque établissement."],
  ["Suivi d’activité", "Scans, utilisations, membres, gains et tendances accessibles en un coup d’œil."],
  ["Parrainage démarcheurs", "Préparez un canal d’acquisition basé sur la recommandation entre partenaires."],
  ["Évolutif", "Une architecture prête pour le dashboard, les abonnements, les équipes et les intégrations futures."],
];

const segments = ["Boulangeries", "Barbers", "Restaurants", "Coffee shops", "Instituts", "Commerces locaux"];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#fbfcfa] text-[#17201a]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.045] bg-[#fbfcfa]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1220px] items-center justify-between px-5 sm:px-7">
          <a href="#top" aria-label="Accueil WALS"><BrandMark /></a>
          <nav className="hidden items-center gap-7 text-[13px] font-bold text-[#617068] md:flex">
            <a className="transition hover:text-[#17201a]" href="#plateforme">La plateforme</a>
            <a className="transition hover:text-[#17201a]" href="#solutions">Solutions</a>
            <a className="transition hover:text-[#17201a]" href="#demarcheurs">Pour les démarcheurs</a>
            <a className="transition hover:text-[#17201a]" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="rounded-xl bg-[#17201a] px-4 py-2.5 text-[12px] font-black text-white transition hover:bg-[#2a382e] sm:px-5">Demander un accès</a>
        </div>
      </header>

      <section id="top" className="relative px-5 pb-20 pt-[138px] sm:px-7 sm:pb-28 sm:pt-[160px]">
        <div className="hero-grid absolute inset-x-0 top-0 h-[690px] opacity-60" />
        <div className="relative z-10 mx-auto max-w-[1060px] text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#bdd5b5]/70 bg-[#f1f8ed] px-3 py-1.5 text-[11px] font-black text-[#4c6c45]"><span className="size-1.5 rounded-full bg-[#70a363]" />Pensé pour les démarcheurs indépendants et les agences</div>
          <h1 className="mx-auto max-w-[950px] text-[46px] font-black leading-[0.98] tracking-[-0.065em] text-[#111815] sm:text-[64px] lg:text-[82px]">Faites grandir les commerces. <span className="text-[#779f6a]">Développez votre activité.</span></h1>
          <p className="mx-auto mt-7 max-w-[700px] text-[16px] font-medium leading-7 text-[#66736b] sm:text-[18px] sm:leading-8">WALS réunit les outils nécessaires pour présenter, personnaliser et gérer vos solutions digitales auprès des commerçants — depuis une seule plateforme.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="min-w-[190px] rounded-2xl bg-[#17201a] px-6 py-4 text-sm font-black text-white shadow-[0_18px_35px_rgba(23,32,26,.14)] transition hover:-translate-y-0.5 hover:bg-[#2a382e]">Demander un accès</a>
            <a href="#plateforme" className="min-w-[190px] rounded-2xl border border-black/[0.08] bg-white px-6 py-4 text-sm font-black text-[#263029] transition hover:-translate-y-0.5 hover:border-black/[0.13]">Découvrir la plateforme</a>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-bold text-[#7a867e]"><span>✓ Fidélité digitale</span><span>✓ Roue digitale</span><span>✓ Gestion multi-commerces</span><span>✓ Démonstrations terrain</span></div>
        </div>
        <div className="relative z-10 mx-auto mt-16 max-w-[1240px] sm:mt-20"><HeroVisual /></div>
      </section>

      <section className="border-y border-black/[0.05] bg-white px-5 py-7 sm:px-7">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-5 md:flex-row"><p className="text-[11px] font-black uppercase tracking-[.18em] text-[#8d978f]">Pensé pour les commerces qui vivent du retour client</p><div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] font-extrabold text-[#3b493f]">{segments.map((segment) => <span key={segment}>{segment}</span>)}</div></div>
      </section>

      <section id="solutions" className="px-5 py-24 sm:px-7 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[720px]"><p className="eyebrow">Deux solutions. Une plateforme.</p><h2 className="section-title mt-4">Vendez ce qui correspond réellement au commerce.</h2><p className="section-copy mt-5">La fidélité et la roue sont deux modules totalement indépendants. Un commerce peut utiliser l’un, l’autre, ou les deux — sans parcours imposé au client final.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="module-card module-loyalty">
              <div className="relative z-10 max-w-[430px]"><span className="module-chip">FIDÉLITÉ DIGITALE</span><h3 className="mt-5 text-[34px] font-black leading-[1.02] tracking-[-0.055em] sm:text-[42px]">Toujours dans la poche du client.</h3><p className="mt-4 max-w-[390px] text-sm font-medium leading-6 text-[#66736b]">Programme de points ou tampons, récompenses et expérience mobile pensée pour Apple Wallet et Google Wallet.</p></div>
              <div className="loyalty-demo mt-10"><div className="wallet-card wallet-card-back" /><div className="wallet-card wallet-card-main"><div className="flex items-start justify-between"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-white/55">Le Fournil</p><p className="mt-1 text-[16px] font-black text-white">Carte fidélité</p></div><span className="rounded-full bg-white/12 px-2.5 py-1 text-[9px] font-black text-white">8 / 10</span></div><div className="mt-8 grid grid-cols-5 gap-2">{Array.from({ length: 10 }).map((_, index) => <span key={index} className={`grid aspect-square place-items-center rounded-full border text-[10px] ${index < 8 ? "border-white/40 bg-white text-[#52704a]" : "border-white/20 bg-white/5 text-white/40"}`}>{index < 8 ? "✓" : ""}</span>)}</div><p className="mt-4 text-[10px] font-bold text-white/65">Plus que 2 passages avant votre récompense</p></div><div className="wallet-badge wallet-badge-one">Apple Wallet</div><div className="wallet-badge wallet-badge-two">Google Wallet</div></div>
            </article>
            <article className="module-card module-wheel">
              <div className="relative z-10 max-w-[430px]"><span className="module-chip bg-white/80">ROUE DIGITALE</span><h3 className="mt-5 text-[34px] font-black leading-[1.02] tracking-[-0.055em] sm:text-[42px]">Une expérience qui se comprend en un scan.</h3><p className="mt-4 max-w-[390px] text-sm font-medium leading-6 text-[#66736b]">QR code, gains ou pertes, coupons, probabilités, limites de lots et suivi d’utilisation dans une expérience entièrement personnalisable.</p></div>
              <div className="wheel-demo mt-8"><div className="wheel-disc"><div className="wheel-center">W</div><span className="wheel-pointer" /></div><div className="wheel-reward"><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#89938c]">Exemple de gain</p><p className="mt-1 text-[15px] font-black text-[#17201a]">-10 % à la prochaine visite</p><p className="mt-1 text-[10px] font-semibold text-[#6f7b73]">Coupon unique · 10 jours</p></div></div>
            </article>
          </div>
        </div>
      </section>

      <section id="plateforme" className="bg-[#17201a] px-5 py-24 text-white sm:px-7 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="eyebrow text-[#a8ca9d]">Votre méthode de vente, structurée.</p><h2 className="mt-4 text-[40px] font-black leading-[1] tracking-[-0.06em] sm:text-[54px]">Du premier prospect au portefeuille actif.</h2></div><p className="max-w-[600px] text-[15px] font-medium leading-7 text-white/58 lg:justify-self-end">WALS est pensé pour réduire la friction sur le terrain : préparer vite, montrer concrètement, activer proprement et conserver une vision claire de chaque commerce.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">{platformFeatures.map((feature) => <article key={feature.number} className="bg-[#17201a] p-6 sm:p-7"><span className="text-[11px] font-black text-[#a8ca9d]">{feature.number}</span><h3 className="mt-8 text-[19px] font-black tracking-[-0.035em]">{feature.title}</h3><p className="mt-3 text-[13px] font-medium leading-6 text-white/50">{feature.text}</p></article>)}</div>
        </div>
      </section>

      <section id="demarcheurs" className="px-5 py-24 sm:px-7 sm:py-32">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
          <div><p className="eyebrow">Votre cockpit</p><h2 className="section-title mt-4">Toute votre activité dans le même espace.</h2><p className="section-copy mt-5">La technologie visible par le commerce n’est qu’une partie du produit. Le cœur de WALS est l’espace qui permet au démarcheur de gérer ses prospects, ses clients et leur activité sans multiplier les outils.</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{cockpitFeatures.map(([title, text]) => <div key={title} className="rounded-2xl border border-black/[0.065] bg-white p-4"><div className="mb-3 flex items-center gap-2"><span className="size-2 rounded-full bg-[#86ad7b]" /><h3 className="text-[13px] font-black text-[#243029]">{title}</h3></div><p className="text-[11px] font-medium leading-5 text-[#7a857e]">{text}</p></div>)}</div></div>
          <div className="relative min-h-[560px] overflow-hidden rounded-[34px] bg-[#edf5e9] p-5 sm:p-8">
            <div className="absolute -right-20 -top-24 size-[300px] rounded-full bg-white/65 blur-2xl" />
            <div className="relative z-10 rounded-[24px] bg-white p-4 shadow-[0_24px_80px_rgba(41,66,47,.12)] sm:p-5"><div className="flex items-center justify-between border-b border-black/[0.06] pb-4"><div><p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#8b968e]">Prospection</p><p className="mt-1 text-[16px] font-black text-[#1c2720]">Pipeline terrain</p></div><span className="rounded-xl bg-[#17201a] px-3 py-2 text-[9px] font-black text-white">+ Prospect</span></div><div className="mt-4 grid gap-3 sm:grid-cols-3">{[["À visiter", "12", ["Chez Marcel", "Le Zinc", "Studio Mia"]],["Démo réalisée", "7", ["L’Atelier", "Casa Verde", "Miro"]],["Clients", "4", ["Le Fournil", "Nova Beauty", "Barber 22"]]].map(([label,count,names]) => <div key={String(label)} className="rounded-2xl bg-[#f6f8f5] p-3"><div className="flex items-center justify-between"><p className="text-[9px] font-black text-[#69746d]">{label as string}</p><span className="grid size-5 place-items-center rounded-full bg-white text-[9px] font-black text-[#344039]">{count as string}</span></div><div className="mt-3 space-y-2">{(names as string[]).map((name,index) => <div key={name} className="rounded-xl border border-black/[0.04] bg-white p-2.5"><div className="flex items-center gap-2"><span className={`size-2 rounded-full ${index===0?"bg-[#87ae7c]":index===1?"bg-[#e2b86f]":"bg-[#90a5c6]"}`} /><span className="truncate text-[9px] font-extrabold text-[#303b34]">{name}</span></div><div className="mt-2 h-1.5 rounded-full bg-[#eff1ef]"><div className="h-full rounded-full bg-[#c7dabe]" style={{ width: `${72-index*17}%` }} /></div></div>)}</div></div>)}</div></div>
            <div className="relative z-20 ml-auto mt-5 max-w-[360px] rounded-[22px] bg-[#17201a] p-5 text-white shadow-[0_24px_60px_rgba(23,32,26,.2)]"><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#a8ca9d]">À surveiller</p><p className="mt-2 text-[16px] font-black tracking-[-0.03em]">3 commerces moins actifs cette semaine</p><div className="mt-4 flex items-center justify-between rounded-xl bg-white/7 px-3 py-2.5"><span className="text-[10px] font-bold text-white/70">Relance suggérée</span><span className="rounded-lg bg-[#ddefd8] px-2 py-1 text-[9px] font-black text-[#2f482c]">Voir</span></div></div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-7 sm:pb-32"><div className="mx-auto max-w-[1180px] overflow-hidden rounded-[34px] bg-[#f0f7ec] px-6 py-12 sm:px-10 lg:px-14 lg:py-16"><div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center"><div><p className="eyebrow">Une activité qui reste la vôtre.</p><h2 className="mt-4 max-w-[630px] text-[38px] font-black leading-[1.02] tracking-[-0.055em] sm:text-[50px]">La plateforme doit servir votre développement, pas vous enfermer.</h2><p className="mt-5 max-w-[590px] text-sm font-medium leading-7 text-[#637068]">Le modèle économique partenaire est encore à finaliser. L’architecture est volontairement conçue pour supporter ensuite plusieurs options : abonnement, commissions éventuelles, paliers d’offres, marque blanche ou gestion d’équipe.</p></div><div className="grid gap-3 sm:grid-cols-2"><div className="rounded-[22px] bg-white p-5 shadow-[0_14px_35px_rgba(39,61,44,.06)]"><span className="grid size-9 place-items-center rounded-xl bg-[#edf6e9] text-sm font-black text-[#56784e]">↗</span><h3 className="mt-5 text-[15px] font-black">Parrainage entre démarcheurs</h3><p className="mt-2 text-[11px] font-medium leading-5 text-[#77827a]">Une mécanique prévue pour recommander la plateforme à d’autres partenaires et récompenser les parrainages réellement actifs.</p></div><div className="rounded-[22px] bg-[#17201a] p-5 text-white shadow-[0_14px_35px_rgba(23,32,26,.12)]"><span className="grid size-9 place-items-center rounded-xl bg-white/10 text-sm font-black">∞</span><h3 className="mt-5 text-[15px] font-black">Pensé pour évoluer</h3><p className="mt-2 text-[11px] font-medium leading-5 text-white/52">Équipes, paiements, intégrations caisse, nouveaux services et fonctionnalités commerciales pourront s’ajouter sur la même base.</p></div></div></div></div></section>

      <section id="contact" className="border-t border-black/[0.05] bg-white px-5 py-24 sm:px-7 sm:py-32"><div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div className="lg:sticky lg:top-28"><p className="eyebrow">Accès partenaire</p><h2 className="section-title mt-4">Construisez votre prochaine offre avec WALS.</h2><p className="section-copy mt-5">La vitrine est la première étape. La plateforme complète sera construite sur la même base technique avec un espace dédié aux démarcheurs, aux commerces et aux futurs modules métier.</p><div className="mt-8 space-y-4 text-[13px] font-bold text-[#56635b]"><div className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-[#edf6e9] text-[#5f8456]">✓</span>Architecture prête pour le SaaS complet</div><div className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-[#edf6e9] text-[#5f8456]">✓</span>Fidélité et roue totalement indépendantes</div><div className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-[#edf6e9] text-[#5f8456]">✓</span>Pensé pour la prospection et la gestion multi-clients</div></div></div><PartnerLeadForm /></div></section>

      <footer className="border-t border-black/[0.06] bg-[#fbfcfa] px-5 py-10 sm:px-7"><div className="mx-auto flex max-w-[1180px] flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><BrandMark /><p className="mt-4 max-w-[400px] text-[12px] font-medium leading-5 text-[#7d8881]">La plateforme pensée pour les démarcheurs et agences qui accompagnent les commerces dans leur croissance digitale.</p></div><div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-bold text-[#77827b]"><a href="#plateforme">Plateforme</a><a href="#solutions">Solutions</a><a href="#demarcheurs">Démarcheurs</a><a href="#contact">Contact</a></div></div><div className="mx-auto mt-8 flex max-w-[1180px] flex-col gap-2 border-t border-black/[0.05] pt-6 text-[10px] font-semibold text-[#9aa39d] sm:flex-row sm:items-center sm:justify-between"><p>© 2026 WALS. Tous droits réservés.</p><p>Vitrine en cours de développement · Plateforme à venir</p></div></footer>
    </main>
  );
}
