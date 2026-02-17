import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy dark:from-navy dark:via-navy-light dark:to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--electric)/0.15),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary font-medium mb-3 animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            John Patrick S. Robles
          </h1>
          <p className="text-lg sm:text-xl text-primary font-medium mb-4 animate-fade-in-up animation-delay-200">
            BSIT Graduate | Aspiring Software Developer
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8 animate-fade-in-up animation-delay-400">
            Transforming ideas into elegant digital solutions. Passionate about building software that makes a difference.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">
                <ArrowDown className="h-4 w-4" />
                View Projects
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white">
              <a href="#resume">
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0 animate-fade-in animation-delay-400">
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 border-2 border-primary/20 flex items-center justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-navy-light flex items-center justify-center">
              {/* Replace "JDC" with an image */}
              <img
                src="src/images/profile.jpg"  // Update this path to your image (e.g., '/profile.jpg' if in public folder, or import it)
                alt="Profile picture of John Patrick S. Robles"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;