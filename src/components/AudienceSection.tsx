import { useEffect, useRef } from 'react'
import { revealFade, revealTransition } from './revealClasses'

const audienceCards = [
  {
    title: 'Dificuldade em descansar',
    description: 'Sente que precisa dar conta de tudo e se sente exausta',
    icon: (
      <svg
        className="size-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
  {
    title: 'Autocobrança excessiva',
    description: 'Se cobra mesmo quando já fez o seu melhor',
    icon: (
      <svg
        className="size-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375M6.003 5.125A3 3 0 0 0 6.401 6.5M3.477 10.896a4 4 0 0 1 .585-.396M19.938 10.5a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
  },
  {
    title: 'Sobrecarga emocional',
    description:
      'Sente culpa quando coloca suas próprias necessidades em primeiro lugar',
    icon: (
      <svg
        className="size-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Dificuldade nas relações',
    description: 'Tem dificuldade em dizer não e colocar limites',
    icon: (
      <svg
        className="size-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Baixa autoestima',
    description:
      'Percebe que está tão ocupada cumprindo responsabilidades que acabou se afastando de si mesma',
    icon: (
      <svg
        className="size-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: 'Falta de propósito',
    description: 'Sensação de estar perdida, sem saber qual caminho seguir',
    icon: (
      <svg
        className="size-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
    ),
  },
]

function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const timers: number[] = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const grid = entry.target.closest('.audience-grid')
          const delay = grid
            ? Array.from(grid.children).indexOf(entry.target) * 100
            : 0
          const timer = window.setTimeout(
            () => entry.target.classList.add('visible'),
            delay,
          )

          timers.push(timer)
          observer.unobserve(entry.target)
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    )

    section.querySelectorAll('.fade-in').forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      timers.forEach(window.clearTimeout)
    }
  }, [])

  return (
    <section
      className="bg-light-bg px-0 py-20 text-light-foreground lg:py-32"
      id="services"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`mb-16 text-center fade-in ${revealFade} ${revealTransition}`}
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-medium">
            A sessão é <span className="font-heading italic text-secondary">exclusiva</span> para você
            que...
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Se você se identifica com algum desses pontos, meu trabalho foi
            feito especialmente para você.
          </p>
        </div>

        <div className="audience-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {audienceCards.map(({ title, description, icon }) => (
            <article
              className={`group rounded-xl border border-border bg-background p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] [transition:opacity_800ms_ease,transform_800ms_ease,border-color_300ms_ease] hover:border-[rgba(200,160,80,0.5)] fade-in ${revealFade}`}
              key={title}
            >
              <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-[rgba(200,160,80,0.2)] transition-colors duration-300 ease-[ease] group-hover:bg-[rgba(200,160,80,0.3)]">
                <span className="size-7 text-accent">{icon}</span>
              </div>
              <h3 className="mb-3 text-xl font-medium text-foreground">{title}</h3>
              <p className="leading-[1.7] text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AudienceSection
