import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { processSteps } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Process() {
  const root = useRef<HTMLElement>(null)
  const numberRef = useRef<HTMLSpanElement>(null)
  const reducedMotion = useReducedMotion()
  useGSAP(() => {
    if (reducedMotion) return
    gsap.utils.toArray<HTMLElement>('.process__step').forEach((step, index) => {
      ScrollTrigger.create({ trigger: step, start: 'top center', end: 'bottom center', onToggle: ({ isActive }) => {
        if (isActive && numberRef.current) { numberRef.current.textContent = processSteps[index].number; gsap.fromTo(numberRef.current, { yPercent: 30, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45 }) }
      } })
    })
  }, { scope: root, dependencies: [reducedMotion] })
  return (
    <section className="process section shell" id="processo" ref={root}>
      <div className="process__aside"><p className="eyebrow">Método / 04</p><h2>Nosso processo</h2><span className="process__number" ref={numberRef}>01</span></div>
      <div className="process__steps">{processSteps.map((step) => <article className="process__step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
    </section>
  )
}
