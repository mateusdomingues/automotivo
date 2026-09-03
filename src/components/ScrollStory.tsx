import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const phases = [
  ['Precisão em cada centímetro.', 'Cada superfície pede uma leitura diferente.'],
  ['01 — Pintura', 'Recuperamos profundidade, brilho e reflexo.'],
  ['02 — Proteção', 'Tecnologia aplicada para preservar cada superfície.'],
  ['03 — Acabamento', 'É nos detalhes que um bom trabalho se torna excepcional.'],
  ['O resultado não precisa de explicação.', 'Ele aparece antes de qualquer palavra.'],
]

export function ScrollStory() {
  const root = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(() => {
    if (reducedMotion) return
    const panels = gsap.utils.toArray<HTMLElement>('.story__phase')
    gsap.set(panels.slice(1), { autoAlpha: 0, y: 45 })
    const timeline = gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top top', end: '+=420%', pin: '.story__stage', scrub: 1, anticipatePin: 1 } })
    const transition = (from: number, to: number, at: number) => {
      timeline.to(panels[from], { autoAlpha: 0, y: -35, duration: 0.3 }, at).to(panels[to], { autoAlpha: 1, y: 0, duration: 0.35 }, at + 0.27)
    }
    timeline
      .to('.story__car', { scale: 1.72, xPercent: -17, transformOrigin: '54% 48%', duration: 1.2 }, 0.5)
      .to('.story__scan', { x: '72vw', duration: 1.2 }, 0.5)
    transition(0, 1, 0.55)
    timeline.to('.story__car', { scale: 2.2, xPercent: 17, yPercent: -5, duration: 1.2 }, 1.7).to('.story__scan', { x: '25vw', duration: 1.2 }, 1.7)
    transition(1, 2, 1.72)
    timeline.to('.story__car', { scale: 2.55, xPercent: -20, yPercent: 6, duration: 1.2 }, 2.9).to('.story__scan', { x: '61vw', duration: 1.2 }, 2.9)
    transition(2, 3, 2.92)
    timeline.to('.story__car', { scale: 1, xPercent: 0, yPercent: 0, duration: 1.25 }, 4.1).to('.story__scan', { x: '48vw', duration: 1.25 }, 4.1)
    transition(3, 4, 4.12)
  }, { scope: root, dependencies: [reducedMotion] })

  return (
    <section className="story" id="historia" ref={root}>
      <div className="story__stage">
        <img className="story__car" src="/images/story.jpg" alt="Carro preto visto de frente sob iluminação técnica" />
        <div className="story__vignette" /><div className="story__scan"><span>Inspeção de superfície</span></div>
        <div className="story__hud story__hud--left"><span>Reflexo</span><strong>98.7%</strong></div>
        <div className="story__hud story__hud--right"><span>Precisão</span><strong>0.01 mm</strong></div>
        <p className="story__chapter">Capítulo 01 / Transformação</p>
        <div className="story__copy">
          {phases.map(([label, body], index) => <div className="story__phase" key={label}><p className="eyebrow">{String(index + 1).padStart(2, '0')} / 05</p><h2>{label}</h2><p>{body}</p></div>)}
        </div>
        <div className="story__progress"><span>01</span><i /><span>05</span></div>
      </div>
    </section>
  )
}
