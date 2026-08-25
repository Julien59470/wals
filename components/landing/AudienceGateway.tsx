import Link from "next/link";

import { AudienceHeader } from "@/components/landing/AudienceHeader";
import { MotionExperience } from "@/components/landing/MotionExperience";
import { Iphone, Samsung } from "@/components/landing/ProductDevices";
import { SiteFooter } from "@/components/site/SiteFooter";

export function AudienceGateway() {
  return <div className="site-shell bo-site"><MotionExperience/><AudienceHeader/>
    <main>
      <section id="top" className="bo-hero gateway-hero" data-motion-section>
        <div className="bo-hero-grid-bg"/><div className="bo-hero-glow bo-hero-glow-a"/><div className="bo-hero-glow bo-hero-glow-b"/>
        <div className="site-container bo-hero-layout">
          <div className="bo-hero-copy gateway-copy" data-reveal><div className="bo-dev-note"><i/> En cours de développement</div><p className="gateway-kicker">UNE PLATEFORME · DEUX PARCOURS</p><h1>Comment voulez-vous <span>utiliser WALS ?</span></h1><p className="gateway-lead">La même technologie de fidélité digitale, avec deux expériences distinctes : une pour les commerces qui veulent fidéliser leurs clients, une pour les partenaires qui veulent construire leur propre offre.</p>
            <div id="choix" className="gateway-choice-grid"><Link className="gateway-choice" href="/commercants"><div><small>JE SUIS COMMERÇANT</small><strong>Je veux faire revenir mes clients.</strong><p>Carte Wallet, récompenses, engagement et suivi client.</p></div><b>Découvrir le parcours commerce →</b></Link><Link className="gateway-choice" href="/partenaires"><div><small>JE VEUX REVENDEUR / PARTENAIRE</small><strong>Je veux proposer ma propre solution.</strong><p>Marque blanche, démos, cockpit commercial et tarifs libres.</p></div><b>Découvrir le parcours partenaire →</b></Link></div>
          </div>
          <div className="gateway-devices" data-reveal><Iphone/><Samsung/><div className="gateway-float is-wallet"><strong>Fidélité dans le téléphone</strong><span>Expérience client côté commerce</span></div><div className="gateway-float is-business"><strong>Votre marque devant</strong><span>Infrastructure WALS derrière</span></div></div>
        </div>
      </section>
      <section className="gateway-explain" data-motion-section><div className="site-container gateway-explain-grid"><div data-reveal><p className="section-index">WALS</p><h2>Deux besoins. <span>Une même technologie.</span></h2></div><div className="gateway-explain-copy"><article data-reveal><small>POUR LES COMMERCES</small><h3>Fidéliser directement.</h3><p>WALS présente au commerçant l'expérience de fidélité, les récompenses, les communications et les outils de suivi prévus pour son établissement.</p></article><article data-reveal><small>POUR LES PARTENAIRES</small><h3>Construire une offre.</h3><p>Le partenaire retrouve le positionnement historique WALS : sa marque, ses prospects, ses prix, ses clients et un cockpit pour développer son activité.</p></article></div></div></section>
    </main><SiteFooter/>
  </div>;
}
