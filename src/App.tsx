import Hero from './components/Hero'
import AudienceSection from './components/AudienceSection'
import AuthoritySection from './components/AuthoritySection'
import BookingSection from './components/BookingSection'
import ContactSection from './components/ContactSection'
import MethodologySection from './components/MethodologySection'
import TestimonialsSection from './components/TestimonialsSection'
import SiteHeader from './components/SiteHeader'

function App() {
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
    </>
  )
}

export default App
