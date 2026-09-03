import Lenis from 'lenis'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BeforeAfter } from './components/BeforeAfter'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { Process } from './components/Process'
import { ScrollStory } from './components/ScrollStory'
import { Services } from './components/Services'
import { Statement } from './components/Statement'
import { Stats } from './components/Stats'

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.08, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    let frame = requestAnimationFrame(function raf(time) { lenis.raf(time); frame = requestAnimationFrame(raf) })
    return () => { cancelAnimationFrame(frame); lenis.destroy() }
  }, [])

  return <><Loader /><Navbar /><main><Hero /><ScrollStory /><BeforeAfter /><Services /><Stats /><Process /><Statement /><FinalCTA /></main><Footer /></>
}

export default App
