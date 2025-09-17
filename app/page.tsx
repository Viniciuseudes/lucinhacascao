import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HistorySection } from "@/components/history-section"
import { GallerySection } from "@/components/gallery-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-cream border-b border-primary/30 py-2 px-4 text-center">
        <p className="text-sm text-foreground">
          <strong>VERSÃO BETA:</strong> Todas as imagens e textos são apenas exemplos para demonstração.
          <span className="ml-2 font-semibold">EZZE COMUNICAÇÃO</span>
        </p>
      </div>

      <Header />
      <HeroSection />
      <HistorySection />
      <GallerySection />
      <EventsSection />
      <ContactSection />
      <Footer />
      <ScrollAnimations />
    </main>
  )
}
