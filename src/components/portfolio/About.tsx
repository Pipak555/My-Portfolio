import { GraduationCap, Target, Lightbulb, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { strengths as strengthsData, aboutContent, sectionTitles } from "@/data/portfolio-data";

// Icon mapping for strengths
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Lightbulb,
  Users,
  GraduationCap,
};

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 bg-secondary/30">
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{sectionTitles.about}</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto mb-16 space-y-5 text-muted-foreground text-center text-base sm:text-lg leading-relaxed">
          <p>{aboutContent.introduction}</p>
          <p>{aboutContent.background}</p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">{aboutContent.education.degree} — {aboutContent.education.university}, {aboutContent.education.year}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengthsData.map((s, i) => {
            const IconComponent = iconMap[s.icon || "Target"] || Target;
            return (
              <div
                key={s.title}
                className={`bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
