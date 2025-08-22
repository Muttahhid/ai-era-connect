import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CustomerSupportSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mock Interface */}
          <div className="relative">
            <Card className="bg-gradient-orange p-6 text-white">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">AI</span>
                  </div>
                  <div>
                    <div className="font-semibold">Customer Support Bot</div>
                    <div className="text-xs opacity-80">Online • Response time: &lt;30s</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-1">Auto-Response Templates</div>
                    <div className="text-xs opacity-80">847 templates • 15 languages</div>
                  </div>
                  
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-1">Ticket Routing</div>
                    <div className="text-xs opacity-80">Priority: High • Department: Technical</div>
                  </div>
                  
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-1">Customer Satisfaction</div>
                    <div className="text-xs opacity-80">98.5% positive rating</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="text-xs text-center opacity-80">
                    Last 24h: 1,247 tickets processed automatically
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Customer Support
                <span className="text-primary"> Operations</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Revolutionize your customer support with AI-powered automation. 
                Route tickets intelligently, respond instantly, and maintain 
                exceptional service quality 24/7.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Intelligent Ticket Routing</div>
                    <div className="text-sm text-muted-foreground">
                      Automatically categorize and route tickets to the right team members
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">24/7 Auto-Response</div>
                    <div className="text-sm text-muted-foreground">
                      Instant responses with personalized templates and solutions
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Performance Analytics</div>
                    <div className="text-sm text-muted-foreground">
                      Track response times, satisfaction scores, and team efficiency
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};