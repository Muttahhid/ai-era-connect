import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  description: string;
  primaryFeatures: Feature[];
  additionalFeatures: Feature[];
}

export const FeaturesSection = ({ title, description, primaryFeatures, additionalFeatures }: FeaturesSectionProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="features" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header - 1-1 */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="ai-gradient-text">{title}</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Primary Features - 1-5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {primaryFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-card backdrop-blur-sm border border-primary/10 rounded-xl p-6 ai-card-glow text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold mb-3 ai-gradient-text">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect line */}
              <div className="mt-4 h-1 bg-gradient-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>
          ))}
        </div>

        {/* More Features Button */}
        <div className="text-center mb-12">
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="ai-neon-border px-8 py-3"
          >
            {showMore ? (
              <>
                Show Less Features
                <ChevronUp className="ml-2 w-4 h-4" />
              </>
            ) : (
              <>
                More Features
                <ChevronDown className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {/* Additional Features - 1-5 (Expandable) */}
        <div className={`transition-all duration-500 overflow-hidden ${showMore ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-card backdrop-blur-sm border border-accent/10 rounded-xl p-6 ai-card-glow text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold mb-3 text-accent">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-accent to-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};