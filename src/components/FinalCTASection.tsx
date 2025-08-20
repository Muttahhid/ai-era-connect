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
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-hero">
              {config.headline}
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            {config.subtext}
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            className="ai-glow-button text-base px-6 py-3"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {config.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};