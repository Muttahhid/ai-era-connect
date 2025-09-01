import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactField {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

interface ContactConfig {
  apiEndpoint: string;
  title: string;
  description: string;
  fields: ContactField[];
}

interface ContactFormProps {
  config: ContactConfig;
}

export const ContactForm = ({ config }: ContactFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(config.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-ai-dark-purple/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="ai-gradient-text">{config.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {config.description}
            </p>
          </div>
          
          <div className="bg-gradient-card backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-card-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {config.fields.map((field) => (
                  <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                    <Label htmlFor={field.name} className="text-foreground font-medium">
                      {field.label} {field.required && <span className="text-primary">*</span>}
                    </Label>
                    {field.type === 'textarea' ? (
                      <Textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        required={field.required}
                        className="mt-2 bg-background/50 border-primary/20 focus:border-primary/50"
                        rows={4}
                      />
                    ) : (
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        required={field.required}
                        className="mt-2 bg-background/50 border-primary/20 focus:border-primary/50"
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="ai-glow-button text-lg px-12 py-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};