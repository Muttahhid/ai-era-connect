import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  savings: string;
}

interface TestimonialsConfig {
  headline: string;
  subtext: string;
  testimonials: Testimonial[];
}

interface TestimonialsSectionProps {
  config: TestimonialsConfig;
}

export const TestimonialsSection = ({ config }: TestimonialsSectionProps) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="ai-gradient-text">{config.headline}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {config.subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {config.testimonials.map((testimonial, index) => (
            <Card key={index} className="ai-card-glow border-primary/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">
                    {testimonial.savings}
                  </Badge>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};