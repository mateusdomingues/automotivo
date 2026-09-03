import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { whatsappUrl } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(() => {
    if (reducedMotion) return
    gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1 } })
      .to('.hero__copy', { yPercent: -30, opacity: 0, ease: 'none' }, 0)
      .to('.hero__car', { scale: 1.18, yPercent: 4, ease: 'none' }, 0)
      .to('.hero__shade', { opacity: 0.2, ease: 'none' }, 0)
      .to('.hero__scroll', { opacity: 0, ease: 'none' }, 0)
  }, { scope: root, dependencies: [reducedMotion] })

  return (
    <section className="hero" id="inicio" ref={root}>
      <div className="hero__media">
        <img className="hero__car" src="/images/hero.jpg" alt="Automóvel esportivo preto em estúdio" fetchPriority="high" />
        <div className="hero__shade" />
      </div>
      <div className="hero__copy shell">
        <p className="eyebrow">Blackline / Estética automotiva</p>
        <h1><span>Não lavamos carros.</span><span>Restauramos presença.</span></h1>
        <div className="hero__bottom">
          <p>Detailing automotivo de alto padrão para quem percebe a diferença nos detalhes.</p>
          <div className="hero__actions">
            <a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar avaliação <span>↗</span></a>
            <a className="text-link" href="#processo">Conhecer o processo</a>
          </div>
        </div>
      </div>
      <a className="hero__scroll" href="#historia"><span /> Role para explorar</a>
      <p className="hero__index">BL / 001</p>
    </section>
  )
}
