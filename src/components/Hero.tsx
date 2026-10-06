import { useEffect, useRef } from 'react'

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const animatedElements = section.querySelectorAll(
      '.fade-in-left, .fade-in-right',
    )
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

    animatedElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero-blur-1" />
      <div className="hero-blur-2" />

      <div className="container">
        <div className="grid">
          <div className="fade-in-left">
            <p className="hero-label">PSICOTERAPIA PARA MULHERES</p>
            <h1 className="hero-title">
              Você cuida de tudo. Mas quem{' '}
              <span className="accent">cuida de você?</span>
            </h1>
            <p className="hero-text">
              Psicoterapia para mulheres que vivem sob muita cobrança,
              carregam responsabilidades demais e, aos poucos, foram deixando
              suas próprias necessidades de lado.
            </p>
            <p className="hero-text">
              Atendimento psicológico, baseado na Terapia
              Cognitivo-Comportamental (TCC), para mulheres que desejam
              compreender seus padrões, fortalecer sua autoestima e construir
              uma relação mais saudável consigo mesmas.
            </p>
            <div className="hero-cta">
              <a
                href="https://wa.me/5521995038328?text=Olá,%20quero%20saber%20mais%20sobre%20a%20psicoterapia"
                className="btn-cta"
              >
                Conhecer a psicoterapia
              </a>
            </div>
            <div className="hero-vagas">
              <div className="hero-vagas-dots">
                <span />
                <span />
                <span />
              </div>
              <span>
                <strong>Apenas 5 vagas</strong> disponíveis por mês
              </span>
            </div>
            <div className="hero-vagas">
              <span>Faça sua reserva da sessão agora.</span>
            </div>
          </div>

          <div className="hero-image-wrapper fade-in-right">
            <div className="hero-image">
              <img
                src="/images/hero-psicologa.jpeg"
                alt="Jessicka Soares - Psicóloga"
              />
            </div>
            <div className="hero-badge">
              <p className="hero-badge-number">+4 anos</p>
              <p className="hero-badge-text">de experiência clínica</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
