import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const WorkflowAutomationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Workflow Automation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Design, deploy, and manage complex workflows with our visual 
                automation builder. Connect any app, trigger any action, 
                and scale infinitely.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-card/50 border-primary/20 p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Visual Workflow Builder</div>
                    <div className="text-sm text-muted-foreground">Drag & drop interface</div>
                  </div>
                  <div className="ml-auto text-sm text-green-500">Active</div>
                </div>
              </Card>

              <Card className="bg-card/50 border-primary/20 p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Multi-step Processes</div>
                    <div className="text-sm text-muted-foreground">Complex automation chains</div>
                  </div>
                  <div className="ml-auto text-sm text-green-500">Running</div>
                </div>
              </Card>

              <Card className="bg-card/50 border-primary/20 p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-sm rotate-45"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Real-time Monitoring</div>
                    <div className="text-sm text-muted-foreground">Live workflow status</div>
                  </div>
                  <div className="ml-auto text-sm text-green-500">Live</div>
                </div>
              </Card>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Build Your First Workflow
            </Button>
          </div>

          {/* Workflow Visualization */}
          <div className="relative">
            <Card className="bg-gradient-card p-6 border-primary/20">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Automation Pipeline</h3>
                  <p className="text-sm text-muted-foreground">Email → Process → Action</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-blue-500 font-bold">📧</div>
                    </div>
                    <div className="text-xs text-center">
                      <div className="font-medium">Trigger</div>
                      <div className="text-muted-foreground">New Email</div>
                    </div>
                  </div>

                  <div className="flex-1 mx-4">
                    <div className="h-px bg-primary/30 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <div className="w-2 h-2 bg-primary rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <div className="text-primary font-bold">⚙️</div>
                    </div>
                    <div className="text-xs text-center">
                      <div className="font-medium">Process</div>
                      <div className="text-muted-foreground">AI Analysis</div>
                    </div>
                  </div>

                  <div className="flex-1 mx-4">
                    <div className="h-px bg-primary/30 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <div className="w-2 h-2 bg-primary rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-green-500 font-bold">✅</div>
                    </div>
                    <div className="text-xs text-center">
                      <div className="font-medium">Action</div>
                      <div className="text-muted-foreground">Auto-Reply</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-sm font-medium mb-2">Active Workflows</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Email Processing</span>
                      <span className="text-green-500">247 processed today</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Lead Generation</span>
                      <span className="text-green-500">89 leads captured</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Data Sync</span>
                      <span className="text-green-500">100% synchronized</span>
                    </div>
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