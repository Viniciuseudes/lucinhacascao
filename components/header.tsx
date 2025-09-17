"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl elegant-serif">LC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold elegant-serif text-foreground">Lucinha Cascão</h1>
              <p className="text-sm text-muted-foreground">Desde 1980</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nossa História
            </button>
            <button
              onClick={() => scrollToSection("bolos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tipos de Bolos
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <Button onClick={() => scrollToSection("contato")} className="bg-primary hover:bg-primary/90">
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("historia")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Nossa História
              </button>
              <button
                onClick={() => scrollToSection("bolos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Tipos de Bolos
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <Button onClick={() => scrollToSection("contato")} className="bg-primary hover:bg-primary/90 w-fit">
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
