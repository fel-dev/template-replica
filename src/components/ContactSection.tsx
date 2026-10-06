import { useEffect, useRef } from 'react'
import { revealFade, revealTransition } from './revealClasses'

const contactMethods = [
  {
    icon: '💬',
    title: 'WhatsApp',
    description: 'Atendimento rápido e direto',
    href: 'https://wa.me/5521995038328',
    linkText: 'Clique aqui para conversar',
  },
  {
    icon: '📧',
    title: 'Email',
    description: 'Respondo em até 24h',
    href: 'mailto:psi.jessicka@gmail.com',
    linkText: 'psi.jessicka@gmail.com',
  },
  {
    icon: '📞',
    title: 'Telefone',
    description: 'Agendamento de consultas',
    href: 'tel:+5521995038328',
    linkText: '(21) 99503-8328',
  },
]

function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const timers: number[] = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const grid = entry.target.closest('.contact-methods')
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
      id="contact"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className={`mb-16 text-center fade-in ${revealFade} ${revealTransition}`}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-secondary">Entre em contato</p>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-medium">
            Vamos conversar sobre sua <span className="font-heading italic text-secondary">jornada</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Estou aqui para responder suas dúvidas e <strong>ajudá-la</strong> a
            dar o primeiro passo.
          </p>
        </div>

        <div
          className="contact-methods mx-auto mt-12 grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8"
        >
          {contactMethods.map(({ icon, title, description, href, linkText }) => (
            <article
              className={`contact-method rounded-2xl bg-muted p-8 text-center fade-in ${revealFade} ${revealTransition}`}
              key={title}
            >
              <div className="mb-4 text-[2.5rem]">{icon}</div>
              <h3 className="mb-2">{title}</h3>
              <p className="mb-4 text-muted-foreground">
                {description}
              </p>
              <a
                href={href}
                className="font-semibold text-accent no-underline"
              >
                {linkText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
