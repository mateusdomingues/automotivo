import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function BeforeAfter() {
  const root = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  useGSAP(() => {
    if (reducedMotion) return
    const config = { trigger: root.current, start: 'top 75%', end: 'bottom 30%', scrub: 1 }
    gsap.fromTo('.comparison__after', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', ease: 'none', scrollTrigger: config })
    gsap.fromTo('.comparison__divider', { left: '0%' }, { left: '100%', ease: 'none', scrollTrigger: config })
  }, { scope: root, dependencies: [reducedMotion] })
  return (
    <section className="comparison section" id="resultados" ref={root}>
      <header className="section-heading shell"><p className="eyebrow">Resultado / 02</p><h2>O mesmo carro.<br /><span>Outra presença.</span></h2></header>
      <div className="comparison__frame shell">
        <img className="comparison__before" src="/images/before.jpg" alt="Automóvel antes do tratamento, com acabamento opaco" loading="lazy" />
        <div className="comparison__after"><img src="/images/after.jpg" alt="Automóvel depois do tratamento, com acabamento brilhante" loading="lazy" /></div>
        <div className="comparison__divider"><span /></div><p className="comparison__label comparison__label--before">Antes</p><p className="comparison__label comparison__label--after">Depois</p>
      </div>
    </section>
  )
}
