import { useEffect, useRef } from 'react'

function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = section?.querySelector('.cta-content')

    if (!section || !content) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.disconnect()
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    )

    observer.observe(content)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="section-light cta-section"
      id="agendar"
      ref={sectionRef}
    >
      <div className="cta-blur-1" />
      <div className="cta-blur-2" />

      <div className="container">
        <div className="cta-content fade-in">
          <h2 className="cta-title">
            Pronta para transformar sua <span className="secondary">vida?</span>
          </h2>
          <p className="cta-text">
            Se você sente que chegou a hora de se colocar também como
            prioridade, podemos conversar.
          </p>
          <p className="cta-text">
            Agende sua sessão e dê o primeiro passo para construir uma relação
            mais saudável consigo mesma.
          </p>
          <a
            href="https://wa.me/5521995038328?text=Olá,%20quero%20agendar%20minha%20sessão"
            className="btn-cta cta-button"
          >
            Quero agendar minha sessão
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1={5} y1={12} x2={19} y2={12} />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <p className="cta-vagas">
            <span>⚡ Apenas 5 vagas</span> disponíveis por mês
          </p>
          <p className="cta-vagas">
            <span>⏳ Agende agora e garanta a sua vaga.</span>
          </p>
          <p className="cta-vagas">
            <em>*Sessão presencial e online</em>
          </p>
        </div>
      </div>
    </section>
  )
}

export default BookingSection
