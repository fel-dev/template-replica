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
    <header className="sticky top-0 z-50 border-b border-border bg-[linear-gradient(90deg,rgba(255,255,255,0.92),rgba(250,250,250,0.9))] backdrop-blur-[6px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 max-[768px]:py-2">
        <a href="#home" className="block" onClick={closeMenu}>
          <img
            src="/images/logo-header.jpeg"
            alt="Jessicka Soares"
            className="block h-auto w-[140px] rounded-xl max-[768px]:ml-[6px] max-[768px]:w-[110px]"
          />
        </a>

        <button
          type="button"
          className="hidden border-0 bg-transparent text-[1.4rem] max-[768px]:block"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? '×' : '☰'}
        </button>

        <nav
          id="site-navigation"
          className={`flex items-center gap-3 max-[768px]:absolute max-[768px]:left-0 max-[768px]:right-0 max-[768px]:top-full max-[768px]:hidden max-[768px]:[&.open]:flex max-[768px]:flex-col max-[768px]:gap-2 max-[768px]:border-b max-[768px]:border-border max-[768px]:bg-background max-[768px]:px-4 max-[768px]:py-3${isMenuOpen ? ' open' : ''}`}
          aria-label="Navegação principal"
        >
          {navigationLinks.map(({ href, label }) => (
            <a
              key={href}
              className="rounded-lg px-3 py-2 font-medium text-muted-foreground transition-all duration-[150ms] ease-[ease] hover:-translate-y-px hover:bg-[rgba(0,0,0,0.03)] hover:text-accent"
              href={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            className="rounded-[10px] bg-accent px-[0.85rem] py-2 font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
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
