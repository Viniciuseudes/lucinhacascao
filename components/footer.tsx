"use client"

import { Heart, Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl elegant-serif">LC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold elegant-serif">Lucinha Cascão</h3>
                <p className="text-sm opacity-80">Desde 1980</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed max-w-md">
              Mais de 40 anos criando momentos doces e inesquecíveis. Tradição, qualidade e amor em cada receita.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 elegant-serif">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("historia")}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Nossa História
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("bolos")}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Tipos de Bolos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("galeria")}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 elegant-serif">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@lucinhacascao.com.br"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 text-sm opacity-80">
              <p>@lucinhacascao</p>
              <p>Siga-nos para ver nossas criações!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80 flex items-center justify-center">
            © 2024 Lucinha Cascão Confeitaria. Feito com
            <Heart className="w-4 h-4 mx-1 text-primary" />e muito carinho.
          </p>
        </div>
      </div>
    </footer>
  )
}
