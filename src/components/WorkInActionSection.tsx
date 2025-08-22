import { Card } from "@/components/ui/card";

export const WorkInActionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">See Our Work In Action</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses. See how our automation solutions 
            have transformed operations across different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Case Study 1 */}
          <Card className="bg-gradient-orange p-8 text-white overflow-hidden relative">
            <div className="relative z-10">
              <div className="mb-6">
                <div className="text-sm opacity-80 mb-2">E-COMMERCE AUTOMATION</div>
                <h3 className="text-2xl font-bold mb-4">Marketing Campaign ROI</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold mb-1">340%</div>
                  <div className="text-sm opacity-80">ROI Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">87%</div>
                  <div className="text-sm opacity-80">Time Saved</div>
                </div>
              </div>

              <p className="text-sm opacity-90 leading-relaxed">
                Automated email campaigns, inventory management, and customer segmentation 
                resulting in 340% ROI improvement and 87% reduction in manual work.
              </p>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
          </Card>

          {/* Case Study 2 */}
          <Card className="bg-gradient-card p-8 border-primary/20 overflow-hidden relative">
            <div className="relative z-10">
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">SALES AUTOMATION</div>
                <h3 className="text-2xl font-bold mb-4">Lead Conversion Rate</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">156%</div>
                  <div className="text-sm text-muted-foreground">Conversion Boost</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">92%</div>
                  <div className="text-sm text-muted-foreground">Process Efficiency</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Intelligent lead scoring, automated follow-ups, and personalized outreach 
                sequences delivering 156% higher conversion rates.
              </p>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full transform translate-x-16 -translate-y-16"></div>
          </Card>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Businesses Automated</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10M+</div>
            <div className="text-muted-foreground">Tasks Automated Monthly</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98.9%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};