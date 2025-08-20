interface ProblemConfig {
  headline: string;
  points: string[];
  solution: string;
}

interface ProblemSectionProps {
  config: ProblemConfig;
}

export const ProblemSection = ({ config }: ProblemSectionProps) => {
  return (
    <section className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-ai-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-ai-blue/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            "{config.headline}"
          </h2>
          
          {/* Problem points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {config.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gradient-card border border-red-500/20 rounded-xl"
              >
                <div className="text-red-400 text-2xl">❌</div>
                <p className="text-lg text-muted-foreground text-left">{point}</p>
              </div>
            ))}
          </div>
          
          {/* Solution callout */}
          <div className="bg-gradient-primary p-8 rounded-2xl border border-primary/30 shadow-card-glow">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              👉 {config.solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};