import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote:
      '"A sessão mudou completamente minha perspectiva. Finalmente entendi padrões que me sabotavam há anos. O plano personalizado me deu clareza e direção."',
    initial: 'M',
    name: 'Maria Clara',
  },
  {
    quote:
      '"Estava perdida e sem esperança. A Dra. Jessicka me acolheu e me ajudou a enxergar um caminho. Hoje me sinto mais leve e confiante."',
    initial: 'F',
    name: 'Fernanda S.',
  },
  {
    quote:
      '"Profissional incrível! A análise foi profunda e sensível. Recebi um plano que realmente faz sentido para minha realidade. Super recomendo!"',
    initial: 'C',
    name: 'Carolina M.',
  },
]

function QuoteIcon() {
  return (
    <svg
      className="testimonial-quote"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}

function TestimonialStars() {
  return (
    <div className="testimonial-stars" role="img" aria-label="5 estrelas">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const timers: number[] = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const grid = entry.target.closest('.testimonials-grid')
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

    section
      .querySelectorAll('.section-header.fade-in, .testimonial-card.fade-in')
      .forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      timers.forEach(window.clearTimeout)
    }
  }, [])

  return (
    <section className="section-light" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label green">Depoimentos</p>
          <h2 className="section-title">
            O que dizem <span className="secondary">minhas clientes</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(({ quote, initial, name }) => (
            <article className="testimonial-card fade-in" key={name}>
              <QuoteIcon />
              <TestimonialStars />
              <p className="testimonial-text">{quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {initial}
                </div>
                <span className="testimonial-name">{name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
