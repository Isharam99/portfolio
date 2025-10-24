import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScrollHeader } from "@/hooks/use-scroll-header";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isVisible, scrollDirection, scrollY, isAtTop } = useScrollHeader();

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-[-100%] opacity-0"
      } ${
        scrollY > 50 
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-2xl shadow-primary/10" 
          : "bg-transparent"
      }`}
      style={{
        backdropFilter: scrollY > 50 ? 'blur(20px) saturate(180%)' : 'none',
        background: scrollY > 50 
          ? `linear-gradient(135deg, hsl(222 47% 11% / 0.95), hsl(217 33% 17% / 0.9))` 
          : 'transparent',
        boxShadow: scrollY > 50 
          ? `0 8px 32px hsl(189 94% 43% / 0.15), 0 0 0 1px hsl(189 94% 43% / 0.1)` 
          : 'none',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Logo with enhanced styling */}
          <a 
            href="#home" 
            className={`text-lg sm:text-xl font-bold transition-all duration-500 ${
              isAtTop 
                ? "text-gradient hover:opacity-80" 
                : "text-primary hover:text-primary/80"
            }`}
            style={{
              textShadow: scrollY > 50 ? '0 0 20px hsl(189 94% 43% / 0.5)' : 'none',
            }}
          >
            IM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 relative group ${
                  isAtTop 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-foreground/90 hover:text-primary"
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button
              className={`transition-all duration-500 hover:scale-105 ${
                isAtTop 
                  ? "bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90" 
                  : "bg-gradient-to-r from-primary to-cyan-400 hover:shadow-lg hover:shadow-primary/25"
              }`}
              onClick={() => window.location.href = 'mailto:ishara835@gmail.com'}
              style={{
                boxShadow: scrollY > 50 ? '0 4px 20px hsl(189 94% 43% / 0.3)' : 'none',
              }}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-300 p-2 ${
              isAtTop 
                ? "text-foreground hover:text-primary" 
                : "text-primary hover:text-primary/80"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 py-1.5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 transition-all duration-300 w-full"
                onClick={() => {
                  window.location.href = 'mailto:ishara835@gmail.com';
                  setIsMobileMenuOpen(false);
                }}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
