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
import { useLanguage } from "@/contexts/LanguageContext"

export function Services() {
  const { t } = useLanguage()
  
  const services = [
    {
      icon: Settings,
      title: t('services.hoses.title'),
      description: t('services.hoses.description'),
      features: ["Refrigeración", "Frenos", "Dirección", "Combustible"]
    },
    {
      icon: Droplets,
      title: t('services.oils.title'),
      description: t('services.oils.description'),
      features: ["Aceites Motor", "Transmisión", "Hidráulicos", "Diferenciales"]
    },
    {
      icon: Wrench,
      title: t('services.connections.title'),
      description: t('services.connections.description'),
      features: ["Abrazaderas", "Válvulas", "Conectores", "Adaptadores"]
    },
    {
      icon: Shield,
      title: t('services.filters.title'),
      description: t('services.filters.description'),
      features: ["Aceite", "Aire", "Combustible", "Cabina"]
    },
    {
      icon: Clock,
      title: t('services.advice.title'),
      description: t('services.advice.description'),
      features: ["Consultoría", "Diagnóstico", "Recomendaciones", "Soporte"]
    }
  ]
  const handleQuoteRequest = () => {
    window.open("https://wa.me/523221234567?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n", "_blank")
  }

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
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
            {t('services.quote.title')}
          </h3>
          <p className="text-lg mb-6 text-white/90">
            {t('services.quote.subtitle')}
          </p>
          <Button 
            size="lg"
            onClick={handleQuoteRequest}
            className="bg-white text-mc-red hover:bg-white/90 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 group shadow-float"
          >
            {t('services.quote.button')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}