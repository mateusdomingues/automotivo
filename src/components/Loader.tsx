import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

export function Loader() {
  const root = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)

  useGSAP(() => {
    const staticPreview = new URLSearchParams(window.location.search).get('preview') === 'static'
    if (staticPreview || sessionStorage.getItem('blackline-intro-seen')) {
      setHidden(true)
      return
    }

    const timeline = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        sessionStorage.setItem('blackline-intro-seen', 'true')
        setHidden(true)
      },
    })
    timeline
      .from('.loader__word span', { yPercent: 110, duration: 0.9, stagger: 0.045 })
      .to('.loader__line-fill', { scaleX: 1, duration: 0.8 }, '-=0.25')
      .to('.loader__meta', { opacity: 1, duration: 0.35 }, '-=0.35')
      .to(root.current, { yPercent: -100, duration: 1.1, delay: 0.2 })
  }, { scope: root })

  if (hidden) return null

  return (
    <div className="loader" ref={root} aria-label="Carregando experiência">
      <p className="loader__meta">Precisão em movimento</p>
      <div className="loader__word" aria-label="Blackline">
        {'BLACKLINE'.split('').map((letter, index) => <span key={`${letter}-${index}`}>{letter}</span>)}
      </div>
      <div className="loader__line"><span className="loader__line-fill" /></div>
    </div>
  )
}
