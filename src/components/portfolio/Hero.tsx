import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, heroContent } from "@/data/portfolio-data";

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
          <p className="text-primary font-medium mb-3 animate-fade-in">{heroContent.greeting}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            {personalInfo.name}
          </h1>
          <p className="text-lg sm:text-xl text-primary font-medium mb-4 animate-fade-in-up animation-delay-200">
            {personalInfo.title}
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8 animate-fade-in-up animation-delay-400">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">
                <ArrowDown className="h-4 w-4" />
                {heroContent.viewProjects}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white">
              <a href="#resume">
                <FileText className="h-4 w-4" />
                {heroContent.downloadResume}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                {heroContent.contactMe}
              </a>
            </Button>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0 animate-fade-in animation-delay-400">
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 border-2 border-primary/20 flex items-center justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-navy-light flex items-center justify-center">
              <img
                src={personalInfo.profileImage}
                alt={`Profile picture of ${personalInfo.name}`}
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
