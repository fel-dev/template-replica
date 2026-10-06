import { useEffect } from 'react'
import Hero from './components/Hero'
import AudienceSection from './components/AudienceSection'
import AuthoritySection from './components/AuthoritySection'
import BookingSection from './components/BookingSection'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'
import MethodologySection from './components/MethodologySection'
import TestimonialsSection from './components/TestimonialsSection'
import SiteHeader from './components/SiteHeader'

function App() {
  useEffect(() => {
    function handleAnchorClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return

      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return

      event.preventDefault()
      const target = document.getElementById(anchor.hash.slice(1))
      if (!target) return

      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <SiteHeader />
      <Hero />
      <AudienceSection />
      <MethodologySection />
      <TestimonialsSection />
      <AuthoritySection />
      <BookingSection />
      <ContactSection />
      <SiteFooter />
    </>
  )
}

export default App
