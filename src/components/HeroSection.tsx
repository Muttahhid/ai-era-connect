import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-network.jpg";
import { VideoModal } from "./VideoModal";
import { useState } from "react";

interface HeroConfig {
  headline: string;
  subtext: string;
  primaryCTA: string;
  secondaryCTA: string;
  demoVideoUrl: string;
}

interface HeroSectionProps {
  config: HeroConfig;
}

export const HeroSection = ({ config }: HeroSectionProps) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Neural Network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-primary rounded-full opacity-30 floating-animation" />
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-secondary rounded-full opacity-40 floating-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-ai-cyan/30 rounded-full floating-animation" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">
              {config.headline}
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {config.subtext}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg"
              className="ai-glow-button text-lg px-8 py-4"
              onClick={scrollToContact}
            >
              {config.primaryCTA}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="ai-neon-border text-lg px-8 py-4"
              onClick={() => setIsVideoModalOpen(true)}
            >
              {config.secondaryCTA}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-primary rounded-full opacity-60" />
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={config.demoVideoUrl}
      />
    </section>
  );
};