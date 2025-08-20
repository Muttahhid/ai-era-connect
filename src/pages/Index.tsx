import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTASection } from "@/components/FinalCTASection";
import landingConfig from "@/config/landing-config.json";

const Index = () => {
  const [config, setConfig] = useState(landingConfig);

  // In a real application, you might load this from an API or file
  useEffect(() => {
    // This could be replaced with an API call to fetch dynamic config
    setConfig(landingConfig);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="hero">
          <HeroSection config={config.hero} />
        </div>
        
        <div id="problem">
          <ProblemSection config={config.problem} />
        </div>
        
        <div id="benefits">
          <BenefitsSection benefits={config.benefits} />
        </div>
        
        <div id="how-it-works">
          <HowItWorksSection config={config.howItWorks} />
        </div>
        
        <div id="use-cases">
          <UseCasesSection useCases={config.useCases} />
        </div>
        
        <div id="final-cta">
          <FinalCTASection config={config.finalCTA} />
        </div>
        
        <div id="contact">
          <ContactForm config={config.contact} />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-primary/20 bg-gradient-card">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="ai-gradient-text text-2xl font-bold">AI-Era Solutions</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 AI-Era Solutions. Transforming businesses with intelligent automation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
