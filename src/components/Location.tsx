import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation,
  Car,
  MessageCircle 
} from "lucide-react"

export function Location() {
  const address = "Av. Francisco I. Madero 564, Chapala, Jalisco, México"
  const phoneNumber = "+52 322 123 4567"
  const email = "contacto@mcmendoza.com"
  const whatsappNumber = "523221234567"

  const openInMaps = () => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20productos`, "_blank")
  }

  const callPhone = () => {
    window.open(`tel:${phoneNumber}`, "_blank")
  }

  const sendEmail = () => {
    window.open(`mailto:${email}?subject=Consulta%20MC%20Mendoza`, "_blank")
  }

  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestra <span className="text-mc-red">Ubicación</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Visítanos en nuestras instalaciones en Chapala, Jalisco. 
            Estamos estratégicamente ubicados para brindarte el mejor servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="animate-slide-up">
            <Card className="overflow-hidden shadow-elegant border-0 bg-gradient-card">
              <div className="relative h-80 bg-muted">
                {/* Placeholder for map - you can replace with actual map integration */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mc-red/20 to-mc-gray/20">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-mc-red mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground mb-2">MC Mendoza</p>
                    <p className="text-muted-foreground">Chapala, Jalisco</p>
                  </div>
                </div>
                
                {/* Quick Actions Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <Button
                    onClick={openInMaps}
                    className="w-full bg-mc-red hover:bg-mc-red-dark text-white font-semibold shadow-float"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Abrir en Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Address Card */}
            <Card className="shadow-card border-0 bg-gradient-card hover:shadow-float transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">Dirección</CardTitle>
                    <CardDescription>Encuéntranos aquí</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {address}
                </p>
                <Button 
                  variant="outline" 
                  onClick={openInMaps}
                  className="border-mc-red text-mc-red hover:bg-mc-red hover:text-white transition-colors"
                >
                  <Car className="h-4 w-4 mr-2" />
                  Cómo llegar
                </Button>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="shadow-card border-0 bg-gradient-card hover:shadow-float transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">Horarios</CardTitle>
                    <CardDescription>Estamos abiertos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="font-semibold text-mc-red">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sábados</span>
                  <span className="font-semibold text-mc-red">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Domingos</span>
                  <span className="font-semibold text-muted-foreground">Cerrado</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white p-4 h-auto flex-col space-y-2 shadow-card hover:shadow-float transition-all duration-300"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="text-sm">WhatsApp</span>
              </Button>
              
              <Button
                onClick={callPhone}
                variant="outline"
                className="border-mc-red text-mc-red hover:bg-mc-red hover:text-white p-4 h-auto flex-col space-y-2 shadow-card hover:shadow-float transition-all duration-300"
              >
                <Phone className="h-6 w-6" />
                <span className="text-sm">Llamar</span>
              </Button>
              
              <Button
                onClick={sendEmail}
                variant="secondary"
                className="p-4 h-auto flex-col space-y-2 shadow-card hover:shadow-float transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
                <span className="text-sm">Email</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information Details */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              ¿Tienes alguna duda? ¡Contáctanos!
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Teléfono</h4>
                <p className="text-white/90">{phoneNumber}</p>
              </div>
              
              <div>
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-white/90">{email}</p>
              </div>
              
              <div>
                <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">WhatsApp</h4>
                <p className="text-white/90">Respuesta inmediata</p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                onClick={openWhatsApp}
                className="bg-white text-mc-red hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-float"
              >
                Iniciar Conversación
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}