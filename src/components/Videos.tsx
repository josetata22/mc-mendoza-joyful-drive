import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const videos = [
  {
    id: 1,
    title: "Cambio de Aceite Profesional",
    titleEn: "Professional Oil Change",
    description: "Aprende el proceso correcto para cambiar el aceite de tu motor",
    descriptionEn: "Learn the correct process to change your engine oil",
    thumbnail: "https://img.youtube.com/vi/O1hF25Cowv8/maxresdefault.jpg",
    videoId: "O1hF25Cowv8"
  },
  {
    id: 2,
    title: "Mantenimiento de Mangueras",
    titleEn: "Hose Maintenance",
    description: "Cómo identificar cuándo cambiar las mangueras de tu vehículo",
    descriptionEn: "How to identify when to change your vehicle's hoses",
    thumbnail: "https://img.youtube.com/vi/6RlxySFrkIM/maxresdefault.jpg",
    videoId: "6RlxySFrkIM"
  },
  {
    id: 3,
    title: "Filtros Automotrices",
    titleEn: "Automotive Filters",
    description: "Importancia y tipos de filtros para tu automóvil",
    descriptionEn: "Importance and types of filters for your car",
    thumbnail: "https://img.youtube.com/vi/xWKlLCPmDK4/maxresdefault.jpg",
    videoId: "xWKlLCPmDK4"
  },
  {
    id: 4,
    title: "Diagnóstico de Problemas",
    titleEn: "Problem Diagnosis",
    description: "Cómo diagnosticar problemas comunes en el motor",
    descriptionEn: "How to diagnose common engine problems",
    thumbnail: "https://img.youtube.com/vi/SdJF2cKXYrU/maxresdefault.jpg",
    videoId: "SdJF2cKXYrU"
  },
  {
    id: 5,
    title: "Productos MC Mendoza",
    titleEn: "MC Mendoza Products",
    description: "Conoce nuestra amplia gama de productos automotrices",
    descriptionEn: "Discover our wide range of automotive products",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Instalaciones MC Mendoza",
    titleEn: "MC Mendoza Facilities",
    description: "Un recorrido por nuestras instalaciones y taller",
    descriptionEn: "A tour of our facilities and workshop",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    videoId: "jNQXAC9IVRw"
  }
]

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)
  const { language, t } = useLanguage()
  
  const openVideoModal = (video: typeof videos[0]) => {
    setSelectedVideo(video)
  }
  
  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('videos.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('videos.subtitle')}
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group hover:shadow-float transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-card animate-slide-up cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openVideoModal(video)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={language === 'es' ? video.title : video.titleEn}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-mc-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-float">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" className="bg-black/50 text-white hover:bg-black/70 rounded-full px-3 py-1 text-xs">
                    {t('videos.watch')}
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-mc-red transition-colors">
                  {language === 'es' ? video.title : video.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === 'es' ? video.description : video.descriptionEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-background rounded-lg overflow-hidden shadow-float animate-scale-in">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={language === 'es' ? selectedVideo.title : selectedVideo.titleEn}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {language === 'es' ? selectedVideo.title : selectedVideo.titleEn}
              </h3>
              <p className="text-muted-foreground">
                {language === 'es' ? selectedVideo.description : selectedVideo.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}