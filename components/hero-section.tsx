"use client"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="hero-clean">
      <div className="logo-container">
        {/* Logo da Lucinha Cascão */}
        <img src="/images/lucinha-logo.png" alt="Lucinha Cascão - Desde 1980" className="logo-image" />

        {/* Botões principais */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <button className="btn-elegant-outline" onClick={() => scrollToSection("historia")}>
            Conheça Nossa História
          </button>
          <button className="btn-elegant" onClick={() => scrollToSection("contato")}>
            Faça Seu Pedido
          </button>
        </div>
      </div>
    </section>
  )
}
