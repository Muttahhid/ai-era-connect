import { useState } from "react";
import { Card } from "@/components/ui/card";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can we see results from automation?",
      answer: "Most clients see immediate improvements within the first week of implementation. Full ROI is typically achieved within 30-90 days, depending on the complexity of your workflows."
    },
    {
      question: "What if our current tools aren't supported?",
      answer: "We support 1000+ applications and can create custom integrations for proprietary systems. Our team will work with you to ensure seamless connectivity with all your essential tools."
    },
    {
      question: "Is our data secure with automation?",
      answer: "Absolutely. We use enterprise-grade security protocols, end-to-end encryption, and comply with SOC 2, GDPR, and other major security standards. Your data never leaves your approved systems."
    },
    {
      question: "Do we need technical expertise to manage automations?",
      answer: "No technical expertise required. Our visual workflow builder is designed for business users, and we provide comprehensive training and ongoing support to ensure your team feels confident."
    },
    {
      question: "What happens if an automation breaks?",
      answer: "Our platform includes real-time monitoring, automatic error detection, and instant rollback capabilities. Plus, our support team is available 24/7 to resolve any issues immediately."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about implementing AI automation in your business
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-background border-primary/20">
                <button
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                    <div className={`transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Still have questions? We're here to help.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};