import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Settings, 
  Droplets, 
  Wrench, 
  Shield, 
  Truck, 
  Clock,
  ArrowRight 
} from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Mangueras Automotrices",
    description: "Amplio catálogo de mangueras para sistemas de refrigeración, frenos, dirección hidráulica y combustible. Todas las marcas y modelos.",
    features: ["Refrigeración", "Frenos", "Dirección", "Combustible"]
  },
  {
    icon: Droplets,
    title: "Aceites y Lubricantes",
    description: "Aceites de motor premium, lubricantes especializados y fluidos para transmisión. Marcas reconocidas mundialmente.",
    features: ["Aceites Motor", "Transmisión", "Hidráulicos", "Diferenciales"]
  },
  {
    icon: Wrench,
    title: "Conexiones y Accesorios",
    description: "Conexiones, abrazaderas, válvulas y accesorios de alta calidad para sistemas automotrices completos.",
    features: ["Abrazaderas", "Válvulas", "Conectores", "Adaptadores"]
  },
  {
    icon: Shield,
    title: "Filtros Automotrices",
    description: "Filtros de aceite, aire, combustible y cabina. Protección máxima para tu motor y sistemas vehiculares.",
    features: ["Aceite", "Aire", "Combustible", "Cabina"]
  },
  
  {
    icon: Clock,
    title: "Asesoría Técnica",
    description: "Asesoría especializada para la selección correcta de refacciones. Experiencia de más de 15 años en el sector.",
    features: ["Consultoría", "Diagnóstico", "Recomendaciones", "Soporte"]
  }
]

export function Services() {
  const handleQuoteRequest = () => {
    window.open("https://wa.me/523221234567?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n", "_blank")
  }

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-mc-red">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de productos y servicios automotrices con la más alta calidad 
            y respaldados por años de experiencia en el sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-float transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-card animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-mc-red transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="text-xs bg-mc-red/10 text-mc-red px-2 py-1 rounded-full text-center font-medium"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-3xl p-8 md:p-12 text-white animate-bounce-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Necesitas una cotización personalizada?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Nuestros expertos te ayudarán a encontrar exactamente lo que necesitas
          </p>
          <Button 
            size="lg"
            onClick={handleQuoteRequest}
            className="bg-white text-mc-red hover:bg-white/90 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 group shadow-float"
          >
            Solicitar Cotización
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}