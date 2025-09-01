import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface FooterProps {
  companyInfo: CompanyInfo;
  socialMedia: SocialMedia[];
  logoUrl: string;
}

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'facebook':
      return Facebook;
    case 'twitter':
      return Twitter;
    case 'linkedin':
      return Linkedin;
    case 'instagram':
      return Instagram;
    default:
      return Facebook;
  }
};

export const Footer = ({ companyInfo, socialMedia, logoUrl }: FooterProps) => {
  return (
    <footer className="py-16 border-t border-primary/20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logoUrl} 
                alt={companyInfo.name}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold ai-gradient-text">
                {companyInfo.name}
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses with intelligent automation and AI-powered solutions.
            </p>
            
            <div className="flex space-x-4">
              {socialMedia.map((social) => {
                const IconComponent = getSocialIcon(social.icon);
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center hover:from-primary/40 hover:to-accent/40 transition-all duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{companyInfo.address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Home", href: "#hero" },
                { name: "Features", href: "#features" },
                { name: "Process", href: "#process" },
                { name: "Case Studies", href: "#work-in-action" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground">
            © 2024 {companyInfo.name}. All rights reserved. Transforming businesses with intelligent automation.
          </p>
        </div>
      </div>
    </footer>
  );
};