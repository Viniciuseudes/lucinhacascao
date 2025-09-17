import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Trophy, Sparkles } from "lucide-react"

export function HistorySection() {
  const milestones = [
    {
      year: "1998",
      title: "O Início",
      description: "Lucinha começou sua jornada na confeitaria, aprendendo receitas familiares tradicionais.",
      icon: Calendar,
    },
    {
      year: "2005",
      title: "Primeira Loja",
      description: "Abertura da primeira confeitaria própria, conquistando o coração da comunidade local.",
      icon: Users,
    },
    {
      year: "2012",
      title: "Reconhecimento",
      description: "Premiada como melhor confeitaria tradicional da região, consolidando sua reputação.",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Expansão Digital",
      description: "Lançamento da presença digital para alcançar mais famílias com nossos doces especiais.",
      icon: Sparkles,
    },
  ]

  return (
    <section id="historia" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold elegant-serif text-foreground mb-6">Nossa História</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Uma jornada de mais de duas décadas dedicada à arte da confeitaria, preservando tradições familiares e
            criando memórias doces para milhares de famílias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/vintage-confectionery-kitchen-with-traditional-bak.jpg"
              alt="Cozinha tradicional da Lucinha Cascão"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold elegant-serif text-foreground">A Paixão que Virou Tradição</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tudo começou na cozinha de casa, onde Lucinha aprendeu com sua avó os segredos das receitas familiares. O
              que era apenas um hobby se transformou em uma paixão que conquistou toda a família e, posteriormente, a
              comunidade.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada bolo carrega não apenas ingredientes de qualidade, mas também histórias, memórias e o carinho de quem
              dedica sua vida a fazer os outros felizes através dos sabores únicos e autênticos.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hoje, a Confeitaria Lucinha Cascão é sinônimo de tradição, qualidade e confiança, sendo escolhida para os
              momentos mais especiais da vida de nossos clientes.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary elegant-serif mb-2">{milestone.year}</div>
                  <h4 className="text-xl font-semibold elegant-serif text-foreground mb-3">{milestone.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
