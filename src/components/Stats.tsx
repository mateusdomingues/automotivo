import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)
const stats = [
  { value: 1800, prefix: '+', suffix: '', label: 'Veículos transformados' },
  { value: 4.9, prefix: '', suffix: ' / 5', label: 'Avaliação média', decimals: 1 },
  { value: 7, prefix: '', suffix: ' anos', label: 'De experiência' },
]

export function Stats() {
  const root = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  useGSAP(() => {
    if (reducedMotion) return
    gsap.utils.toArray<HTMLElement>('.stat__value').forEach((element, index) => {
      const item = stats[index]; const state = { value: 0 }
      gsap.to(state, { value: item.value, duration: 1.7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true }, onUpdate: () => { const number = item.decimals ? state.value.toFixed(item.decimals) : Math.round(state.value).toLocaleString('pt-BR'); element.textContent = `${item.prefix}${number}${item.suffix}` } })
    })
  }, { scope: root, dependencies: [reducedMotion] })
  return <section className="stats shell" ref={root} aria-label="Números da Blackline">{stats.map((stat) => <div className="stat" key={stat.label}><strong className="stat__value">{stat.prefix}{stat.value.toLocaleString('pt-BR')}{stat.suffix}</strong><span>{stat.label}</span></div>)}</section>
}
