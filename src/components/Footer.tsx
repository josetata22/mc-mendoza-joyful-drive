import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface FooterProps {
  logo: string
}

export function Footer({ logo }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-mc-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img src={logo} alt="MC Mendoza" className="h-12 w-auto mb-4" />
              <p className="text-gray-300 leading-relaxed">
                Tu socio confiable en refacciones automotrices. Más de 15 años 
                brindando calidad y excelencia en cada pieza.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-mc-red text-white p-0"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-mc-red text-white p-0"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-mc-red text-white p-0"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-300 hover:text-mc-red p-0 h-auto font-normal justify-start"
                >
                  Inicio
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-300 hover:text-mc-red p-0 h-auto font-normal justify-start"
                >
                  Servicios
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("galeria")}
                  className="text-gray-300 hover:text-mc-red p-0 h-auto font-normal justify-start"
                >
                  Galería
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("testimonios")}
                  className="text-gray-300 hover:text-mc-red p-0 h-auto font-normal justify-start"
                >
                  Testimonios
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("blog")}
                  className="text-gray-300 hover:text-mc-red p-0 h-auto font-normal justify-start"
                >
                  Blog
                </Button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Servicios</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Mangueras Automotrices</li>
              <li>Aceites y Lubricantes</li>
              <li>Conexiones y Accesorios</li>
              <li>Filtros Automotrices</li>
              <li>Entrega a Domicilio</li>
              <li>Asesoría Técnica</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-mc-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Av. Francisco I. Madero 564<br />
                    Chapala, Jalisco, México
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-mc-red flex-shrink-0" />
                <p className="text-gray-300 text-sm">+52 322 123 4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-mc-red flex-shrink-0" />
                <p className="text-gray-300 text-sm">contacto@mcmendoza.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-mc-red flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p>Sáb: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} MC Mendoza. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-mc-red text-sm p-0 h-auto"
              >
                Política de Privacidad
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-mc-red text-sm p-0 h-auto"
              >
                Términos de Servicio
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/523221234567", "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}