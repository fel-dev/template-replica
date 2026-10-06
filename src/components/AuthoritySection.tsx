import { useEffect, useRef } from 'react'

const statistics = [
  { value: '4+', label: 'Anos de clínica' },
  { value: '1.000+', label: 'Horas de atendimento' },
  { value: '150+', label: 'Vidas transformadas' },
]

function AuthoritySection() {
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
    <section className="section-dark" id="about" ref={sectionRef}>
      <div className="container">
        <div className="authority-grid">
          <div className="authority-image-wrapper fade-in-left">
            <img
              src="/images/perfil-psi1.jpeg"
              alt="Jessicka Soares - Psicóloga"
            />
          </div>

          <div className="authority-content fade-in-right">
            <p className="section-label gold">Sobre mim</p>
            <h2>Jessicka Soares</h2>
            <p className="authority-role">Psicóloga Clínica</p>

            <div className="authority-bio">
              <p>
                Há mais de 4 anos, dedico minha vida a ajudar pessoas a
                cuidarem da saúde mental, fortalecendo seus relacionamentos e
                emoções para viverem com mais leveza.
              </p>
              <p>
                Atuo na área clínica, com <strong>atendimento para mulheres</strong>,
                utilizando a abordagem da{' '}
                <strong>Terapia Cognitivo-Comportamental (TCC)</strong>. Por
                meio de seus conceitos e técnicas, auxilio você a desenvolver
                autoconhecimento, fortalecer a autoestima e construir
                habilidades emocionais que promovem mudanças reais e duradouras.
              </p>
              <p>
                Meu compromisso é oferecer um espaço seguro e acolhedor, onde
                você possa se redescobrir e construir a vida equilibrada que
                merece.
              </p>
            </div>

            <div className="authority-stats">
              {statistics.map(({ value, label }) => (
                <div className="authority-stat" key={label}>
                  <p className="authority-stat-number">{value}</p>
                  <p className="authority-stat-label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthoritySection
