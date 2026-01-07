import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start">
          <img src="/images/logo.png" alt="Jô le Taxi" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#a-propos" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.about}
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.services}
          </a>
          <a href="#galerie" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.gallery}
          </a>
          <a href="#horaires" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.hours}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link to={otherLangPath} className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          {/* Call Button */}
          <Button asChild size="sm">
            <a href="tel:+41783223696" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link to={otherLangPath} className="text-sm font-medium hover:text-primary transition-colors">
            {otherLang.toUpperCase()}
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#a-propos" className="block text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.about}
            </a>
            <a href="#services" className="block text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.services}
            </a>
            <a href="#galerie" className="block text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.gallery}
            </a>
            <a href="#horaires" className="block text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.hours}
            </a>
            <a href="#contact" className="block text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.contact}
            </a>
            <Button asChild className="w-full mt-4">
              <a href="tel:+41783223696" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
