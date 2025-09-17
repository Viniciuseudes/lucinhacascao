"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/elegant-chocolate-wedding-cake-with-gold-details.jpg",
      alt: "Bolo de casamento chocolate com detalhes dourados",
      category: "Casamento",
    },
    {
      src: "/colorful-birthday-cake-with-creative-decorations.jpg",
      alt: "Bolo de aniversário colorido e criativo",
      category: "Aniversário",
    },
    {
      src: "/artistic-fondant-cake-with-intricate-design.jpg",
      alt: "Bolo artístico com trabalho em fondant",
      category: "Artístico",
    },
    {
      src: "/classic-strawberry-cake-with-fresh-fruits.jpg",
      alt: "Bolo clássico de morango com frutas frescas",
      category: "Clássico",
    },
    {
      src: "/elegant-white-cake-with-floral-decorations.jpg",
      alt: "Bolo branco elegante com decorações florais",
      category: "Casamento",
    },
    {
      src: "/personalized-themed-cake-with-custom-design.jpg",
      alt: "Bolo temático personalizado",
      category: "Personalizado",
    },
    {
      src: "/traditional-brigadeiro-cake-with-chocolate-coating.jpg",
      alt: "Bolo tradicional de brigadeiro",
      category: "Clássico",
    },
    {
      src: "/multi-tier-celebration-cake-with-golden-accents.jpg",
      alt: "Bolo de múltiplos andares para celebração",
      category: "Artístico",
    },
    {
      src: "/delicate-cupcakes-with-elegant-frosting.jpg",
      alt: "Cupcakes delicados com cobertura elegante",
      category: "Doces",
    },
  ]

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold elegant-serif text-primary mb-6">Galeria</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Uma seleção das nossas criações mais especiais. Cada imagem conta uma história de dedicação, arte e sabor
            incomparável.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 bg-card border-muted"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Imagem ampliada"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
