import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const DashboardSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Unlock Efficiency And 
                <span className="text-primary"> Drive Growth With AI</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI-powered automation platform streamlines your workflows, 
                reduces errors, and saves your team countless hours every week. 
                See real-time analytics and insights that help you make better decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Features
            </Button>
          </div>

          {/* Dashboard Mock */}
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">847</div>
                    <div className="text-xs text-muted-foreground">Tasks Automated</div>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">98.2%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">125h</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Email Processing</span>
                    <span className="text-green-500">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Data Sync</span>
                    <span className="text-green-500">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Report Generation</span>
                    <span className="text-yellow-500">Scheduled</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};