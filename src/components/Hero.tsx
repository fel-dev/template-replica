import { useEffect, useRef } from 'react'
import { revealLeft, revealRight, revealTransition } from './revealClasses'

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
    <section
      className="relative min-h-screen overflow-hidden py-12 lg:py-20"
      id="home"
      ref={sectionRef}
    >
      <div className="absolute right-0 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[rgba(200,160,80,0.05)] blur-[60px]" />
      <div className="absolute bottom-0 left-0 size-64 rounded-full bg-[rgba(100,130,100,0.1)] blur-[60px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className={`fade-in-left ${revealLeft} ${revealTransition}`}>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              PSICOTERAPIA PARA MULHERES
            </p>
            <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.1]">
              Você cuida de tudo. Mas quem{' '}
              <span className="font-heading italic text-accent">
                cuida de você?
              </span>
            </h1>
            <p className="mt-8 max-w-[500px] text-lg leading-[1.8] text-muted-foreground">
              Psicoterapia para mulheres que vivem sob muita cobrança,
              carregam responsabilidades demais e, aos poucos, foram deixando
              suas próprias necessidades de lado.
            </p>
            <p className="mt-8 max-w-[500px] text-lg leading-[1.8] text-muted-foreground">
              Atendimento psicológico, baseado na Terapia
              Cognitivo-Comportamental (TCC), para mulheres que desejam
              compreender seus padrões, fortalecer sua autoestima e construir
              uma relação mais saudável consigo mesmas.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/5521995038328?text=Olá,%20quero%20saber%20mais%20sobre%20a%20psicoterapia"
                className="inline-block cursor-pointer rounded-lg border-0 bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-secondary-foreground shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-[ease] hover:scale-105 hover:brightness-110"
              >
                Conhecer a psicoterapia
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex">
                <span className="ml-0 size-8 rounded-full border-2 border-background bg-[rgba(200,160,80,0.3)]" />
                <span className="-ml-2 size-8 rounded-full border-2 border-background bg-[rgba(100,130,100,0.5)]" />
                <span className="-ml-2 size-8 rounded-full border-2 border-background bg-[hsl(345,40%,25%)]" />
              </div>
              <span>
                <strong className="text-accent">Apenas 5 vagas</strong>{' '}
                disponíveis por mês
              </span>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <span>Faça sua reserva da sessão agora.</span>
            </div>
          </div>

          <div className={`relative fade-in-right ${revealRight} ${revealTransition}`}>
            <div className="absolute -left-4 -top-4 size-24 border-l-2 border-t-2 border-accent opacity-60" />
            <div className="absolute -bottom-4 -right-4 size-24 border-b-2 border-r-2 border-accent opacity-60" />
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/hero-psicologa.jpeg"
                alt="Jessicka Soares - Psicóloga"
                className="relative z-10 w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 rounded-lg border border-border bg-card p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
              <p className="font-heading text-2xl font-semibold text-accent">
                +4 anos
              </p>
              <p className="text-sm text-muted-foreground">
                de experiência clínica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
