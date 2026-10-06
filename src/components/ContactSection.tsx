import { useEffect, useRef } from 'react'

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

    section
      .querySelectorAll('.section-header.fade-in, .contact-method.fade-in')
      .forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      timers.forEach(window.clearTimeout)
    }
  }, [])

  return (
    <section className="section-light" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label green">Entre em contato</p>
          <h2 className="section-title">
            Vamos conversar sobre sua <span className="secondary">jornada</span>
          </h2>
          <p className="section-subtitle">
            Estou aqui para responder suas dúvidas e <strong>ajudá-la</strong> a
            dar o primeiro passo.
          </p>
        </div>

        <div
          className="contact-methods"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {contactMethods.map(({ icon, title, description, href, linkText }) => (
            <article
              className="contact-method fade-in"
              key={title}
              style={{
                background: 'var(--muted)',
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {icon}
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
              <p
                style={{
                  color: 'var(--muted-foreground)',
                  marginBottom: '1rem',
                }}
              >
                {description}
              </p>
              <a
                href={href}
                style={{
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
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
