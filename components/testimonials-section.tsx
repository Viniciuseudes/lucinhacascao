"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Noiva",
      content:
        "O bolo do meu casamento foi simplesmente perfeito! A Lucinha captou exatamente o que eu sonhava. Todos os convidados elogiaram tanto a beleza quanto o sabor. Recomendo de olhos fechados!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "João Santos",
      role: "Pai de família",
      content:
        "Já encomendamos vários bolos para aniversários da família. A qualidade é sempre excepcional e o atendimento é muito carinhoso. Viramos clientes fiéis da Lucinha Cascão!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ana Costa",
      role: "Organizadora de eventos",
      content:
        "Como organizadora de eventos, preciso de fornecedores confiáveis. A Lucinha nunca me decepcionou! Pontualidade, qualidade e criatividade em cada encomenda. Parceria de anos!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Carlos Oliveira",
      role: "Cliente",
      content:
        "O bolo de aniversário da minha filha foi uma obra de arte! Ela ficou encantada com os detalhes e todos na festa queriam saber quem tinha feito. Obrigado por tornar o dia dela especial!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Lucia Ferreira",
      role: "Avó",
      content:
        "Aos 70 anos, já provei muitos doces, mas os da Lucinha têm um sabor especial que me lembra da minha infância. É tradição e amor em cada pedaço. Simplesmente maravilhoso!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold elegant-serif text-foreground mb-6">Depoimentos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            As palavras dos nossos clientes são nosso maior orgulho. Cada depoimento representa uma história de
            satisfação e confiança.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="absolute top-6 left-6 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div>
                  <cite className="text-xl font-semibold elegant-serif text-foreground not-italic">
                    {testimonials[currentTestimonial].name}
                  </cite>
                  <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
