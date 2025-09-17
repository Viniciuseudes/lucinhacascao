"use client"

import { useEffect, useState } from "react"

const timelineSteps = [
  {
    id: 1,
    title: "O Início da Tradição",
    description:
      "Em 2003, Lucinha Cascão iniciou sua jornada na confeitaria, trazendo receitas de família e muito amor pelos doces.",
    year: "2003",
  },
  {
    id: 2,
    title: "Primeiros Reconhecimentos",
    description:
      "Os bolos artesanais ganharam destaque na região, conquistando clientes fiéis e estabelecendo nossa reputação.",
    year: "2008",
  },
  {
    id: 3,
    title: "Expansão dos Serviços",
    description: "Começamos a atender casamentos e eventos especiais, levando nossa tradição para momentos únicos.",
    year: "2012",
  },
  {
    id: 4,
    title: "Inovação e Tradição",
    description: "Incorporamos novas técnicas mantendo o sabor tradicional, criando bolos únicos e personalizados.",
    year: "2018",
  },
  {
    id: 5,
    title: "Presente e Futuro",
    description: "Hoje, continuamos nossa missão de criar momentos doces e inesquecíveis para cada família.",
    year: "2024",
  },
]

export function TimelineSection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("timeline-section")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionHeight = rect.height
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / sectionHeight))

      const newActiveStep = Math.floor(scrollProgress * timelineSteps.length)
      setActiveStep(Math.min(newActiveStep, timelineSteps.length - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="timeline-section" className="section-light py-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div className="scroll-fade-left">
            <div className="relative">
              {/* Timeline line */}
              <div className="timeline-line h-full top-0" />

              {/* Timeline steps */}
              <div className="space-y-12">
                {timelineSteps.map((step, index) => (
                  <div key={step.id} className="relative flex items-center">
                    {/* Timeline dot */}
                    <div className={`timeline-dot ${index <= activeStep ? "active" : ""} z-10`} />

                    {/* Content */}
                    <div className="ml-8">
                      <div className="text-sm text-muted-foreground mb-1">{step.year}</div>
                      <h3 className="elegant-serif text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="scroll-fade-right">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/elegant-confectionery-workspace-with-cakes-and-pas.jpg"
                alt="Lucinha Cascão workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
