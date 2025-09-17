"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Crown, Palette, Gift } from "lucide-react"

export function CakeTypesSection() {
  const cakeTypes = [
    {
      title: "Bolos Clássicos",
      description:
        "Receitas tradicionais que atravessam gerações. Brigadeiro, prestígio, chocolate, morango e muito mais.",
      image: "/classic-traditional-cake-with-chocolate-frosting-a.jpg",
      icon: Heart,
      features: ["Receitas familiares", "Ingredientes premium", "Sabores tradicionais"],
    },
    {
      title: "Bolos de Casamento",
      description: "Criações especiais para o dia mais importante. Elegância e sabor em perfeita harmonia.",
      image: "/elegant-white-wedding-cake-with-golden-details-and.jpg",
      icon: Crown,
      features: ["Design personalizado", "Múltiplos andares", "Decoração sofisticada"],
    },
    {
      title: "Bolos Artísticos",
      description: "Verdadeiras obras de arte comestíveis. Cada detalhe pensado para impressionar.",
      image: "/artistic-decorated-cake-with-intricate-fondant-wor.jpg",
      icon: Palette,
      features: ["Design exclusivo", "Técnicas avançadas", "Personalização total"],
    },
    {
      title: "Bolos Personalizados",
      description: "Criados especialmente para você. Aniversários, comemorações e momentos únicos.",
      image: "/personalized-birthday-cake-with-custom-decorations.jpg",
      icon: Gift,
      features: ["Tema personalizado", "Sabor à escolha", "Decoração única"],
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="bolos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold elegant-serif text-foreground mb-6">Tipos de Bolos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Cada categoria representa nossa dedicação em criar experiências únicas. Desde os clássicos atemporais até as
            criações mais elaboradas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cakeTypes.map((cake, index) => {
            const IconComponent = cake.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={cake.image || "/placeholder.svg"}
                    alt={cake.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold elegant-serif text-foreground mb-3">{cake.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{cake.description}</p>
                  <ul className="space-y-2 mb-6">
                    {cake.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={scrollToContact} className="w-full bg-primary hover:bg-primary/90">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
