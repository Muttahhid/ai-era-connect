import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Building2, TrendingUp } from "lucide-react";
import { useState } from "react";

interface CaseStudy {
  title: string;
  description: string;
  metrics: string;
  industry: string;
}

interface WorkInActionSectionProps {
  caseStudies: CaseStudy[];
}

export const WorkInActionSection = ({ caseStudies }: WorkInActionSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const getVisibleCases = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % caseStudies.length;
      visible.push(caseStudies[index]);
    }
    return visible;
  };

  return (
    <section id="work-in-action" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation" />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="ai-gradient-text">See Our Work In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses. Discover how AI-Era Solutions has transformed operations across industries.
          </p>
        </div>
        
        {/* Case Studies Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
            {getVisibleCases().map((caseStudy, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className="bg-gradient-card backdrop-blur-sm border border-primary/10 p-6 ai-card-glow transition-all duration-500"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold ai-gradient-text text-lg">{caseStudy.title}</h3>
                    <span className="text-sm text-muted-foreground">{caseStudy.industry}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {caseStudy.description}
                </p>
                
                <div className="flex items-center space-x-2 bg-primary/10 rounded-lg p-3">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">{caseStudy.metrics}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="hero" 
            size="lg"
            className="ai-glow-button text-lg px-12 py-4"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};