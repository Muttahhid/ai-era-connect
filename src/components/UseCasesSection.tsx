interface UseCase {
  icon: string;
  title: string;
  description: string;
}

interface UseCasesSectionProps {
  useCases: UseCase[];
}

export const UseCasesSection = ({ useCases }: UseCasesSectionProps) => {
  return (
    <section className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-secondary opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="ai-gradient-text">Real-World Applications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how AI-Era Solutions transforms businesses across industries with intelligent automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Card */}
              <div className="bg-gradient-card backdrop-blur-sm border border-primary/10 rounded-2xl p-8 h-full ai-card-glow relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 ai-gradient-text">
                  {useCase.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};