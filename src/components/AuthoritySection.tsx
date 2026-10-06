import { useEffect, useRef } from 'react'
import { revealLeft, revealRight, revealTransition } from './revealClasses'

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
    <section
      className="bg-background px-0 py-20 text-foreground lg:py-32"
      id="about"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className={`relative mx-auto max-w-md fade-in-left ${revealLeft} ${revealTransition}`}>
            <div className="absolute -right-4 -top-4 h-full w-full rounded-lg border-2 border-[rgba(200,160,80,0.3)]" />
            <img
              src="/images/perfil-psi1.jpeg"
              alt="Jessicka Soares - Psicóloga"
              className="relative z-10 rounded-lg"
            />
          </div>

          <div className={`fade-in-right ${revealRight} ${revealTransition}`}>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">Sobre mim</p>
            <h2 className="mb-4 text-[clamp(2rem,5vw,3rem)] font-medium">Jessicka Soares</h2>
            <p className="mb-8 font-heading text-2xl italic text-accent">Psicóloga Clínica</p>

            <div>
              <p className="mb-4 leading-[1.8] text-muted-foreground">
                Há mais de 4 anos, dedico minha vida a ajudar pessoas a
                cuidarem da saúde mental, fortalecendo seus relacionamentos e
                emoções para viverem com mais leveza.
              </p>
              <p className="mb-4 leading-[1.8] text-muted-foreground">
                Atuo na área clínica, com <strong>atendimento para mulheres</strong>,
                utilizando a abordagem da{' '}
                <strong>Terapia Cognitivo-Comportamental (TCC)</strong>. Por
                meio de seus conceitos e técnicas, auxilio você a desenvolver
                autoconhecimento, fortalecer a autoestima e construir
                habilidades emocionais que promovem mudanças reais e duradouras.
              </p>
              <p className="mb-4 leading-[1.8] text-muted-foreground">
                Meu compromisso é oferecer um espaço seguro e acolhedor, onde
                você possa se redescobrir e construir a vida equilibrada que
                merece.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {statistics.map(({ value, label }) => (
                <div className="text-center" key={label}>
                  <p className="font-heading text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-accent">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
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
