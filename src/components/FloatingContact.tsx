import { Phone, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export function FloatingContact() {
  const { t } = useLanguage()
  
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-float bg-gradient-primary hover:scale-110 transition-all duration-300 animate-pulse-glow"
        onClick={() => window.open("https://wa.me/523221234567", "_blank")}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">{t('contact.whatsapp')}</span>
      </Button>
      
      <Button
        size="lg"
        variant="secondary"
        className="rounded-full h-12 w-12 shadow-card hover:scale-110 transition-all duration-300"
        onClick={() => window.open("tel:+523221234567", "_blank")}
      >
        <Phone className="h-5 w-5" />
        <span className="sr-only">{t('contact.phone')}</span>
      </Button>
      
      <Button
        size="lg"
        variant="secondary"
        className="rounded-full h-12 w-12 shadow-card hover:scale-110 transition-all duration-300"
        onClick={() => window.open("mailto:contacto@mcmendoza.com", "_blank")}
      >
        <Mail className="h-5 w-5" />
        <span className="sr-only">{t('contact.email')}</span>
      </Button>
    </div>
  )
}