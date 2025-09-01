import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DashboardSection } from "@/components/DashboardSection";
import { CustomerSupportSection } from "@/components/CustomerSupportSection";
import { WorkflowAutomationSection } from "@/components/WorkflowAutomationSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WorkInActionSection } from "@/components/WorkInActionSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import landingConfig from "@/config/landing-config.json";

const Index = () => {
  const [config, setConfig] = useState(landingConfig);

  // In a real application, you might load this from an API or file
  useEffect(() => {
    // This could be replaced with an API call to fetch dynamic config
    setConfig(landingConfig);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation logoUrl={config.logo.url} logoAlt={config.logo.alt} />
      
      <main>
        <div id="hero">
          <HeroSection config={config.hero} />
        </div>
        
        <div id="features">
          <FeaturesSection 
            title={config.features.title}
            description={config.features.description}
            primaryFeatures={config.features.primaryFeatures}
            additionalFeatures={config.features.additionalFeatures}
          />
        </div>
        
        <div id="dashboard">
          <DashboardSection />
        </div>
        
        <div id="customer-support">
          <CustomerSupportSection />
        </div>
        
        <div id="workflow-automation">
          <WorkflowAutomationSection />
        </div>
        
        <div id="process">
          <ProcessSection />
        </div>
        
        <div id="work-in-action">
          <WorkInActionSection caseStudies={config.caseStudies} />
        </div>
        
        <div id="faq">
          <FAQSection />
        </div>
        
        <div id="contact">
          <ContactForm config={config.contact} />
        </div>
      </main>
      
      <Footer 
        companyInfo={config.footer.companyInfo}
        socialMedia={config.footer.socialMedia}
        logoUrl={config.logo.url}
      />

      <Chatbot apiEndpoint={config.chatbot.apiEndpoint} />
    </div>
  );
};

export default Index;
