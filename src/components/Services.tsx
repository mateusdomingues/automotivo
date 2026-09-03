import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { services } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Services() {
  const root = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  useGSAP(() => {
    if (reducedMotion) return
    gsap.utils.toArray<HTMLElement>('.service').forEach((item, index) => {
      gsap.from(item.querySelector('.service__image img'), { scale: index % 2 ? 1.22 : 1.15, xPercent: index % 2 ? 8 : -8, scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: 1 } })
      gsap.from(item.querySelectorAll('.service__text > *'), { y: 55, opacity: 0, stagger: 0.08, duration: 0.8, scrollTrigger: { trigger: item, start: 'top 72%' } })
    })
  }, { scope: root, dependencies: [reducedMotion] })
  return (
    <section className="services section shell" id="servicos" ref={root}>
      <header className="services__header"><p className="eyebrow">Serviços / 03</p><h2>Nossos serviços</h2><p>Intervenções precisas. Nenhum pacote genérico.</p></header>
      {services.map((service, index) => <article className={`service ${index % 2 ? 'service--reverse' : ''}`} key={service.title}>
        <div className="service__image"><img src={service.image} alt={`${service.title} automotivo Blackline`} loading="lazy" /></div>
        <div className="service__text"><p className="service__number">{service.number}</p><h3>{service.title}</h3><p>{service.description}</p><a href="#contato" className="text-link">Solicitar avaliação</a></div>
      </article>)}
    </section>
  )
}
