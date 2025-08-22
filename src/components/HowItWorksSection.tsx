import { Button } from "@/components/ui/button";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksConfig {
  headline: string;
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="ai-gradient-text">{config.headline}</span>
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step number */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white font-bold text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-button-glow">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 ai-gradient-text">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting line (hidden on last item) */}
                {index < config.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary opacity-30 z-0" 
                       style={{ width: 'calc(100% - 2rem)' }} />
                )}
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <Button variant="hero" size="lg" className="ai-glow-button text-lg px-8 py-4">
              {config.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};