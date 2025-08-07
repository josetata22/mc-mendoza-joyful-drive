import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, X } from "lucide-react"
import taller1 from "@/assets/taller1.jpeg"
import taller2 from "@/assets/taller2.jpeg"
import taller3 from "@/assets/taller3.jpeg"

const blogPosts = [
  {
    id: 1,
    title: "Cómo elegir el aceite correcto para tu motor",
    excerpt: "Descubre los factores clave que debes considerar al seleccionar el aceite ideal para mantener tu motor en perfectas condiciones.",
    image: taller1,
    category: "Mantenimiento",
    author: "MC Mendoza",
    date: "2025-01-15",
    readTime: "5 min",
    content: `
      <h2>La importancia del aceite correcto</h2>
      <p>Elegir el aceite adecuado para tu motor es una de las decisiones más importantes que puedes tomar para mantener tu vehículo en óptimas condiciones. Un aceite de calidad no solo protege las partes móviles del motor, sino que también mejora su eficiencia y prolonga su vida útil.</p>
      
      <h3>Factores a considerar</h3>
      <p><strong>Viscosidad:</strong> Es la resistencia del aceite al flujo. Los aceites más viscosos son mejores para motores con mayor desgaste, mientras que los menos viscosos son ideales para motores nuevos.</p>
      
      <p><strong>Tipo de aceite:</strong></p>
      <ul>
        <li><strong>Convencional:</strong> Más económico, ideal para motores con alto kilometraje</li>
        <li><strong>Sintético:</strong> Mayor durabilidad y protección, mejor para condiciones extremas</li>
        <li><strong>Semi-sintético:</strong> Combina lo mejor de ambos mundos</li>
      </ul>
      
      <h3>Recomendaciones específicas</h3>
      <p>Siempre consulta el manual de tu vehículo para conocer las especificaciones exactas. En MC Mendoza contamos con aceites de las mejores marcas y te asesoramos para que elijas la opción perfecta para tu motor.</p>
      
      <p><strong>Marcas recomendadas:</strong> Mobil 1, Castrol, Shell, Valvoline</p>
      
      <h3>Conclusión</h3>
      <p>Un mantenimiento adecuado con el aceite correcto puede ahorrarte miles de pesos en reparaciones futuras. Visítanos en MC Mendoza y nuestros expertos te ayudarán a elegir el aceite perfecto para tu vehículo.</p>
    `
  },
  {
    id: 2,
    title: "Mantenimiento preventivo de mangueras automotrices",
    excerpt: "Aprende a identificar cuándo es momento de cambiar las mangueras de tu vehículo y evita costosas averías.",
    image: taller2 ,
    category: "Prevención",
    author: "MC Mendoza",
    date: "2025-01-10",
    readTime: "7 min",
    content: `
      <h2>¿Por qué es importante el mantenimiento de mangueras?</h2>
      <p>Las mangueras automotrices son componentes críticos que transportan fluidos vitales como refrigerante, aceite y combustible. Su falla puede causar desde sobrecalentamiento hasta daños graves en el motor.</p>
      
      <h3>Signos de alarma</h3>
      <p><strong>Inspección visual:</strong></p>
      <ul>
        <li>Grietas o fisuras en la superficie</li>
        <li>Hinchazón o deformaciones</li>
        <li>Manchas de líquido debajo del vehículo</li>
        <li>Mangueras duras o demasiado blandas</li>
        <li>Conexiones flojas o corroídas</li>
      </ul>
      
      <h3>Tipos de mangueras y su función</h3>
      <p><strong>Refrigeración:</strong> Transportan el coolant entre el motor y el radiador</p>
      <p><strong>Frenos:</strong> Llevan el líquido de frenos desde el cilindro maestro hasta las ruedas</p>
      <p><strong>Dirección hidráulica:</strong> Permiten el funcionamiento del sistema de dirección asistida</p>
      <p><strong>Combustible:</strong> Transportan gasolina desde el tanque hasta el motor</p>
      
      <h3>Frecuencia de cambio</h3>
      <p>Recomendamos inspeccionar las mangueras cada 6 meses y cambiarlas cada 4-5 años o según las condiciones de uso. En climas extremos o uso intensivo, la frecuencia puede ser mayor.</p>
      
      <h3>Prevención es clave</h3>
      <p>En MC Mendoza ofrecemos mangueras de alta calidad que cumplen con las especificaciones originales de fábrica. Nuestro equipo técnico puede realizar una inspección completa y recomendarte el mejor momento para el cambio.</p>
    `
  },
  {
    id: 3,
    title: "Sistemas de filtración: Tu motor te lo agradecerá",
    excerpt: "Conoce la importancia de mantener un sistema de filtración eficiente y cómo puede extender la vida de tu motor.",
    image: taller3,
    category: "Filtros",
    author: "MC Mendoza",
    date: "2025-01-05",
    readTime: "6 min",
    content: `
      <h2>La importancia de la filtración</h2>
      <p>Un sistema de filtración eficiente es la primera línea de defensa contra contaminantes que pueden dañar tu motor. Los filtros protegen componentes vitales y aseguran un funcionamiento óptimo.</p>
      
      <h3>Tipos de filtros esenciales</h3>
      
      <h4>Filtro de aceite</h4>
      <p>Elimina partículas metálicas y contaminantes del aceite del motor. Debe cambiarse con cada cambio de aceite para mantener la lubricación óptima.</p>
      
      <h4>Filtro de aire</h4>
      <p>Protege el motor de polvo, polen y otros contaminantes del aire. Un filtro sucio reduce la eficiencia del combustible y puede dañar el motor.</p>
      
      <h4>Filtro de combustible</h4>
      <p>Retiene impurezas del combustible antes de que lleguen al motor. Es crucial para el funcionamiento de los inyectores y la bomba de combustible.</p>
      
      <h4>Filtro de cabina</h4>
      <p>Mejora la calidad del aire dentro del vehículo, filtrando polen, polvo y gases nocivos del sistema de ventilación.</p>
      
      <h3>Señales de que necesitas cambiar los filtros</h3>
      <ul>
        <li>Reducción en el rendimiento del combustible</li>
        <li>Pérdida de potencia del motor</li>
        <li>Olores extraños en la cabina</li>
        <li>Ruidos inusuales del motor</li>
        <li>Aire acondicionado menos eficiente</li>
      </ul>
      
      <h3>Calidad marca la diferencia</h3>
      <p>En MC Mendoza manejamos filtros de las mejores marcas que cumplen o superan las especificaciones OEM. Invertir en filtros de calidad es invertir en la longevidad de tu vehículo.</p>
      
      <h3>Programa de mantenimiento</h3>
      <p>Establece un programa regular de cambio de filtros basado en el kilometraje y condiciones de uso. Nuestros técnicos pueden ayudarte a crear un plan personalizado para tu vehículo.</p>
    `
  }
]

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  const openPost = (post: typeof blogPosts[0]) => {
    setSelectedPost(post)
  }

  const closePost = () => {
    setSelectedPost(null)
  }

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Blog <span className="text-mc-red">Automotriz</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mantente informado con nuestros artículos especializados. 
            Tips, consejos y guías para mantener tu vehículo en perfectas condiciones.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group hover:shadow-float transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-card animate-slide-up overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openPost(post)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-mc-red text-white font-medium">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-mc-red transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('es-MX')}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-mc-red/10 hover:text-mc-red transition-colors"
                >
                  <span>Leer más ({post.readTime})</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-background rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden shadow-elegant">
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Close Button */}
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={closePost}
                  className="absolute top-4 right-4 rounded-full w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-mc-red text-white font-medium mb-3">
                    {selectedPost.category}
                  </Badge>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{selectedPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(selectedPost.date).toLocaleDateString('es-MX')}</span>
                    </div>
                    <span>{selectedPost.readTime} de lectura</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 max-h-[50vh] overflow-y-auto">
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
                
                {/* Call to Action */}
                <div className="mt-8 p-6 bg-gradient-primary rounded-2xl text-white text-center">
                  <h4 className="text-xl font-bold mb-2">¿Necesitas asesoría especializada?</h4>
                  <p className="mb-4 text-white/90">Nuestros expertos están listos para ayudarte</p>
                  <Button
                    onClick={() => window.open("https://wa.me/523221234567", "_blank")}
                    className="bg-white text-mc-red hover:bg-white/90 font-semibold"
                  >
                    Contactar por WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}