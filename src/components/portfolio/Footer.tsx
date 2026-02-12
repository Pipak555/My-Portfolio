import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground mb-4 text-sm max-w-lg mx-auto">
          Dedicated to continuous growth and building technology solutions that matter. Let's create something great together.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:juandelacruz@email.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Juan Dela Cruz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
