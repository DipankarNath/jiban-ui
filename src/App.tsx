import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { ServicesSection } from "@/components/services-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhySection } from "@/components/why-section"

export function App() {
  return (
    <div id="top" className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhySection />
        <NewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
