import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "johnpatrickrobles143@gmail.com", href: "mailto:johnpatrickrobles143@gmail.com" },
  { icon: Phone, label: "+63 906 364 6349", href: "tel:+639063646349" },
  { icon: Linkedin, label: "linkedin.com/in/John Patrick Robles", href: "www.linkedin.com/in/john-patrick-robles-47174135b" },
  { icon: Github, label: "github.com/johnpatrickrobles", href: "https://github.com/Pipak555" },
  { icon: Globe, label: "johnpatrickrobles.dev", href: "#" },
];

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mwvnlnvd', { 
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({ title: "Error", description: "Failed to send message. Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-secondary/30">
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" placeholder="Your Name" required />
              <Input name="email" type="email" placeholder="Your Email" required />
            </div>
            <Input name="subject" placeholder="Subject" required />
            <Textarea name="message" placeholder="Your Message" rows={5} required />
            <Button type="submit" size="lg" className="gap-2 w-full sm:w-auto" disabled={isSubmitting}>
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-5">
            <p className="text-muted-foreground mb-2">
              I'm always open to discussing new opportunities, collaborations, or just a friendly chat about technology. Feel free to reach out!
            </p>
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm">{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;