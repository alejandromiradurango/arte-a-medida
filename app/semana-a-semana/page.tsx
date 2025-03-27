"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ReactPlayer from 'react-player'

export default function SemanaASemana() {
  // Datos de ejemplo para las semanas
  const weeks = [
    {
      id: 'semana1',
      title: 'Avance 1',
      images: [
        '/avance1.jpg',
        '/avance1-1.jpg'
      ]
    },
    {
      id: 'semana2',
      title: 'Avance 2',
      images: [
        '/avance2.jpg'
      ]
    },
    {
      id: 'semana3',
      title: 'Avance 3',
      videos: [
        'https://www.youtube.com/shorts/EpuW3PffBUA'
      ]
    }
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-[#2D3E50]">
          Nuestro Proceso Creativo
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600">
          Semana a semana, te mostramos nuestros artistas destacados, las
          tendencias actuales y los proyectos en los que estamos trabajando.
        </p>

        <Tabs defaultValue="semana3" className="w-full">
          <TabsList className="flex justify-center mb-8">
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
              {/* Imagenes */}
              {week.images && (
                <div>
                  {week.images.map((image) => (
                    <img className='w-full' src={image} alt={image} key={image} />
                  ))}
                </div>
              )}

              {week.videos && (
                <div>
                  {week.videos.map((video) => (
                    <ReactPlayer url={video} key={video} className="!w-full !h-screen !aspect-[9:16]" style={{ width: "100%", height: "1000%" }}/>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
