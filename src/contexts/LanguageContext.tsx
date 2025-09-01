import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    'nav.inicio': 'Inicio',
    'nav.servicios': 'Servicios',
    'nav.galeria': 'Galería',
    'nav.videos': 'Videos',
    'nav.testimonios': 'Testimonios',
    'nav.blog': 'Blog',
    'nav.ubicacion': 'Ubicación',
    
    // Hero
    'hero.title': 'MC Mendoza',
    'hero.subtitle': 'El mejor servicio de la rivera de chapala.',
    'hero.quality': 'Calidad, confianza y excelencia en cada pieza.',
    'hero.contact': 'Contáctanos Ya',
    'hero.services': 'Ver Servicios',
    'hero.years': 'Años de Experiencia',
    'hero.clients': 'Clientes Satisfechos',
    'hero.support': 'Soporte Disponible',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Ofrecemos una amplia gama de productos y servicios automotrices con la más alta calidad y respaldados por años de experiencia en el sector.',
    'services.quote.title': '¿Necesitas una cotización personalizada?',
    'services.quote.subtitle': 'Nuestros expertos te ayudarán a encontrar exactamente lo que necesitas',
    'services.quote.button': 'Solicitar Cotización',
    
    // Videos
    'videos.title': 'Nuestros Videos',
    'videos.subtitle': 'Conoce más sobre nuestros productos y servicios a través de nuestros videos informativos.',
    'videos.watch': 'Ver Video',
    
    // Gallery
    'gallery.title': 'Galería',
    'gallery.subtitle': 'Conoce nuestras instalaciones y productos de primera calidad',
    
    // Testimonials
    'testimonials.title': 'Testimonios',
    'testimonials.subtitle': 'Lo que dicen nuestros clientes satisfechos',
    
    // Blog
    'blog.title': 'Nuestro Blog',
    'blog.subtitle': 'Artículos y consejos útiles para el mantenimiento de tu vehículo',
    'blog.readmore': 'Leer más',
    'blog.back': 'Volver al Blog',
    
    // Location
    'location.title': 'Nuestra Ubicación',
    'location.subtitle': 'Visítanos en nuestra tienda en Chapala, Jalisco',
    'location.address': 'Avenida Francisco I. Madero 564, Chapala, Jalisco, México',
    'location.hours': 'Horarios de Atención',
    'location.contact': 'Información de Contacto',
    'location.directions': 'Cómo Llegar',
    'location.phone': 'Teléfono',
    'location.email': 'Email',
    'location.whatsapp': 'WhatsApp'
  },
  en: {
    // Navigation
    'nav.inicio': 'Home',
    'nav.servicios': 'Services',
    'nav.galeria': 'Gallery',
    'nav.videos': 'Videos',
    'nav.testimonios': 'Testimonials',
    'nav.blog': 'Blog',
    'nav.ubicacion': 'Location',
    
    // Hero
    'hero.title': 'MC Mendoza',
    'hero.subtitle': 'The best service in Chapala riviera.',
    'hero.quality': 'Quality, trust and excellence in every piece.',
    'hero.contact': 'Contact Us Now',
    'hero.services': 'View Services',
    'hero.years': 'Years of Experience',
    'hero.clients': 'Satisfied Customers',
    'hero.support': 'Available Support',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer a wide range of automotive products and services with the highest quality and backed by years of experience in the sector.',
    'services.quote.title': 'Need a personalized quote?',
    'services.quote.subtitle': 'Our experts will help you find exactly what you need',
    'services.quote.button': 'Request Quote',
    
    // Videos
    'videos.title': 'Our Videos',
    'videos.subtitle': 'Learn more about our products and services through our informative videos.',
    'videos.watch': 'Watch Video',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Discover our facilities and premium quality products',
    
    // Testimonials
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What our satisfied customers say',
    
    // Blog
    'blog.title': 'Our Blog',
    'blog.subtitle': 'Articles and useful tips for your vehicle maintenance',
    'blog.readmore': 'Read more',
    'blog.back': 'Back to Blog',
    
    // Location
    'location.title': 'Our Location',
    'location.subtitle': 'Visit us at our store in Chapala, Jalisco',
    'location.address': 'Francisco I. Madero Avenue 564, Chapala, Jalisco, Mexico',
    'location.hours': 'Business Hours',
    'location.contact': 'Contact Information',
    'location.directions': 'Get Directions',
    'location.phone': 'Phone',
    'location.email': 'Email',
    'location.whatsapp': 'WhatsApp'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}