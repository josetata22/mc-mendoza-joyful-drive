import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Transportista",
    company: "Transportes Chapala",
    rating: 5,
    content: "Excelente servicio y productos de primera calidad. Llevo más de 10 años comprando aquí todas las refacciones para mi flota. Siempre tienen lo que necesito y el precio es muy competitivo.",
    avatar: "CM"
  },
  {
    name: "María Elena García",
    role: "Propietaria",
    company: "Taller Mecánico García",
    rating: 5,
    content: "La mejor refaccionaria de la zona. Su asesoría técnica es invaluable y nunca me han fallado con la entrega. Mis clientes quedan satisfechos con la calidad de las piezas que instalo.",
    avatar: "MG"
  },
  {
    name: "Roberto Silva",
    role: "Conductor",
    company: "Particular",
    rating: 5,
    content: "Atención personalizada y precios justos. Me explicaron perfectamente qué necesitaba mi camioneta y el problema se solucionó de inmediato. Definitivamente recomendados al 100%.",
    avatar: "RS"
  },
  {
    name: "Ana Ruiz",
    role: "Gerente",
    company: "Fletes del Lago",
    rating: 5,
    content: "Profesionalismo y confianza. Manejan las mejores marcas y su stock siempre está actualizado. Para nuestros vehículos comerciales es fundamental contar con proveedores como MC Mendoza.",
    avatar: "AR"
  },
  {
    name: "Jorge Hernández",
    role: "Mecánico",
    company: "Autoservicio Chapala",
    rating: 5,
    content: "Son especialistas en lo que hacen. La calidad de las mangueras y conexiones que venden es superior. Mis reparaciones duran más tiempo y mis clientes regresan satisfechos.",
    avatar: "JH"
  },
  {
    name: "Patricia López",
    role: "Conductora",
    company: "Taxi Chapala",
    rating: 5,
    content: "Servicio rápido y eficiente. Cuando necesito algo urgente para mi taxi, siempre puedo contar con ellos. Su entrega a domicilio me ha salvado muchas veces.",
    avatar: "PL"
  }
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que dicen nuestros <span className="text-mc-red">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Conoce las experiencias de quienes confían en MC Mendoza.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 animate-slide-up">
          <div className="text-center">
            <div className="text-4xl font-bold text-mc-red mb-2">1000+</div>
            <div className="text-muted-foreground">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-mc-red mb-2">15+</div>
            <div className="text-muted-foreground">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-mc-red mb-2">4.9</div>
            <div className="text-muted-foreground">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-mc-red mb-2">98%</div>
            <div className="text-muted-foreground">Clientes que Regresan</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-float transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-card animate-bounce-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-mc-red/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                  "{testimonial.content}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-mc-red transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-mc-red font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Quieres ser parte de nuestros clientes satisfechos?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Únete a más de 1000 clientes que confían en la calidad y servicio de MC Mendoza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("https://wa.me/523221234567", "_blank")}
                className="bg-white text-mc-red hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-float"
              >
                Contactar por WhatsApp
              </button>
              <button
                onClick={() => window.open("tel:+523221234567", "_blank")}
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-mc-red px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Llamar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}