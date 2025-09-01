import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Droplets, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import heroBg from "@/assets/hero-bg.jpg"

export function Hero() {
  const { t } = useLanguage()
  
  const scrollToContact = () => {
    const element = document.getElementById("ubicacion")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-mc-red/20 rounded-full animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-mc-red/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-mc-red/15 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4 text-white/80">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm animate-bounce-in" style={{ animationDelay: "0.2s" }}>
                <Wrench className="h-6 w-6" />
              </div>
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm animate-bounce-in" style={{ animationDelay: "0.4s" }}>
                <Droplets className="h-6 w-6" />
              </div>
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm animate-bounce-in" style={{ animationDelay: "0.6s" }}>
                <Shield className="h-6 w-6" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            <span className="block">{t('hero.title').split(' ')[0]}</span>
            <span className="block text-mc-red-light">{t('hero.title').split(' ')[1]}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {t('hero.subtitle')}
            <span className="block mt-2 text-mc-red-light font-semibold">
              {t('hero.quality')}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-mc-red hover:bg-mc-red-dark text-white px-8 py-4 rounded-full text-lg font-semibold shadow-float transition-all duration-300 hover:scale-105 group"
            >
              {t('hero.contact')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-mc-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {t('hero.services')}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">{t('hero.years')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">{t('hero.clients')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">{t('hero.support')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}