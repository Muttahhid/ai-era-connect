import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

interface MobileMenuProps {
  scrollToSection: (id: string) => void;
}

export const MobileMenu = ({ scrollToSection }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="md:hidden h-9 w-9"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-[300px] bg-background border-l border-border p-6 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <span className="ai-gradient-text text-xl font-bold">AI-Era Solutions</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-9 w-9"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="space-y-4">
              <button 
                onClick={() => handleNavClick('hero')}
                className="block w-full text-left py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('benefits')}
                className="block w-full text-left py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Benefits
              </button>
              <button 
                onClick={() => handleNavClick('how-it-works')}
                className="block w-full text-left py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleNavClick('use-cases')}
                className="block w-full text-left py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Contact
              </button>
              
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="hero" 
                  className="w-full ai-glow-button"
                  onClick={() => handleNavClick('contact')}
                >
                  Get Started
                </Button>
                
                <div className="flex justify-center pt-4">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};