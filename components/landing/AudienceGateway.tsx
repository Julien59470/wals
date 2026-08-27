import Link from "next/link";

import { AudienceHeader } from "@/components/landing/AudienceHeader";
import { MotionExperience } from "@/components/landing/MotionExperience";
import { Iphone, Samsung } from "@/components/landing/ProductDevices";
import { SiteFooter } from "@/components/site/SiteFooter";

export function AudienceGateway() {
  return (
    <div className="site-shell bo-site">
      <MotionExperience/>
      <AudienceHeader/>
      <main>
        <section id="top" className="bo-hero gateway-hero ux-gateway-hero" data-motion-section>
          <div className="bo-hero-grid-bg"/>
          <div className="bo-hero-glow bo-hero-glow-a"/>
          <div className="bo-hero-glow bo-hero-glow-b"/>
          <div className="site-container bo-hero-layout">
            <div className="bo-hero-copy gateway-copy" data-reveal>
              <div className="bo-dev-note"><i/> Ouverture prochaine</div>
              <p className="gateway-kicker">UNE PLATEFORME · DEUX PARCOURS</p>
              <h1>Que souhaitez-vous faire <span>avec WALS ?</span></h1>
              <p className="gateway-lead ux-gateway-lead">Choisissez le parcours qui correspond à votre activité.</p>

              <div id="choix" className="gateway-choice-grid ux-gateway-choices">
                <Link className="gateway-choice" href="/commercants">
                  <div>
                    <small>JE SUIS COMMERÇANT</small>
                    <strong>Je veux faire revenir mes clients.</strong>
                    <p>Fidélisez, récompensez et communiquez avec vos clients depuis un seul espace.</p>
                  </div>
                  <b>Découvrir le parcours commerce →</b>
                </Link>
                <Link className="gateway-choice" href="/partenaires">
                  <div>
                    <small>JE SUIS PARTENAIRE / REVENDEUR</small>
                    <strong>Je veux développer mon activité.</strong>
                    <p>Proposez la fidélité digitale aux commerces sous votre identité et pilotez votre activité depuis votre espace partenaire.</p>
                  </div>
                  <b>Découvrir le parcours partenaire →</b>
                </Link>
              </div>
            </div>

            <div className="gateway-devices ux-gateway-devices" data-reveal>
              <Iphone/>
              <Samsung/>
              <div className="gateway-float ux-gateway-benefit is-wallet">
                <strong>Apple Wallet + Google Wallet</strong>
                <span>Une carte de fidélité toujours accessible.</span>
              </div>
              <div className="gateway-float ux-gateway-benefit is-reward">
                <strong>Des récompenses qui donnent envie de revenir</strong>
                <span>Une progression claire, directement dans le téléphone.</span>
              </div>
              <div className="gateway-float ux-gateway-benefit is-business">
                <strong>À votre image</strong>
                <span>Personnalisez l'expérience sous votre identité.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gateway-explain ux-gateway-explain" data-motion-section>
          <div className="site-container gateway-explain-grid">
            <div data-reveal>
              <p className="section-index">WALS · DEUX PARCOURS</p>
              <h2>Deux objectifs. <span>Une technologie pour les atteindre.</span></h2>
            </div>
            <div className="gateway-explain-copy">
              <article data-reveal>
                <small>POUR LES COMMERCES</small>
                <h3>Faites revenir vos clients.</h3>
                <p>Fidélisez, récompensez et communiquez avec vos clients depuis un seul espace. Une expérience simple, directement accessible depuis leur téléphone.</p>
                <strong className="ux-path-proof">Plus de fidélité. Plus de visites. Plus de valeur client.</strong>
              </article>
              <article data-reveal>
                <small>POUR LES PARTENAIRES</small>
                <h3>Développez votre propre activité.</h3>
                <p>Proposez la fidélité digitale aux commerces sous votre identité. Gérez vos prospects, vos clients et vos tarifs depuis votre espace partenaire.</p>
                <strong className="ux-path-proof">Votre marque. Vos clients. Vos revenus.</strong>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter/>
    </div>
  );
}
