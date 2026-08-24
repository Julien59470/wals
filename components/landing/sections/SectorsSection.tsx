import { sectorGroups, sectors } from "@/components/landing/data";

export function SectorsSection() {
  return (
    <section className="sectors-section" data-motion-section>
      <div className="site-container sectors-heading" data-reveal><p className="section-index light">07 / VOTRE TERRAIN DE JEU</p><h2>Commencez là où <span>la récurrence existe déjà.</span></h2><p>WALS cible d'abord les commerces où les visites répétées, la fidélité et les offres locales ont naturellement du sens.</p></div>
      <div className="site-container sector-family-grid">{sectorGroups.map(([title, description], index) => <article key={title} data-reveal><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      <div className="sectors-marquee" aria-hidden="true"><div>{[...sectors, ...sectors].map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}</div></div>
    </section>
  );
}
