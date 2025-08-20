interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  return (
    <section className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-ai-dark-purple/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="ai-gradient-text">Why Leading Companies Choose Us</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 500+ companies that have transformed their operations with our proven automation platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-card backdrop-blur-sm border border-primary/10 rounded-2xl p-6 ai-card-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Title */}
              <h3 className="text-lg font-bold mb-3 ai-gradient-text">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Hover effect line */}
              <div className="mt-4 h-1 bg-gradient-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};