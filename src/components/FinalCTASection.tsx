import { Button } from "@/components/ui/button";

interface FinalCTAConfig {
  headline: string;
  subtext: string;
  cta: string;
}

interface FinalCTASectionProps {
  config: FinalCTAConfig;
}

export const FinalCTASection = ({ config }: FinalCTASectionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-pink/20 rounded-full blur-3xl floating-animation" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ai-cyan/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-gradient-hero">
              ✨ {config.headline}
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            {config.subtext}
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            className="ai-glow-button pulse-glow text-xl px-12 py-6"
          >
            🔵 {config.cta}
          </Button>
          
          {/* Additional visual elements */}
          <div className="mt-16 flex justify-center space-x-8 opacity-60">
            <div className="text-4xl floating-animation">🚀</div>
            <div className="text-4xl floating-animation" style={{ animationDelay: '1s' }}>⚡</div>
            <div className="text-4xl floating-animation" style={{ animationDelay: '2s' }}>🤖</div>
          </div>
        </div>
      </div>
    </section>
  );
};