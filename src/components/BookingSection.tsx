import { useEffect, useRef } from 'react'
import { revealFade, revealTransition } from './revealClasses'

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
      className="relative overflow-hidden bg-light-bg px-0 py-20 text-light-foreground lg:py-32"
      id="agendar"
      ref={sectionRef}
    >
      <div className="absolute left-1/4 top-0 size-64 rounded-full bg-[rgba(100,130,100,0.1)] blur-[60px]" />
      <div className="absolute bottom-0 right-1/4 size-64 rounded-full bg-[rgba(200,160,80,0.1)] blur-[60px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className={`cta-content relative z-10 mx-auto max-w-3xl text-center fade-in ${revealFade} ${revealTransition}`}>
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-medium">
            Pronta para transformar sua <span className="font-heading italic text-secondary">vida?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-[600px] text-lg leading-[1.8] text-muted-foreground">
            Se você sente que chegou a hora de se colocar também como
            prioridade, podemos conversar.
          </p>
          <p className="mx-auto mb-10 max-w-[600px] text-lg leading-[1.8] text-muted-foreground">
            Agende sua sessão e dê o primeiro passo para construir uma relação
            mais saudável consigo mesma.
          </p>
          <a
            href="https://wa.me/5521995038328?text=Olá,%20quero%20agendar%20minha%20sessão"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-0 bg-secondary px-10 py-5 text-lg font-semibold uppercase tracking-[0.1em] text-secondary-foreground shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-[ease] hover:scale-105 hover:brightness-110"
          >
            Quero agendar minha sessão
            <svg
              className="size-5"
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
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-secondary">⚡ Apenas 5 vagas</span> disponíveis por mês
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-secondary">⏳ Agende agora e garanta a sua vaga.</span>
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            <em>*Sessão presencial e online</em>
          </p>
        </div>
      </div>
    </section>
  )
}

export default BookingSection
