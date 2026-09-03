import { whatsappUrl } from '../data/content'

export function FinalCTA() {
  return <section className="final-cta" id="contato"><img src="/images/final.jpg" alt="Automóvel preto completo sob luz de estúdio" loading="lazy" /><div className="final-cta__veil" /><div className="final-cta__content shell"><p className="eyebrow">Blackline / Sua próxima transformação</p><h2>Seu carro merece mais<br />que uma lavagem.</h2><div className="final-cta__bottom"><p>Descubra o verdadeiro potencial dele.</p><a className="button button--light button--whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <span>↗</span></a></div></div></section>
}
