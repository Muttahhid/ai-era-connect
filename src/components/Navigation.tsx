import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  logoUrl: string;
  logoAlt: string;
}

export const Navigation = ({ logoUrl, logoAlt }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-primary/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoUrl} 
              alt={logoAlt}
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl ai-gradient-text">AI-Era Solutions</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('work-in-action')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="sm"
            className="ai-glow-button hidden md:inline-flex"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};