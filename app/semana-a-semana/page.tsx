import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SemanaASemana() {
  // Datos de ejemplo para las semanas
  const weeks = [
    {
      id: "semana1",
      title: "Semana 1",
      artist: {
        name: "Laura Martínez",
        specialty: "Especialista en acuarelas abstractas",
        bio: "Laura es una artista emergente con un estilo único que combina técnicas tradicionales de acuarela con elementos contemporáneos.",
        image: "/placeholder.svg?height=400&width=400&text=Laura",
      },
      trend: {
        title: "Los colores tierra en decoración 2024",
        description:
          "Esta temporada, los tonos terrosos como el terracota, ocre y marrón tostado dominan las tendencias de decoración de interiores.",
        image: "/placeholder.svg?height=400&width=800&text=Tendencia",
      },
      project: {
        title: "Cuadro personalizado para el living de Carla",
        description:
          "Seguimos el proceso de creación de un cuadro abstracto con tonos azules y dorados para complementar la decoración moderna del living de nuestra cliente Carla.",
        images: [
          "/placeholder.svg?height=300&width=300&text=Paso 1",
          "/placeholder.svg?height=300&width=300&text=Paso 2",
          "/placeholder.svg?height=300&width=300&text=Paso 3",
          "/placeholder.svg?height=300&width=300&text=Final",
        ],
      },
    },
    {
      id: "semana2",
      title: "Semana 2",
      artist: {
        name: "Miguel Ángel Ruiz",
        specialty: "Especialista en arte digital y mixto",
        bio: "Miguel combina técnicas tradicionales con herramientas digitales para crear obras que desafían los límites entre lo físico y lo virtual.",
        image: "/placeholder.svg?height=400&width=400&text=Miguel",
      },
      trend: {
        title: "Arte minimalista en espacios pequeños",
        description:
          "Descubre cómo el arte minimalista puede transformar espacios reducidos, aportando elegancia sin sobrecargar visualmente.",
        image: "/placeholder.svg?height=400&width=800&text=Minimalismo",
      },
      project: {
        title: "Tríptico para el despacho de Juan",
        description:
          "Seguimos la creación de un tríptico con motivos geométricos en tonos azules y grises para el despacho profesional de nuestro cliente Juan.",
        images: [
          "/placeholder.svg?height=300&width=300&text=Boceto",
          "/placeholder.svg?height=300&width=300&text=Proceso",
          "/placeholder.svg?height=300&width=300&text=Detalle",
          "/placeholder.svg?height=300&width=300&text=Resultado",
        ],
      },
    },
    {
      id: "semana3",
      title: "Semana 3",
      artist: {
        name: "Sofía Vega",
        specialty: "Especialista en retratos y figuración",
        bio: "Sofía es conocida por su habilidad para capturar la esencia de las personas en sus retratos, combinando realismo con toques expresionistas.",
        image: "/placeholder.svg?height=400&width=400&text=Sofia",
      },
      trend: {
        title: "Retratos personalizados como regalo",
        description:
          "Los retratos personalizados se están convirtiendo en el regalo más significativo y emotivo para ocasiones especiales.",
        image: "/placeholder.svg?height=400&width=800&text=Retratos",
      },
      project: {
        title: "Retrato familiar para el aniversario de Ana y Pedro",
        description:
          "Seguimos el proceso de creación de un retrato familiar especial para celebrar el 25 aniversario de boda de Ana y Pedro.",
        images: [
          "/placeholder.svg?height=300&width=300&text=Fotografía",
          "/placeholder.svg?height=300&width=300&text=Boceto",
          "/placeholder.svg?height=300&width=300&text=Pintura",
          "/placeholder.svg?height=300&width=300&text=Entrega",
        ],
      },
    }
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-[#2D3E50]">
          Nuestro Proceso Creativo
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600">
          Semana a semana, te mostramos nuestros artistas destacados, las tendencias actuales y los proyectos en los que
          estamos trabajando.
        </p>

        <Tabs defaultValue="semana3" className="w-full">
          <TabsList className="flex justify-center mb-8 overflow-auto pb-2">
            {weeks.map((week) => (
              <TabsTrigger
                key={week.id}
                value={week.id}
                className="px-6 py-3 data-[state=active]:bg-[#2D3E50] data-[state=active]:text-white"
              >
                {week.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {weeks.map((week) => (
            <TabsContent key={week.id} value={week.id} className="space-y-12">
              {/* Artista destacado */}
              <section>
                <h2 className="font-playfair text-3xl font-bold mb-8 text-[#2D3E50] border-b border-gray-200 pb-2">
                  Artista destacado
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="relative h-80 md:h-full">
                    <Image
                      src={week.artist.image || "/placeholder.svg"}
                      alt={week.artist.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-playfair text-2xl font-bold mb-2">{week.artist.name}</h3>
                    <p className="text-[#D4AF37] font-medium mb-4">{week.artist.specialty}</p>
                    <p className="text-gray-700">{week.artist.bio}</p>
                  </div>
                </div>
              </section>

              {/* Tendencia de la semana */}
              <section>
                <h2 className="font-playfair text-3xl font-bold mb-8 text-[#2D3E50] border-b border-gray-200 pb-2">
                  Tendencia de la semana
                </h2>
                <Card className="overflow-hidden border-none shadow-md">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={week.trend.image || "/placeholder.svg"}
                      alt={week.trend.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-2xl font-bold mb-2">{week.trend.title}</h3>
                    <p className="text-gray-700">{week.trend.description}</p>
                  </CardContent>
                </Card>
              </section>

              {/* Proyecto en progreso */}
              <section>
                <h2 className="font-playfair text-3xl font-bold mb-8 text-[#2D3E50] border-b border-gray-200 pb-2">
                  Proyecto en progreso
                </h2>
                <div className="space-y-6">
                  <h3 className="font-playfair text-2xl font-bold">{week.project.title}</h3>
                  <p className="text-gray-700 mb-6">{week.project.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {week.project.images.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Paso ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

