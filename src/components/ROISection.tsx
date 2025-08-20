interface ROIMetric {
  number: string;
  label: string;
  description: string;
}

interface ROIConfig {
  headline: string;
  subtext: string;
  metrics: ROIMetric[];
}

interface ROISectionProps {
  config: ROIConfig;
}

export const ROISection = ({ config }: ROISectionProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="ai-gradient-text">{config.headline}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {config.subtext}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {config.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="mb-3">
                <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
                  {metric.number}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-foreground">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};