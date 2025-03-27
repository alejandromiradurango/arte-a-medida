import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {

  const artists = [
    {
      image: 'https://th.bing.com/th/id/OIP.cfMQtxPpu09v3uhKNXvM9wHaI-?rs=1&pid=ImgDetMain',
      name: 'Pintor 1',
      description: 'Especialista en acuarelas abstractas y técnicas mixtas.'
    },
    {
      image: 'https://th.bing.com/th/id/R.51163f4da81941992aed8391ad1ed3bb?rik=HyNrD9Fudti0qA&pid=ImgRaw&r=0',
      name: 'Pintor 2',
      description: 'Especialista en acuarelas abstractas y técnicas mixtas.'
    },
    {
      image: 'https://th.bing.com/th/id/R.5e14d6f099e1f0f1e6f6951f0a24f9f5?rik=Nom1mr%2f2BNA%2bMQ&pid=ImgRaw&r=0',
      name: 'Pintor 3',
      description: 'Especialista en acuarelas abstractas y técnicas mixtas.'
    }
  ]

  const gallery = [
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.kZYQ9QYG6mA8F9tl8gZajwHaFV?rs=1&pid=ImgDetMain',
      title: 'Titulo',
      description: 'Descripcion'
    },
    {
      id: 2,
      image: 'https://encolombia.com/wp-content/uploads/2012/11/Pintura-Abstracta.jpg',
      title: 'Titulo',
      description: 'Descripcion'
    },
    {
      id: 3,
      image: 'https://www.gmarticeballosart.com/wp-content/uploads/2017/10/abstraccion_50x65ap17br.jpg',
      title: 'Titulo',
      description: 'Descripcion'
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/originals/cf/a7/d8/cfa7d84f6fea7f230a0489aca4eb6bb4.jpg',
      title: 'Titulo',
      description: 'Descripcion'
    },
    {
      id: 5,
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/dcd4ba10514655.560e624412a88.jpg',
      title: 'Titulo',
      description: 'Descripcion'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/15947794/pexels-photo-15947794/free-photo-of-arte-pintura-pintando-cuadro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Titulo',
      description: 'Descripcion'
    },
    {
      id: 7,
      image: 'https://acrilicofluido.com/wp-content/uploads/2020/03/2013_NYR_02788_0039_000wassily_kandinsky_schwarz_und_violett-1536x1256.jpg',
      title: 'Titulo',
      description: 'Descripcion'
    },
    {
      id: 8,
      image: 'https://definicion.de/wp-content/uploads/2011/05/pintura-abstracta.jpg',
      title: 'Titulo',
      description: 'Descripcion'
    },
  ]
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Taller de artistas"
            className="object-fill w-full h-full"
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
            {artists.map((artist) => (
              <Card key={artist.name} className="overflow-hidden border-none shadow-md">
                <div className="relative h-80">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-gray-600 mb-4">{artist.description}</p>
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
            {gallery.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-md aspect-square">
                <img
                  src={item.image}
                  alt={`Obra de arte ${item.title}`}
                  className="object-cover transition-transform duration-300 group-hover:scale-110 w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="font-playfair text-lg font-bold">{item.title}</h3>
                    <p className="text-sm mt-1">{item.description}</p>
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
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 hidden">
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

