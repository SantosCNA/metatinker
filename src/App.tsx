import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { CasesSection } from '@/components/sections/Cases'
import { AboutSection } from '@/components/sections/About'
import { BlogSection } from '@/components/sections/Blog'
import { ContactSection } from '@/components/sections/Contact'

export default function App() {
  return (
    <div className="bg-background text-text-primary">
      <Navigation />
      <main className="flex flex-col gap-0">
        <Hero />
        <ServicesSection />
        <CasesSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
