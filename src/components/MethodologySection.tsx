import { useEffect, useRef } from 'react'

const analysisPoints = [
  'Saúde Mental',
  'Histórico Psicológico',
  'Queixas Atuais',
  'Impacto Funcional',
  'Eventos de Vida Significativos',
  'Desenvolvimento Pessoal',
  'Dinâmica dos Relacionamentos',
  'Motivação e Metas',
  'Expectativas',
  'Mecanismos de Enfrentamento',
]

const deliverables = [
  'Identificar pensamentos, emoções e comportamentos que influenciam sua forma de viver',
  'Perceber necessidades, limites, padrões e crenças que muitas vezes passam despercebidos',
  'Desenvolver novas formas de se relacionar consigo mesma e com as situações da vida',
]

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    )

    section
      .querySelectorAll('.fade-in-left, .fade-in-right')
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-dark" id="plans" ref={sectionRef}>
      <div className="container">
        <div className="methodology-grid">
          <div className="fade-in-left">
            <p className="section-label gold">O que vamos analisar</p>
            <h2 className="section-title">
              O que vamos analisar{' '}
              <span className="accent">ao longo do acompanhamento</span>
            </h2>

            <div className="analysis-points" style={{ marginTop: '2rem' }}>
              {analysisPoints.map((point) => (
                <div className="analysis-point" key={point}>
                  <div className="analysis-point-icon">
                    <CheckIcon />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-right">
            <div className="deliverable-card">
              <div className="deliverable-icon" aria-hidden="true">
                📋
              </div>
              <h3>Construção de Valor Interno</h3>
              <p>
                Você não precisa continuar se{' '}
                <strong>deixando por último</strong>
              </p>
              <ul className="deliverable-list">
                {deliverables.map((deliverable) => (
                  <li key={deliverable}>
                    <CheckIcon />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5521995038328?text=Olá,%20quero%20construir%20meu%20Valor%20Interno"
                className="btn-cta"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Quero Construir meu Valor Interno
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MethodologySection
