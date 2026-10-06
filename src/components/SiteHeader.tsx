import { useState } from 'react'

const navigationLinks = [
  { href: '#home', label: 'Início' },
  { href: '#services', label: 'Serviços' },
  { href: '#plans', label: 'Planos' },
  { href: '#about', label: 'Sobre' },
  { href: '#contact', label: 'Contato' },
]

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="header-brand" onClick={closeMenu}>
          <img
            src="/images/logo-header.jpeg"
            alt="Jessicka Soares"
            className="logo"
          />
        </a>

        <button
          type="button"
          className="mobile-toggle"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? '×' : '☰'}
        </button>

        <nav
          id="site-navigation"
          className={`header-nav${isMenuOpen ? ' open' : ''}`}
          aria-label="Navegação principal"
        >
          {navigationLinks.map(({ href, label }) => (
            <a
              key={href}
              className="nav-link"
              href={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            className="btn-primary"
            href="https://wa.me/5521995038328?text=Olá,%20quero%20agendar"
            onClick={closeMenu}
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
