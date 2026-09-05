import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { HighlightsSection } from "@/components/highlights-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function App() {
  return (
    <div id="top" className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <HighlightsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
