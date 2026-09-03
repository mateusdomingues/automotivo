import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Statement() {
  const root = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  useGSAP(() => {
    if (reducedMotion) return
    gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 65%', end: 'bottom 55%', scrub: 0.8 } })
      .from('.statement__line--one', { xPercent: -35, opacity: 0 }).from('.statement__line--two', { xPercent: 35, opacity: 0 }, '<0.15').from('.statement__line--three', { yPercent: 80, opacity: 0 }, '<0.15').to('.statement__image', { scale: 1.08 }, 0)
  }, { scope: root, dependencies: [reducedMotion] })
  return <section className="statement" ref={root}><img className="statement__image" src="/images/statement.jpg" alt="Detalhe de farol e pintura automotiva sob luz dramática" loading="lazy" /><div className="statement__veil" /><p className="statement__line statement__line--one">Detalhe</p><p className="statement__line statement__line--two">não é excesso.</p><p className="statement__line statement__line--three">É padrão.</p></section>
}
