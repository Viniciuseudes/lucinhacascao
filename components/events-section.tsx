"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EventModal } from "./event-modal"

const eventCategories = [
  { id: "todas", label: "TODAS AS FESTAS", active: true },
  { id: "casamento", label: "CASAMENTO", active: false },
  { id: "corporativo", label: "EVENTO CORPORATIVO", active: false },
]

const events = [
  {
    id: 1,
    title: "CASAMENTO - 633",
    image: "/elegant-wedding-cake-setup.jpg",
    category: "casamento",
    description:
      "Um casamento elegante e sofisticado realizado em nosso salão principal. A celebração contou com decoração clássica em tons dourados e brancos, com arranjos florais exuberantes e um bolo de casamento de três andares personalizado.",
    date: "15 de Outubro, 2023",
    guests: "180 convidados",
    location: "Salão Cristóvão - Lucinha Cascão",
    gallery: [
      "/elegant-wedding-cake-setup.jpg",
      "/floral-wedding-ceremony.png",
      "/wedding-cake-with-decorative-elements.jpg",
      "/wedding-reception-table-setup.jpg",
      "/elegant-wedding-venue.png",
    ],
  },
  {
    id: 2,
    title: "CASAMENTO - 632",
    image: "/floral-wedding-ceremony.png",
    category: "casamento",
    description:
      "Cerimônia íntima com decoração floral abundante e atmosfera romântica. O evento destacou-se pela elegância dos arranjos e pela atenção aos detalhes em cada elemento decorativo.",
    date: "8 de Outubro, 2023",
    guests: "120 convidados",
    location: "Bar Jardim - Lucinha Cascão",
    gallery: [
      "/floral-wedding-ceremony.png",
      "/wedding-celebration-setup.jpg",
      "/elegant-wedding-cake-setup.jpg",
      "/wedding-table-arrangement.jpg",
    ],
  },
  {
    id: 3,
    title: "CASAMENTO - 631",
    image: "/wedding-cake-with-decorative-elements.jpg",
    category: "casamento",
    description:
      "Celebração marcada por um bolo espetacular com elementos decorativos únicos. A festa combinou tradição e modernidade em cada detalhe.",
    date: "1 de Outubro, 2023",
    guests: "200 convidados",
    location: "Salão Cristóvão - Lucinha Cascão",
    gallery: [
      "/wedding-cake-with-decorative-elements.jpg",
      "/elegant-wedding-venue.png",
      "/wedding-reception-table-setup.jpg",
    ],
  },
  {
    id: 4,
    title: "CASAMENTO - 630",
    image: "/wedding-reception-table-setup.jpg",
    category: "casamento",
    description:
      "Recepção elegante com mesas dispostas de forma harmoniosa e decoração refinada. Cada mesa foi cuidadosamente preparada para proporcionar uma experiência única aos convidados.",
    date: "24 de Setembro, 2023",
    guests: "150 convidados",
    location: "Salão Cristóvão - Lucinha Cascão",
    gallery: ["/wedding-reception-table-setup.jpg", "/elegant-wedding-decor.png", "/wedding-cake-display.jpg"],
  },
  {
    id: 5,
    title: "CASAMENTO - 629",
    image: "/elegant-wedding-venue.png",
    category: "casamento",
    description:
      "Ambiente sofisticado que proporcionou o cenário perfeito para uma celebração inesquecível. A decoração priorizou a elegância e o conforto dos convidados.",
    date: "17 de Setembro, 2023",
    guests: "175 convidados",
    location: "Salão Cristóvão - Lucinha Cascão",
    gallery: ["/elegant-wedding-venue.png", "/wedding-celebration-setup.jpg", "/floral-wedding-ceremony.png"],
  },
  {
    id: 6,
    title: "CASAMENTO - 628",
    image: "/wedding-celebration-setup.jpg",
    category: "casamento",
    description:
      "Setup especial para celebração com atmosfera acolhedora e decoração personalizada. Cada elemento foi escolhido para criar memórias duradouras.",
    date: "10 de Setembro, 2023",
    guests: "140 convidados",
    location: "Bar Jardim - Lucinha Cascão",
    gallery: ["/wedding-celebration-setup.jpg", "/elegant-wedding-cake-setup.jpg", "/wedding-table-arrangement.jpg"],
  },
  {
    id: 7,
    title: "CASAMENTO - 627",
    image: "/wedding-cake-display.jpg",
    category: "casamento",
    description:
      "Destaque especial para o display de bolos e doces, criando um verdadeiro espetáculo visual. A mesa de doces foi o ponto alto da celebração.",
    date: "3 de Setembro, 2023",
    guests: "160 convidados",
    location: "Salão Cristóvão - Lucinha Cascão",
    gallery: ["/wedding-cake-display.jpg", "/elegant-wedding-decor.png", "/wedding-reception-table-setup.jpg"],
  },
  {
    id: 8,
    title: "CASAMENTO - 626",
    image: "/elegant-wedding-decor.png",
    category: "casamento",
    description:
      "Decoração elegante que transformou o ambiente em um cenário de sonhos. Cada detalhe foi pensado para criar uma atmosfera mágica e romântica.",
    date: "27 de Agosto, 2023",
    guests: "190 convidados",
    location: "Salão Cristóvão - Lucinha Cascão",
    gallery: ["/elegant-wedding-decor.png", "/floral-wedding-ceremony.png", "/wedding-celebration-setup.jpg"],
  },
  {
    id: 9,
    title: "CASAMENTO - 625",
    image: "/wedding-table-arrangement.jpg",
    category: "casamento",
    description:
      "Arranjo de mesas primoroso com atenção especial aos detalhes. A disposição criou um ambiente íntimo e acolhedor para todos os convidados.",
    date: "20 de Agosto, 2023",
    guests: "130 convidados",
    location: "Espaço Memória - Lucinha Cascão",
    gallery: [
      "/wedding-table-arrangement.jpg",
      "/elegant-wedding-venue.png",
      "/wedding-cake-with-decorative-elements.jpg",
    ],
  },
  {
    id: 10,
    title: "EVENTOTECA",
    image: "/corporate-event-space.png",
    category: "corporativo",
    description:
      "Espaço corporativo moderno e versátil, ideal para eventos empresariais, palestras e confraternizações. Equipado com tecnologia de ponta e ambiente profissional.",
    date: "Disponível sob consulta",
    guests: "Até 100 pessoas",
    location: "Eventoteca - Lucinha Cascão",
    gallery: ["/corporate-event-space.png", "/elegant-wedding-venue.png", "/wedding-reception-table-setup.jpg"],
  },
]

