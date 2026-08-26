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
          <div className="bo-hero-copy gateway-copy" data-reveal><div className="bo-dev-note"><i/> Plateforme en cours de développement</div><p className="gateway-kicker">UNE PLATEFORME · DEUX PARCOURS</p><h1>Comment voulez-vous <span>utiliser WALS ?</span></h1><p className="gateway-lead">WALS n'est pas encore ouvert. Nous construisons une même technologie de fidélité digitale avec deux expériences distinctes : une pour les commerces, une pour les futurs partenaires et revendeurs.</p>
            <div id="choix" className="gateway-choice-grid"><Link className="gateway-choice" href="/commercants"><div><small>JE SUIS COMMERÇANT</small><strong>Je veux faire revenir mes clients.</strong><p>Découvrez le futur parcours Wallet, récompenses, engagement et suivi client.</p></div><b>Découvrir le parcours commerce →</b></Link><Link className="gateway-choice" href="/partenaires"><div><small>JE SUIS PARTENAIRE / REVENDEUR</small><strong>Je veux proposer ma propre solution.</strong><p>Découvrez la future marque blanche, les démos et le cockpit commercial.</p></div><b>Découvrir le parcours partenaire →</b></Link></div>
          </div>
          <div className="gateway-devices" data-reveal><Iphone/><Samsung/><div className="gateway-float is-wallet"><strong>Fidélité dans le téléphone</strong><span>Aperçu de l'expérience client</span></div><div className="gateway-float is-business"><strong>Votre marque devant</strong><span>Vision du futur parcours partenaire</span></div></div>
        </div>
      </section>
      <section className="gateway-explain" data-motion-section><div className="site-container gateway-explain-grid"><div data-reveal><p className="section-index">WALS · EN DÉVELOPPEMENT</p><h2>Deux besoins. <span>Une même technologie.</span></h2></div><div className="gateway-explain-copy"><article data-reveal><small>POUR LES COMMERCES</small><h3>Fidéliser directement.</h3><p>Le futur espace commerçant réunira l'expérience de fidélité, les récompenses, les communications et les outils de suivi prévus pour l'établissement.</p></article><article data-reveal><small>POUR LES PARTENAIRES</small><h3>Construire une offre.</h3><p>Le futur parcours partenaire permettra de préparer sa marque, ses prospects, ses tarifs de revente, ses clients et son activité depuis un cockpit dédié.</p></article></div></div></section>
    </main><SiteFooter/>
  </div>;
}
