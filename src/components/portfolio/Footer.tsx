import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks, footerContent, personalInfo } from "@/data/portfolio-data";

// Icon mapping for social links
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground mb-4 text-sm max-w-lg mx-auto">
          {footerContent.tagline}
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((s) => {
            const IconComponent = iconMap[s.icon] || Github;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <IconComponent className="h-4 w-4" />
              </a>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
