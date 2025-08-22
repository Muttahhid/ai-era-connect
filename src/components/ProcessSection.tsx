export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We analyze your current workflows and identify automation opportunities that will deliver the highest ROI."
    },
    {
      number: "02", 
      title: "Custom Solution Design",
      description: "Our experts design a tailored automation strategy that integrates seamlessly with your existing tools and processes."
    },
    {
      number: "03",
      title: "Implementation & Testing", 
      description: "We build, test, and deploy your automation workflows with minimal disruption to your daily operations."
    },
    {
      number: "04",
      title: "Training & Support",
      description: "Comprehensive training for your team plus ongoing support to ensure maximum efficiency and continuous optimization."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From discovery to deployment, we ensure a smooth transition to automated workflows 
            that transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="relative mx-auto w-20 h-20">
                <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-primary/30 transform -translate-y-1/2"></div>
                )}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Start Your Automation Journey
          </button>
        </div>
      </div>
    </section>
  );
};