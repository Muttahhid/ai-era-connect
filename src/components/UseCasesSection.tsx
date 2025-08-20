interface UseCase {
  title: string;
  description: string;
  results: string;
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
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="ai-gradient-text">Proven Solutions Across Industries</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Real automation solutions delivering measurable results for every business function.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Card */}
              <div className="bg-gradient-card backdrop-blur-sm border border-primary/10 rounded-2xl p-6 h-full ai-card-glow relative z-10">
                {/* Results Badge */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {useCase.results}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold mb-3 ai-gradient-text">
                  {useCase.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
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