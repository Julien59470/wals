import { CheckIcon } from "@/components/landing/LandingIcons";
import { Iphone, Samsung } from "@/components/landing/ProductDevices";

export function SolutionsSection() {
  return (
    <section id="solutions" className="solutions-section light-section" data-motion-section>
      <div className="site-container">
        <div className="section-intro" data-reveal><p className="section-index">02 / VOTRE GAMME</p><div><h2>Deux solutions à vendre.<br /><span>Un écosystème pour les piloter.</span></h2><p>Construisez une offre adaptée à chaque commerce : fidélité seule, roue seule ou combinaison des deux. WALS Cockpit centralise ensuite vos démonstrations et votre portefeuille.</p></div></div>
        <div className="product-grid">
          <article className="product-card loyalty-card" data-reveal><div className="product-copy"><span className="product-index">01</span><span className="product-tag">WALS FIDÉLITÉ</span><h3>Une fidélité digitale que le commerçant comprend en quelques secondes.</h3><p>Carte personnalisée dans Apple Wallet ou Google Wallet, points ou tampons, progression, récompenses et identité visuelle du commerce.</p><div className="product-points"><span><CheckIcon /> Démo personnalisable</span><span><CheckIcon /> Points & tampons</span><span><CheckIcon /> Wallet mobile</span></div></div><div className="product-visual loyalty-visual"><Iphone compact /><div className="visual-callout callout-one"><b>7/10</b><span>Tampons</span></div></div></article>
          <article className="product-card play-card" data-reveal><div className="product-copy"><span className="product-index">02</span><span className="product-tag orange">WALS PLAY</span><h3>Une expérience qui arrête le regard et rend la démo mémorable.</h3><p>Le prospect scanne un QR code, la roue tourne et l'expérience devient immédiatement concrète : gains, coupons, règles, limites et branding.</p><div className="product-points"><span><CheckIcon /> QR immédiat</span><span><CheckIcon /> Gains & coupons</span><span><CheckIcon /> Règles configurables</span></div></div><div className="product-visual play-visual"><Samsung compact /><div className="visual-callout callout-two"><b>Café offert</b><span>Exemple de gain</span></div></div></article>
        </div>
      </div>
    </section>
  );
}
