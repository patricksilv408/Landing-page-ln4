import { useState, useEffect } from "react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-matte-gray/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex-shrink-0">
            <img className="h-10 w-auto" src="/images/logo-white.jpg" alt="Alphaville Litoral Norte 4" />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-off-white hover:text-alphaville-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild className="bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold rounded-lg px-6 py-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar com Derlon
              </a>
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-off-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-matte-gray pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-off-white hover:text-alphaville-green transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-alphaville-green hover:bg-alphaville-green/90 text-charcoal font-semibold rounded-lg px-6 py-3 w-4/5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar com Derlon
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};