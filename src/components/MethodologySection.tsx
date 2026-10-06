import { useEffect, useRef } from 'react'
import { revealLeft, revealRight, revealTransition } from './revealClasses'

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

function CheckIcon({ className = 'size-4 text-secondary' }: { className?: string }) {
  return (
    <svg
      className={className}
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
    <section
      className="bg-background px-0 py-20 text-foreground lg:py-32"
      id="plans"
      ref={sectionRef}
    >
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className={`fade-in-left ${revealLeft} ${revealTransition}`}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">O que vamos analisar</p>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-medium">
            O que vamos analisar{' '}
            <span className="font-heading italic text-accent">ao longo do acompanhamento</span>
          </h2>

          <div className="mt-8 grid gap-4 min-[640px]:grid-cols-2">
            {analysisPoints.map((point) => (
              <div className="flex items-center gap-3" key={point}>
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(100,130,100,0.3)]">
                  <CheckIcon />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`fade-in-right ${revealRight} ${revealTransition}`}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 before:absolute before:right-0 before:top-0 before:size-32 before:rounded-full before:bg-[rgba(200,160,80,0.1)] before:blur-[40px]">
              <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-[rgba(200,160,80,0.2)] text-3xl" aria-hidden="true">
                📋
              </div>
              <h3 className="mb-4 text-3xl font-medium">Construção de Valor Interno</h3>
              <p className="mb-6 text-lg leading-[1.8] text-muted-foreground">
                Você não precisa continuar se{' '}
                <strong className="text-accent">deixando por último</strong>
              </p>
              <ul className="mb-8 list-none">
                {deliverables.map((deliverable) => (
                  <li className="mb-4 flex items-center gap-3" key={deliverable}>
                    <CheckIcon className="size-5 text-secondary" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5521995038328?text=Olá,%20quero%20construir%20meu%20Valor%20Interno"
                className="inline-block w-full cursor-pointer rounded-lg border-0 bg-secondary px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-secondary-foreground shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-[ease] hover:scale-105 hover:brightness-110"
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
