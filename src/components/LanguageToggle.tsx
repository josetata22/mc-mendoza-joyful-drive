import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="h-9 px-3 rounded-full hover:bg-mc-red/10 transition-colors font-medium"
    >
      <Globe className="h-4 w-4 mr-1" />
      <span className="text-sm">{language === "es" ? "ES" : "EN"}</span>
    </Button>
  )
}