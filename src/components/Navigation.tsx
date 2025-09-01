import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageToggle } from "@/components/LanguageToggle"
import { useLanguage } from "@/contexts/LanguageContext"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  logo: string
}

export function Navigation({ logo }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="MC Mendoza" 
              className="h-10 w-auto cursor-pointer transition-transform hover:scale-105"
              onClick={() => scrollToSection("inicio")}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("inicio")}
              className="font-medium hover:text-mc-red transition-colors"
            >
              {t('nav.inicio')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("servicios")}
              className="font-medium hover:text-mc-red transition-colors"
            >
              {t('nav.servicios')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("galeria")}
              className="font-medium hover:text-mc-red transition-colors"
            >
              {t('nav.galeria')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("videos")}
              className="font-medium hover:text-mc-red transition-colors"
            >
              {t('nav.videos')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("testimonios")}
              className="font-medium hover:text-mc-red transition-colors"
            >
              {t('nav.testimonios')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("blog")}
              className="font-medium hover:text-mc-red transition-colors"
            >
              {t('nav.blog')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("ubicacion")}
              className="font-medium hover:text-mc-red transition-colors"
            >
              {t('nav.ubicacion')}
            </Button>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-card border border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("inicio")}
                className="justify-start font-medium hover:text-mc-red transition-colors"
              >
                {t('nav.inicio')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("servicios")}
                className="justify-start font-medium hover:text-mc-red transition-colors"
              >
                {t('nav.servicios')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("galeria")}
                className="justify-start font-medium hover:text-mc-red transition-colors"
              >
                {t('nav.galeria')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("videos")}
                className="justify-start font-medium hover:text-mc-red transition-colors"
              >
                {t('nav.videos')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("testimonios")}
                className="justify-start font-medium hover:text-mc-red transition-colors"
              >
                {t('nav.testimonios')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("blog")}
                className="justify-start font-medium hover:text-mc-red transition-colors"
              >
                {t('nav.blog')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("ubicacion")}
                className="justify-start font-medium hover:text-mc-red transition-colors"
              >
                {t('nav.ubicacion')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}