export function EventsSection() {
  const [activeCategory, setActiveCategory] = useState("todas")
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredEvents =
    activeCategory === "todas" ? events : events.filter((event) => event.category === activeCategory)

  const openEventModal = (event: (typeof events)[0]) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const closeEventModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  return (
    <>
      <section className="py-20 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-fade-in">
            <h2 className="elegant-serif text-4xl md:text-5xl font-bold text-white mb-8">EVENTOS</h2>

            {/* Category filters */}
            <div className="flex flex-wrap gap-4 mb-8 justify-end">
              {eventCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "destructive" : "outline"}
                  className={`px-6 py-2 text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "bg-transparent text-white border-white hover:bg-white hover:text-primary"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            <div className="mb-12">
              <p className="text-white text-lg md:text-xl mb-4 max-w-4xl">
                PALCO DE CÉLEBRES E INESQUECÍVEIS BANQUETES, OS SALÕES SECULARES DA LUCINHA CASCÃO ESTÃO ABERTOS PARA
                ENTRAR TAMBÉM PARA A SUA HISTÓRIA: SEJA ELA UM EVENTO, UM CASAMENTO, UMA FESTA, UM ALMOÇO OU JANTAR.
              </p>
              <p className="text-white/80 text-base mb-8">
                Dispomos de 3 salões refrigerados, Bar Jardim com capacidade de 150 pessoas, Cristóvão de 210 pessoas e
                Espaço Memória para até 50 pessoas. Oferecemos também o mais requintado e saboroso serviço de buffet do
                Rio de Janeiro.
              </p>

              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-medium">
                SOLICITE SEU ORÇAMENTO
              </Button>
            </div>

            {/* Events grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`scroll-fade-in image-hover relative group cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openEventModal(event)}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-sm md:text-base">{event.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={closeEventModal} />
    </>
  )
}
