"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventModalProps {
  event: {
    id: number
    title: string
    image: string
    category: string
    description: string
    date: string
    guests: string
    location: string
    gallery: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !event) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + event.gallery.length) % event.gallery.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Image gallery */}
          <div className="relative flex-1 bg-gray-100">
            <img
              src={event.gallery[currentImageIndex] || "/placeholder.svg"}
              alt={`${event.title} - Foto ${currentImageIndex + 1}`}
              className="w-full h-64 md:h-full object-cover"
            />

            {event.gallery.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {event.gallery.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Event details */}
          <div className="w-full md:w-96 p-6 overflow-y-auto">
            <h2 className="elegant-serif text-2xl font-bold text-primary mb-4">{event.title}</h2>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Data do Evento</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Número de Convidados</h3>
                <p className="text-gray-600">{event.guests}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Local</h3>
                <p className="text-gray-600">{event.location}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Sobre o Evento</h3>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white">Solicitar Orçamento Similar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
