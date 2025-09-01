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
    'services.hoses.title': 'Mangueras Automotrices',
    'services.hoses.description': 'Amplio catálogo de mangueras para sistemas de refrigeración, frenos, dirección hidráulica y combustible. Todas las marcas y modelos.',
    'services.oils.title': 'Aceites y Lubricantes',
    'services.oils.description': 'Aceites de motor premium, lubricantes especializados y fluidos para transmisión. Marcas reconocidas mundialmente.',
    'services.connections.title': 'Conexiones y Accesorios',
    'services.connections.description': 'Conexiones, abrazaderas, válvulas y accesorios de alta calidad para sistemas automotrices completos.',
    'services.filters.title': 'Filtros Automotrices',
    'services.filters.description': 'Filtros de aceite, aire, combustible y cabina. Protección máxima para tu motor y sistemas vehiculares.',
    'services.advice.title': 'Asesoría Técnica',
    'services.advice.description': 'Asesoría especializada para la selección correcta de refacciones. Experiencia de más de 15 años en el sector.',
    
    // Videos
    'videos.title': 'Nuestros Videos',
    'videos.subtitle': 'Conoce más sobre nuestros productos y servicios a través de nuestros videos informativos.',
    'videos.watch': 'Ver Video',
    
    // Gallery
    'gallery.title': 'Galería',
    'gallery.subtitle': 'Conoce nuestras instalaciones y productos de primera calidad',
    'gallery.img1.title': 'Taller Profesional',
    'gallery.img1.description': 'Amplio surtido en tornilleria.',
    'gallery.img2.title': 'La morocha la mascota de MC Mendoza',
    'gallery.img2.description': 'la guardia',
    'gallery.img3.title': 'La mojarra la moto chingona',
    'gallery.img3.description': 'para reparto de las piezas',
    
    // Testimonials
    'testimonials.title': 'Testimonios',
    'testimonials.subtitle': 'Lo que dicen nuestros clientes satisfechos',
    
    // Blog
    'blog.title': 'Nuestro Blog',
    'blog.subtitle': 'Artículos y consejos útiles para el mantenimiento de tu vehículo',
    'blog.readmore': 'Leer más',
    'blog.back': 'Volver al Blog',
    'blog.author': 'Autor',
    'blog.date': 'Fecha',
    'blog.readtime': 'min de lectura',
    'blog.post1.title': 'Cómo elegir el aceite correcto para tu motor',
    'blog.post1.excerpt': 'Descubre los factores clave que debes considerar al seleccionar el aceite ideal para mantener tu motor en perfectas condiciones.',
    'blog.post2.title': 'Mantenimiento preventivo de mangueras automotrices',
    'blog.post2.excerpt': 'Aprende a identificar cuándo es momento de cambiar las mangueras de tu vehículo y evita costosas averías.',
    'blog.post3.title': 'Sistemas de filtración: Tu motor te lo agradecerá',
    'blog.post3.excerpt': 'Conoce la importancia de mantener un sistema de filtración eficiente y cómo puede extender la vida de tu motor.',
    
    // Location
    'location.title': 'Nuestra Ubicación',
    'location.subtitle': 'Visítanos en nuestra tienda en Chapala, Jalisco',
    'location.address': 'Avenida Francisco I. Madero 564, Chapala, Jalisco, México',
    'location.hours': 'Horarios de Atención',
    'location.contact': 'Información de Contacto',
    'location.directions': 'Cómo Llegar',
    'location.phone': 'Teléfono',
    'location.email': 'Email',
    'location.whatsapp': 'WhatsApp',
    'location.monday': 'Lunes - Viernes',
    'location.saturday': 'Sábados',
    'location.sunday': 'Domingos',
    'location.closed': 'Cerrado',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.products': 'Productos',
    'footer.support': 'Soporte',
    'footer.contact': 'Contacto',
    'footer.about': 'Acerca de Nosotros',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.hoses': 'Mangueras',
    'footer.oils': 'Aceites',
    'footer.filters': 'Filtros',
    'footer.connections': 'Conexiones',
    'footer.help': 'Centro de Ayuda',
    'footer.faq': 'Preguntas Frecuentes',
    'footer.warranty': 'Garantía',
    'footer.shipping': 'Envíos',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Floating Contact
    'contact.whatsapp': 'WhatsApp',
    'contact.phone': 'Teléfono',
    'contact.email': 'Email'
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
    'services.hoses.title': 'Automotive Hoses',
    'services.hoses.description': 'Wide catalog of hoses for cooling, brake, power steering and fuel systems. All brands and models.',
    'services.oils.title': 'Oils and Lubricants',
    'services.oils.description': 'Premium engine oils, specialized lubricants and transmission fluids. Globally recognized brands.',
    'services.connections.title': 'Connections and Accessories',
    'services.connections.description': 'Connections, clamps, valves and high-quality accessories for complete automotive systems.',
    'services.filters.title': 'Automotive Filters',
    'services.filters.description': 'Oil, air, fuel and cabin filters. Maximum protection for your engine and vehicle systems.',
    'services.advice.title': 'Technical Advisory',
    'services.advice.description': 'Specialized advice for the correct selection of spare parts. Over 15 years of experience in the sector.',
    
    // Videos
    'videos.title': 'Our Videos',
    'videos.subtitle': 'Learn more about our products and services through our informative videos.',
    'videos.watch': 'Watch Video',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Discover our facilities and premium quality products',
    'gallery.img1.title': 'Professional Workshop',
    'gallery.img1.description': 'Wide assortment of hardware.',
    'gallery.img2.title': 'La Morocha, MC Mendoza\'s mascot',
    'gallery.img2.description': 'the guard',
    'gallery.img3.title': 'La Mojarra, the awesome bike',
    'gallery.img3.description': 'for parts delivery',
    
    // Testimonials
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What our satisfied customers say',
    
    // Blog
    'blog.title': 'Our Blog',
    'blog.subtitle': 'Articles and useful tips for your vehicle maintenance',
    'blog.readmore': 'Read more',
    'blog.back': 'Back to Blog',
    'blog.author': 'Author',
    'blog.date': 'Date',
    'blog.readtime': 'min read',
    'blog.post1.title': 'How to choose the right oil for your engine',
    'blog.post1.excerpt': 'Discover the key factors you should consider when selecting the ideal oil to keep your engine in perfect condition.',
    'blog.post2.title': 'Preventive maintenance of automotive hoses',
    'blog.post2.excerpt': 'Learn to identify when it\'s time to change your vehicle\'s hoses and avoid costly breakdowns.',
    'blog.post3.title': 'Filtration systems: Your engine will thank you',
    'blog.post3.excerpt': 'Learn the importance of maintaining an efficient filtration system and how it can extend your engine\'s life.',
    
    // Location
    'location.title': 'Our Location',
    'location.subtitle': 'Visit us at our store in Chapala, Jalisco',
    'location.address': 'Francisco I. Madero Avenue 564, Chapala, Jalisco, Mexico',
    'location.hours': 'Business Hours',
    'location.contact': 'Contact Information',
    'location.directions': 'Get Directions',
    'location.phone': 'Phone',
    'location.email': 'Email',
    'location.whatsapp': 'WhatsApp',
    'location.monday': 'Monday - Friday',
    'location.saturday': 'Saturday',
    'location.sunday': 'Sunday',
    'location.closed': 'Closed',
    
    // Footer
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
    'footer.about': 'About Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.hoses': 'Hoses',
    'footer.oils': 'Oils',
    'footer.filters': 'Filters',
    'footer.connections': 'Connections',
    'footer.help': 'Help Center',
    'footer.faq': 'FAQ',
    'footer.warranty': 'Warranty',
    'footer.shipping': 'Shipping',
    'footer.rights': 'All rights reserved.',
    
    // Floating Contact
    'contact.whatsapp': 'WhatsApp',
    'contact.phone': 'Phone',
    'contact.email': 'Email'
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