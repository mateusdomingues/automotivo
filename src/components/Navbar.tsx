import { useEffect, useState } from 'react'
import { whatsappUrl } from '../data/content'

const links = [
  ['Serviços', '#servicos'],
  ['Processo', '#processo'],
  ['Resultados', '#resultados'],
  ['Contato', '#contato'],
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
      <a className="navbar__logo" href="#inicio" aria-label="BLACKLINE — início">BLACKLINE</a>
      <nav className="navbar__links" aria-label="Navegação principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="navbar__cta" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar</a>
      <button className="navbar__menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
        <span /><span />
      </button>
    </header>
  )
}
