import { Button } from "@/components/ui/button";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksConfig {
  headline: string;
  subtext: string;
  steps: Step[];
  cta: string;
}

interface HowItWorksSectionProps {
  config: HowItWorksConfig;
}

export const HowItWorksSection = ({ config }: HowItWorksSectionProps) => {
  return (
    <section className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-ai-dark-purple/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="ai-gradient-text">{config.headline}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {config.subtext}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step number */}
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-button-glow">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-3 ai-gradient-text">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting line (hidden on last item) */}
                {index < config.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-primary opacity-30 z-0" 
                       style={{ width: 'calc(100% - 2rem)' }} />
                )}
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
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
      </div>
    </section>
  );
};