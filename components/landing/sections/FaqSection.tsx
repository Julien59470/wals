import { faqs } from "@/components/landing/data";

export function FaqSection() {
  return (
    <section className="faq-section" data-motion-section>
      <div className="site-container faq-layout">
        <div className="faq-heading" data-reveal><p className="section-index">08 / QUESTIONS REVENDEURS</p><h2>Ce qu'il faut savoir avant l'ouverture.</h2><p>Les principes essentiels sont déjà définis : indépendance commerciale, démonstrations personnalisées et pilotage multi-commerces.</p></div>
        <div className="faq-list" data-reveal>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </div>
    </section>
  );
}
