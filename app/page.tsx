import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Taller de artistas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Arte a Medida – Cuadros Personalizados que Cuentan tu Historia
            </h1>
            <p className="text-xl mb-8">
              En 'Arte a Medida', transformamos tus ideas en obras de arte únicas. Colaboramos contigo y con artistas
              emergentes para crear piezas exclusivas que reflejen tu estilo y personalidad.
            </p>
            <Button asChild className="bg-[#D4AF37] hover:bg-[#c09c31] text-white font-medium px-8 py-6 text-lg">
              <Link href="/contacto">Personaliza tu cuadro ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-8 text-[#2D3E50]">
              Nuestra Misión
            </h2>
            <p className="text-lg text-center text-gray-700">
              Conectar a artistas emergentes con personas que buscan arte único y personalizado, creando piezas que no
              solo decoren espacios, sino que cuenten historias y transmitan emociones. Buscamos democratizar el arte
              personalizado, haciéndolo accesible a todos los que desean expresar su individualidad a través de obras
              únicas.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-[#2D3E50]">
            Nuestros Artistas Destacados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((artist) => (
              <Card key={artist} className="overflow-hidden border-none shadow-md">
                <div className="relative h-80">
                  <Image
                    src={`/placeholder.svg?height=600&width=400&text=Artista ${artist}`}
                    alt={`Artista ${artist}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-2">Nombre del Artista {artist}</h3>
                  <p className="text-gray-600 mb-4">Especialista en acuarelas abstractas y técnicas mixtas.</p>
                  <Link
                    href="/semana-a-semana"
                    className="text-[#2D3E50] font-medium hover:text-[#D4AF37] transition-colors"
                  >
                    Ver obras →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-[#2D3E50]">
            Galería de Obras Recientes
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-md aspect-square">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Obra ${item}`}
                  alt={`Obra de arte ${item}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="font-playfair text-lg font-bold">Título de la Obra</h3>
                    <p className="text-sm mt-1">Técnica mixta sobre lienzo</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-[#2D3E50] hover:bg-[#1e2a38] text-white">
              <Link href="/semana-a-semana">Ver más obras</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-[#2D3E50]">
            Lo Que Dicen Nuestros Clientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="bg-white p-6 shadow-sm border border-gray-100">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=Cliente`}
                        alt="Cliente"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold">Cliente {testimonial}</h3>
                      <p className="text-sm text-gray-500">Madrid, España</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "El cuadro personalizado que crearon para mi sala de estar es simplemente perfecto. Captaron
                    exactamente lo que quería y el resultado superó mis expectativas. ¡Definitivamente volveré a
                    trabajar con Arte a Medida!"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D3E50] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para crear tu obra de arte personalizada?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contacta con nosotros hoy mismo y comienza el proceso creativo para obtener una pieza única que refleje tu
            personalidad.
          </p>
          <Button asChild className="bg-[#D4AF37] hover:bg-[#c09c31] text-white font-medium px-8 py-6 text-lg">
            <Link href="/contacto">Personaliza tu cuadro ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

