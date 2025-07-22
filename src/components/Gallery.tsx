import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import workshopScene from "@/assets/workshop-scene.jpg"
import partsCollection from "@/assets/parts-collection.jpg"
import heroBg from "@/assets/hero-bg.jpg"

const galleryImages = [
  {
    src: workshopScene,
    title: "Taller Profesional",
    description: "Instalaciones modernas con tecnología de vanguardia"
  },
  {
    src: partsCollection,
    title: "Amplio Inventario",
    description: "Miles de refacciones disponibles para toda marca"
  },
  {
    src: heroBg,
    title: "Productos de Calidad",
    description: "Mangueras, conexiones y aceites premium"
  },
  {
    src: workshopScene,
    title: "Servicio Especializado",
    description: "Equipo técnico con más de 15 años de experiencia"
  },
  {
    src: partsCollection,
    title: "Marcas Reconocidas",
    description: "Trabajamos con las mejores marcas del mercado"
  },
  {
    src: heroBg,
    title: "Tecnología Avanzada",
    description: "Sistemas modernos para un servicio eficiente"
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextLightboxImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevLightboxImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestra <span className="text-mc-red">Galería</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce nuestras instalaciones, productos y el equipo que hace posible 
            brindar el mejor servicio en refacciones automotrices.
          </p>
        </div>

        {/* Featured Carousel */}
        <div className="relative mb-16 animate-slide-up">
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-elegant group">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-white/90 text-lg">
                {galleryImages[currentIndex].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <Button
              size="lg"
              variant="secondary"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-float transition-all duration-300 cursor-pointer animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-semibold text-lg mb-1">{image.title}</h4>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <Button
                size="lg"
                variant="secondary"
                onClick={closeLightbox}
                className="absolute top-4 right-4 rounded-full w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation */}
              <Button
                size="lg"
                variant="secondary"
                onClick={prevLightboxImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={nextLightboxImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-bold text-xl mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/80">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}