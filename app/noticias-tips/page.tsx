import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NoticiasTips() {
  // Datos de ejemplo para noticias y tips
  const articles = [
    {
      id: 1,
      title: "Cómo elegir el cuadro perfecto para tu espacio",
      excerpt:
        "Descubre las claves para seleccionar la obra de arte ideal según las características de tu espacio, la iluminación y tu estilo personal.",
      image: "/placeholder.svg?height=600&width=1200&text=Elegir+Cuadro",
      date: "15 de marzo, 2024",
      readTime: "5 min",
      author: "María González",
      category: "Tips de Decoración",
    },
    {
      id: 2,
      title: "Entrevista con Javier Méndez, artista colaborador",
      excerpt:
        "Conoce la trayectoria y proceso creativo de uno de nuestros artistas más destacados, especializado en paisajes urbanos contemporáneos.",
      image: "/placeholder.svg?height=600&width=1200&text=Entrevista",
      date: "8 de marzo, 2024",
      readTime: "8 min",
      author: "Carlos Ruiz",
      category: "Entrevistas",
    },
    {
      id: 3,
      title: "Evento: Taller de arte personalizado gratuito",
      excerpt:
        "Te invitamos a participar en nuestro taller gratuito donde aprenderás técnicas básicas para personalizar tus propias obras de arte.",
      image: "/placeholder.svg?height=600&width=1200&text=Taller",
      date: "20 de marzo, 2024",
      readTime: "3 min",
      author: "Equipo Arte a Medida",
      category: "Eventos",
    },
    {
      id: 4,
      title: "Las 5 tendencias en arte para el hogar en 2024",
      excerpt:
        "Analizamos las principales tendencias en arte decorativo para este año, desde los colores de moda hasta los estilos más demandados.",
      image: "/placeholder.svg?height=600&width=1200&text=Tendencias",
      date: "1 de marzo, 2024",
      readTime: "6 min",
      author: "Laura Sánchez",
      category: "Tendencias",
    },
    {
      id: 5,
      title: "Guía para cuidar y preservar tus obras de arte",
      excerpt:
        "Consejos prácticos para mantener tus cuadros en perfecto estado, protegerlos de la luz solar y limpiarlos adecuadamente.",
      image: "/placeholder.svg?height=600&width=1200&text=Cuidado",
      date: "25 de febrero, 2024",
      readTime: "7 min",
      author: "Antonio Vega",
      category: "Mantenimiento",
    },
    {
      id: 6,
      title: "Arte personalizado como regalo: ideas originales",
      excerpt:
        "Descubre por qué el arte personalizado se ha convertido en uno de los regalos más significativos y cómo elegir la pieza perfecta.",
      image: "/placeholder.svg?height=600&width=1200&text=Regalo",
      date: "18 de febrero, 2024",
      readTime: "5 min",
      author: "Elena Martín",
      category: "Ideas y Consejos",
    },
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-[#2D3E50]">
          Noticias y Tips
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600">
          Mantente al día con las últimas tendencias, entrevistas con artistas y consejos para elegir y cuidar tus obras
          de arte.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden border-none shadow-md">
              <div className="relative h-48 md:h-56">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-white text-sm font-medium py-1 px-3 rounded-full">
                  {article.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">{article.date}</span>
                  <Clock size={16} className="mr-1" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={16} className="mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <Link
                    href={`/noticias-tips/${article.id}`}
                    className="text-[#2D3E50] font-medium hover:text-[#D4AF37] transition-colors"
                  >
                    Leer más →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Suscripción al boletín */}
        <div className="mt-16 bg-gray-50 p-8 md:p-12 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-4 text-[#2D3E50]">Suscríbete a nuestro boletín</h2>
            <p className="text-gray-600 mb-6">
              Recibe las últimas noticias, tendencias y consejos directamente en tu bandeja de entrada.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D3E50]"
                required
              />
              <Button type="submit" className="bg-[#2D3E50] hover:bg-[#1e2a38] text-white">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

